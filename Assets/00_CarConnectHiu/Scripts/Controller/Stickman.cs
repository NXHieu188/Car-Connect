using System;
using DG.Tweening;
using Luna.Unity.FacebookInstantGames;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UIElements;

public class Stickman : MonoBehaviour
{
    public Animator animator;
    private Vector3[] pointPath;
    private Vector3[] oldPath;
    public LineRenderer lineRenderer;
    public float speed;
    public float timeRotate;
    private bool isCanMove;

    public void Init()
    {
        isCanMove = true;
    }

    public void MoveToCar()
    {
        if (isCanMove)
        {
            isCanMove = false;
            pointPath = new Vector3[lineRenderer.positionCount - 1];
            oldPath = new Vector3[pointPath.Length];
            var index = 0;
            for (int i = 0; i < lineRenderer.positionCount - 1; i++)
            {
                pointPath[index] = lineRenderer.GetPosition(i);
                index++;
            }

            oldPath[0] = transform.position;
            SetRumAnim(true);
            indexPointPath = 0;
            transform.DOPath(pointPath, speed, PathType.CatmullRom, PathMode.Full3D).SetSpeedBased(true)
                .SetEase(Ease.Linear).OnWaypointChange(OnChangeWavePoint).OnComplete(() =>
                {
                    SetRumAnim(false);
                    isCanMove = true;
                });
        }
    }

    void Comeback()
    {
        // var cachePointPath = new Vector3[pointPath.Length];
        // for (int i = 0; i < pointPath.Length; i++)
        // {
        //     cachePointPath[i] = pointPath[i];
        // }
        // pointPath = new Vector3[cachePointPath.Length];
        // var index = 0;
        // for (int i = oldPath.Length - 1; i >= 0; i--)
        // {
        //     pointPath[index] = cachePointPath[i];
        //     index++;
        // }

        SetRumAnim(true);
        indexPointPath = 0;
        transform.DOPath(oldPath, speed, PathType.CatmullRom, PathMode.Full3D).SetSpeedBased(true)
            .SetEase(Ease.Linear).OnWaypointChange(OnOldPathChangePoint).OnComplete(() =>
            {
                SetRumAnim(false);
                isCanMove = true;
            });
    }

    private int indexPointPath = 0;

    void OnChangeWavePoint(int i)
    {
        oldPath[i + 1] = pointPath[i];
        Vector3 nextPos = GetNextPos(indexPointPath, i);
        if (nextPos != Vector3.zero)
            transform.DOLookAt(nextPos, timeRotate);
        indexPointPath++;
    }
    void OnOldPathChangePoint(int i)
    {
        Vector3 nextPos = GetNextPos(indexPointPath, i);
        if (nextPos != Vector3.zero)
            transform.DOLookAt(nextPos, timeRotate);
    }
    Vector3 GetNextPos(int index, int i)
    {
        return pointPath[index - 1];
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Car"))
        {
            DOTween.KillAll();
            isCanMove = false;
            SetRumAnim(false);
            Comeback();
        }
    }

    public void SetRumAnim(bool boolean)
    {
        animator.SetBool("Run", boolean);
    }
}