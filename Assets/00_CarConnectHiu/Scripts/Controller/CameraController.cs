using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    private Vector3 positionOffsetIngame;
    private Vector3 newPositionOffset;
    public Transform target;
    private float distance;
    private bool isFollowing;
    private Vector3 offset;
    public void Init()
    {
        
        positionOffsetIngame = gameObject.transform.position - target.transform.position;
        newPositionOffset = positionOffsetIngame;

        distance = (transform.position - target.transform.position).magnitude;
        offset = gameObject.transform.position - target.transform.position;
        SetFollow(true);
    }
    public void SetFollow(bool isFollow)
    {
        if (isFollow)
        {
            if (target == null)
            {
                Debug.LogError("Follow is true but has no Target");
            }
            isFollowing = true;
        }
        else
        {
            isFollowing = false;
        }
    }
    private void LateUpdate()
    {
        if (!target)
            return;
        FollowTarget();
    }
    private Vector3 velocity = Vector3.zero;
    void FollowTarget()
    {
        if (!isFollowing)
        {
            return;
        }
        transform.position = Vector3.Lerp(transform.position, target.transform.position + newPositionOffset, 0.07f);

    }
}
