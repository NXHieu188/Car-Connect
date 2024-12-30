using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DefineHelper
{
    public const string Movement = "Movement";
    public const string Rotate = "Rotate";
}

public class NameTag
{
    public const string Player = "Player";
}

public enum EventID
{
    RemoveBoomInList = 0,
}

public enum GameState
{
    LOBBY,
    IN_GAME,
    END_GAME,
}
