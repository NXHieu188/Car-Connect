using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
    public List<GameObject> lstCouple = new List<GameObject>();

    private void Start()
    {
        for (int i = 0; i < lstCouple.Count; i++)
        {
            var stickMan = lstCouple[i].transform.GetChild(2).GetComponent<Stickman>();
            stickMan.Init();
        }
    }
}
