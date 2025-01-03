using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR;

public class PLY01Manager : Singleton<PLY01Manager>
{
    public CameraController cameraController;
    public Camera camera;
    public GamePlayController gamePlayController;
    public Level level;
    public Config config;
    public GameObject vfxCrash;
    public GameObject vfxFail;
    public GameObject tut0;
    public GameObject tutHand0;
    public GameObject tut;
    public GameObject tutHand;
    public int shipToWin;

    public int totalTap;
    private int currentTap;
    public int totalTime;
    private float currentTime;
    public Text txtTap;
    public Text txtTime;
    public GameObject lose, win;
    private bool isFirstTutCinema;
    public bool isStartCheckFirstInteraction;
    public bool isFirstInteraction;
    private bool isFirstEndCinema;
    private bool isPlaying;
    public bool isCanPlay;
    private bool isWin;
    private bool isLose;
    public bool isEndGame;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        level.Init();
        isFirstTutCinema = true;
        isFirstInteraction = true;
        isFirstEndCinema = true;
        currentTime = totalTime;
        cameraController.Init();
    }
    public void FirstTutCinema()
    {
        if (isFirstTutCinema)
        {
            isFirstTutCinema = false;
            tut0.GetComponent<Image>().DOFade(0, 0.15f);
            tutHand0.GetComponent<SpriteRenderer>().DOFade(0, 0.15f);
        }
    }
    public void EndCinema()
    {
        if (isFirstEndCinema)
        {
            isCanPlay = false;
            cameraController.SetFollow(false);
            isFirstEndCinema = false;
            camera.transform.SetParent(null);
            camera.DOOrthoSize(25, 1f).OnComplete(() =>
            {
                tut.GetComponent<Image>().DOFade(1, 0.3f);
                tutHand.GetComponent<SpriteRenderer>().DOFade(1, 0.3f);
                isStartCheckFirstInteraction = true;
                isCanPlay = true;
            });
            camera.transform.DOMove(new Vector3(0, 84.4f, -50), 1f);
        }
    }
    public void FirstInteraction()
    {
        if (isStartCheckFirstInteraction)
        {
            if (isFirstInteraction)
            {
                isFirstInteraction = false;
                isPlaying = true;
                tut.GetComponent<Image>().DOFade(0, 0.15f);
                tutHand.GetComponent<SpriteRenderer>().DOFade(0, 0.15f);

            }
        }
    }
    void Update()
    {
        if (isPlaying)
        {
            if (currentTime > 0)
            {
                currentTime -= 1 * Time.deltaTime;
                if (currentTime < 9.5f)
                {
                    txtTime.text = "00:0" + currentTime.ToString("0");
                }
                else
                {
                    txtTime.text = "00:" + currentTime.ToString("0");
                }
            }
            else
            {
                if (!isLose)
                {
                    currentTime = 0;
                    Lose();
                }
            }
        }
        if (isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                InstallFullGame();
            }
        }
    }
    public void UpdateTap()
    {
        if (isStartCheckFirstInteraction)
        {
            currentTap++;
            txtTap.text = currentTap + "/10";
            if (currentTap == totalTap)
            {
                if (!isWin && !isLose && level.totalCar > 1)
                {
                    Lose();
                }
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
        if (!isLose && !isWin)
        {
            AudioManager.Instance.PlaySoundClipWin();
            Luna.Unity.LifeCycle.GameEnded();
            isWin = true;
            win.SetActive(true);
            isCanPlay = false;
            isEndGame = true;
        }
    }
    public void Lose()
    {
        if (!isWin && !isLose)
        {
            AudioManager.Instance.PlaySoundClipWin();
            Luna.Unity.LifeCycle.GameEnded();
            isLose = true;
            lose.SetActive(true);
            isCanPlay = false;
            isEndGame = true;
        }
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
