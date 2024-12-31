using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Stickman : MonoBehaviour
{
    public TypeColor typeColor;
    public Animator animator;
    private List<Vector3> lstPointPath = new List<Vector3>();
    private List<Vector3> lstOldPath = new List<Vector3>();
    public Vector3[] arrayOriginPosLine;
    public Vector3[] arrOldPath;
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
        arrayOriginPosLine = new Vector3[lineRenderer.positionCount];
        for (int i = 0; i < lineRenderer.positionCount; i++)
        {
            arrayOriginPosLine[i] = lineRenderer.GetPosition(i);
        }
        originRotation = transform.eulerAngles;
    }

    public void Action()
    {
        if (isCanMove)
        {

            isCanMove = false;
            isRunning = true;
            indexRemove = 0;
            lstPointPath.Clear();
            lstOldPath.Clear();
            for (int i = 0; i < lineRenderer.positionCount; i++)
            {
                lstPointPath.Add(lineRenderer.GetPosition(i));
            }
            SetRumAnim(true);
            transform.DOPath(lstPointPath.ToArray(), speed, PathType.Linear, PathMode.Full3D).SetSpeedBased(true)
                .SetEase(Ease.Linear).OnWaypointChange(OnChangeWavePoint).OnComplete(() =>
                {
                    isRunning = false;
                });
        }
    }

    void Comeback()
    {
        SetRumAnim(true);
        isRunningBack = true;
        arrOldPath = new Vector3[lstOldPath.Count];
        var index = 0;
        for (int i = lstOldPath.Count - 1; i >= 0; i--)
        {
            arrOldPath[index] = lstOldPath[i];
            index++;

        }
        transform.DOPath(arrOldPath, speed, PathType.Linear, PathMode.Full3D).SetSpeedBased(true)
            .SetEase(Ease.Linear).OnWaypointChange(OnOldPathChangePoint).OnComplete(() =>
            {
                SetRumAnim(false);
                isCanMove = true;
                isRunningBack = false;
                transform.eulerAngles = originRotation;
            });
    }
    void OnChangeWavePoint(int i)
    {
        lstOldPath.Add(arrayOriginPosLine[i]);
        Vector3 nextPos = GetNextPos(i);
        if (nextPos != Vector3.zero)
        {
            transform.LookAt(nextPos);
        }
    }
    void OnOldPathChangePoint(int i)
    {
        if (i == 0)
            return;
        Vector3 nextPos = Vector3.zero;
        nextPos = GetNextOldPathPos(i - 1);
        if (nextPos != Vector3.zero)
        {
            transform.LookAt(nextPos);
        }
    }
    Vector3 GetNextPos(int i)
    {
        return arrayOriginPosLine[i];
    }
    Vector3 GetNextOldPathPos(int i)
    {
        return arrOldPath[arrOldPath.Length - 1];
    }
    private void Update()
    {
        if (isRunning)
        {
            if (lineRenderer.positionCount > 1)
            {
                lineRenderer.SetPosition(0, transform.position);
                if (Vector3.Distance(transform.position, lineRenderer.GetPosition(1)) <= pointRemoveThreshold)
                {
                    RemovePoint();
                }
            }
        }
        if (isRunningBack)
        {
            if (lineRenderer.GetPosition(0) != arrayOriginPosLine[0])
            {
                lineRenderer.SetPosition(0, transform.position);
                if (indexRemove > 0)
                {
                    if (Vector3.Distance(transform.position, arrayOriginPosLine[indexRemove]) <= pointRemoveThreshold)
                    {
                        //lineRenderer.SetPosition(0, arrayOriginPosLine[indexRemove]);
                        AddPoint(arrayOriginPosLine[indexRemove]);
                        indexRemove--;
                    }
                }
                else
                {
                    if (Vector3.Distance(transform.position, arrayOriginPosLine[0]) <= pointRemoveThreshold)
                    {
                        lineRenderer.SetPosition(0, arrayOriginPosLine[0]);
                    }
                }
            }
        }
    }
    private void RemovePoint()
    {
        lstPointPath.RemoveAt(0);
        lineRenderer.positionCount = lstPointPath.Count;
        for (int i = 0; i < lineRenderer.positionCount; i++)
        {
            lineRenderer.SetPosition(i, lstPointPath[i]);
        }
        indexRemove++;
    }
    private void AddPoint([Bridge.Ref] Vector3 pos)
    {
        lstPointPath.Insert(0, pos);
        lineRenderer.positionCount = lstPointPath.Count;
        lineRenderer.SetPositions(lstPointPath.ToArray());
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Car"))
        {
            var car = other.GetComponent<Car>();
            if (car.typeColor != typeColor)
            {
                this.transform.DOKill();
                isCanMove = false;
                isRunning = false;
                SetRumAnim(false);
                Comeback();
            }
            else
            {
                this.transform.DOKill();
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