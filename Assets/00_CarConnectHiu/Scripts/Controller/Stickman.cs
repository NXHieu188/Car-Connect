using DG.Tweening;
using Luna.Unity.FacebookInstantGames;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class Stickman : MonoBehaviour
{
    private Vector3[] pointPath;
    public LineRenderer lineRenderer;
    public float speed;
    public float timeRotate;
    public void MoveToCar()
    {
        pointPath = new Vector3[lineRenderer.positionCount];
        for (int i = 0; i < lineRenderer.positionCount; i++)
        {
            pointPath[i] = lineRenderer.GetPosition(i);
        }
        transform.DOPath(pointPath, speed, PathType.CatmullRom, PathMode.Full3D).SetSpeedBased(true).SetEase(Ease.Linear).OnWaypointChange(OnChangeWavePoint).OnComplete(() =>
        {

        });
    }
    int indexPointPath;

    void OnChangeWavePoint(int i)
    {
        Vector3 nextPos = GetNextPos(indexPointPath, i);
        if (nextPos != Vector3.zero)
            transform.DOLookAt(nextPos, timeRotate);
    }
    Vector3 GetNextPos(int index, int i)
    {
        return pointPath[index - 1];
    }
}
