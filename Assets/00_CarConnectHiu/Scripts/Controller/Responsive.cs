using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.SocialPlatforms.Impl;

public class Responsive : MonoBehaviour
{
    public Camera camera;
    private float oldScreenWidth = 0, oldScreenHeight = 0;
    private bool isConvertScreen = false;

    void Update()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isStartCheckFirstInteraction)
        {
            if ((Screen.width != oldScreenWidth || Screen.height != oldScreenHeight) && !isConvertScreen)
            {
                oldScreenWidth = Screen.width;
                oldScreenHeight = Screen.height;
                isConvertScreen = true;
                Invoke(nameof(Respon), 0.05f);
            }
        }
    }
    void Respon()
    {
        var aspectRatio = Screen.width / Screen.height;
        if (aspectRatio >= 1)
        {
            if (isConvertScreen)
                this.HandleLandscapeLayout();
        }
        if (aspectRatio < 1)
        {
            if (isConvertScreen)
                this.HandlePortraitLayout();
        }
;
    }

    private void HandleLandscapeLayout()
    {
        camera.orthographicSize = 5.5f;
        isConvertScreen = false;
    }
    private void HandlePortraitLayout()
    {
        camera.orthographicSize = 12f;
        isConvertScreen = false;
    }
}
