using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Stickman : MonoBehaviour
{
    public Transform arrayLinePoint;
    public TypeColor typeColor;
    public Animator animator;
    private List<Vector3> lstPointPath = new List<Vector3>();

    private List<Vector3> lstCachePointPath = new List<Vector3>();

    private List<Vector3> lstPointReturnPath = new List<Vector3>();

    private List<Vector3> lstPointLineReturn = new List<Vector3>();

    //public Vector3[] arrayOriginPosLine;
    //public Vector3[] arrOldPath;
    public LineRenderer lineRenderer;
    public float speed;
    public float timeRotate;
    private bool isCanMove;
    private bool isRunning;
    private bool isRunningBack;
    public float pointRemoveThreshold = 0.1f;
    int indexRemove = 0;
    private Vector3 originRotation;

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
            Init();
            SetRumAnim(true);
            transform.DOPath(lstPointPath.ToArray(), speed, PathType.Linear, PathMode.Full3D).SetSpeedBased(true)
                .SetEase(Ease.Linear).OnWaypointChange(OnChangeWavePoint).OnUpdate(() =>
                {
                    lineRenderer.SetPosition(0, transform.position);
                }).OnComplete(() => { isCanMove = true; });
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
        isRunningBack = true;
        curLineCount = lineRenderer.positionCount - 1;
        transform.DOPath(lstPointReturnPath.ToArray(), speed, PathType.Linear, PathMode.Full3D).SetSpeedBased(true)
            .SetEase(Ease.Linear)
            .OnWaypointChange(OnReturnPathChangePoint).OnUpdate(() =>
            {
                lineRenderer.SetPosition(lineRenderer.positionCount - 1, transform.position);
            }).OnComplete(() =>
            {
                SetRumAnim(false);
                isCanMove = true;
                transform.eulerAngles = originRotation;
                lstPointPath.Clear();
                lstPointPath.AddRange(lstCachePointPath);
            });
    }

    void OnChangeWavePoint(int i)
    {
        lstPointReturnPath.Add(lstPointPath[0]);
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
        return lstPointPath[i];
    }

    Vector3 GetNextReturnPathPos(int i)
    {
        return lstPointReturnPath[i];
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Car"))
        {
            var car = other.GetComponent<Car>();
            if (car.typeColor != typeColor)
            {
                transform.DOKill();
                isCanMove = false;
                isRunning = false;
                SetRumAnim(false);
                Comeback();
            }
            else
            {
                transform.DOKill();
                isCanMove = false;
                isRunning = false;
                SetRumAnim(false);
                car.isContainHuman = true;
                car.Action();
                gameObject.SetActive(false);
                lineRenderer.positionCount = 0;
            }
        }
    }

    public void SetRumAnim(bool boolean)
    {
        animator.SetBool("Run", boolean);
    }
}