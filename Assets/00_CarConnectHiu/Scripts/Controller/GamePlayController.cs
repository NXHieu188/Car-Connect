using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

public class GamePlayController : MonoBehaviour
{
    public Camera camera;
    public ParticleSystem fxTap;
    private RaycastHit hit;
    private Ray ray;
    public bool isCanRaycast;
    private void Update()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame && GlobalInstance.Instance.gameManagerInstance.isCanPlay)
        {
            Touch();
        }
    }
    private void Touch()
    {
        if (Input.GetMouseButtonDown(0))
        {
            var rayTouch = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(rayTouch, out hit, Mathf.Infinity))
            {
                Transform select = hit.transform;
                fxTap.transform.position = hit.point;
                fxTap.gameObject.SetActive(true);
                fxTap.Play();
                AudioManager.Instance.PlaySoundClick();
            }

            if (isCanRaycast)
            {
                ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                if (Physics.Raycast(ray, out hit, Mathf.Infinity, 1 << 6))
                {
                    Transform select = hit.transform;
                    Stickman stick = select.GetComponent<Stickman>();
                    stick.Action();
                    GlobalInstance.Instance.gameManagerInstance.FirstTutCinema();
                    GlobalInstance.Instance.gameManagerInstance.FirstInteraction();
                    GlobalInstance.Instance.gameManagerInstance.UpdateTap();
                }
            }
        }

    }
}
