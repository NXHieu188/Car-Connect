using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class QueueShip
{
    public TypeColor typeColor;
    public TypeShip typeShip = TypeShip.Three;
}

public enum TypeShip
{
    One,
    Two,
    Three,
}

public class Ship : MonoBehaviour
{
    public Animator animator;
    public Transform containCar;
    public MeshRenderer mainMesh;
    public TypeColor typeColor;
    public List<Transform> lstSlot = new List<Transform>();
    public List<bool> lstBooleanSlot = new List<bool>();
    public List<ParticleSystem> lstSlotFx = new List<ParticleSystem>();
    [Header("Dont Touch")] public bool isReady;
    public bool isDone;
    public int indexBox = 0;

    public void Init(TypeColor typeColor)
    {
        this.typeColor = typeColor;
        var objectColor = GlobalInstance.Instance.gameManagerInstance.config.GetObjectColor(this.typeColor);
        Material[] mats = mainMesh.materials;
        mats[0] = objectColor.material; // Thay thế material đầu tiên
        mainMesh.materials = mats;
        for (int i = 0; i < lstSlot.Count; i++)
        {
            lstSlot[i].GetComponent<MeshRenderer>().material = objectColor.material;
        }
    }

    public bool CheckPositive(TypeColor typeColor)
    {
        if (typeColor == this.typeColor && isReady)
        {
            return true;
        }

        return false;
    }

    public void UpdateShip()
    {
        if (!isDone)
        {
            lstBooleanSlot[indexBox] = true;
            indexBox++;
            if (indexBox > lstSlot.Count - 1)
            {
                isReady = false;
                isDone = true;
            }
        }
    }

    public void CheckDone()
    {
        if (isDone)
        {
            //PlaySound
            transform.DOKill();
            transform.DOMoveX(23, 0.7f).OnComplete(() =>
            {
                if (GlobalInstance.Instance.gameManagerInstance.level.currentShip ==
                    GlobalInstance.Instance.gameManagerInstance.shipToWin)
                {
                    GlobalInstance.Instance.gameManagerInstance.Win();
                }
                else
                {
                    GlobalInstance.Instance.gameManagerInstance.level.lstShip.Remove(this);
                    GlobalInstance.Instance.gameManagerInstance.level.SpawnShipPredenfinedNext(1);
                    Destroy(gameObject);
                }
            });
        }
    }

    public void SetStayAnim(bool boolean)
    {
        animator.SetBool("Stay", boolean);
    }
}