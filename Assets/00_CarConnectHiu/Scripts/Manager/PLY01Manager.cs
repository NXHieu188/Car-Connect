using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PLY01Manager : Singleton<PLY01Manager>
{
    public bool isEndGame;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        Luna.Unity.LifeCycle.GameEnded();
    }
    void Update()
    {
        if (isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                InstallFullGame();
            }
        }
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
