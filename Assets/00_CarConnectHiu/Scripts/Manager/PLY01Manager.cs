using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PLY01Manager : Singleton<PLY01Manager>
{
    public GamePlayController gamePlayController;
    public Level level;
    public Config config;
    public GameObject vfxCrash;
    public GameObject vfxFail;
    public int shipToWin;
    public bool isEndGame;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        level.Init();
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
    public void SpawnVFXCrash(Vector3 pos)
    {
        var vfx = SimplePool.Spawn(vfxCrash);
        var newPos = new Vector3(pos.x, pos.y + 1f, pos.z);
        vfx.transform.position = newPos;
    }
    public void SpawnVFXFail(Vector3 pos)
    {
        var vfx = SimplePool.Spawn(vfxFail);
        var newPos = new Vector3(pos.x, 3, pos.z);
        vfx.transform.position = newPos;
        vfx.transform.rotation = Quaternion.Euler(60, 0, 0);
    }
    public void Win()
    {

    }
    public void Lose()
    {

    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
