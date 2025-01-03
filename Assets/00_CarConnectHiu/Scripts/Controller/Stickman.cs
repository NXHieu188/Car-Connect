using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Stickman : MonoBehaviour
{
    public int id;
    public Transform arrayLinePoint;
    public TypeColor typeColor;
    public Animator animator;
    private List<Vector3> lstPointPath = new List<Vector3>();

    private List<Vector3> lstCachePointPath = new List<Vector3>();

    private List<Vector3> lstPointReturnPath = new List<Vector3>();

    private List<Vector3> lstPointLineReturn = new List<Vector3>();

    public LineRenderer lineRenderer;
    public float speed;
    public float timeRotate;
    private bool isCanMove;
    private Vector3 originRotation;
    public bool isChoosed;

    public void Init()
    {
        isCanMove = true;
        lstPointPath.Clear();
        lstCachePointPath.Clear();
        lstPointReturnPath.Clear();
        lstPointLineReturn.Clear();
        lineRenderer.positionCount = arrayLinePoint.childCount;
        for (int i = 0; i < arrayLinePoint.childCount; i++)
        {
            lineRenderer.SetPosition(i, arrayLinePoint.GetChild(i).transform.position);
        }

        for (int i = 0; i < lineRenderer.positionCount; i++)
        {
            lstPointPath.Add(lineRenderer.GetPosition(i));
            lstCachePointPath.Add(lineRenderer.GetPosition(i));
        }

        originRotation = transform.eulerAngles;
    }

    public void Action()
    {
        if (isCanMove)
        {
            GlobalInstance.Instance.gameManagerInstance.gamePlayController.isCanRaycast = false;
            isCanMove = false;
            Init();
            isChoosed = true;
            SetRumAnim(true);
            transform.DOPath(lstPointPath.ToArray(), speed, PathType.Linear, PathMode.Full3D).SetSpeedBased(true)
                .SetEase(Ease.Linear).OnWaypointChange(OnChangeWavePoint).OnUpdate(() =>
                {
                    lineRenderer.SetPosition(0, transform.position);
                });
        }
    }

    private int curLineCount = 0;

    void Comeback()
    {
        lstPointReturnPath.Reverse();
        lstPointPath.Reverse();
        lstPointLineReturn.AddRange(lstPointPath.ToArray());
        lstPointLineReturn.AddRange(lstPointReturnPath.ToArray());
        SetRumAnim(true);
        curLineCount = lineRenderer.positionCount - 1;
        transform.DOPath(lstPointReturnPath.ToArray(), speed, PathType.Linear, PathMode.Full3D).SetSpeedBased(true)
            .SetEase(Ease.Linear)
            .OnWaypointChange(OnReturnPathChangePoint).OnUpdate(() =>
            {
                if (lineRenderer.positionCount > 0)
                    lineRenderer.SetPosition(lineRenderer.positionCount - 1, transform.position);
            }).OnComplete(() =>
            {
                SetRumAnim(false);
                isCanMove = true;
                transform.eulerAngles = originRotation;
                GlobalInstance.Instance.gameManagerInstance.gamePlayController.isCanRaycast = true;
                GlobalInstance.Instance.gameManagerInstance.EndCinema();
            });
    }

    void OnChangeWavePoint(int i)
    {
        lstPointReturnPath.Add(lstPointPath[0]);
        if (lstPointPath.Count > 0)
            lstPointPath.RemoveAt(0);
        lineRenderer.positionCount = lstPointPath.Count;
        lineRenderer.SetPositions(lstPointPath.ToArray());
        Vector3 nextPos = GetNextPos(i);
        if (nextPos != Vector3.zero)
        {
            transform.LookAt(nextPos);
        }
    }

    void OnReturnPathChangePoint(int i)
    {
        curLineCount++;
        lineRenderer.positionCount = curLineCount;
        var arrayCurPoint = new Vector3[lineRenderer.positionCount];
        for (int j = 0; j < lstPointLineReturn.Count; j++)
        {
            if (j < lineRenderer.positionCount)
            {
                arrayCurPoint[j] = lstPointLineReturn[j];
            }
        }

        lineRenderer.SetPositions(arrayCurPoint);
        Vector3 nextPos = GetNextReturnPathPos(i);
        if (nextPos != Vector3.zero)
        {
            transform.LookAt(nextPos);
        }
    }

    Vector3 GetNextPos(int i)
    {
        if (lstCachePointPath.Count - 1 < i)
            return Vector3.zero;
        return lstCachePointPath[i + 1];
    }

    Vector3 GetNextReturnPathPos(int i)
    {
        if (lstPointReturnPath.Count - 1 < i)
            return Vector3.zero;
        return lstPointReturnPath[i];
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("StickMan"))
        {
            if (isChoosed)
            {
                isChoosed = false;
                transform.DOKill();
                isCanMove = false;
                SetRumAnim(false);
                GlobalInstance.Instance.gameManagerInstance.SpawnVFXCrash(transform.position);
                GlobalInstance.Instance.gameManagerInstance.SpawnVFXFail(transform.position);
                AudioManager.Instance.PlaySoundImpact();
                Comeback();
            }
        }

        if (other.CompareTag("Car"))
        {
            var car = other.GetComponent<Car>();
            if (car.typeColor != typeColor)
            {
                isChoosed = false;
                transform.DOKill();
                isCanMove = false;
                SetRumAnim(false);
                GlobalInstance.Instance.gameManagerInstance.SpawnVFXCrash(transform.position);
                GlobalInstance.Instance.gameManagerInstance.SpawnVFXFail(transform.position);
                AudioManager.Instance.PlaySoundImpact();
                Comeback();
            }
            else
            {
                if (car.id == id)
                {
                    transform.DOKill();
                    isCanMove = false;
                    SetRumAnim(false);
                    car.Action();
                    GlobalInstance.Instance.gameManagerInstance.gamePlayController.isCanRaycast = true;
                    GlobalInstance.Instance.gameManagerInstance.level.totalCar--;
                    AudioManager.Instance.PlaySoundCarExit();
                    lineRenderer.positionCount = 0;
                    gameObject.SetActive(false);

                }
                else
                {
                    isChoosed = false;
                    transform.DOKill();
                    isCanMove = false;
                    SetRumAnim(false);
                    GlobalInstance.Instance.gameManagerInstance.SpawnVFXCrash(transform.position);
                    GlobalInstance.Instance.gameManagerInstance.SpawnVFXFail(transform.position);
                    AudioManager.Instance.PlaySoundImpact();
                    Comeback();
                }
            }
        }
    }

    public void SetRumAnim(bool boolean)
    {
        animator.SetBool("Run", boolean);
    }
}