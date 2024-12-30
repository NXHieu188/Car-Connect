using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GamePlayController : MonoBehaviour
{
    private RaycastHit hit;
    private Ray ray;
    private void Update()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame)
        {
            Touch();
        }
    }
    private void Touch()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                //if (isCanMove)
                //{
                ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                if (Physics.Raycast(ray, out hit, Mathf.Infinity, 1 << 6))
                {
                    Transform select = hit.transform;
                    //AnimalCarController car = select.GetComponent<AnimalCarController>();
                    Stickman stick = select.GetComponent<Stickman>();
                    stick.MoveToCar();
                }
                //}
            }
        }
    }
}
