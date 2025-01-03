using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EC01 : MonoBehaviour
{
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        Luna.Unity.LifeCycle.GameEnded();
    }
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            InstallFullGame();
        }
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
