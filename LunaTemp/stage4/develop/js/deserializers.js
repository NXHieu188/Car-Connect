var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSpring' )
  var i485 = data
  i484.spring = i485[0]
  i484.damper = i485[1]
  i484.targetPosition = i485[2]
  return i484
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointMotor' )
  var i487 = data
  i486.m_TargetVelocity = i487[0]
  i486.m_Force = i487[1]
  i486.m_FreeSpin = i487[2]
  return i486
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointLimits' )
  var i489 = data
  i488.m_Min = i489[0]
  i488.m_Max = i489[1]
  i488.m_Bounciness = i489[2]
  i488.m_BounceMinVelocity = i489[3]
  i488.m_ContactDistance = i489[4]
  i488.minBounce = i489[5]
  i488.maxBounce = i489[6]
  return i488
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointDrive' )
  var i491 = data
  i490.m_PositionSpring = i491[0]
  i490.m_PositionDamper = i491[1]
  i490.m_MaximumForce = i491[2]
  return i490
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i493 = data
  i492.m_Spring = i493[0]
  i492.m_Damper = i493[1]
  return i492
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i495 = data
  i494.m_Limit = i495[0]
  i494.m_Bounciness = i495[1]
  i494.m_ContactDistance = i495[2]
  return i494
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i497 = data
  i496.m_ExtremumSlip = i497[0]
  i496.m_ExtremumValue = i497[1]
  i496.m_AsymptoteSlip = i497[2]
  i496.m_AsymptoteValue = i497[3]
  i496.m_Stiffness = i497[4]
  return i496
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i499 = data
  i498.m_LowerAngle = i499[0]
  i498.m_UpperAngle = i499[1]
  return i498
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i501 = data
  i500.m_MotorSpeed = i501[0]
  i500.m_MaximumMotorTorque = i501[1]
  return i500
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i503 = data
  i502.m_DampingRatio = i503[0]
  i502.m_Frequency = i503[1]
  i502.m_Angle = i503[2]
  return i502
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i505 = data
  i504.m_LowerTranslation = i505[0]
  i504.m_UpperTranslation = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i507 = data
  i506.name = i507[0]
  i506.width = i507[1]
  i506.height = i507[2]
  i506.mipmapCount = i507[3]
  i506.anisoLevel = i507[4]
  i506.filterMode = i507[5]
  i506.hdr = !!i507[6]
  i506.format = i507[7]
  i506.wrapMode = i507[8]
  i506.alphaIsTransparency = !!i507[9]
  i506.alphaSource = i507[10]
  i506.graphicsFormat = i507[11]
  i506.sRGBTexture = !!i507[12]
  i506.desiredColorSpace = i507[13]
  i506.wrapU = i507[14]
  i506.wrapV = i507[15]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i508 = root || new pc.UnityMaterial()
  var i509 = data
  i508.name = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'shader')
  i508.renderQueue = i509[3]
  i508.enableInstancing = !!i509[4]
  var i511 = i509[5]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i511[i + 0]) );
  }
  i508.floatParameters = i510
  var i513 = i509[6]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i513[i + 0]) );
  }
  i508.colorParameters = i512
  var i515 = i509[7]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i515[i + 0]) );
  }
  i508.vectorParameters = i514
  var i517 = i509[8]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i517[i + 0]) );
  }
  i508.textureParameters = i516
  var i519 = i509[9]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i519[i + 0]) );
  }
  i508.materialFlags = i518
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = i523[1]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = new pc.Color(i527[1], i527[2], i527[3], i527[4])
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i531 = data
  i530.name = i531[0]
  i530.value = new pc.Vec4( i531[1], i531[2], i531[3], i531[4] )
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i535 = data
  i534.name = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'value')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i539 = data
  i538.name = i539[0]
  i538.enabled = !!i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i541 = data
  i540.name = i541[0]
  i540.halfPrecision = !!i541[1]
  i540.useUInt32IndexFormat = !!i541[2]
  i540.vertexCount = i541[3]
  i540.aabb = i541[4]
  var i543 = i541[5]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( !!i543[i + 0] );
  }
  i540.streams = i542
  i540.vertices = i541[6]
  var i545 = i541[7]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i545[i + 0]) );
  }
  i540.subMeshes = i544
  var i547 = i541[8]
  var i546 = []
  for(var i = 0; i < i547.length; i += 16) {
    i546.push( new pc.Mat4().setData(i547[i + 0], i547[i + 1], i547[i + 2], i547[i + 3],  i547[i + 4], i547[i + 5], i547[i + 6], i547[i + 7],  i547[i + 8], i547[i + 9], i547[i + 10], i547[i + 11],  i547[i + 12], i547[i + 13], i547[i + 14], i547[i + 15]) );
  }
  i540.bindposes = i546
  var i549 = i541[9]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i549[i + 0]) );
  }
  i540.blendShapes = i548
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i555 = data
  i554.triangles = i555[0]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i561 = data
  i560.name = i561[0]
  var i563 = i561[1]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i563[i + 0]) );
  }
  i560.frames = i562
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i565 = data
  i564.name = i565[0]
  i564.atlasId = i565[1]
  i564.mipmapCount = i565[2]
  i564.hdr = !!i565[3]
  i564.size = i565[4]
  i564.anisoLevel = i565[5]
  i564.filterMode = i565[6]
  var i567 = i565[7]
  var i566 = []
  for(var i = 0; i < i567.length; i += 4) {
    i566.push( UnityEngine.Rect.MinMaxRect(i567[i + 0], i567[i + 1], i567[i + 2], i567[i + 3]) );
  }
  i564.rects = i566
  i564.wrapU = i565[8]
  i564.wrapV = i565[9]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i571 = data
  i570.name = i571[0]
  i570.index = i571[1]
  i570.startup = !!i571[2]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i573 = data
  i572.position = new pc.Vec3( i573[0], i573[1], i573[2] )
  i572.scale = new pc.Vec3( i573[3], i573[4], i573[5] )
  i572.rotation = new pc.Quat(i573[6], i573[7], i573[8], i573[9])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i575 = data
  i574.enabled = !!i575[0]
  i574.aspect = i575[1]
  i574.orthographic = !!i575[2]
  i574.orthographicSize = i575[3]
  i574.backgroundColor = new pc.Color(i575[4], i575[5], i575[6], i575[7])
  i574.nearClipPlane = i575[8]
  i574.farClipPlane = i575[9]
  i574.fieldOfView = i575[10]
  i574.depth = i575[11]
  i574.clearFlags = i575[12]
  i574.cullingMask = i575[13]
  i574.rect = i575[14]
  request.r(i575[15], i575[16], 0, i574, 'targetTexture')
  i574.usePhysicalProperties = !!i575[17]
  i574.focalLength = i575[18]
  i574.sensorSize = new pc.Vec2( i575[19], i575[20] )
  i574.lensShift = new pc.Vec2( i575[21], i575[22] )
  i574.gateFit = i575[23]
  i574.commandBufferCount = i575[24]
  i574.cameraType = i575[25]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i577 = data
  i576.name = i577[0]
  i576.tagId = i577[1]
  i576.enabled = !!i577[2]
  i576.isStatic = !!i577[3]
  i576.layer = i577[4]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i579 = data
  i578.enabled = !!i579[0]
  i578.type = i579[1]
  i578.color = new pc.Color(i579[2], i579[3], i579[4], i579[5])
  i578.cullingMask = i579[6]
  i578.intensity = i579[7]
  i578.range = i579[8]
  i578.spotAngle = i579[9]
  i578.shadows = i579[10]
  i578.shadowNormalBias = i579[11]
  i578.shadowBias = i579[12]
  i578.shadowStrength = i579[13]
  i578.shadowResolution = i579[14]
  i578.lightmapBakeType = i579[15]
  i578.renderMode = i579[16]
  request.r(i579[17], i579[18], 0, i578, 'cookie')
  i578.cookieSize = i579[19]
  return i578
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_FirstSelected')
  i580.m_sendNavigationEvents = !!i581[2]
  i580.m_DragThreshold = i581[3]
  return i580
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i583 = data
  i582.m_HorizontalAxis = i583[0]
  i582.m_VerticalAxis = i583[1]
  i582.m_SubmitButton = i583[2]
  i582.m_CancelButton = i583[3]
  i582.m_InputActionsPerSecond = i583[4]
  i582.m_RepeatDelay = i583[5]
  i582.m_ForceModuleActive = !!i583[6]
  i582.m_SendPointerHoverToParent = !!i583[7]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i585 = data
  i584.pivot = new pc.Vec2( i585[0], i585[1] )
  i584.anchorMin = new pc.Vec2( i585[2], i585[3] )
  i584.anchorMax = new pc.Vec2( i585[4], i585[5] )
  i584.sizeDelta = new pc.Vec2( i585[6], i585[7] )
  i584.anchoredPosition3D = new pc.Vec3( i585[8], i585[9], i585[10] )
  i584.rotation = new pc.Quat(i585[11], i585[12], i585[13], i585[14])
  i584.scale = new pc.Vec3( i585[15], i585[16], i585[17] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i587 = data
  i586.enabled = !!i587[0]
  i586.planeDistance = i587[1]
  i586.referencePixelsPerUnit = i587[2]
  i586.isFallbackOverlay = !!i587[3]
  i586.renderMode = i587[4]
  i586.renderOrder = i587[5]
  i586.sortingLayerName = i587[6]
  i586.sortingOrder = i587[7]
  i586.scaleFactor = i587[8]
  request.r(i587[9], i587[10], 0, i586, 'worldCamera')
  i586.overrideSorting = !!i587[11]
  i586.pixelPerfect = !!i587[12]
  i586.targetDisplay = i587[13]
  i586.overridePixelPerfect = !!i587[14]
  return i586
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i589 = data
  i588.m_UiScaleMode = i589[0]
  i588.m_ReferencePixelsPerUnit = i589[1]
  i588.m_ScaleFactor = i589[2]
  i588.m_ReferenceResolution = new pc.Vec2( i589[3], i589[4] )
  i588.m_ScreenMatchMode = i589[5]
  i588.m_MatchWidthOrHeight = i589[6]
  i588.m_PhysicalUnit = i589[7]
  i588.m_FallbackScreenDPI = i589[8]
  i588.m_DefaultSpriteDPI = i589[9]
  i588.m_DynamicPixelsPerUnit = i589[10]
  i588.m_PresetInfoIsWorld = !!i589[11]
  return i588
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i591 = data
  i590.m_IgnoreReversedGraphics = !!i591[0]
  i590.m_BlockingObjects = i591[1]
  i590.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i591[2] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i593 = data
  i592.cullTransparentMesh = !!i593[0]
  return i592
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Image' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_Sprite')
  i594.m_Type = i595[2]
  i594.m_PreserveAspect = !!i595[3]
  i594.m_FillCenter = !!i595[4]
  i594.m_FillMethod = i595[5]
  i594.m_FillAmount = i595[6]
  i594.m_FillClockwise = !!i595[7]
  i594.m_FillOrigin = i595[8]
  i594.m_UseSpriteMesh = !!i595[9]
  i594.m_PixelsPerUnitMultiplier = i595[10]
  request.r(i595[11], i595[12], 0, i594, 'm_Material')
  i594.m_Maskable = !!i595[13]
  i594.m_Color = new pc.Color(i595[14], i595[15], i595[16], i595[17])
  i594.m_RaycastTarget = !!i595[18]
  i594.m_RaycastPadding = new pc.Vec4( i595[19], i595[20], i595[21], i595[22] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i597 = data
  i596.playAutomatically = !!i597[0]
  request.r(i597[1], i597[2], 0, i596, 'clip')
  var i599 = i597[3]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.clips = i598
  i596.wrapMode = i597[4]
  i596.enabled = !!i597[5]
  return i596
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Text' )
  var i603 = data
  i602.m_FontData = request.d('UnityEngine.UI.FontData', i603[0], i602.m_FontData)
  i602.m_Text = i603[1]
  request.r(i603[2], i603[3], 0, i602, 'm_Material')
  i602.m_Maskable = !!i603[4]
  i602.m_Color = new pc.Color(i603[5], i603[6], i603[7], i603[8])
  i602.m_RaycastTarget = !!i603[9]
  i602.m_RaycastPadding = new pc.Vec4( i603[10], i603[11], i603[12], i603[13] )
  return i602
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.FontData' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_Font')
  i604.m_FontSize = i605[2]
  i604.m_FontStyle = i605[3]
  i604.m_BestFit = !!i605[4]
  i604.m_MinSize = i605[5]
  i604.m_MaxSize = i605[6]
  i604.m_Alignment = i605[7]
  i604.m_AlignByGeometry = !!i605[8]
  i604.m_RichText = !!i605[9]
  i604.m_HorizontalOverflow = i605[10]
  i604.m_VerticalOverflow = i605[11]
  i604.m_LineSpacing = i605[12]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i607 = data
  i606.enabled = !!i607[0]
  request.r(i607[1], i607[2], 0, i606, 'sharedMaterial')
  var i609 = i607[3]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i606.sharedMaterials = i608
  i606.receiveShadows = !!i607[4]
  i606.shadowCastingMode = i607[5]
  i606.sortingLayerID = i607[6]
  i606.sortingOrder = i607[7]
  i606.lightmapIndex = i607[8]
  i606.lightmapSceneIndex = i607[9]
  i606.lightmapScaleOffset = new pc.Vec4( i607[10], i607[11], i607[12], i607[13] )
  i606.lightProbeUsage = i607[14]
  i606.reflectionProbeUsage = i607[15]
  i606.color = new pc.Color(i607[16], i607[17], i607[18], i607[19])
  request.r(i607[20], i607[21], 0, i606, 'sprite')
  i606.flipX = !!i607[22]
  i606.flipY = !!i607[23]
  i606.drawMode = i607[24]
  i606.size = new pc.Vec2( i607[25], i607[26] )
  i606.tileMode = i607[27]
  i606.adaptiveModeThreshold = i607[28]
  i606.maskInteraction = i607[29]
  i606.spriteSortPoint = i607[30]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'animatorController')
  request.r(i613[2], i613[3], 0, i612, 'avatar')
  i612.updateMode = i613[4]
  i612.hasTransformHierarchy = !!i613[5]
  i612.applyRootMotion = !!i613[6]
  var i615 = i613[7]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.humanBones = i614
  i612.enabled = !!i613[8]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'sharedMesh')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'additionalVertexStreams')
  i620.enabled = !!i621[2]
  request.r(i621[3], i621[4], 0, i620, 'sharedMaterial')
  var i623 = i621[5]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.sharedMaterials = i622
  i620.receiveShadows = !!i621[6]
  i620.shadowCastingMode = i621[7]
  i620.sortingLayerID = i621[8]
  i620.sortingOrder = i621[9]
  i620.lightmapIndex = i621[10]
  i620.lightmapSceneIndex = i621[11]
  i620.lightmapScaleOffset = new pc.Vec4( i621[12], i621[13], i621[14], i621[15] )
  i620.lightProbeUsage = i621[16]
  i620.reflectionProbeUsage = i621[17]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i625 = data
  i624.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i625[0], i624.main)
  i624.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i625[1], i624.colorBySpeed)
  i624.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i625[2], i624.colorOverLifetime)
  i624.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i625[3], i624.emission)
  i624.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i625[4], i624.rotationBySpeed)
  i624.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i625[5], i624.rotationOverLifetime)
  i624.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i625[6], i624.shape)
  i624.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i625[7], i624.sizeBySpeed)
  i624.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i625[8], i624.sizeOverLifetime)
  i624.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i625[9], i624.textureSheetAnimation)
  i624.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i625[10], i624.velocityOverLifetime)
  i624.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i625[11], i624.noise)
  i624.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i625[12], i624.inheritVelocity)
  i624.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i625[13], i624.forceOverLifetime)
  i624.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i625[14], i624.limitVelocityOverLifetime)
  i624.useAutoRandomSeed = !!i625[15]
  i624.randomSeed = i625[16]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemMain()
  var i627 = data
  i626.duration = i627[0]
  i626.loop = !!i627[1]
  i626.prewarm = !!i627[2]
  i626.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[3], i626.startDelay)
  i626.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[4], i626.startLifetime)
  i626.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[5], i626.startSpeed)
  i626.startSize3D = !!i627[6]
  i626.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[7], i626.startSizeX)
  i626.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[8], i626.startSizeY)
  i626.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[9], i626.startSizeZ)
  i626.startRotation3D = !!i627[10]
  i626.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[11], i626.startRotationX)
  i626.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[12], i626.startRotationY)
  i626.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[13], i626.startRotationZ)
  i626.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i627[14], i626.startColor)
  i626.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[15], i626.gravityModifier)
  i626.simulationSpace = i627[16]
  request.r(i627[17], i627[18], 0, i626, 'customSimulationSpace')
  i626.simulationSpeed = i627[19]
  i626.useUnscaledTime = !!i627[20]
  i626.scalingMode = i627[21]
  i626.playOnAwake = !!i627[22]
  i626.maxParticles = i627[23]
  i626.emitterVelocityMode = i627[24]
  i626.stopAction = i627[25]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i628 = root || new pc.MinMaxCurve()
  var i629 = data
  i628.mode = i629[0]
  i628.curveMin = new pc.AnimationCurve( { keys_flow: i629[1] } )
  i628.curveMax = new pc.AnimationCurve( { keys_flow: i629[2] } )
  i628.curveMultiplier = i629[3]
  i628.constantMin = i629[4]
  i628.constantMax = i629[5]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i630 = root || new pc.MinMaxGradient()
  var i631 = data
  i630.mode = i631[0]
  i630.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i631[1], i630.gradientMin)
  i630.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i631[2], i630.gradientMax)
  i630.colorMin = new pc.Color(i631[3], i631[4], i631[5], i631[6])
  i630.colorMax = new pc.Color(i631[7], i631[8], i631[9], i631[10])
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i633 = data
  i632.mode = i633[0]
  var i635 = i633[1]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i635[i + 0]) );
  }
  i632.colorKeys = i634
  var i637 = i633[2]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i637[i + 0]) );
  }
  i632.alphaKeys = i636
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemColorBySpeed()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i639[1], i638.color)
  i638.range = new pc.Vec2( i639[2], i639[3] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i643 = data
  i642.color = new pc.Color(i643[0], i643[1], i643[2], i643[3])
  i642.time = i643[4]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i647 = data
  i646.alpha = i647[0]
  i646.time = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemColorOverLifetime()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i649[1], i648.color)
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemEmitter()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.rateOverTime)
  i650.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.rateOverDistance)
  var i653 = i651[3]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i653[i + 0]) );
  }
  i650.bursts = i652
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemBurst()
  var i657 = data
  i656.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[0], i656.count)
  i656.cycleCount = i657[1]
  i656.minCount = i657[2]
  i656.maxCount = i657[3]
  i656.repeatInterval = i657[4]
  i656.time = i657[5]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemRotationBySpeed()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.separateAxes = !!i659[4]
  i658.range = new pc.Vec2( i659[5], i659[6] )
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemRotationOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.x)
  i660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.y)
  i660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.z)
  i660.separateAxes = !!i661[4]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemShape()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.shapeType = i663[1]
  i662.randomDirectionAmount = i663[2]
  i662.sphericalDirectionAmount = i663[3]
  i662.randomPositionAmount = i663[4]
  i662.alignToDirection = !!i663[5]
  i662.radius = i663[6]
  i662.radiusMode = i663[7]
  i662.radiusSpread = i663[8]
  i662.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[9], i662.radiusSpeed)
  i662.radiusThickness = i663[10]
  i662.angle = i663[11]
  i662.length = i663[12]
  i662.boxThickness = new pc.Vec3( i663[13], i663[14], i663[15] )
  i662.meshShapeType = i663[16]
  request.r(i663[17], i663[18], 0, i662, 'mesh')
  request.r(i663[19], i663[20], 0, i662, 'meshRenderer')
  request.r(i663[21], i663[22], 0, i662, 'skinnedMeshRenderer')
  i662.useMeshMaterialIndex = !!i663[23]
  i662.meshMaterialIndex = i663[24]
  i662.useMeshColors = !!i663[25]
  i662.normalOffset = i663[26]
  i662.arc = i663[27]
  i662.arcMode = i663[28]
  i662.arcSpread = i663[29]
  i662.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[30], i662.arcSpeed)
  i662.donutRadius = i663[31]
  i662.position = new pc.Vec3( i663[32], i663[33], i663[34] )
  i662.rotation = new pc.Vec3( i663[35], i663[36], i663[37] )
  i662.scale = new pc.Vec3( i663[38], i663[39], i663[40] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemSizeBySpeed()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  i664.range = new pc.Vec2( i665[5], i665[6] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemSizeOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.mode = i669[1]
  i668.animation = i669[2]
  i668.numTilesX = i669[3]
  i668.numTilesY = i669[4]
  i668.useRandomRow = !!i669[5]
  i668.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[6], i668.frameOverTime)
  i668.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[7], i668.startFrame)
  i668.cycleCount = i669[8]
  i668.rowIndex = i669[9]
  i668.flipU = i669[10]
  i668.flipV = i669[11]
  i668.spriteCount = i669[12]
  var i671 = i669[13]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.sprites = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[4], i674.radial)
  i674.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[5], i674.speedModifier)
  i674.space = i675[6]
  i674.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[7], i674.orbitalX)
  i674.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[8], i674.orbitalY)
  i674.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[9], i674.orbitalZ)
  i674.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[10], i674.orbitalOffsetX)
  i674.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[11], i674.orbitalOffsetY)
  i674.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[12], i674.orbitalOffsetZ)
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemNoise()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.separateAxes = !!i677[1]
  i676.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.strengthX)
  i676.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.strengthY)
  i676.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[4], i676.strengthZ)
  i676.frequency = i677[5]
  i676.damping = !!i677[6]
  i676.octaveCount = i677[7]
  i676.octaveMultiplier = i677[8]
  i676.octaveScale = i677[9]
  i676.quality = i677[10]
  i676.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[11], i676.scrollSpeed)
  i676.scrollSpeedMultiplier = i677[12]
  i676.remapEnabled = !!i677[13]
  i676.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[14], i676.remapX)
  i676.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[15], i676.remapY)
  i676.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[16], i676.remapZ)
  i676.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[17], i676.positionAmount)
  i676.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[18], i676.rotationAmount)
  i676.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[19], i676.sizeAmount)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemInheritVelocity()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.mode = i679[1]
  i678.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.curve)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemForceOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.space = i681[4]
  i680.randomized = !!i681[5]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.limit)
  i682.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.limitX)
  i682.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.limitY)
  i682.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[4], i682.limitZ)
  i682.dampen = i683[5]
  i682.separateAxes = !!i683[6]
  i682.space = i683[7]
  i682.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[8], i682.drag)
  i682.multiplyDragByParticleSize = !!i683[9]
  i682.multiplyDragByParticleVelocity = !!i683[10]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i685 = data
  i684.enabled = !!i685[0]
  request.r(i685[1], i685[2], 0, i684, 'sharedMaterial')
  var i687 = i685[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.sharedMaterials = i686
  i684.receiveShadows = !!i685[4]
  i684.shadowCastingMode = i685[5]
  i684.sortingLayerID = i685[6]
  i684.sortingOrder = i685[7]
  i684.lightmapIndex = i685[8]
  i684.lightmapSceneIndex = i685[9]
  i684.lightmapScaleOffset = new pc.Vec4( i685[10], i685[11], i685[12], i685[13] )
  i684.lightProbeUsage = i685[14]
  i684.reflectionProbeUsage = i685[15]
  request.r(i685[16], i685[17], 0, i684, 'mesh')
  i684.meshCount = i685[18]
  i684.activeVertexStreamsCount = i685[19]
  i684.alignment = i685[20]
  i684.renderMode = i685[21]
  i684.sortMode = i685[22]
  i684.lengthScale = i685[23]
  i684.velocityScale = i685[24]
  i684.cameraVelocityScale = i685[25]
  i684.normalDirection = i685[26]
  i684.sortingFudge = i685[27]
  i684.minParticleSize = i685[28]
  i684.maxParticleSize = i685[29]
  i684.pivot = new pc.Vec3( i685[30], i685[31], i685[32] )
  request.r(i685[33], i685[34], 0, i684, 'trailMaterial')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i689 = data
  i688.textureMode = i689[0]
  i688.alignment = i689[1]
  i688.widthCurve = new pc.AnimationCurve( { keys_flow: i689[2] } )
  i688.colorGradient = i689[3] ? new pc.ColorGradient(i689[3][0], i689[3][1], i689[3][2]) : null
  var i691 = i689[4]
  var i690 = []
  for(var i = 0; i < i691.length; i += 3) {
    i690.push( new pc.Vec3( i691[i + 0], i691[i + 1], i691[i + 2] ) );
  }
  i688.positions = i690
  i688.positionCount = i689[5]
  i688.widthMultiplier = i689[6]
  i688.startWidth = i689[7]
  i688.endWidth = i689[8]
  i688.numCornerVertices = i689[9]
  i688.numCapVertices = i689[10]
  i688.useWorldSpace = !!i689[11]
  i688.loop = !!i689[12]
  i688.startColor = new pc.Color(i689[13], i689[14], i689[15], i689[16])
  i688.endColor = new pc.Color(i689[17], i689[18], i689[19], i689[20])
  i688.generateLightingData = !!i689[21]
  i688.enabled = !!i689[22]
  request.r(i689[23], i689[24], 0, i688, 'sharedMaterial')
  var i693 = i689[25]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i688.sharedMaterials = i692
  i688.receiveShadows = !!i689[26]
  i688.shadowCastingMode = i689[27]
  i688.sortingLayerID = i689[28]
  i688.sortingOrder = i689[29]
  i688.lightmapIndex = i689[30]
  i688.lightmapSceneIndex = i689[31]
  i688.lightmapScaleOffset = new pc.Vec4( i689[32], i689[33], i689[34], i689[35] )
  i688.lightProbeUsage = i689[36]
  i688.reflectionProbeUsage = i689[37]
  return i688
}

Deserializers["StickmanEC"] = function (request, data, root) {
  var i696 = root || request.c( 'StickmanEC' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'arrayLinePoint')
  request.r(i697[2], i697[3], 0, i696, 'lineRenderer')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i699 = data
  i698.enabled = !!i699[0]
  request.r(i699[1], i699[2], 0, i698, 'sharedMaterial')
  var i701 = i699[3]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[4]
  i698.shadowCastingMode = i699[5]
  i698.sortingLayerID = i699[6]
  i698.sortingOrder = i699[7]
  i698.lightmapIndex = i699[8]
  i698.lightmapSceneIndex = i699[9]
  i698.lightmapScaleOffset = new pc.Vec4( i699[10], i699[11], i699[12], i699[13] )
  i698.lightProbeUsage = i699[14]
  i698.reflectionProbeUsage = i699[15]
  request.r(i699[16], i699[17], 0, i698, 'sharedMesh')
  var i703 = i699[18]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i698.bones = i702
  i698.updateWhenOffscreen = !!i699[19]
  i698.localBounds = i699[20]
  request.r(i699[21], i699[22], 0, i698, 'rootBone')
  var i705 = i699[23]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i705[i + 0]) );
  }
  i698.blendShapesWeights = i704
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i709 = data
  i708.weight = i709[0]
  return i708
}

Deserializers["EC01"] = function (request, data, root) {
  var i710 = root || request.c( 'EC01' )
  var i711 = data
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i713 = data
  i712.ambientIntensity = i713[0]
  i712.reflectionIntensity = i713[1]
  i712.ambientMode = i713[2]
  i712.ambientLight = new pc.Color(i713[3], i713[4], i713[5], i713[6])
  i712.ambientSkyColor = new pc.Color(i713[7], i713[8], i713[9], i713[10])
  i712.ambientGroundColor = new pc.Color(i713[11], i713[12], i713[13], i713[14])
  i712.ambientEquatorColor = new pc.Color(i713[15], i713[16], i713[17], i713[18])
  i712.fogColor = new pc.Color(i713[19], i713[20], i713[21], i713[22])
  i712.fogEndDistance = i713[23]
  i712.fogStartDistance = i713[24]
  i712.fogDensity = i713[25]
  i712.fog = !!i713[26]
  request.r(i713[27], i713[28], 0, i712, 'skybox')
  i712.fogMode = i713[29]
  var i715 = i713[30]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i715[i + 0]) );
  }
  i712.lightmaps = i714
  i712.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i713[31], i712.lightProbes)
  i712.lightmapsMode = i713[32]
  i712.mixedBakeMode = i713[33]
  i712.environmentLightingMode = i713[34]
  i712.ambientProbe = new pc.SphericalHarmonicsL2(i713[35])
  i712.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i713[36])
  i712.useReferenceAmbientProbe = !!i713[37]
  request.r(i713[38], i713[39], 0, i712, 'customReflection')
  request.r(i713[40], i713[41], 0, i712, 'defaultReflection')
  i712.defaultReflectionMode = i713[42]
  i712.defaultReflectionResolution = i713[43]
  i712.sunLightObjectId = i713[44]
  i712.pixelLightCount = i713[45]
  i712.defaultReflectionHDR = !!i713[46]
  i712.hasLightDataAsset = !!i713[47]
  i712.hasManualGenerate = !!i713[48]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'lightmapColor')
  request.r(i719[2], i719[3], 0, i718, 'lightmapDirection')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i720 = root || new UnityEngine.LightProbes()
  var i721 = data
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i729[i + 0]));
  }
  i726.ShaderCompilationErrors = i728
  i726.name = i727[1]
  i726.guid = i727[2]
  var i731 = i727[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.shaderDefinedKeywords = i730
  var i733 = i727[4]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i733[i + 0]) );
  }
  i726.passes = i732
  var i735 = i727[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i735[i + 0]) );
  }
  i726.usePasses = i734
  var i737 = i727[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i737[i + 0]) );
  }
  i726.defaultParameterValues = i736
  request.r(i727[7], i727[8], 0, i726, 'unityFallbackShader')
  i726.readDepth = !!i727[9]
  i726.isCreatedByShaderGraph = !!i727[10]
  i726.compiled = !!i727[11]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i741 = data
  i740.shaderName = i741[0]
  i740.errorMessage = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i746 = root || new pc.UnityShaderPass()
  var i747 = data
  i746.id = i747[0]
  i746.subShaderIndex = i747[1]
  i746.name = i747[2]
  i746.passType = i747[3]
  i746.grabPassTextureName = i747[4]
  i746.usePass = !!i747[5]
  i746.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[6], i746.zTest)
  i746.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[7], i746.zWrite)
  i746.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[8], i746.culling)
  i746.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[9], i746.blending)
  i746.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[10], i746.alphaBlending)
  i746.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[11], i746.colorWriteMask)
  i746.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[12], i746.offsetUnits)
  i746.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[13], i746.offsetFactor)
  i746.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[14], i746.stencilRef)
  i746.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[15], i746.stencilReadMask)
  i746.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[16], i746.stencilWriteMask)
  i746.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[17], i746.stencilOp)
  i746.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[18], i746.stencilOpFront)
  i746.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[19], i746.stencilOpBack)
  var i749 = i747[20]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i749[i + 0]) );
  }
  i746.tags = i748
  var i751 = i747[21]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i746.passDefinedKeywords = i750
  var i753 = i747[22]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i753[i + 0]) );
  }
  i746.passDefinedKeywordGroups = i752
  var i755 = i747[23]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i755[i + 0]) );
  }
  i746.variants = i754
  var i757 = i747[24]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i757[i + 0]) );
  }
  i746.excludedVariants = i756
  i746.hasDepthReader = !!i747[25]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i759 = data
  i758.val = i759[0]
  i758.name = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i761 = data
  i760.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[0], i760.src)
  i760.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[1], i760.dst)
  i760.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[2], i760.op)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i763 = data
  i762.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[0], i762.pass)
  i762.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[1], i762.fail)
  i762.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[2], i762.zFail)
  i762.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[3], i762.comp)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i770.keywords = i772
  i770.hasDiscard = !!i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i777 = data
  i776.passId = i777[0]
  i776.subShaderIndex = i777[1]
  var i779 = i777[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.keywords = i778
  i776.vertexProgram = i777[3]
  i776.fragmentProgram = i777[4]
  i776.exportedForWebGl2 = !!i777[5]
  i776.readDepth = !!i777[6]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'shader')
  i782.pass = i783[2]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i787 = data
  i786.name = i787[0]
  i786.type = i787[1]
  i786.value = new pc.Vec4( i787[2], i787[3], i787[4], i787[5] )
  i786.textureValue = i787[6]
  i786.shaderPropertyFlag = i787[7]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i789 = data
  i788.name = i789[0]
  request.r(i789[1], i789[2], 0, i788, 'texture')
  i788.aabb = i789[3]
  i788.vertices = i789[4]
  i788.triangles = i789[5]
  i788.textureRect = UnityEngine.Rect.MinMaxRect(i789[6], i789[7], i789[8], i789[9])
  i788.packedRect = UnityEngine.Rect.MinMaxRect(i789[10], i789[11], i789[12], i789[13])
  i788.border = new pc.Vec4( i789[14], i789[15], i789[16], i789[17] )
  i788.transparency = i789[18]
  i788.bounds = i789[19]
  i788.pixelsPerUnit = i789[20]
  i788.textureWidth = i789[21]
  i788.textureHeight = i789[22]
  i788.nativeSize = new pc.Vec2( i789[23], i789[24] )
  i788.pivot = new pc.Vec2( i789[25], i789[26] )
  i788.textureRectOffset = new pc.Vec2( i789[27], i789[28] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i791 = data
  i790.name = i791[0]
  i790.wrapMode = i791[1]
  i790.isLooping = !!i791[2]
  i790.length = i791[3]
  var i793 = i791[4]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i793[i + 0]) );
  }
  i790.curves = i792
  var i795 = i791[5]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i795[i + 0]) );
  }
  i790.events = i794
  i790.halfPrecision = !!i791[6]
  i790._frameRate = i791[7]
  i790.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i791[8], i790.localBounds)
  i790.hasMuscleCurves = !!i791[9]
  var i797 = i791[10]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i790.clipMuscleConstant = i796
  i790.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i791[11], i790.clipBindingConstant)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i801 = data
  i800.path = i801[0]
  i800.hash = i801[1]
  i800.componentType = i801[2]
  i800.property = i801[3]
  i800.keys = i801[4]
  var i803 = i801[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i803[i + 0]) );
  }
  i800.objectReferenceKeys = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i807 = data
  i806.time = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'value')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i811 = data
  i810.functionName = i811[0]
  i810.floatParameter = i811[1]
  i810.intParameter = i811[2]
  i810.stringParameter = i811[3]
  request.r(i811[4], i811[5], 0, i810, 'objectReferenceParameter')
  i810.time = i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i813 = data
  i812.center = new pc.Vec3( i813[0], i813[1], i813[2] )
  i812.extends = new pc.Vec3( i813[3], i813[4], i813[5] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.genericBindings = i818
  var i821 = i817[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i816.pptrCurveMapping = i820
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i823 = data
  i822.name = i823[0]
  i822.blendParameter = i823[1]
  i822.blendParameterY = i823[2]
  i822.blendType = i823[3]
  var i825 = i823[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i825[i + 0]) );
  }
  i822.children = i824
  i822.useAutomaticThresholds = !!i823[5]
  i822.minThreshold = i823[6]
  i822.maxThreshold = i823[7]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'motion')
  i828.threshold = i829[2]
  i828.position = new pc.Vec2( i829[3], i829[4] )
  i828.timeScale = i829[5]
  i828.cycleOffset = i829[6]
  i828.directBlendParameter = i829[7]
  i828.mirror = !!i829[8]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i831 = data
  i830.name = i831[0]
  i830.ascent = i831[1]
  i830.originalLineHeight = i831[2]
  i830.fontSize = i831[3]
  var i833 = i831[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i833[i + 0]) );
  }
  i830.characterInfo = i832
  request.r(i831[5], i831[6], 0, i830, 'texture')
  i830.originalFontSize = i831[7]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i837 = data
  i836.index = i837[0]
  i836.advance = i837[1]
  i836.bearing = i837[2]
  i836.glyphWidth = i837[3]
  i836.glyphHeight = i837[4]
  i836.minX = i837[5]
  i836.maxX = i837[6]
  i836.minY = i837[7]
  i836.maxY = i837[8]
  i836.uvBottomLeftX = i837[9]
  i836.uvBottomLeftY = i837[10]
  i836.uvBottomRightX = i837[11]
  i836.uvBottomRightY = i837[12]
  i836.uvTopLeftX = i837[13]
  i836.uvTopLeftY = i837[14]
  i836.uvTopRightX = i837[15]
  i836.uvTopRightY = i837[16]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i839 = data
  i838.name = i839[0]
  var i841 = i839[1]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i841[i + 0]) );
  }
  i838.layers = i840
  var i843 = i839[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i843[i + 0]) );
  }
  i838.parameters = i842
  i838.animationClips = i839[3]
  i838.avatarUnsupported = i839[4]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i847 = data
  i846.name = i847[0]
  i846.defaultWeight = i847[1]
  i846.blendingMode = i847[2]
  i846.avatarMask = i847[3]
  i846.syncedLayerIndex = i847[4]
  i846.syncedLayerAffectsTiming = !!i847[5]
  i846.syncedLayers = i847[6]
  i846.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i847[7], i846.stateMachine)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i849 = data
  i848.id = i849[0]
  i848.name = i849[1]
  i848.path = i849[2]
  var i851 = i849[3]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i851[i + 0]) );
  }
  i848.states = i850
  var i853 = i849[4]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i853[i + 0]) );
  }
  i848.machines = i852
  var i855 = i849[5]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i855[i + 0]) );
  }
  i848.entryStateTransitions = i854
  var i857 = i849[6]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i857[i + 0]) );
  }
  i848.exitStateTransitions = i856
  var i859 = i849[7]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i859[i + 0]) );
  }
  i848.anyStateTransitions = i858
  i848.defaultStateId = i849[8]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i863 = data
  i862.id = i863[0]
  i862.name = i863[1]
  i862.cycleOffset = i863[2]
  i862.cycleOffsetParameter = i863[3]
  i862.cycleOffsetParameterActive = !!i863[4]
  i862.mirror = !!i863[5]
  i862.mirrorParameter = i863[6]
  i862.mirrorParameterActive = !!i863[7]
  i862.motionId = i863[8]
  i862.nameHash = i863[9]
  i862.fullPathHash = i863[10]
  i862.speed = i863[11]
  i862.speedParameter = i863[12]
  i862.speedParameterActive = !!i863[13]
  i862.tag = i863[14]
  i862.tagHash = i863[15]
  i862.writeDefaultValues = !!i863[16]
  var i865 = i863[17]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.behaviours = i864
  var i867 = i863[18]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i867[i + 0]) );
  }
  i862.transitions = i866
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i873 = data
  i872.fullPath = i873[0]
  i872.canTransitionToSelf = !!i873[1]
  i872.duration = i873[2]
  i872.exitTime = i873[3]
  i872.hasExitTime = !!i873[4]
  i872.hasFixedDuration = !!i873[5]
  i872.interruptionSource = i873[6]
  i872.offset = i873[7]
  i872.orderedInterruption = !!i873[8]
  i872.destinationStateId = i873[9]
  i872.isExit = !!i873[10]
  i872.mute = !!i873[11]
  i872.solo = !!i873[12]
  var i875 = i873[13]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i875[i + 0]) );
  }
  i872.conditions = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i879 = data
  i878.mode = i879[0]
  i878.parameter = i879[1]
  i878.threshold = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i885 = data
  i884.destinationStateId = i885[0]
  i884.isExit = !!i885[1]
  i884.mute = !!i885[2]
  i884.solo = !!i885[3]
  var i887 = i885[4]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i887[i + 0]) );
  }
  i884.conditions = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i891 = data
  i890.defaultBool = !!i891[0]
  i890.defaultFloat = i891[1]
  i890.defaultInt = i891[2]
  i890.name = i891[3]
  i890.nameHash = i891[4]
  i890.type = i891[5]
  return i890
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i892 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i893 = data
  i892.useSafeMode = !!i893[0]
  i892.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i893[1], i892.safeModeOptions)
  i892.timeScale = i893[2]
  i892.unscaledTimeScale = i893[3]
  i892.useSmoothDeltaTime = !!i893[4]
  i892.maxSmoothUnscaledTime = i893[5]
  i892.rewindCallbackMode = i893[6]
  i892.showUnityEditorReport = !!i893[7]
  i892.logBehaviour = i893[8]
  i892.drawGizmos = !!i893[9]
  i892.defaultRecyclable = !!i893[10]
  i892.defaultAutoPlay = i893[11]
  i892.defaultUpdateType = i893[12]
  i892.defaultTimeScaleIndependent = !!i893[13]
  i892.defaultEaseType = i893[14]
  i892.defaultEaseOvershootOrAmplitude = i893[15]
  i892.defaultEasePeriod = i893[16]
  i892.defaultAutoKill = !!i893[17]
  i892.defaultLoopType = i893[18]
  i892.debugMode = !!i893[19]
  i892.debugStoreTargetId = !!i893[20]
  i892.showPreviewPanel = !!i893[21]
  i892.storeSettingsLocation = i893[22]
  i892.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i893[23], i892.modules)
  i892.createASMDEF = !!i893[24]
  i892.showPlayingTweens = !!i893[25]
  i892.showPausedTweens = !!i893[26]
  return i892
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i895 = data
  i894.logBehaviour = i895[0]
  i894.nestedTweenFailureBehaviour = i895[1]
  return i894
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i896 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i897 = data
  i896.showPanel = !!i897[0]
  i896.audioEnabled = !!i897[1]
  i896.physicsEnabled = !!i897[2]
  i896.physics2DEnabled = !!i897[3]
  i896.spriteEnabled = !!i897[4]
  i896.uiEnabled = !!i897[5]
  i896.textMeshProEnabled = !!i897[6]
  i896.tk2DEnabled = !!i897[7]
  i896.deAudioEnabled = !!i897[8]
  i896.deUnityExtendedEnabled = !!i897[9]
  i896.epoOutlineEnabled = !!i897[10]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i901[i + 0]) );
  }
  i898.files = i900
  i898.componentToPrefabIds = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i905 = data
  i904.path = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'unityObject')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i909[i + 0]) );
  }
  i906.scriptsExecutionOrder = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i911[i + 0]) );
  }
  i906.sortingLayers = i910
  var i913 = i907[2]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i913[i + 0]) );
  }
  i906.cullingLayers = i912
  i906.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i907[3], i906.timeSettings)
  i906.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i907[4], i906.physicsSettings)
  i906.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i907[5], i906.physics2DSettings)
  i906.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i907[6], i906.qualitySettings)
  i906.enableRealtimeShadows = !!i907[7]
  i906.enableAutoInstancing = !!i907[8]
  i906.enableDynamicBatching = !!i907[9]
  i906.lightmapEncodingQuality = i907[10]
  i906.desiredColorSpace = i907[11]
  var i915 = i907[12]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i906.allTags = i914
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i919 = data
  i918.name = i919[0]
  i918.value = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  i922.value = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i927 = data
  i926.id = i927[0]
  i926.name = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i929 = data
  i928.fixedDeltaTime = i929[0]
  i928.maximumDeltaTime = i929[1]
  i928.timeScale = i929[2]
  i928.maximumParticleTimestep = i929[3]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i931 = data
  i930.gravity = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.defaultSolverIterations = i931[3]
  i930.bounceThreshold = i931[4]
  i930.autoSyncTransforms = !!i931[5]
  i930.autoSimulation = !!i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i933[i + 0]) );
  }
  i930.collisionMatrix = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.layerId = i937[1]
  i936.otherLayerId = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'material')
  i938.gravity = new pc.Vec2( i939[2], i939[3] )
  i938.positionIterations = i939[4]
  i938.velocityIterations = i939[5]
  i938.velocityThreshold = i939[6]
  i938.maxLinearCorrection = i939[7]
  i938.maxAngularCorrection = i939[8]
  i938.maxTranslationSpeed = i939[9]
  i938.maxRotationSpeed = i939[10]
  i938.baumgarteScale = i939[11]
  i938.baumgarteTOIScale = i939[12]
  i938.timeToSleep = i939[13]
  i938.linearSleepTolerance = i939[14]
  i938.angularSleepTolerance = i939[15]
  i938.defaultContactOffset = i939[16]
  i938.autoSimulation = !!i939[17]
  i938.queriesHitTriggers = !!i939[18]
  i938.queriesStartInColliders = !!i939[19]
  i938.callbacksOnDisable = !!i939[20]
  i938.reuseCollisionCallbacks = !!i939[21]
  i938.autoSyncTransforms = !!i939[22]
  var i941 = i939[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i941[i + 0]) );
  }
  i938.collisionMatrix = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i945 = data
  i944.enabled = !!i945[0]
  i944.layerId = i945[1]
  i944.otherLayerId = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i949[i + 0]) );
  }
  i946.qualityLevels = i948
  var i951 = i947[1]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.names = i950
  i946.shadows = i947[2]
  i946.anisotropicFiltering = i947[3]
  i946.antiAliasing = i947[4]
  i946.lodBias = i947[5]
  i946.shadowCascades = i947[6]
  i946.shadowDistance = i947[7]
  i946.shadowmaskMode = i947[8]
  i946.shadowProjection = i947[9]
  i946.shadowResolution = i947[10]
  i946.softParticles = !!i947[11]
  i946.softVegetation = !!i947[12]
  i946.activeColorSpace = i947[13]
  i946.desiredColorSpace = i947[14]
  i946.masterTextureLimit = i947[15]
  i946.maxQueuedFrames = i947[16]
  i946.particleRaycastBudget = i947[17]
  i946.pixelLightCount = i947[18]
  i946.realtimeReflectionProbes = !!i947[19]
  i946.shadowCascade2Split = i947[20]
  i946.shadowCascade4Split = new pc.Vec3( i947[21], i947[22], i947[23] )
  i946.streamingMipmapsActive = !!i947[24]
  i946.vSyncCount = i947[25]
  i946.asyncUploadBufferSize = i947[26]
  i946.asyncUploadTimeSlice = i947[27]
  i946.billboardsFaceCameraPosition = !!i947[28]
  i946.shadowNearPlaneOffset = i947[29]
  i946.streamingMipmapsMemoryBudget = i947[30]
  i946.maximumLODLevel = i947[31]
  i946.streamingMipmapsAddAllCameras = !!i947[32]
  i946.streamingMipmapsMaxLevelReduction = i947[33]
  i946.streamingMipmapsRenderersPerFrame = i947[34]
  i946.resolutionScalingFixedDPIFactor = i947[35]
  i946.streamingMipmapsMaxFileIORequests = i947[36]
  i946.currentQualityLevel = i947[37]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i955 = data
  i954.name = i955[0]
  var i957 = i955[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i957[i + 0]) );
  }
  i954.tos = i956
  var i959 = i955[2]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.constant = i958
  i954.isValid = !!i955[3]
  i954.isHuman = !!i955[4]
  i954.hasRootMotion = !!i955[5]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i963 = data
  i962.hash = i963[0]
  i962.path = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i967 = data
  i966.weight = i967[0]
  i966.vertices = i967[1]
  i966.normals = i967[2]
  i966.tangents = i967[3]
  return i966
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[33],"45":[3],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[3],"69":[26],"70":[71],"72":[71],"10":[9],"73":[9],"74":[26,9],"75":[9,13],"76":[9],"77":[13,9],"78":[26],"79":[13,9],"80":[9],"81":[82],"83":[9],"84":[9],"12":[10],"14":[13,9],"85":[9],"11":[10],"86":[9],"87":[9],"88":[9],"89":[9],"90":[9],"91":[9],"92":[9],"93":[9],"94":[9],"95":[13,9],"96":[9],"97":[9],"98":[9],"99":[9],"18":[13,9],"100":[9],"101":[7],"102":[7],"8":[7],"103":[7],"104":[3],"105":[3],"106":[82],"107":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","StickmanEC","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","EC01","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "CarConnect";

Deserializers.lunaInitializationTime = "12/31/2024 09:00:08";

Deserializers.lunaDaysRunning = "35.8";

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

Deserializers.buildID = "261c8e16-4efd-4600-b747-af0f9a53ebda";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

