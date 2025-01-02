using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
    public List<GameObject> lstCouple = new List<GameObject>();
    public List<Ship> lstShip = new List<Ship>();
    public List<QueueShip> queueShip;
    public List<Transform> lstPosShipSpawn = new List<Transform>();

    public Transform grParkingSlot;
    public List<ParkingSlot> lstParkingSlot = new List<ParkingSlot>();

    public Ship ShipOne;
    public Ship ShipTwo;
    public Ship ShipThree;
    public Transform shipParent;
    public int currentShip = 0;
    public void Init()
    {
        for (int i = 0; i < lstCouple.Count; i++)
        {
            var stickMan = lstCouple[i].transform.GetChild(2).GetComponent<Stickman>();
            stickMan.Init();
        }
        SpawnShipPredenfined(2);
    }

    public void SpawnShipPredenfined(int index)
    {
        int count = 0;
        for (int i = 0; i < queueShip.Count; i++)
        {
            if (count == index)
                break;
            if (queueShip[i].typeShip == TypeShip.One)
            {
                var ship = Instantiate(ShipOne, shipParent);
                ship.transform.position = lstPosShipSpawn[i].position;
                ship.Init(queueShip[i].typeColor);
                if (i == 0)
                    ship.isReady = true;
                lstShip.Add(ship);
            }
            else if (queueShip[i].typeShip == TypeShip.Two)
            {
                var ship = Instantiate(ShipTwo, shipParent);
                ship.transform.position = lstPosShipSpawn[i].position;
                ship.Init(queueShip[i].typeColor);
                if (i == 0)
                    ship.isReady = true;
                lstShip.Add(ship);
            }
            else if (queueShip[i].typeShip == TypeShip.Three)
            {
                var ship = Instantiate(ShipThree, shipParent);
                ship.transform.position = lstPosShipSpawn[i].position;
                ship.Init(queueShip[i].typeColor);
                if (i == 0)
                    ship.isReady = true;
                lstShip.Add(ship);
            }

            count++;
        }
        currentShip += 2;
        queueShip.RemoveAt(0);
        queueShip.RemoveAt(0);
    }

    public void SpawnShipPredenfinedNext(int index)
    {
        lstShip[lstShip.Count - 1].DOKill();
        //Sound ship move
        currentShip += 1;
        lstShip[0].transform.DOMoveX(lstPosShipSpawn[0].position.x, 0.3f).OnComplete(
        () =>
        {
            lstShip[0].isReady = true;
            UpdateCarParking();
        });


        int count = 0;
        for (int i = 0; i < queueShip.Count; i++)
        {
            if (count == index)
                break;
            if (queueShip[i].typeShip == TypeShip.One)
            {
                var ship = Instantiate(ShipOne, shipParent);
                ship.transform.position =
                    new Vector3(lstPosShipSpawn[i].position.x - 40, lstPosShipSpawn[i].position.y, lstPosShipSpawn[i].position.z);
                ship.Init(queueShip[i].typeColor);
                lstShip.Add(ship);
                lstShip[lstShip.Count - 1].DOKill();
                lstShip[lstShip.Count - 1].transform.DOMoveX(lstPosShipSpawn[1].position.x, 0.3f);
            }
            else if (queueShip[i].typeShip == TypeShip.Two)
            {
                var ship = Instantiate(ShipTwo, shipParent);
                ship.transform.position =
                    new Vector3(lstPosShipSpawn[i].position.x - 40, lstPosShipSpawn[i].position.y, lstPosShipSpawn[i].position.z);
                ship.Init(queueShip[i].typeColor);
                lstShip.Add(ship);
                lstShip[lstShip.Count - 1].DOKill();
                lstShip[lstShip.Count - 1].transform.DOMoveX(lstPosShipSpawn[1].position.x, 0.3f);
            }
            else if (queueShip[i].typeShip == TypeShip.Three)
            {
                var ship = Instantiate(ShipThree, shipParent);
                ship.transform.position =
                    new Vector3(lstPosShipSpawn[i].position.x, lstPosShipSpawn[i].position.y, lstPosShipSpawn[i].position.z);
                ship.Init(queueShip[i].typeColor);
                lstShip.Add(ship);
                lstShip[lstShip.Count - 1].DOKill();
                lstShip[lstShip.Count - 1].transform.DOMoveX(lstPosShipSpawn[1].position.x, 0.3f);
            }
            count++;
        }
        queueShip.RemoveAt(0);
    }

    void UpdateCarParking()
    {
        if (!NoParkingSlot())
        {
            for (int i = 0; i < lstParkingSlot.Count; i++)
            {
                if (lstParkingSlot[i].car != null)
                {
                    lstParkingSlot[i].car.ParkingSlotMoveToBox();
                }
            }
        }
    }
    public void UpdateParkingSlot(Car car)
    {

        for (int i = 0; i < lstParkingSlot.Count; i++)
        {
            if (lstParkingSlot[i].car == null)
            {
                lstParkingSlot[i].car = car;
                break;
            }
        }

        if (NoParkingSlot())
        {
            GlobalInstance.Instance.gameManagerInstance.Lose();
        }
    }
    public ParkingSlot GetParkingSlot()
    {
        for (int i = 0; i < lstParkingSlot.Count; i++)
        {
            if (lstParkingSlot[i].car == null)
            {
                return lstParkingSlot[i];
            }
        }

        return null;
    }
    public bool NoParkingSlot()
    {
        for (int i = 0; i < lstParkingSlot.Count; i++)
        {
            if (lstParkingSlot[i].car == null)
            {
                return false;
            }
        }
        return true;
    }
    public void RemoveFromParkingSlot(Car car)
    {
        for (int i = 0; i < lstParkingSlot.Count; i++)
        {
            if (lstParkingSlot[i].car == car)
            {
                lstParkingSlot[i].car = null;
                return;
            }
        }
    }
}
