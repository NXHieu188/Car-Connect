using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StickmanEC : MonoBehaviour
{
    public Transform arrayLinePoint;
    public LineRenderer lineRenderer;
    public void Start()
    {
        lineRenderer.positionCount = arrayLinePoint.childCount;
        for (int i = 0; i < arrayLinePoint.childCount; i++)
        {
            lineRenderer.SetPosition(i, arrayLinePoint.GetChild(i).transform.position);
        }
    }
}
