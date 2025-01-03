var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.JointSpring' )
  var i2553 = data
  i2552.spring = i2553[0]
  i2552.damper = i2553[1]
  i2552.targetPosition = i2553[2]
  return i2552
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.JointMotor' )
  var i2555 = data
  i2554.m_TargetVelocity = i2555[0]
  i2554.m_Force = i2555[1]
  i2554.m_FreeSpin = i2555[2]
  return i2554
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.JointLimits' )
  var i2557 = data
  i2556.m_Min = i2557[0]
  i2556.m_Max = i2557[1]
  i2556.m_Bounciness = i2557[2]
  i2556.m_BounceMinVelocity = i2557[3]
  i2556.m_ContactDistance = i2557[4]
  i2556.minBounce = i2557[5]
  i2556.maxBounce = i2557[6]
  return i2556
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.JointDrive' )
  var i2559 = data
  i2558.m_PositionSpring = i2559[0]
  i2558.m_PositionDamper = i2559[1]
  i2558.m_MaximumForce = i2559[2]
  return i2558
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2560 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2561 = data
  i2560.m_Spring = i2561[0]
  i2560.m_Damper = i2561[1]
  return i2560
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2563 = data
  i2562.m_Limit = i2563[0]
  i2562.m_Bounciness = i2563[1]
  i2562.m_ContactDistance = i2563[2]
  return i2562
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2565 = data
  i2564.m_ExtremumSlip = i2565[0]
  i2564.m_ExtremumValue = i2565[1]
  i2564.m_AsymptoteSlip = i2565[2]
  i2564.m_AsymptoteValue = i2565[3]
  i2564.m_Stiffness = i2565[4]
  return i2564
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2567 = data
  i2566.m_LowerAngle = i2567[0]
  i2566.m_UpperAngle = i2567[1]
  return i2566
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2569 = data
  i2568.m_MotorSpeed = i2569[0]
  i2568.m_MaximumMotorTorque = i2569[1]
  return i2568
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2571 = data
  i2570.m_DampingRatio = i2571[0]
  i2570.m_Frequency = i2571[1]
  i2570.m_Angle = i2571[2]
  return i2570
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2573 = data
  i2572.m_LowerTranslation = i2573[0]
  i2572.m_UpperTranslation = i2573[1]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2575 = data
  i2574.name = i2575[0]
  i2574.width = i2575[1]
  i2574.height = i2575[2]
  i2574.mipmapCount = i2575[3]
  i2574.anisoLevel = i2575[4]
  i2574.filterMode = i2575[5]
  i2574.hdr = !!i2575[6]
  i2574.format = i2575[7]
  i2574.wrapMode = i2575[8]
  i2574.alphaIsTransparency = !!i2575[9]
  i2574.alphaSource = i2575[10]
  i2574.graphicsFormat = i2575[11]
  i2574.sRGBTexture = !!i2575[12]
  i2574.desiredColorSpace = i2575[13]
  i2574.wrapU = i2575[14]
  i2574.wrapV = i2575[15]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2576 = root || new pc.UnityMaterial()
  var i2577 = data
  i2576.name = i2577[0]
  request.r(i2577[1], i2577[2], 0, i2576, 'shader')
  i2576.renderQueue = i2577[3]
  i2576.enableInstancing = !!i2577[4]
  var i2579 = i2577[5]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2579[i + 0]) );
  }
  i2576.floatParameters = i2578
  var i2581 = i2577[6]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2581[i + 0]) );
  }
  i2576.colorParameters = i2580
  var i2583 = i2577[7]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2583[i + 0]) );
  }
  i2576.vectorParameters = i2582
  var i2585 = i2577[8]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2585[i + 0]) );
  }
  i2576.textureParameters = i2584
  var i2587 = i2577[9]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2587[i + 0]) );
  }
  i2576.materialFlags = i2586
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2591 = data
  i2590.name = i2591[0]
  i2590.value = i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2595 = data
  i2594.name = i2595[0]
  i2594.value = new pc.Color(i2595[1], i2595[2], i2595[3], i2595[4])
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2599 = data
  i2598.name = i2599[0]
  i2598.value = new pc.Vec4( i2599[1], i2599[2], i2599[3], i2599[4] )
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2603 = data
  i2602.name = i2603[0]
  request.r(i2603[1], i2603[2], 0, i2602, 'value')
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2607 = data
  i2606.name = i2607[0]
  i2606.enabled = !!i2607[1]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.halfPrecision = !!i2609[1]
  i2608.useUInt32IndexFormat = !!i2609[2]
  i2608.vertexCount = i2609[3]
  i2608.aabb = i2609[4]
  var i2611 = i2609[5]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( !!i2611[i + 0] );
  }
  i2608.streams = i2610
  i2608.vertices = i2609[6]
  var i2613 = i2609[7]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2613[i + 0]) );
  }
  i2608.subMeshes = i2612
  var i2615 = i2609[8]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 16) {
    i2614.push( new pc.Mat4().setData(i2615[i + 0], i2615[i + 1], i2615[i + 2], i2615[i + 3],  i2615[i + 4], i2615[i + 5], i2615[i + 6], i2615[i + 7],  i2615[i + 8], i2615[i + 9], i2615[i + 10], i2615[i + 11],  i2615[i + 12], i2615[i + 13], i2615[i + 14], i2615[i + 15]) );
  }
  i2608.bindposes = i2614
  var i2617 = i2609[9]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2617[i + 0]) );
  }
  i2608.blendShapes = i2616
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2623 = data
  i2622.triangles = i2623[0]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2629 = data
  i2628.name = i2629[0]
  var i2631 = i2629[1]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2631[i + 0]) );
  }
  i2628.frames = i2630
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.atlasId = i2633[1]
  i2632.mipmapCount = i2633[2]
  i2632.hdr = !!i2633[3]
  i2632.size = i2633[4]
  i2632.anisoLevel = i2633[5]
  i2632.filterMode = i2633[6]
  var i2635 = i2633[7]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 4) {
    i2634.push( UnityEngine.Rect.MinMaxRect(i2635[i + 0], i2635[i + 1], i2635[i + 2], i2635[i + 3]) );
  }
  i2632.rects = i2634
  i2632.wrapU = i2633[8]
  i2632.wrapV = i2633[9]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.index = i2639[1]
  i2638.startup = !!i2639[2]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2641 = data
  i2640.position = new pc.Vec3( i2641[0], i2641[1], i2641[2] )
  i2640.scale = new pc.Vec3( i2641[3], i2641[4], i2641[5] )
  i2640.rotation = new pc.Quat(i2641[6], i2641[7], i2641[8], i2641[9])
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2643 = data
  i2642.enabled = !!i2643[0]
  i2642.aspect = i2643[1]
  i2642.orthographic = !!i2643[2]
  i2642.orthographicSize = i2643[3]
  i2642.backgroundColor = new pc.Color(i2643[4], i2643[5], i2643[6], i2643[7])
  i2642.nearClipPlane = i2643[8]
  i2642.farClipPlane = i2643[9]
  i2642.fieldOfView = i2643[10]
  i2642.depth = i2643[11]
  i2642.clearFlags = i2643[12]
  i2642.cullingMask = i2643[13]
  i2642.rect = i2643[14]
  request.r(i2643[15], i2643[16], 0, i2642, 'targetTexture')
  i2642.usePhysicalProperties = !!i2643[17]
  i2642.focalLength = i2643[18]
  i2642.sensorSize = new pc.Vec2( i2643[19], i2643[20] )
  i2642.lensShift = new pc.Vec2( i2643[21], i2643[22] )
  i2642.gateFit = i2643[23]
  i2642.commandBufferCount = i2643[24]
  i2642.cameraType = i2643[25]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2645 = data
  i2644.name = i2645[0]
  i2644.tagId = i2645[1]
  i2644.enabled = !!i2645[2]
  i2644.isStatic = !!i2645[3]
  i2644.layer = i2645[4]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2647 = data
  i2646.enabled = !!i2647[0]
  i2646.type = i2647[1]
  i2646.color = new pc.Color(i2647[2], i2647[3], i2647[4], i2647[5])
  i2646.cullingMask = i2647[6]
  i2646.intensity = i2647[7]
  i2646.range = i2647[8]
  i2646.spotAngle = i2647[9]
  i2646.shadows = i2647[10]
  i2646.shadowNormalBias = i2647[11]
  i2646.shadowBias = i2647[12]
  i2646.shadowStrength = i2647[13]
  i2646.shadowResolution = i2647[14]
  i2646.lightmapBakeType = i2647[15]
  i2646.renderMode = i2647[16]
  request.r(i2647[17], i2647[18], 0, i2646, 'cookie')
  i2646.cookieSize = i2647[19]
  return i2646
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2648 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'm_FirstSelected')
  i2648.m_sendNavigationEvents = !!i2649[2]
  i2648.m_DragThreshold = i2649[3]
  return i2648
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2650 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2651 = data
  i2650.m_HorizontalAxis = i2651[0]
  i2650.m_VerticalAxis = i2651[1]
  i2650.m_SubmitButton = i2651[2]
  i2650.m_CancelButton = i2651[3]
  i2650.m_InputActionsPerSecond = i2651[4]
  i2650.m_RepeatDelay = i2651[5]
  i2650.m_ForceModuleActive = !!i2651[6]
  i2650.m_SendPointerHoverToParent = !!i2651[7]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2653 = data
  i2652.pivot = new pc.Vec2( i2653[0], i2653[1] )
  i2652.anchorMin = new pc.Vec2( i2653[2], i2653[3] )
  i2652.anchorMax = new pc.Vec2( i2653[4], i2653[5] )
  i2652.sizeDelta = new pc.Vec2( i2653[6], i2653[7] )
  i2652.anchoredPosition3D = new pc.Vec3( i2653[8], i2653[9], i2653[10] )
  i2652.rotation = new pc.Quat(i2653[11], i2653[12], i2653[13], i2653[14])
  i2652.scale = new pc.Vec3( i2653[15], i2653[16], i2653[17] )
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2655 = data
  i2654.enabled = !!i2655[0]
  i2654.planeDistance = i2655[1]
  i2654.referencePixelsPerUnit = i2655[2]
  i2654.isFallbackOverlay = !!i2655[3]
  i2654.renderMode = i2655[4]
  i2654.renderOrder = i2655[5]
  i2654.sortingLayerName = i2655[6]
  i2654.sortingOrder = i2655[7]
  i2654.scaleFactor = i2655[8]
  request.r(i2655[9], i2655[10], 0, i2654, 'worldCamera')
  i2654.overrideSorting = !!i2655[11]
  i2654.pixelPerfect = !!i2655[12]
  i2654.targetDisplay = i2655[13]
  i2654.overridePixelPerfect = !!i2655[14]
  return i2654
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2656 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2657 = data
  i2656.m_UiScaleMode = i2657[0]
  i2656.m_ReferencePixelsPerUnit = i2657[1]
  i2656.m_ScaleFactor = i2657[2]
  i2656.m_ReferenceResolution = new pc.Vec2( i2657[3], i2657[4] )
  i2656.m_ScreenMatchMode = i2657[5]
  i2656.m_MatchWidthOrHeight = i2657[6]
  i2656.m_PhysicalUnit = i2657[7]
  i2656.m_FallbackScreenDPI = i2657[8]
  i2656.m_DefaultSpriteDPI = i2657[9]
  i2656.m_DynamicPixelsPerUnit = i2657[10]
  i2656.m_PresetInfoIsWorld = !!i2657[11]
  return i2656
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2659 = data
  i2658.m_IgnoreReversedGraphics = !!i2659[0]
  i2658.m_BlockingObjects = i2659[1]
  i2658.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2659[2] )
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2661 = data
  i2660.cullTransparentMesh = !!i2661[0]
  return i2660
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.UI.Image' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'm_Sprite')
  i2662.m_Type = i2663[2]
  i2662.m_PreserveAspect = !!i2663[3]
  i2662.m_FillCenter = !!i2663[4]
  i2662.m_FillMethod = i2663[5]
  i2662.m_FillAmount = i2663[6]
  i2662.m_FillClockwise = !!i2663[7]
  i2662.m_FillOrigin = i2663[8]
  i2662.m_UseSpriteMesh = !!i2663[9]
  i2662.m_PixelsPerUnitMultiplier = i2663[10]
  request.r(i2663[11], i2663[12], 0, i2662, 'm_Material')
  i2662.m_Maskable = !!i2663[13]
  i2662.m_Color = new pc.Color(i2663[14], i2663[15], i2663[16], i2663[17])
  i2662.m_RaycastTarget = !!i2663[18]
  i2662.m_RaycastPadding = new pc.Vec4( i2663[19], i2663[20], i2663[21], i2663[22] )
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2665 = data
  i2664.playAutomatically = !!i2665[0]
  request.r(i2665[1], i2665[2], 0, i2664, 'clip')
  var i2667 = i2665[3]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 2) {
  request.r(i2667[i + 0], i2667[i + 1], 2, i2666, '')
  }
  i2664.clips = i2666
  i2664.wrapMode = i2665[4]
  i2664.enabled = !!i2665[5]
  return i2664
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.UI.Text' )
  var i2671 = data
  i2670.m_FontData = request.d('UnityEngine.UI.FontData', i2671[0], i2670.m_FontData)
  i2670.m_Text = i2671[1]
  request.r(i2671[2], i2671[3], 0, i2670, 'm_Material')
  i2670.m_Maskable = !!i2671[4]
  i2670.m_Color = new pc.Color(i2671[5], i2671[6], i2671[7], i2671[8])
  i2670.m_RaycastTarget = !!i2671[9]
  i2670.m_RaycastPadding = new pc.Vec4( i2671[10], i2671[11], i2671[12], i2671[13] )
  return i2670
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'm_Font')
  i2672.m_FontSize = i2673[2]
  i2672.m_FontStyle = i2673[3]
  i2672.m_BestFit = !!i2673[4]
  i2672.m_MinSize = i2673[5]
  i2672.m_MaxSize = i2673[6]
  i2672.m_Alignment = i2673[7]
  i2672.m_AlignByGeometry = !!i2673[8]
  i2672.m_RichText = !!i2673[9]
  i2672.m_HorizontalOverflow = i2673[10]
  i2672.m_VerticalOverflow = i2673[11]
  i2672.m_LineSpacing = i2673[12]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2675 = data
  i2674.enabled = !!i2675[0]
  request.r(i2675[1], i2675[2], 0, i2674, 'sharedMaterial')
  var i2677 = i2675[3]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 2) {
  request.r(i2677[i + 0], i2677[i + 1], 2, i2676, '')
  }
  i2674.sharedMaterials = i2676
  i2674.receiveShadows = !!i2675[4]
  i2674.shadowCastingMode = i2675[5]
  i2674.sortingLayerID = i2675[6]
  i2674.sortingOrder = i2675[7]
  i2674.lightmapIndex = i2675[8]
  i2674.lightmapSceneIndex = i2675[9]
  i2674.lightmapScaleOffset = new pc.Vec4( i2675[10], i2675[11], i2675[12], i2675[13] )
  i2674.lightProbeUsage = i2675[14]
  i2674.reflectionProbeUsage = i2675[15]
  i2674.color = new pc.Color(i2675[16], i2675[17], i2675[18], i2675[19])
  request.r(i2675[20], i2675[21], 0, i2674, 'sprite')
  i2674.flipX = !!i2675[22]
  i2674.flipY = !!i2675[23]
  i2674.drawMode = i2675[24]
  i2674.size = new pc.Vec2( i2675[25], i2675[26] )
  i2674.tileMode = i2675[27]
  i2674.adaptiveModeThreshold = i2675[28]
  i2674.maskInteraction = i2675[29]
  i2674.spriteSortPoint = i2675[30]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'animatorController')
  request.r(i2681[2], i2681[3], 0, i2680, 'avatar')
  i2680.updateMode = i2681[4]
  i2680.hasTransformHierarchy = !!i2681[5]
  i2680.applyRootMotion = !!i2681[6]
  var i2683 = i2681[7]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 2) {
  request.r(i2683[i + 0], i2683[i + 1], 2, i2682, '')
  }
  i2680.humanBones = i2682
  i2680.enabled = !!i2681[8]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2687 = data
  request.r(i2687[0], i2687[1], 0, i2686, 'sharedMesh')
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2689 = data
  request.r(i2689[0], i2689[1], 0, i2688, 'additionalVertexStreams')
  i2688.enabled = !!i2689[2]
  request.r(i2689[3], i2689[4], 0, i2688, 'sharedMaterial')
  var i2691 = i2689[5]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 2) {
  request.r(i2691[i + 0], i2691[i + 1], 2, i2690, '')
  }
  i2688.sharedMaterials = i2690
  i2688.receiveShadows = !!i2689[6]
  i2688.shadowCastingMode = i2689[7]
  i2688.sortingLayerID = i2689[8]
  i2688.sortingOrder = i2689[9]
  i2688.lightmapIndex = i2689[10]
  i2688.lightmapSceneIndex = i2689[11]
  i2688.lightmapScaleOffset = new pc.Vec4( i2689[12], i2689[13], i2689[14], i2689[15] )
  i2688.lightProbeUsage = i2689[16]
  i2688.reflectionProbeUsage = i2689[17]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2693 = data
  i2692.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2693[0], i2692.main)
  i2692.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2693[1], i2692.colorBySpeed)
  i2692.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2693[2], i2692.colorOverLifetime)
  i2692.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2693[3], i2692.emission)
  i2692.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2693[4], i2692.rotationBySpeed)
  i2692.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2693[5], i2692.rotationOverLifetime)
  i2692.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2693[6], i2692.shape)
  i2692.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2693[7], i2692.sizeBySpeed)
  i2692.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2693[8], i2692.sizeOverLifetime)
  i2692.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2693[9], i2692.textureSheetAnimation)
  i2692.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2693[10], i2692.velocityOverLifetime)
  i2692.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2693[11], i2692.noise)
  i2692.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2693[12], i2692.inheritVelocity)
  i2692.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2693[13], i2692.forceOverLifetime)
  i2692.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2693[14], i2692.limitVelocityOverLifetime)
  i2692.useAutoRandomSeed = !!i2693[15]
  i2692.randomSeed = i2693[16]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2694 = root || new pc.ParticleSystemMain()
  var i2695 = data
  i2694.duration = i2695[0]
  i2694.loop = !!i2695[1]
  i2694.prewarm = !!i2695[2]
  i2694.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[3], i2694.startDelay)
  i2694.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[4], i2694.startLifetime)
  i2694.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[5], i2694.startSpeed)
  i2694.startSize3D = !!i2695[6]
  i2694.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[7], i2694.startSizeX)
  i2694.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[8], i2694.startSizeY)
  i2694.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[9], i2694.startSizeZ)
  i2694.startRotation3D = !!i2695[10]
  i2694.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[11], i2694.startRotationX)
  i2694.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[12], i2694.startRotationY)
  i2694.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[13], i2694.startRotationZ)
  i2694.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2695[14], i2694.startColor)
  i2694.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2695[15], i2694.gravityModifier)
  i2694.simulationSpace = i2695[16]
  request.r(i2695[17], i2695[18], 0, i2694, 'customSimulationSpace')
  i2694.simulationSpeed = i2695[19]
  i2694.useUnscaledTime = !!i2695[20]
  i2694.scalingMode = i2695[21]
  i2694.playOnAwake = !!i2695[22]
  i2694.maxParticles = i2695[23]
  i2694.emitterVelocityMode = i2695[24]
  i2694.stopAction = i2695[25]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2696 = root || new pc.MinMaxCurve()
  var i2697 = data
  i2696.mode = i2697[0]
  i2696.curveMin = new pc.AnimationCurve( { keys_flow: i2697[1] } )
  i2696.curveMax = new pc.AnimationCurve( { keys_flow: i2697[2] } )
  i2696.curveMultiplier = i2697[3]
  i2696.constantMin = i2697[4]
  i2696.constantMax = i2697[5]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2698 = root || new pc.MinMaxGradient()
  var i2699 = data
  i2698.mode = i2699[0]
  i2698.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2699[1], i2698.gradientMin)
  i2698.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2699[2], i2698.gradientMax)
  i2698.colorMin = new pc.Color(i2699[3], i2699[4], i2699[5], i2699[6])
  i2698.colorMax = new pc.Color(i2699[7], i2699[8], i2699[9], i2699[10])
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2701 = data
  i2700.mode = i2701[0]
  var i2703 = i2701[1]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2703[i + 0]) );
  }
  i2700.colorKeys = i2702
  var i2705 = i2701[2]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2705[i + 0]) );
  }
  i2700.alphaKeys = i2704
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2706 = root || new pc.ParticleSystemColorBySpeed()
  var i2707 = data
  i2706.enabled = !!i2707[0]
  i2706.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2707[1], i2706.color)
  i2706.range = new pc.Vec2( i2707[2], i2707[3] )
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2711 = data
  i2710.color = new pc.Color(i2711[0], i2711[1], i2711[2], i2711[3])
  i2710.time = i2711[4]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2715 = data
  i2714.alpha = i2715[0]
  i2714.time = i2715[1]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2716 = root || new pc.ParticleSystemColorOverLifetime()
  var i2717 = data
  i2716.enabled = !!i2717[0]
  i2716.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2717[1], i2716.color)
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2718 = root || new pc.ParticleSystemEmitter()
  var i2719 = data
  i2718.enabled = !!i2719[0]
  i2718.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2719[1], i2718.rateOverTime)
  i2718.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2719[2], i2718.rateOverDistance)
  var i2721 = i2719[3]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2721[i + 0]) );
  }
  i2718.bursts = i2720
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2724 = root || new pc.ParticleSystemBurst()
  var i2725 = data
  i2724.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2725[0], i2724.count)
  i2724.cycleCount = i2725[1]
  i2724.minCount = i2725[2]
  i2724.maxCount = i2725[3]
  i2724.repeatInterval = i2725[4]
  i2724.time = i2725[5]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2726 = root || new pc.ParticleSystemRotationBySpeed()
  var i2727 = data
  i2726.enabled = !!i2727[0]
  i2726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2727[1], i2726.x)
  i2726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2727[2], i2726.y)
  i2726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2727[3], i2726.z)
  i2726.separateAxes = !!i2727[4]
  i2726.range = new pc.Vec2( i2727[5], i2727[6] )
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2728 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2729 = data
  i2728.enabled = !!i2729[0]
  i2728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[1], i2728.x)
  i2728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[2], i2728.y)
  i2728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[3], i2728.z)
  i2728.separateAxes = !!i2729[4]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2730 = root || new pc.ParticleSystemShape()
  var i2731 = data
  i2730.enabled = !!i2731[0]
  i2730.shapeType = i2731[1]
  i2730.randomDirectionAmount = i2731[2]
  i2730.sphericalDirectionAmount = i2731[3]
  i2730.randomPositionAmount = i2731[4]
  i2730.alignToDirection = !!i2731[5]
  i2730.radius = i2731[6]
  i2730.radiusMode = i2731[7]
  i2730.radiusSpread = i2731[8]
  i2730.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2731[9], i2730.radiusSpeed)
  i2730.radiusThickness = i2731[10]
  i2730.angle = i2731[11]
  i2730.length = i2731[12]
  i2730.boxThickness = new pc.Vec3( i2731[13], i2731[14], i2731[15] )
  i2730.meshShapeType = i2731[16]
  request.r(i2731[17], i2731[18], 0, i2730, 'mesh')
  request.r(i2731[19], i2731[20], 0, i2730, 'meshRenderer')
  request.r(i2731[21], i2731[22], 0, i2730, 'skinnedMeshRenderer')
  i2730.useMeshMaterialIndex = !!i2731[23]
  i2730.meshMaterialIndex = i2731[24]
  i2730.useMeshColors = !!i2731[25]
  i2730.normalOffset = i2731[26]
  i2730.arc = i2731[27]
  i2730.arcMode = i2731[28]
  i2730.arcSpread = i2731[29]
  i2730.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2731[30], i2730.arcSpeed)
  i2730.donutRadius = i2731[31]
  i2730.position = new pc.Vec3( i2731[32], i2731[33], i2731[34] )
  i2730.rotation = new pc.Vec3( i2731[35], i2731[36], i2731[37] )
  i2730.scale = new pc.Vec3( i2731[38], i2731[39], i2731[40] )
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2732 = root || new pc.ParticleSystemSizeBySpeed()
  var i2733 = data
  i2732.enabled = !!i2733[0]
  i2732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[1], i2732.x)
  i2732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[2], i2732.y)
  i2732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[3], i2732.z)
  i2732.separateAxes = !!i2733[4]
  i2732.range = new pc.Vec2( i2733[5], i2733[6] )
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2734 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2735 = data
  i2734.enabled = !!i2735[0]
  i2734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[1], i2734.x)
  i2734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[2], i2734.y)
  i2734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[3], i2734.z)
  i2734.separateAxes = !!i2735[4]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2736 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2737 = data
  i2736.enabled = !!i2737[0]
  i2736.mode = i2737[1]
  i2736.animation = i2737[2]
  i2736.numTilesX = i2737[3]
  i2736.numTilesY = i2737[4]
  i2736.useRandomRow = !!i2737[5]
  i2736.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2737[6], i2736.frameOverTime)
  i2736.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2737[7], i2736.startFrame)
  i2736.cycleCount = i2737[8]
  i2736.rowIndex = i2737[9]
  i2736.flipU = i2737[10]
  i2736.flipV = i2737[11]
  i2736.spriteCount = i2737[12]
  var i2739 = i2737[13]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 2, i2738, '')
  }
  i2736.sprites = i2738
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2742 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2743 = data
  i2742.enabled = !!i2743[0]
  i2742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[1], i2742.x)
  i2742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[2], i2742.y)
  i2742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[3], i2742.z)
  i2742.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[4], i2742.radial)
  i2742.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[5], i2742.speedModifier)
  i2742.space = i2743[6]
  i2742.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[7], i2742.orbitalX)
  i2742.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[8], i2742.orbitalY)
  i2742.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[9], i2742.orbitalZ)
  i2742.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[10], i2742.orbitalOffsetX)
  i2742.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[11], i2742.orbitalOffsetY)
  i2742.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2743[12], i2742.orbitalOffsetZ)
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2744 = root || new pc.ParticleSystemNoise()
  var i2745 = data
  i2744.enabled = !!i2745[0]
  i2744.separateAxes = !!i2745[1]
  i2744.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[2], i2744.strengthX)
  i2744.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[3], i2744.strengthY)
  i2744.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[4], i2744.strengthZ)
  i2744.frequency = i2745[5]
  i2744.damping = !!i2745[6]
  i2744.octaveCount = i2745[7]
  i2744.octaveMultiplier = i2745[8]
  i2744.octaveScale = i2745[9]
  i2744.quality = i2745[10]
  i2744.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[11], i2744.scrollSpeed)
  i2744.scrollSpeedMultiplier = i2745[12]
  i2744.remapEnabled = !!i2745[13]
  i2744.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[14], i2744.remapX)
  i2744.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[15], i2744.remapY)
  i2744.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[16], i2744.remapZ)
  i2744.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[17], i2744.positionAmount)
  i2744.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[18], i2744.rotationAmount)
  i2744.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[19], i2744.sizeAmount)
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2746 = root || new pc.ParticleSystemInheritVelocity()
  var i2747 = data
  i2746.enabled = !!i2747[0]
  i2746.mode = i2747[1]
  i2746.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[2], i2746.curve)
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2748 = root || new pc.ParticleSystemForceOverLifetime()
  var i2749 = data
  i2748.enabled = !!i2749[0]
  i2748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2749[1], i2748.x)
  i2748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2749[2], i2748.y)
  i2748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2749[3], i2748.z)
  i2748.space = i2749[4]
  i2748.randomized = !!i2749[5]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2750 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2751 = data
  i2750.enabled = !!i2751[0]
  i2750.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[1], i2750.limit)
  i2750.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[2], i2750.limitX)
  i2750.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[3], i2750.limitY)
  i2750.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[4], i2750.limitZ)
  i2750.dampen = i2751[5]
  i2750.separateAxes = !!i2751[6]
  i2750.space = i2751[7]
  i2750.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[8], i2750.drag)
  i2750.multiplyDragByParticleSize = !!i2751[9]
  i2750.multiplyDragByParticleVelocity = !!i2751[10]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2753 = data
  i2752.enabled = !!i2753[0]
  request.r(i2753[1], i2753[2], 0, i2752, 'sharedMaterial')
  var i2755 = i2753[3]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 2) {
  request.r(i2755[i + 0], i2755[i + 1], 2, i2754, '')
  }
  i2752.sharedMaterials = i2754
  i2752.receiveShadows = !!i2753[4]
  i2752.shadowCastingMode = i2753[5]
  i2752.sortingLayerID = i2753[6]
  i2752.sortingOrder = i2753[7]
  i2752.lightmapIndex = i2753[8]
  i2752.lightmapSceneIndex = i2753[9]
  i2752.lightmapScaleOffset = new pc.Vec4( i2753[10], i2753[11], i2753[12], i2753[13] )
  i2752.lightProbeUsage = i2753[14]
  i2752.reflectionProbeUsage = i2753[15]
  request.r(i2753[16], i2753[17], 0, i2752, 'mesh')
  i2752.meshCount = i2753[18]
  i2752.activeVertexStreamsCount = i2753[19]
  i2752.alignment = i2753[20]
  i2752.renderMode = i2753[21]
  i2752.sortMode = i2753[22]
  i2752.lengthScale = i2753[23]
  i2752.velocityScale = i2753[24]
  i2752.cameraVelocityScale = i2753[25]
  i2752.normalDirection = i2753[26]
  i2752.sortingFudge = i2753[27]
  i2752.minParticleSize = i2753[28]
  i2752.maxParticleSize = i2753[29]
  i2752.pivot = new pc.Vec3( i2753[30], i2753[31], i2753[32] )
  request.r(i2753[33], i2753[34], 0, i2752, 'trailMaterial')
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2757 = data
  i2756.textureMode = i2757[0]
  i2756.alignment = i2757[1]
  i2756.widthCurve = new pc.AnimationCurve( { keys_flow: i2757[2] } )
  i2756.colorGradient = i2757[3] ? new pc.ColorGradient(i2757[3][0], i2757[3][1], i2757[3][2]) : null
  var i2759 = i2757[4]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 3) {
    i2758.push( new pc.Vec3( i2759[i + 0], i2759[i + 1], i2759[i + 2] ) );
  }
  i2756.positions = i2758
  i2756.positionCount = i2757[5]
  i2756.widthMultiplier = i2757[6]
  i2756.startWidth = i2757[7]
  i2756.endWidth = i2757[8]
  i2756.numCornerVertices = i2757[9]
  i2756.numCapVertices = i2757[10]
  i2756.useWorldSpace = !!i2757[11]
  i2756.loop = !!i2757[12]
  i2756.startColor = new pc.Color(i2757[13], i2757[14], i2757[15], i2757[16])
  i2756.endColor = new pc.Color(i2757[17], i2757[18], i2757[19], i2757[20])
  i2756.generateLightingData = !!i2757[21]
  i2756.enabled = !!i2757[22]
  request.r(i2757[23], i2757[24], 0, i2756, 'sharedMaterial')
  var i2761 = i2757[25]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 2) {
  request.r(i2761[i + 0], i2761[i + 1], 2, i2760, '')
  }
  i2756.sharedMaterials = i2760
  i2756.receiveShadows = !!i2757[26]
  i2756.shadowCastingMode = i2757[27]
  i2756.sortingLayerID = i2757[28]
  i2756.sortingOrder = i2757[29]
  i2756.lightmapIndex = i2757[30]
  i2756.lightmapSceneIndex = i2757[31]
  i2756.lightmapScaleOffset = new pc.Vec4( i2757[32], i2757[33], i2757[34], i2757[35] )
  i2756.lightProbeUsage = i2757[36]
  i2756.reflectionProbeUsage = i2757[37]
  return i2756
}

Deserializers["StickmanEC"] = function (request, data, root) {
  var i2764 = root || request.c( 'StickmanEC' )
  var i2765 = data
  request.r(i2765[0], i2765[1], 0, i2764, 'arrayLinePoint')
  request.r(i2765[2], i2765[3], 0, i2764, 'lineRenderer')
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2767 = data
  i2766.enabled = !!i2767[0]
  request.r(i2767[1], i2767[2], 0, i2766, 'sharedMaterial')
  var i2769 = i2767[3]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 2) {
  request.r(i2769[i + 0], i2769[i + 1], 2, i2768, '')
  }
  i2766.sharedMaterials = i2768
  i2766.receiveShadows = !!i2767[4]
  i2766.shadowCastingMode = i2767[5]
  i2766.sortingLayerID = i2767[6]
  i2766.sortingOrder = i2767[7]
  i2766.lightmapIndex = i2767[8]
  i2766.lightmapSceneIndex = i2767[9]
  i2766.lightmapScaleOffset = new pc.Vec4( i2767[10], i2767[11], i2767[12], i2767[13] )
  i2766.lightProbeUsage = i2767[14]
  i2766.reflectionProbeUsage = i2767[15]
  request.r(i2767[16], i2767[17], 0, i2766, 'sharedMesh')
  var i2771 = i2767[18]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 2) {
  request.r(i2771[i + 0], i2771[i + 1], 2, i2770, '')
  }
  i2766.bones = i2770
  i2766.updateWhenOffscreen = !!i2767[19]
  i2766.localBounds = i2767[20]
  request.r(i2767[21], i2767[22], 0, i2766, 'rootBone')
  var i2773 = i2767[23]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2773[i + 0]) );
  }
  i2766.blendShapesWeights = i2772
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2777 = data
  i2776.weight = i2777[0]
  return i2776
}

Deserializers["EC01"] = function (request, data, root) {
  var i2778 = root || request.c( 'EC01' )
  var i2779 = data
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2781 = data
  i2780.ambientIntensity = i2781[0]
  i2780.reflectionIntensity = i2781[1]
  i2780.ambientMode = i2781[2]
  i2780.ambientLight = new pc.Color(i2781[3], i2781[4], i2781[5], i2781[6])
  i2780.ambientSkyColor = new pc.Color(i2781[7], i2781[8], i2781[9], i2781[10])
  i2780.ambientGroundColor = new pc.Color(i2781[11], i2781[12], i2781[13], i2781[14])
  i2780.ambientEquatorColor = new pc.Color(i2781[15], i2781[16], i2781[17], i2781[18])
  i2780.fogColor = new pc.Color(i2781[19], i2781[20], i2781[21], i2781[22])
  i2780.fogEndDistance = i2781[23]
  i2780.fogStartDistance = i2781[24]
  i2780.fogDensity = i2781[25]
  i2780.fog = !!i2781[26]
  request.r(i2781[27], i2781[28], 0, i2780, 'skybox')
  i2780.fogMode = i2781[29]
  var i2783 = i2781[30]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2783[i + 0]) );
  }
  i2780.lightmaps = i2782
  i2780.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2781[31], i2780.lightProbes)
  i2780.lightmapsMode = i2781[32]
  i2780.mixedBakeMode = i2781[33]
  i2780.environmentLightingMode = i2781[34]
  i2780.ambientProbe = new pc.SphericalHarmonicsL2(i2781[35])
  i2780.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2781[36])
  i2780.useReferenceAmbientProbe = !!i2781[37]
  request.r(i2781[38], i2781[39], 0, i2780, 'customReflection')
  request.r(i2781[40], i2781[41], 0, i2780, 'defaultReflection')
  i2780.defaultReflectionMode = i2781[42]
  i2780.defaultReflectionResolution = i2781[43]
  i2780.sunLightObjectId = i2781[44]
  i2780.pixelLightCount = i2781[45]
  i2780.defaultReflectionHDR = !!i2781[46]
  i2780.hasLightDataAsset = !!i2781[47]
  i2780.hasManualGenerate = !!i2781[48]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'lightmapColor')
  request.r(i2787[2], i2787[3], 0, i2786, 'lightmapDirection')
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2788 = root || new UnityEngine.LightProbes()
  var i2789 = data
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2795 = data
  var i2797 = i2795[0]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2797[i + 0]));
  }
  i2794.ShaderCompilationErrors = i2796
  i2794.name = i2795[1]
  i2794.guid = i2795[2]
  var i2799 = i2795[3]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( i2799[i + 0] );
  }
  i2794.shaderDefinedKeywords = i2798
  var i2801 = i2795[4]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2801[i + 0]) );
  }
  i2794.passes = i2800
  var i2803 = i2795[5]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2803[i + 0]) );
  }
  i2794.usePasses = i2802
  var i2805 = i2795[6]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2805[i + 0]) );
  }
  i2794.defaultParameterValues = i2804
  request.r(i2795[7], i2795[8], 0, i2794, 'unityFallbackShader')
  i2794.readDepth = !!i2795[9]
  i2794.isCreatedByShaderGraph = !!i2795[10]
  i2794.compiled = !!i2795[11]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2809 = data
  i2808.shaderName = i2809[0]
  i2808.errorMessage = i2809[1]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2814 = root || new pc.UnityShaderPass()
  var i2815 = data
  i2814.id = i2815[0]
  i2814.subShaderIndex = i2815[1]
  i2814.name = i2815[2]
  i2814.passType = i2815[3]
  i2814.grabPassTextureName = i2815[4]
  i2814.usePass = !!i2815[5]
  i2814.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[6], i2814.zTest)
  i2814.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[7], i2814.zWrite)
  i2814.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[8], i2814.culling)
  i2814.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2815[9], i2814.blending)
  i2814.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2815[10], i2814.alphaBlending)
  i2814.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[11], i2814.colorWriteMask)
  i2814.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[12], i2814.offsetUnits)
  i2814.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[13], i2814.offsetFactor)
  i2814.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[14], i2814.stencilRef)
  i2814.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[15], i2814.stencilReadMask)
  i2814.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2815[16], i2814.stencilWriteMask)
  i2814.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2815[17], i2814.stencilOp)
  i2814.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2815[18], i2814.stencilOpFront)
  i2814.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2815[19], i2814.stencilOpBack)
  var i2817 = i2815[20]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2817[i + 0]) );
  }
  i2814.tags = i2816
  var i2819 = i2815[21]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( i2819[i + 0] );
  }
  i2814.passDefinedKeywords = i2818
  var i2821 = i2815[22]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2821[i + 0]) );
  }
  i2814.passDefinedKeywordGroups = i2820
  var i2823 = i2815[23]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2823[i + 0]) );
  }
  i2814.variants = i2822
  var i2825 = i2815[24]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2825[i + 0]) );
  }
  i2814.excludedVariants = i2824
  i2814.hasDepthReader = !!i2815[25]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2827 = data
  i2826.val = i2827[0]
  i2826.name = i2827[1]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2829 = data
  i2828.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[0], i2828.src)
  i2828.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[1], i2828.dst)
  i2828.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[2], i2828.op)
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2831 = data
  i2830.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2831[0], i2830.pass)
  i2830.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2831[1], i2830.fail)
  i2830.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2831[2], i2830.zFail)
  i2830.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2831[3], i2830.comp)
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2835 = data
  i2834.name = i2835[0]
  i2834.value = i2835[1]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( i2841[i + 0] );
  }
  i2838.keywords = i2840
  i2838.hasDiscard = !!i2839[1]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2845 = data
  i2844.passId = i2845[0]
  i2844.subShaderIndex = i2845[1]
  var i2847 = i2845[2]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( i2847[i + 0] );
  }
  i2844.keywords = i2846
  i2844.vertexProgram = i2845[3]
  i2844.fragmentProgram = i2845[4]
  i2844.exportedForWebGl2 = !!i2845[5]
  i2844.readDepth = !!i2845[6]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2851 = data
  request.r(i2851[0], i2851[1], 0, i2850, 'shader')
  i2850.pass = i2851[2]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2855 = data
  i2854.name = i2855[0]
  i2854.type = i2855[1]
  i2854.value = new pc.Vec4( i2855[2], i2855[3], i2855[4], i2855[5] )
  i2854.textureValue = i2855[6]
  i2854.shaderPropertyFlag = i2855[7]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2857 = data
  i2856.name = i2857[0]
  request.r(i2857[1], i2857[2], 0, i2856, 'texture')
  i2856.aabb = i2857[3]
  i2856.vertices = i2857[4]
  i2856.triangles = i2857[5]
  i2856.textureRect = UnityEngine.Rect.MinMaxRect(i2857[6], i2857[7], i2857[8], i2857[9])
  i2856.packedRect = UnityEngine.Rect.MinMaxRect(i2857[10], i2857[11], i2857[12], i2857[13])
  i2856.border = new pc.Vec4( i2857[14], i2857[15], i2857[16], i2857[17] )
  i2856.transparency = i2857[18]
  i2856.bounds = i2857[19]
  i2856.pixelsPerUnit = i2857[20]
  i2856.textureWidth = i2857[21]
  i2856.textureHeight = i2857[22]
  i2856.nativeSize = new pc.Vec2( i2857[23], i2857[24] )
  i2856.pivot = new pc.Vec2( i2857[25], i2857[26] )
  i2856.textureRectOffset = new pc.Vec2( i2857[27], i2857[28] )
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2859 = data
  i2858.name = i2859[0]
  i2858.wrapMode = i2859[1]
  i2858.isLooping = !!i2859[2]
  i2858.length = i2859[3]
  var i2861 = i2859[4]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2861[i + 0]) );
  }
  i2858.curves = i2860
  var i2863 = i2859[5]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2863[i + 0]) );
  }
  i2858.events = i2862
  i2858.halfPrecision = !!i2859[6]
  i2858._frameRate = i2859[7]
  i2858.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2859[8], i2858.localBounds)
  i2858.hasMuscleCurves = !!i2859[9]
  var i2865 = i2859[10]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( i2865[i + 0] );
  }
  i2858.clipMuscleConstant = i2864
  i2858.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2859[11], i2858.clipBindingConstant)
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2869 = data
  i2868.path = i2869[0]
  i2868.hash = i2869[1]
  i2868.componentType = i2869[2]
  i2868.property = i2869[3]
  i2868.keys = i2869[4]
  var i2871 = i2869[5]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2871[i + 0]) );
  }
  i2868.objectReferenceKeys = i2870
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2875 = data
  i2874.time = i2875[0]
  request.r(i2875[1], i2875[2], 0, i2874, 'value')
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2879 = data
  i2878.functionName = i2879[0]
  i2878.floatParameter = i2879[1]
  i2878.intParameter = i2879[2]
  i2878.stringParameter = i2879[3]
  request.r(i2879[4], i2879[5], 0, i2878, 'objectReferenceParameter')
  i2878.time = i2879[6]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2881 = data
  i2880.center = new pc.Vec3( i2881[0], i2881[1], i2881[2] )
  i2880.extends = new pc.Vec3( i2881[3], i2881[4], i2881[5] )
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2885 = data
  var i2887 = i2885[0]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( i2887[i + 0] );
  }
  i2884.genericBindings = i2886
  var i2889 = i2885[1]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( i2889[i + 0] );
  }
  i2884.pptrCurveMapping = i2888
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2891 = data
  i2890.name = i2891[0]
  i2890.blendParameter = i2891[1]
  i2890.blendParameterY = i2891[2]
  i2890.blendType = i2891[3]
  var i2893 = i2891[4]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2893[i + 0]) );
  }
  i2890.children = i2892
  i2890.useAutomaticThresholds = !!i2891[5]
  i2890.minThreshold = i2891[6]
  i2890.maxThreshold = i2891[7]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2897 = data
  request.r(i2897[0], i2897[1], 0, i2896, 'motion')
  i2896.threshold = i2897[2]
  i2896.position = new pc.Vec2( i2897[3], i2897[4] )
  i2896.timeScale = i2897[5]
  i2896.cycleOffset = i2897[6]
  i2896.directBlendParameter = i2897[7]
  i2896.mirror = !!i2897[8]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2899 = data
  i2898.name = i2899[0]
  i2898.ascent = i2899[1]
  i2898.originalLineHeight = i2899[2]
  i2898.fontSize = i2899[3]
  var i2901 = i2899[4]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2901[i + 0]) );
  }
  i2898.characterInfo = i2900
  request.r(i2899[5], i2899[6], 0, i2898, 'texture')
  i2898.originalFontSize = i2899[7]
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2905 = data
  i2904.index = i2905[0]
  i2904.advance = i2905[1]
  i2904.bearing = i2905[2]
  i2904.glyphWidth = i2905[3]
  i2904.glyphHeight = i2905[4]
  i2904.minX = i2905[5]
  i2904.maxX = i2905[6]
  i2904.minY = i2905[7]
  i2904.maxY = i2905[8]
  i2904.uvBottomLeftX = i2905[9]
  i2904.uvBottomLeftY = i2905[10]
  i2904.uvBottomRightX = i2905[11]
  i2904.uvBottomRightY = i2905[12]
  i2904.uvTopLeftX = i2905[13]
  i2904.uvTopLeftY = i2905[14]
  i2904.uvTopRightX = i2905[15]
  i2904.uvTopRightY = i2905[16]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2907 = data
  i2906.name = i2907[0]
  var i2909 = i2907[1]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2909[i + 0]) );
  }
  i2906.layers = i2908
  var i2911 = i2907[2]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2911[i + 0]) );
  }
  i2906.parameters = i2910
  i2906.animationClips = i2907[3]
  i2906.avatarUnsupported = i2907[4]
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2915 = data
  i2914.name = i2915[0]
  i2914.defaultWeight = i2915[1]
  i2914.blendingMode = i2915[2]
  i2914.avatarMask = i2915[3]
  i2914.syncedLayerIndex = i2915[4]
  i2914.syncedLayerAffectsTiming = !!i2915[5]
  i2914.syncedLayers = i2915[6]
  i2914.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2915[7], i2914.stateMachine)
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2917 = data
  i2916.id = i2917[0]
  i2916.name = i2917[1]
  i2916.path = i2917[2]
  var i2919 = i2917[3]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2919[i + 0]) );
  }
  i2916.states = i2918
  var i2921 = i2917[4]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2921[i + 0]) );
  }
  i2916.machines = i2920
  var i2923 = i2917[5]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2923[i + 0]) );
  }
  i2916.entryStateTransitions = i2922
  var i2925 = i2917[6]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2925[i + 0]) );
  }
  i2916.exitStateTransitions = i2924
  var i2927 = i2917[7]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2927[i + 0]) );
  }
  i2916.anyStateTransitions = i2926
  i2916.defaultStateId = i2917[8]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2931 = data
  i2930.id = i2931[0]
  i2930.name = i2931[1]
  i2930.cycleOffset = i2931[2]
  i2930.cycleOffsetParameter = i2931[3]
  i2930.cycleOffsetParameterActive = !!i2931[4]
  i2930.mirror = !!i2931[5]
  i2930.mirrorParameter = i2931[6]
  i2930.mirrorParameterActive = !!i2931[7]
  i2930.motionId = i2931[8]
  i2930.nameHash = i2931[9]
  i2930.fullPathHash = i2931[10]
  i2930.speed = i2931[11]
  i2930.speedParameter = i2931[12]
  i2930.speedParameterActive = !!i2931[13]
  i2930.tag = i2931[14]
  i2930.tagHash = i2931[15]
  i2930.writeDefaultValues = !!i2931[16]
  var i2933 = i2931[17]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 2) {
  request.r(i2933[i + 0], i2933[i + 1], 2, i2932, '')
  }
  i2930.behaviours = i2932
  var i2935 = i2931[18]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2935[i + 0]) );
  }
  i2930.transitions = i2934
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2941 = data
  i2940.fullPath = i2941[0]
  i2940.canTransitionToSelf = !!i2941[1]
  i2940.duration = i2941[2]
  i2940.exitTime = i2941[3]
  i2940.hasExitTime = !!i2941[4]
  i2940.hasFixedDuration = !!i2941[5]
  i2940.interruptionSource = i2941[6]
  i2940.offset = i2941[7]
  i2940.orderedInterruption = !!i2941[8]
  i2940.destinationStateId = i2941[9]
  i2940.isExit = !!i2941[10]
  i2940.mute = !!i2941[11]
  i2940.solo = !!i2941[12]
  var i2943 = i2941[13]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2943[i + 0]) );
  }
  i2940.conditions = i2942
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2947 = data
  i2946.mode = i2947[0]
  i2946.parameter = i2947[1]
  i2946.threshold = i2947[2]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2953 = data
  i2952.destinationStateId = i2953[0]
  i2952.isExit = !!i2953[1]
  i2952.mute = !!i2953[2]
  i2952.solo = !!i2953[3]
  var i2955 = i2953[4]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2955[i + 0]) );
  }
  i2952.conditions = i2954
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2959 = data
  i2958.defaultBool = !!i2959[0]
  i2958.defaultFloat = i2959[1]
  i2958.defaultInt = i2959[2]
  i2958.name = i2959[3]
  i2958.nameHash = i2959[4]
  i2958.type = i2959[5]
  return i2958
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2960 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2961 = data
  i2960.useSafeMode = !!i2961[0]
  i2960.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2961[1], i2960.safeModeOptions)
  i2960.timeScale = i2961[2]
  i2960.unscaledTimeScale = i2961[3]
  i2960.useSmoothDeltaTime = !!i2961[4]
  i2960.maxSmoothUnscaledTime = i2961[5]
  i2960.rewindCallbackMode = i2961[6]
  i2960.showUnityEditorReport = !!i2961[7]
  i2960.logBehaviour = i2961[8]
  i2960.drawGizmos = !!i2961[9]
  i2960.defaultRecyclable = !!i2961[10]
  i2960.defaultAutoPlay = i2961[11]
  i2960.defaultUpdateType = i2961[12]
  i2960.defaultTimeScaleIndependent = !!i2961[13]
  i2960.defaultEaseType = i2961[14]
  i2960.defaultEaseOvershootOrAmplitude = i2961[15]
  i2960.defaultEasePeriod = i2961[16]
  i2960.defaultAutoKill = !!i2961[17]
  i2960.defaultLoopType = i2961[18]
  i2960.debugMode = !!i2961[19]
  i2960.debugStoreTargetId = !!i2961[20]
  i2960.showPreviewPanel = !!i2961[21]
  i2960.storeSettingsLocation = i2961[22]
  i2960.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2961[23], i2960.modules)
  i2960.createASMDEF = !!i2961[24]
  i2960.showPlayingTweens = !!i2961[25]
  i2960.showPausedTweens = !!i2961[26]
  return i2960
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2962 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2963 = data
  i2962.logBehaviour = i2963[0]
  i2962.nestedTweenFailureBehaviour = i2963[1]
  return i2962
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2964 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2965 = data
  i2964.showPanel = !!i2965[0]
  i2964.audioEnabled = !!i2965[1]
  i2964.physicsEnabled = !!i2965[2]
  i2964.physics2DEnabled = !!i2965[3]
  i2964.spriteEnabled = !!i2965[4]
  i2964.uiEnabled = !!i2965[5]
  i2964.textMeshProEnabled = !!i2965[6]
  i2964.tk2DEnabled = !!i2965[7]
  i2964.deAudioEnabled = !!i2965[8]
  i2964.deUnityExtendedEnabled = !!i2965[9]
  i2964.epoOutlineEnabled = !!i2965[10]
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2967 = data
  var i2969 = i2967[0]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2969[i + 0]) );
  }
  i2966.files = i2968
  i2966.componentToPrefabIds = i2967[1]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2973 = data
  i2972.path = i2973[0]
  request.r(i2973[1], i2973[2], 0, i2972, 'unityObject')
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2975 = data
  var i2977 = i2975[0]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2977[i + 0]) );
  }
  i2974.scriptsExecutionOrder = i2976
  var i2979 = i2975[1]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2979[i + 0]) );
  }
  i2974.sortingLayers = i2978
  var i2981 = i2975[2]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2981[i + 0]) );
  }
  i2974.cullingLayers = i2980
  i2974.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2975[3], i2974.timeSettings)
  i2974.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2975[4], i2974.physicsSettings)
  i2974.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2975[5], i2974.physics2DSettings)
  i2974.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2975[6], i2974.qualitySettings)
  i2974.enableRealtimeShadows = !!i2975[7]
  i2974.enableAutoInstancing = !!i2975[8]
  i2974.enableDynamicBatching = !!i2975[9]
  i2974.lightmapEncodingQuality = i2975[10]
  i2974.desiredColorSpace = i2975[11]
  var i2983 = i2975[12]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( i2983[i + 0] );
  }
  i2974.allTags = i2982
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2987 = data
  i2986.name = i2987[0]
  i2986.value = i2987[1]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2991 = data
  i2990.id = i2991[0]
  i2990.name = i2991[1]
  i2990.value = i2991[2]
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2995 = data
  i2994.id = i2995[0]
  i2994.name = i2995[1]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2997 = data
  i2996.fixedDeltaTime = i2997[0]
  i2996.maximumDeltaTime = i2997[1]
  i2996.timeScale = i2997[2]
  i2996.maximumParticleTimestep = i2997[3]
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2999 = data
  i2998.gravity = new pc.Vec3( i2999[0], i2999[1], i2999[2] )
  i2998.defaultSolverIterations = i2999[3]
  i2998.bounceThreshold = i2999[4]
  i2998.autoSyncTransforms = !!i2999[5]
  i2998.autoSimulation = !!i2999[6]
  var i3001 = i2999[7]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3001[i + 0]) );
  }
  i2998.collisionMatrix = i3000
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3005 = data
  i3004.enabled = !!i3005[0]
  i3004.layerId = i3005[1]
  i3004.otherLayerId = i3005[2]
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3007 = data
  request.r(i3007[0], i3007[1], 0, i3006, 'material')
  i3006.gravity = new pc.Vec2( i3007[2], i3007[3] )
  i3006.positionIterations = i3007[4]
  i3006.velocityIterations = i3007[5]
  i3006.velocityThreshold = i3007[6]
  i3006.maxLinearCorrection = i3007[7]
  i3006.maxAngularCorrection = i3007[8]
  i3006.maxTranslationSpeed = i3007[9]
  i3006.maxRotationSpeed = i3007[10]
  i3006.baumgarteScale = i3007[11]
  i3006.baumgarteTOIScale = i3007[12]
  i3006.timeToSleep = i3007[13]
  i3006.linearSleepTolerance = i3007[14]
  i3006.angularSleepTolerance = i3007[15]
  i3006.defaultContactOffset = i3007[16]
  i3006.autoSimulation = !!i3007[17]
  i3006.queriesHitTriggers = !!i3007[18]
  i3006.queriesStartInColliders = !!i3007[19]
  i3006.callbacksOnDisable = !!i3007[20]
  i3006.reuseCollisionCallbacks = !!i3007[21]
  i3006.autoSyncTransforms = !!i3007[22]
  var i3009 = i3007[23]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3009[i + 0]) );
  }
  i3006.collisionMatrix = i3008
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3013 = data
  i3012.enabled = !!i3013[0]
  i3012.layerId = i3013[1]
  i3012.otherLayerId = i3013[2]
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3015 = data
  var i3017 = i3015[0]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 1) {
    i3016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3017[i + 0]) );
  }
  i3014.qualityLevels = i3016
  var i3019 = i3015[1]
  var i3018 = []
  for(var i = 0; i < i3019.length; i += 1) {
    i3018.push( i3019[i + 0] );
  }
  i3014.names = i3018
  i3014.shadows = i3015[2]
  i3014.anisotropicFiltering = i3015[3]
  i3014.antiAliasing = i3015[4]
  i3014.lodBias = i3015[5]
  i3014.shadowCascades = i3015[6]
  i3014.shadowDistance = i3015[7]
  i3014.shadowmaskMode = i3015[8]
  i3014.shadowProjection = i3015[9]
  i3014.shadowResolution = i3015[10]
  i3014.softParticles = !!i3015[11]
  i3014.softVegetation = !!i3015[12]
  i3014.activeColorSpace = i3015[13]
  i3014.desiredColorSpace = i3015[14]
  i3014.masterTextureLimit = i3015[15]
  i3014.maxQueuedFrames = i3015[16]
  i3014.particleRaycastBudget = i3015[17]
  i3014.pixelLightCount = i3015[18]
  i3014.realtimeReflectionProbes = !!i3015[19]
  i3014.shadowCascade2Split = i3015[20]
  i3014.shadowCascade4Split = new pc.Vec3( i3015[21], i3015[22], i3015[23] )
  i3014.streamingMipmapsActive = !!i3015[24]
  i3014.vSyncCount = i3015[25]
  i3014.asyncUploadBufferSize = i3015[26]
  i3014.asyncUploadTimeSlice = i3015[27]
  i3014.billboardsFaceCameraPosition = !!i3015[28]
  i3014.shadowNearPlaneOffset = i3015[29]
  i3014.streamingMipmapsMemoryBudget = i3015[30]
  i3014.maximumLODLevel = i3015[31]
  i3014.streamingMipmapsAddAllCameras = !!i3015[32]
  i3014.streamingMipmapsMaxLevelReduction = i3015[33]
  i3014.streamingMipmapsRenderersPerFrame = i3015[34]
  i3014.resolutionScalingFixedDPIFactor = i3015[35]
  i3014.streamingMipmapsMaxFileIORequests = i3015[36]
  i3014.currentQualityLevel = i3015[37]
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i3023 = data
  i3022.name = i3023[0]
  var i3025 = i3023[1]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i3025[i + 0]) );
  }
  i3022.tos = i3024
  var i3027 = i3023[2]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( i3027[i + 0] );
  }
  i3022.constant = i3026
  i3022.isValid = !!i3023[3]
  i3022.isHuman = !!i3023[4]
  i3022.hasRootMotion = !!i3023[5]
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i3031 = data
  i3030.hash = i3031[0]
  i3030.path = i3031[1]
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3035 = data
  i3034.weight = i3035[0]
  i3034.vertices = i3035[1]
  i3034.normals = i3035[2]
  i3034.tangents = i3035[3]
  return i3034
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[33],"45":[3],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[3],"69":[26],"70":[71],"72":[71],"10":[9],"73":[9],"74":[26,9],"75":[9,13],"76":[9],"77":[13,9],"78":[26],"79":[13,9],"80":[9],"81":[82],"83":[9],"84":[9],"12":[10],"14":[13,9],"85":[9],"11":[10],"86":[9],"87":[9],"88":[9],"89":[9],"90":[9],"91":[9],"92":[9],"93":[9],"94":[9],"95":[13,9],"96":[9],"97":[9],"98":[9],"99":[9],"18":[13,9],"100":[9],"101":[7],"102":[7],"8":[7],"103":[7],"104":[3],"105":[3],"106":[82],"107":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","StickmanEC","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","EC01","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "CarConnect";

Deserializers.lunaInitializationTime = "12/31/2024 09:00:08";

Deserializers.lunaDaysRunning = "3.0";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "EC1_HieuNX_Luna";

Deserializers.lunaAppID = "13792";

Deserializers.projectId = "53c67b03226713b4b8cdd0815b44bf55";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1738";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4262";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CarConnect";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "37b5bb87-fa1c-4be5-bf97-dad69f0a094f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

