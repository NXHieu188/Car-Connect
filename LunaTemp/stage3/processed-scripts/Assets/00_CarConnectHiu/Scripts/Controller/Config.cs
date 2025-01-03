using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(fileName = "GameConfig", menuName = "DataConfig/GameConfig")]
public class Config : ScriptableObject
{
    public List<ObjectColor> lstObjectColor;
    public ObjectColor GetObjectColor(TypeColor typeColor)
    {
        for (int i = 0; i < lstObjectColor.Count; i++)
        {
            if (lstObjectColor[i].typeColor == typeColor)
            {
                return lstObjectColor[i];
            }
        }
        return null;
    }
}
[System.Serializable]
public class ObjectColor
{
    public TypeColor typeColor;
    public Material material;
    public Material materialGlasses;
    public Color color;
}
