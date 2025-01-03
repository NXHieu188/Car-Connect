using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Car : MonoBehaviour
{
    public int id;
    public TypeColor typeColor;
    public BoxCollider boxCollider;
    public GameObject vfxCollect;
    private bool isMoving;
    public bool isCarInParking;
    public float speed;
    private float delay = 0.15f;

    public void Action()
    {
        vfxCollect.SetActive(true);
        CheckPositiveAndMoveToShip();
    }

    private void CheckPositiveAndMoveToShip()
    {
        bool isMoveParkingSlot = true;
        Level level = GlobalInstance.Instance.gameManagerInstance.level;
        for (int i = 0; i < level.lstShip.Count; i++)
        {
            if (i == 1)
                break;
            if (!level.lstShip[i].isDone)
            {
                if (level.lstShip[i].CheckPositive(typeColor))
                {
                    for (int j = 0; j < level.lstShip[i].lstBooleanSlot.Count; j++)
                    {
                        if (!level.lstShip[i].lstBooleanSlot[j])
                        {
                            level.lstShip[i].animator.speed = 0;
                            MoveToShip(level.lstShip[i].lstSlot[j].position, level.lstShip[i], j, true);
                            level.lstShip[i].UpdateShip();
                            isMoveParkingSlot = false;
                            boxCollider.enabled = false;
                            return;
                        }
                        else
                        {
                            continue;
                        }
                    }
                }
            }
        }

        if (isMoveParkingSlot)
        {
            if (!isCarInParking)
            {
                isCarInParking = true;
                ParkingSlot parkingSlot = level.GetParkingSlot();
                MoveToParkingSlot(parkingSlot.transform.position);
                level.UpdateParkingSlot(this);
                boxCollider.enabled = false;
            }
        }
    }

    public void MoveToShip([Bridge.Ref] Vector3 pos, Ship ship, int indexCarInShip, bool isHasDelay)
    {
        isMoving = true;
        transform.DOKill();
        transform.DORotate(Vector3.zero, speed).SetDelay(delay);
        transform.DOMove(pos, speed).SetEase(Ease.Linear).SetDelay(delay).OnComplete(() =>
        {
            transform.parent = ship.containCar;
            transform.DOKill();
            ship.lstSlotFx[indexCarInShip].Play();
            //PlaySoundCarIn
            ship.animator.speed = 1;
            if (indexCarInShip == ship.lstSlot.Count - 1)
            {
                ship.CheckDone();
            }
        });
    }

    void MoveToParkingSlot([Bridge.Ref] Vector3 pos)
    {
        isMoving = true;
        transform.DOKill();
        transform.parent = GlobalInstance.Instance.gameManagerInstance.level.grParkingSlot;
        transform.DORotate(new Vector3(0f, 335f, 0f), speed / 1.3f).SetDelay(delay);
        transform.DOMove(pos, speed / 1.3f).SetEase(Ease.Linear).SetDelay(delay).OnComplete(() =>
        {
            StartCoroutine(HelperUtility.StartAction(() =>
            {
                //Sound Go To Parking
                isMoving = false;
                ParkingSlotMoveToBox();
            }, 0.05f));
        });
    }

    public void ParkingSlotMoveToBox()
    {
        Level level = GlobalInstance.Instance.gameManagerInstance.level;
        if (!level.NoParkingSlot())
        {
            if (level.lstShip[0].isReady && !isMoving)
            {
                Action();
            }
        }
    }
}