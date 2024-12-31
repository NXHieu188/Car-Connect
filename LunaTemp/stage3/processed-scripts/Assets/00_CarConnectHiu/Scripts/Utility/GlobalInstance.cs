using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalInstance : Singleton<GlobalInstance>
{
    public PLY01Manager gameManagerInstance = PLY01Manager.Instance;
}