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
                            MoveToShip(level.lstShip[i].lstSlot[j].position, level.lstShip[i], j);
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
    public void MoveToShip(Vector3 pos, Ship ship, int indexCarInShip)
    {
        isMoving = true;
        transform.DOKill();
        transform.DORotate(Vector3.zero, 0.65f).SetDelay(0.4f);
        ship.SetStayAnim(true);
        transform.DOMove(pos, 0.65f).SetEase(Ease.Linear).SetDelay(0.4f).OnComplete(() =>
        {
            transform.DOKill();
            //PlaySoundCarIn
            ship.SetStayAnim(false);
            transform.parent = ship.containCar;
            if (indexCarInShip == ship.lstSlot.Count - 1)
            {
                ship.CheckDone();
            }
        });
    }
    void MoveToParkingSlot(Vector3 pos)
    {
        isMoving = true;
        transform.DOKill();
        transform.parent = GlobalInstance.Instance.gameManagerInstance.level.grParkingSlot;
        transform.DORotate(new Vector3(0f, 335f, 0f), 0.65f).SetDelay(0.4f);
        transform.DOMove(pos, 0.65f).SetEase(Ease.Linear).SetDelay(0.4f).OnComplete(() =>
        {
            //transform.rotation = Quaternion.Euler(new Vector3(0f, 335f, 0f));

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
