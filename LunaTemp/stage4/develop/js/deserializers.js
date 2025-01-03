var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointSpring' )
  var i1585 = data
  i1584.spring = i1585[0]
  i1584.damper = i1585[1]
  i1584.targetPosition = i1585[2]
  return i1584
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointMotor' )
  var i1587 = data
  i1586.m_TargetVelocity = i1587[0]
  i1586.m_Force = i1587[1]
  i1586.m_FreeSpin = i1587[2]
  return i1586
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.JointLimits' )
  var i1589 = data
  i1588.m_Min = i1589[0]
  i1588.m_Max = i1589[1]
  i1588.m_Bounciness = i1589[2]
  i1588.m_BounceMinVelocity = i1589[3]
  i1588.m_ContactDistance = i1589[4]
  i1588.minBounce = i1589[5]
  i1588.maxBounce = i1589[6]
  return i1588
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointDrive' )
  var i1591 = data
  i1590.m_PositionSpring = i1591[0]
  i1590.m_PositionDamper = i1591[1]
  i1590.m_MaximumForce = i1591[2]
  return i1590
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1593 = data
  i1592.m_Spring = i1593[0]
  i1592.m_Damper = i1593[1]
  return i1592
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1595 = data
  i1594.m_Limit = i1595[0]
  i1594.m_Bounciness = i1595[1]
  i1594.m_ContactDistance = i1595[2]
  return i1594
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1597 = data
  i1596.m_ExtremumSlip = i1597[0]
  i1596.m_ExtremumValue = i1597[1]
  i1596.m_AsymptoteSlip = i1597[2]
  i1596.m_AsymptoteValue = i1597[3]
  i1596.m_Stiffness = i1597[4]
  return i1596
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1599 = data
  i1598.m_LowerAngle = i1599[0]
  i1598.m_UpperAngle = i1599[1]
  return i1598
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1601 = data
  i1600.m_MotorSpeed = i1601[0]
  i1600.m_MaximumMotorTorque = i1601[1]
  return i1600
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1603 = data
  i1602.m_DampingRatio = i1603[0]
  i1602.m_Frequency = i1603[1]
  i1602.m_Angle = i1603[2]
  return i1602
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1605 = data
  i1604.m_LowerTranslation = i1605[0]
  i1604.m_UpperTranslation = i1605[1]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1607 = data
  i1606.name = i1607[0]
  i1606.width = i1607[1]
  i1606.height = i1607[2]
  i1606.mipmapCount = i1607[3]
  i1606.anisoLevel = i1607[4]
  i1606.filterMode = i1607[5]
  i1606.hdr = !!i1607[6]
  i1606.format = i1607[7]
  i1606.wrapMode = i1607[8]
  i1606.alphaIsTransparency = !!i1607[9]
  i1606.alphaSource = i1607[10]
  i1606.graphicsFormat = i1607[11]
  i1606.sRGBTexture = !!i1607[12]
  i1606.desiredColorSpace = i1607[13]
  i1606.wrapU = i1607[14]
  i1606.wrapV = i1607[15]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1608 = root || new pc.UnityMaterial()
  var i1609 = data
  i1608.name = i1609[0]
  request.r(i1609[1], i1609[2], 0, i1608, 'shader')
  i1608.renderQueue = i1609[3]
  i1608.enableInstancing = !!i1609[4]
  var i1611 = i1609[5]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1611[i + 0]) );
  }
  i1608.floatParameters = i1610
  var i1613 = i1609[6]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1613[i + 0]) );
  }
  i1608.colorParameters = i1612
  var i1615 = i1609[7]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1615[i + 0]) );
  }
  i1608.vectorParameters = i1614
  var i1617 = i1609[8]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1617[i + 0]) );
  }
  i1608.textureParameters = i1616
  var i1619 = i1609[9]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1619[i + 0]) );
  }
  i1608.materialFlags = i1618
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.value = i1623[1]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1627 = data
  i1626.name = i1627[0]
  i1626.value = new pc.Color(i1627[1], i1627[2], i1627[3], i1627[4])
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.value = new pc.Vec4( i1631[1], i1631[2], i1631[3], i1631[4] )
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1635 = data
  i1634.name = i1635[0]
  request.r(i1635[1], i1635[2], 0, i1634, 'value')
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.enabled = !!i1639[1]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1641 = data
  i1640.name = i1641[0]
  i1640.halfPrecision = !!i1641[1]
  i1640.useUInt32IndexFormat = !!i1641[2]
  i1640.vertexCount = i1641[3]
  i1640.aabb = i1641[4]
  var i1643 = i1641[5]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( !!i1643[i + 0] );
  }
  i1640.streams = i1642
  i1640.vertices = i1641[6]
  var i1645 = i1641[7]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1645[i + 0]) );
  }
  i1640.subMeshes = i1644
  var i1647 = i1641[8]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 16) {
    i1646.push( new pc.Mat4().setData(i1647[i + 0], i1647[i + 1], i1647[i + 2], i1647[i + 3],  i1647[i + 4], i1647[i + 5], i1647[i + 6], i1647[i + 7],  i1647[i + 8], i1647[i + 9], i1647[i + 10], i1647[i + 11],  i1647[i + 12], i1647[i + 13], i1647[i + 14], i1647[i + 15]) );
  }
  i1640.bindposes = i1646
  var i1649 = i1641[9]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1649[i + 0]) );
  }
  i1640.blendShapes = i1648
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1655 = data
  i1654.triangles = i1655[0]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1661 = data
  i1660.name = i1661[0]
  var i1663 = i1661[1]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1663[i + 0]) );
  }
  i1660.frames = i1662
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.atlasId = i1665[1]
  i1664.mipmapCount = i1665[2]
  i1664.hdr = !!i1665[3]
  i1664.size = i1665[4]
  i1664.anisoLevel = i1665[5]
  i1664.filterMode = i1665[6]
  var i1667 = i1665[7]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 4) {
    i1666.push( UnityEngine.Rect.MinMaxRect(i1667[i + 0], i1667[i + 1], i1667[i + 2], i1667[i + 3]) );
  }
  i1664.rects = i1666
  i1664.wrapU = i1665[8]
  i1664.wrapV = i1665[9]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.index = i1671[1]
  i1670.startup = !!i1671[2]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1673 = data
  i1672.position = new pc.Vec3( i1673[0], i1673[1], i1673[2] )
  i1672.scale = new pc.Vec3( i1673[3], i1673[4], i1673[5] )
  i1672.rotation = new pc.Quat(i1673[6], i1673[7], i1673[8], i1673[9])
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1675 = data
  i1674.enabled = !!i1675[0]
  i1674.aspect = i1675[1]
  i1674.orthographic = !!i1675[2]
  i1674.orthographicSize = i1675[3]
  i1674.backgroundColor = new pc.Color(i1675[4], i1675[5], i1675[6], i1675[7])
  i1674.nearClipPlane = i1675[8]
  i1674.farClipPlane = i1675[9]
  i1674.fieldOfView = i1675[10]
  i1674.depth = i1675[11]
  i1674.clearFlags = i1675[12]
  i1674.cullingMask = i1675[13]
  i1674.rect = i1675[14]
  request.r(i1675[15], i1675[16], 0, i1674, 'targetTexture')
  i1674.usePhysicalProperties = !!i1675[17]
  i1674.focalLength = i1675[18]
  i1674.sensorSize = new pc.Vec2( i1675[19], i1675[20] )
  i1674.lensShift = new pc.Vec2( i1675[21], i1675[22] )
  i1674.gateFit = i1675[23]
  i1674.commandBufferCount = i1675[24]
  i1674.cameraType = i1675[25]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.tagId = i1677[1]
  i1676.enabled = !!i1677[2]
  i1676.isStatic = !!i1677[3]
  i1676.layer = i1677[4]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1679 = data
  i1678.enabled = !!i1679[0]
  i1678.type = i1679[1]
  i1678.color = new pc.Color(i1679[2], i1679[3], i1679[4], i1679[5])
  i1678.cullingMask = i1679[6]
  i1678.intensity = i1679[7]
  i1678.range = i1679[8]
  i1678.spotAngle = i1679[9]
  i1678.shadows = i1679[10]
  i1678.shadowNormalBias = i1679[11]
  i1678.shadowBias = i1679[12]
  i1678.shadowStrength = i1679[13]
  i1678.shadowResolution = i1679[14]
  i1678.lightmapBakeType = i1679[15]
  i1678.renderMode = i1679[16]
  request.r(i1679[17], i1679[18], 0, i1678, 'cookie')
  i1678.cookieSize = i1679[19]
  return i1678
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'm_FirstSelected')
  i1680.m_sendNavigationEvents = !!i1681[2]
  i1680.m_DragThreshold = i1681[3]
  return i1680
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1683 = data
  i1682.m_HorizontalAxis = i1683[0]
  i1682.m_VerticalAxis = i1683[1]
  i1682.m_SubmitButton = i1683[2]
  i1682.m_CancelButton = i1683[3]
  i1682.m_InputActionsPerSecond = i1683[4]
  i1682.m_RepeatDelay = i1683[5]
  i1682.m_ForceModuleActive = !!i1683[6]
  i1682.m_SendPointerHoverToParent = !!i1683[7]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1685 = data
  i1684.pivot = new pc.Vec2( i1685[0], i1685[1] )
  i1684.anchorMin = new pc.Vec2( i1685[2], i1685[3] )
  i1684.anchorMax = new pc.Vec2( i1685[4], i1685[5] )
  i1684.sizeDelta = new pc.Vec2( i1685[6], i1685[7] )
  i1684.anchoredPosition3D = new pc.Vec3( i1685[8], i1685[9], i1685[10] )
  i1684.rotation = new pc.Quat(i1685[11], i1685[12], i1685[13], i1685[14])
  i1684.scale = new pc.Vec3( i1685[15], i1685[16], i1685[17] )
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.planeDistance = i1687[1]
  i1686.referencePixelsPerUnit = i1687[2]
  i1686.isFallbackOverlay = !!i1687[3]
  i1686.renderMode = i1687[4]
  i1686.renderOrder = i1687[5]
  i1686.sortingLayerName = i1687[6]
  i1686.sortingOrder = i1687[7]
  i1686.scaleFactor = i1687[8]
  request.r(i1687[9], i1687[10], 0, i1686, 'worldCamera')
  i1686.overrideSorting = !!i1687[11]
  i1686.pixelPerfect = !!i1687[12]
  i1686.targetDisplay = i1687[13]
  i1686.overridePixelPerfect = !!i1687[14]
  return i1686
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1689 = data
  i1688.m_UiScaleMode = i1689[0]
  i1688.m_ReferencePixelsPerUnit = i1689[1]
  i1688.m_ScaleFactor = i1689[2]
  i1688.m_ReferenceResolution = new pc.Vec2( i1689[3], i1689[4] )
  i1688.m_ScreenMatchMode = i1689[5]
  i1688.m_MatchWidthOrHeight = i1689[6]
  i1688.m_PhysicalUnit = i1689[7]
  i1688.m_FallbackScreenDPI = i1689[8]
  i1688.m_DefaultSpriteDPI = i1689[9]
  i1688.m_DynamicPixelsPerUnit = i1689[10]
  i1688.m_PresetInfoIsWorld = !!i1689[11]
  return i1688
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1691 = data
  i1690.m_IgnoreReversedGraphics = !!i1691[0]
  i1690.m_BlockingObjects = i1691[1]
  i1690.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1691[2] )
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1693 = data
  i1692.cullTransparentMesh = !!i1693[0]
  return i1692
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.Image' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_Sprite')
  i1694.m_Type = i1695[2]
  i1694.m_PreserveAspect = !!i1695[3]
  i1694.m_FillCenter = !!i1695[4]
  i1694.m_FillMethod = i1695[5]
  i1694.m_FillAmount = i1695[6]
  i1694.m_FillClockwise = !!i1695[7]
  i1694.m_FillOrigin = i1695[8]
  i1694.m_UseSpriteMesh = !!i1695[9]
  i1694.m_PixelsPerUnitMultiplier = i1695[10]
  request.r(i1695[11], i1695[12], 0, i1694, 'm_Material')
  i1694.m_Maskable = !!i1695[13]
  i1694.m_Color = new pc.Color(i1695[14], i1695[15], i1695[16], i1695[17])
  i1694.m_RaycastTarget = !!i1695[18]
  i1694.m_RaycastPadding = new pc.Vec4( i1695[19], i1695[20], i1695[21], i1695[22] )
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1697 = data
  i1696.playAutomatically = !!i1697[0]
  request.r(i1697[1], i1697[2], 0, i1696, 'clip')
  var i1699 = i1697[3]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 2, i1698, '')
  }
  i1696.clips = i1698
  i1696.wrapMode = i1697[4]
  i1696.enabled = !!i1697[5]
  return i1696
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.UI.Text' )
  var i1703 = data
  i1702.m_FontData = request.d('UnityEngine.UI.FontData', i1703[0], i1702.m_FontData)
  i1702.m_Text = i1703[1]
  request.r(i1703[2], i1703[3], 0, i1702, 'm_Material')
  i1702.m_Maskable = !!i1703[4]
  i1702.m_Color = new pc.Color(i1703[5], i1703[6], i1703[7], i1703[8])
  i1702.m_RaycastTarget = !!i1703[9]
  i1702.m_RaycastPadding = new pc.Vec4( i1703[10], i1703[11], i1703[12], i1703[13] )
  return i1702
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'm_Font')
  i1704.m_FontSize = i1705[2]
  i1704.m_FontStyle = i1705[3]
  i1704.m_BestFit = !!i1705[4]
  i1704.m_MinSize = i1705[5]
  i1704.m_MaxSize = i1705[6]
  i1704.m_Alignment = i1705[7]
  i1704.m_AlignByGeometry = !!i1705[8]
  i1704.m_RichText = !!i1705[9]
  i1704.m_HorizontalOverflow = i1705[10]
  i1704.m_VerticalOverflow = i1705[11]
  i1704.m_LineSpacing = i1705[12]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1707 = data
  i1706.enabled = !!i1707[0]
  request.r(i1707[1], i1707[2], 0, i1706, 'sharedMaterial')
  var i1709 = i1707[3]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 2, i1708, '')
  }
  i1706.sharedMaterials = i1708
  i1706.receiveShadows = !!i1707[4]
  i1706.shadowCastingMode = i1707[5]
  i1706.sortingLayerID = i1707[6]
  i1706.sortingOrder = i1707[7]
  i1706.lightmapIndex = i1707[8]
  i1706.lightmapSceneIndex = i1707[9]
  i1706.lightmapScaleOffset = new pc.Vec4( i1707[10], i1707[11], i1707[12], i1707[13] )
  i1706.lightProbeUsage = i1707[14]
  i1706.reflectionProbeUsage = i1707[15]
  i1706.color = new pc.Color(i1707[16], i1707[17], i1707[18], i1707[19])
  request.r(i1707[20], i1707[21], 0, i1706, 'sprite')
  i1706.flipX = !!i1707[22]
  i1706.flipY = !!i1707[23]
  i1706.drawMode = i1707[24]
  i1706.size = new pc.Vec2( i1707[25], i1707[26] )
  i1706.tileMode = i1707[27]
  i1706.adaptiveModeThreshold = i1707[28]
  i1706.maskInteraction = i1707[29]
  i1706.spriteSortPoint = i1707[30]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'animatorController')
  request.r(i1713[2], i1713[3], 0, i1712, 'avatar')
  i1712.updateMode = i1713[4]
  i1712.hasTransformHierarchy = !!i1713[5]
  i1712.applyRootMotion = !!i1713[6]
  var i1715 = i1713[7]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 2, i1714, '')
  }
  i1712.humanBones = i1714
  i1712.enabled = !!i1713[8]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'sharedMesh')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'additionalVertexStreams')
  i1720.enabled = !!i1721[2]
  request.r(i1721[3], i1721[4], 0, i1720, 'sharedMaterial')
  var i1723 = i1721[5]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 2, i1722, '')
  }
  i1720.sharedMaterials = i1722
  i1720.receiveShadows = !!i1721[6]
  i1720.shadowCastingMode = i1721[7]
  i1720.sortingLayerID = i1721[8]
  i1720.sortingOrder = i1721[9]
  i1720.lightmapIndex = i1721[10]
  i1720.lightmapSceneIndex = i1721[11]
  i1720.lightmapScaleOffset = new pc.Vec4( i1721[12], i1721[13], i1721[14], i1721[15] )
  i1720.lightProbeUsage = i1721[16]
  i1720.reflectionProbeUsage = i1721[17]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1725 = data
  i1724.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1725[0], i1724.main)
  i1724.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1725[1], i1724.colorBySpeed)
  i1724.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1725[2], i1724.colorOverLifetime)
  i1724.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1725[3], i1724.emission)
  i1724.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1725[4], i1724.rotationBySpeed)
  i1724.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1725[5], i1724.rotationOverLifetime)
  i1724.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1725[6], i1724.shape)
  i1724.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1725[7], i1724.sizeBySpeed)
  i1724.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1725[8], i1724.sizeOverLifetime)
  i1724.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1725[9], i1724.textureSheetAnimation)
  i1724.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1725[10], i1724.velocityOverLifetime)
  i1724.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1725[11], i1724.noise)
  i1724.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1725[12], i1724.inheritVelocity)
  i1724.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1725[13], i1724.forceOverLifetime)
  i1724.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1725[14], i1724.limitVelocityOverLifetime)
  i1724.useAutoRandomSeed = !!i1725[15]
  i1724.randomSeed = i1725[16]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1726 = root || new pc.ParticleSystemMain()
  var i1727 = data
  i1726.duration = i1727[0]
  i1726.loop = !!i1727[1]
  i1726.prewarm = !!i1727[2]
  i1726.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[3], i1726.startDelay)
  i1726.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[4], i1726.startLifetime)
  i1726.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[5], i1726.startSpeed)
  i1726.startSize3D = !!i1727[6]
  i1726.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[7], i1726.startSizeX)
  i1726.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[8], i1726.startSizeY)
  i1726.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[9], i1726.startSizeZ)
  i1726.startRotation3D = !!i1727[10]
  i1726.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[11], i1726.startRotationX)
  i1726.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[12], i1726.startRotationY)
  i1726.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[13], i1726.startRotationZ)
  i1726.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1727[14], i1726.startColor)
  i1726.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[15], i1726.gravityModifier)
  i1726.simulationSpace = i1727[16]
  request.r(i1727[17], i1727[18], 0, i1726, 'customSimulationSpace')
  i1726.simulationSpeed = i1727[19]
  i1726.useUnscaledTime = !!i1727[20]
  i1726.scalingMode = i1727[21]
  i1726.playOnAwake = !!i1727[22]
  i1726.maxParticles = i1727[23]
  i1726.emitterVelocityMode = i1727[24]
  i1726.stopAction = i1727[25]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1728 = root || new pc.MinMaxCurve()
  var i1729 = data
  i1728.mode = i1729[0]
  i1728.curveMin = new pc.AnimationCurve( { keys_flow: i1729[1] } )
  i1728.curveMax = new pc.AnimationCurve( { keys_flow: i1729[2] } )
  i1728.curveMultiplier = i1729[3]
  i1728.constantMin = i1729[4]
  i1728.constantMax = i1729[5]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1730 = root || new pc.MinMaxGradient()
  var i1731 = data
  i1730.mode = i1731[0]
  i1730.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1731[1], i1730.gradientMin)
  i1730.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1731[2], i1730.gradientMax)
  i1730.colorMin = new pc.Color(i1731[3], i1731[4], i1731[5], i1731[6])
  i1730.colorMax = new pc.Color(i1731[7], i1731[8], i1731[9], i1731[10])
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1733 = data
  i1732.mode = i1733[0]
  var i1735 = i1733[1]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1735[i + 0]) );
  }
  i1732.colorKeys = i1734
  var i1737 = i1733[2]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1737[i + 0]) );
  }
  i1732.alphaKeys = i1736
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1738 = root || new pc.ParticleSystemColorBySpeed()
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1739[1], i1738.color)
  i1738.range = new pc.Vec2( i1739[2], i1739[3] )
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1743 = data
  i1742.color = new pc.Color(i1743[0], i1743[1], i1743[2], i1743[3])
  i1742.time = i1743[4]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1747 = data
  i1746.alpha = i1747[0]
  i1746.time = i1747[1]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1748 = root || new pc.ParticleSystemColorOverLifetime()
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1749[1], i1748.color)
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1750 = root || new pc.ParticleSystemEmitter()
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[1], i1750.rateOverTime)
  i1750.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[2], i1750.rateOverDistance)
  var i1753 = i1751[3]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1753[i + 0]) );
  }
  i1750.bursts = i1752
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1756 = root || new pc.ParticleSystemBurst()
  var i1757 = data
  i1756.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1757[0], i1756.count)
  i1756.cycleCount = i1757[1]
  i1756.minCount = i1757[2]
  i1756.maxCount = i1757[3]
  i1756.repeatInterval = i1757[4]
  i1756.time = i1757[5]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemRotationBySpeed()
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[1], i1758.x)
  i1758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[2], i1758.y)
  i1758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[3], i1758.z)
  i1758.separateAxes = !!i1759[4]
  i1758.range = new pc.Vec2( i1759[5], i1759[6] )
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1760 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1761 = data
  i1760.enabled = !!i1761[0]
  i1760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[1], i1760.x)
  i1760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[2], i1760.y)
  i1760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[3], i1760.z)
  i1760.separateAxes = !!i1761[4]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1762 = root || new pc.ParticleSystemShape()
  var i1763 = data
  i1762.enabled = !!i1763[0]
  i1762.shapeType = i1763[1]
  i1762.randomDirectionAmount = i1763[2]
  i1762.sphericalDirectionAmount = i1763[3]
  i1762.randomPositionAmount = i1763[4]
  i1762.alignToDirection = !!i1763[5]
  i1762.radius = i1763[6]
  i1762.radiusMode = i1763[7]
  i1762.radiusSpread = i1763[8]
  i1762.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[9], i1762.radiusSpeed)
  i1762.radiusThickness = i1763[10]
  i1762.angle = i1763[11]
  i1762.length = i1763[12]
  i1762.boxThickness = new pc.Vec3( i1763[13], i1763[14], i1763[15] )
  i1762.meshShapeType = i1763[16]
  request.r(i1763[17], i1763[18], 0, i1762, 'mesh')
  request.r(i1763[19], i1763[20], 0, i1762, 'meshRenderer')
  request.r(i1763[21], i1763[22], 0, i1762, 'skinnedMeshRenderer')
  i1762.useMeshMaterialIndex = !!i1763[23]
  i1762.meshMaterialIndex = i1763[24]
  i1762.useMeshColors = !!i1763[25]
  i1762.normalOffset = i1763[26]
  i1762.arc = i1763[27]
  i1762.arcMode = i1763[28]
  i1762.arcSpread = i1763[29]
  i1762.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[30], i1762.arcSpeed)
  i1762.donutRadius = i1763[31]
  i1762.position = new pc.Vec3( i1763[32], i1763[33], i1763[34] )
  i1762.rotation = new pc.Vec3( i1763[35], i1763[36], i1763[37] )
  i1762.scale = new pc.Vec3( i1763[38], i1763[39], i1763[40] )
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1764 = root || new pc.ParticleSystemSizeBySpeed()
  var i1765 = data
  i1764.enabled = !!i1765[0]
  i1764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[1], i1764.x)
  i1764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[2], i1764.y)
  i1764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[3], i1764.z)
  i1764.separateAxes = !!i1765[4]
  i1764.range = new pc.Vec2( i1765[5], i1765[6] )
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1766 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1767 = data
  i1766.enabled = !!i1767[0]
  i1766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[1], i1766.x)
  i1766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[2], i1766.y)
  i1766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[3], i1766.z)
  i1766.separateAxes = !!i1767[4]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1768 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1769 = data
  i1768.enabled = !!i1769[0]
  i1768.mode = i1769[1]
  i1768.animation = i1769[2]
  i1768.numTilesX = i1769[3]
  i1768.numTilesY = i1769[4]
  i1768.useRandomRow = !!i1769[5]
  i1768.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[6], i1768.frameOverTime)
  i1768.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[7], i1768.startFrame)
  i1768.cycleCount = i1769[8]
  i1768.rowIndex = i1769[9]
  i1768.flipU = i1769[10]
  i1768.flipV = i1769[11]
  i1768.spriteCount = i1769[12]
  var i1771 = i1769[13]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 2) {
  request.r(i1771[i + 0], i1771[i + 1], 2, i1770, '')
  }
  i1768.sprites = i1770
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1774 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[1], i1774.x)
  i1774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[2], i1774.y)
  i1774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[3], i1774.z)
  i1774.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[4], i1774.radial)
  i1774.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[5], i1774.speedModifier)
  i1774.space = i1775[6]
  i1774.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[7], i1774.orbitalX)
  i1774.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[8], i1774.orbitalY)
  i1774.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[9], i1774.orbitalZ)
  i1774.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[10], i1774.orbitalOffsetX)
  i1774.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[11], i1774.orbitalOffsetY)
  i1774.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[12], i1774.orbitalOffsetZ)
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1776 = root || new pc.ParticleSystemNoise()
  var i1777 = data
  i1776.enabled = !!i1777[0]
  i1776.separateAxes = !!i1777[1]
  i1776.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[2], i1776.strengthX)
  i1776.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[3], i1776.strengthY)
  i1776.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[4], i1776.strengthZ)
  i1776.frequency = i1777[5]
  i1776.damping = !!i1777[6]
  i1776.octaveCount = i1777[7]
  i1776.octaveMultiplier = i1777[8]
  i1776.octaveScale = i1777[9]
  i1776.quality = i1777[10]
  i1776.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[11], i1776.scrollSpeed)
  i1776.scrollSpeedMultiplier = i1777[12]
  i1776.remapEnabled = !!i1777[13]
  i1776.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[14], i1776.remapX)
  i1776.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[15], i1776.remapY)
  i1776.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[16], i1776.remapZ)
  i1776.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[17], i1776.positionAmount)
  i1776.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[18], i1776.rotationAmount)
  i1776.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[19], i1776.sizeAmount)
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1778 = root || new pc.ParticleSystemInheritVelocity()
  var i1779 = data
  i1778.enabled = !!i1779[0]
  i1778.mode = i1779[1]
  i1778.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[2], i1778.curve)
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1780 = root || new pc.ParticleSystemForceOverLifetime()
  var i1781 = data
  i1780.enabled = !!i1781[0]
  i1780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[1], i1780.x)
  i1780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[2], i1780.y)
  i1780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[3], i1780.z)
  i1780.space = i1781[4]
  i1780.randomized = !!i1781[5]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1783 = data
  i1782.enabled = !!i1783[0]
  i1782.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[1], i1782.limit)
  i1782.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[2], i1782.limitX)
  i1782.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[3], i1782.limitY)
  i1782.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[4], i1782.limitZ)
  i1782.dampen = i1783[5]
  i1782.separateAxes = !!i1783[6]
  i1782.space = i1783[7]
  i1782.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[8], i1782.drag)
  i1782.multiplyDragByParticleSize = !!i1783[9]
  i1782.multiplyDragByParticleVelocity = !!i1783[10]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1785 = data
  i1784.enabled = !!i1785[0]
  request.r(i1785[1], i1785[2], 0, i1784, 'sharedMaterial')
  var i1787 = i1785[3]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 2) {
  request.r(i1787[i + 0], i1787[i + 1], 2, i1786, '')
  }
  i1784.sharedMaterials = i1786
  i1784.receiveShadows = !!i1785[4]
  i1784.shadowCastingMode = i1785[5]
  i1784.sortingLayerID = i1785[6]
  i1784.sortingOrder = i1785[7]
  i1784.lightmapIndex = i1785[8]
  i1784.lightmapSceneIndex = i1785[9]
  i1784.lightmapScaleOffset = new pc.Vec4( i1785[10], i1785[11], i1785[12], i1785[13] )
  i1784.lightProbeUsage = i1785[14]
  i1784.reflectionProbeUsage = i1785[15]
  request.r(i1785[16], i1785[17], 0, i1784, 'mesh')
  i1784.meshCount = i1785[18]
  i1784.activeVertexStreamsCount = i1785[19]
  i1784.alignment = i1785[20]
  i1784.renderMode = i1785[21]
  i1784.sortMode = i1785[22]
  i1784.lengthScale = i1785[23]
  i1784.velocityScale = i1785[24]
  i1784.cameraVelocityScale = i1785[25]
  i1784.normalDirection = i1785[26]
  i1784.sortingFudge = i1785[27]
  i1784.minParticleSize = i1785[28]
  i1784.maxParticleSize = i1785[29]
  i1784.pivot = new pc.Vec3( i1785[30], i1785[31], i1785[32] )
  request.r(i1785[33], i1785[34], 0, i1784, 'trailMaterial')
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i1789 = data
  i1788.textureMode = i1789[0]
  i1788.alignment = i1789[1]
  i1788.widthCurve = new pc.AnimationCurve( { keys_flow: i1789[2] } )
  i1788.colorGradient = i1789[3] ? new pc.ColorGradient(i1789[3][0], i1789[3][1], i1789[3][2]) : null
  var i1791 = i1789[4]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 3) {
    i1790.push( new pc.Vec3( i1791[i + 0], i1791[i + 1], i1791[i + 2] ) );
  }
  i1788.positions = i1790
  i1788.positionCount = i1789[5]
  i1788.widthMultiplier = i1789[6]
  i1788.startWidth = i1789[7]
  i1788.endWidth = i1789[8]
  i1788.numCornerVertices = i1789[9]
  i1788.numCapVertices = i1789[10]
  i1788.useWorldSpace = !!i1789[11]
  i1788.loop = !!i1789[12]
  i1788.startColor = new pc.Color(i1789[13], i1789[14], i1789[15], i1789[16])
  i1788.endColor = new pc.Color(i1789[17], i1789[18], i1789[19], i1789[20])
  i1788.generateLightingData = !!i1789[21]
  i1788.enabled = !!i1789[22]
  request.r(i1789[23], i1789[24], 0, i1788, 'sharedMaterial')
  var i1793 = i1789[25]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 2, i1792, '')
  }
  i1788.sharedMaterials = i1792
  i1788.receiveShadows = !!i1789[26]
  i1788.shadowCastingMode = i1789[27]
  i1788.sortingLayerID = i1789[28]
  i1788.sortingOrder = i1789[29]
  i1788.lightmapIndex = i1789[30]
  i1788.lightmapSceneIndex = i1789[31]
  i1788.lightmapScaleOffset = new pc.Vec4( i1789[32], i1789[33], i1789[34], i1789[35] )
  i1788.lightProbeUsage = i1789[36]
  i1788.reflectionProbeUsage = i1789[37]
  return i1788
}

Deserializers["StickmanEC"] = function (request, data, root) {
  var i1796 = root || request.c( 'StickmanEC' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'arrayLinePoint')
  request.r(i1797[2], i1797[3], 0, i1796, 'lineRenderer')
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1799 = data
  i1798.enabled = !!i1799[0]
  request.r(i1799[1], i1799[2], 0, i1798, 'sharedMaterial')
  var i1801 = i1799[3]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 2, i1800, '')
  }
  i1798.sharedMaterials = i1800
  i1798.receiveShadows = !!i1799[4]
  i1798.shadowCastingMode = i1799[5]
  i1798.sortingLayerID = i1799[6]
  i1798.sortingOrder = i1799[7]
  i1798.lightmapIndex = i1799[8]
  i1798.lightmapSceneIndex = i1799[9]
  i1798.lightmapScaleOffset = new pc.Vec4( i1799[10], i1799[11], i1799[12], i1799[13] )
  i1798.lightProbeUsage = i1799[14]
  i1798.reflectionProbeUsage = i1799[15]
  request.r(i1799[16], i1799[17], 0, i1798, 'sharedMesh')
  var i1803 = i1799[18]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 2) {
  request.r(i1803[i + 0], i1803[i + 1], 2, i1802, '')
  }
  i1798.bones = i1802
  i1798.updateWhenOffscreen = !!i1799[19]
  i1798.localBounds = i1799[20]
  request.r(i1799[21], i1799[22], 0, i1798, 'rootBone')
  var i1805 = i1799[23]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1805[i + 0]) );
  }
  i1798.blendShapesWeights = i1804
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1809 = data
  i1808.weight = i1809[0]
  return i1808
}

Deserializers["EC01"] = function (request, data, root) {
  var i1810 = root || request.c( 'EC01' )
  var i1811 = data
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1813 = data
  i1812.ambientIntensity = i1813[0]
  i1812.reflectionIntensity = i1813[1]
  i1812.ambientMode = i1813[2]
  i1812.ambientLight = new pc.Color(i1813[3], i1813[4], i1813[5], i1813[6])
  i1812.ambientSkyColor = new pc.Color(i1813[7], i1813[8], i1813[9], i1813[10])
  i1812.ambientGroundColor = new pc.Color(i1813[11], i1813[12], i1813[13], i1813[14])
  i1812.ambientEquatorColor = new pc.Color(i1813[15], i1813[16], i1813[17], i1813[18])
  i1812.fogColor = new pc.Color(i1813[19], i1813[20], i1813[21], i1813[22])
  i1812.fogEndDistance = i1813[23]
  i1812.fogStartDistance = i1813[24]
  i1812.fogDensity = i1813[25]
  i1812.fog = !!i1813[26]
  request.r(i1813[27], i1813[28], 0, i1812, 'skybox')
  i1812.fogMode = i1813[29]
  var i1815 = i1813[30]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1815[i + 0]) );
  }
  i1812.lightmaps = i1814
  i1812.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1813[31], i1812.lightProbes)
  i1812.lightmapsMode = i1813[32]
  i1812.mixedBakeMode = i1813[33]
  i1812.environmentLightingMode = i1813[34]
  i1812.ambientProbe = new pc.SphericalHarmonicsL2(i1813[35])
  i1812.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1813[36])
  i1812.useReferenceAmbientProbe = !!i1813[37]
  request.r(i1813[38], i1813[39], 0, i1812, 'customReflection')
  request.r(i1813[40], i1813[41], 0, i1812, 'defaultReflection')
  i1812.defaultReflectionMode = i1813[42]
  i1812.defaultReflectionResolution = i1813[43]
  i1812.sunLightObjectId = i1813[44]
  i1812.pixelLightCount = i1813[45]
  i1812.defaultReflectionHDR = !!i1813[46]
  i1812.hasLightDataAsset = !!i1813[47]
  i1812.hasManualGenerate = !!i1813[48]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'lightmapColor')
  request.r(i1819[2], i1819[3], 0, i1818, 'lightmapDirection')
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1820 = root || new UnityEngine.LightProbes()
  var i1821 = data
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1829[i + 0]));
  }
  i1826.ShaderCompilationErrors = i1828
  i1826.name = i1827[1]
  i1826.guid = i1827[2]
  var i1831 = i1827[3]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( i1831[i + 0] );
  }
  i1826.shaderDefinedKeywords = i1830
  var i1833 = i1827[4]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1833[i + 0]) );
  }
  i1826.passes = i1832
  var i1835 = i1827[5]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1835[i + 0]) );
  }
  i1826.usePasses = i1834
  var i1837 = i1827[6]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1837[i + 0]) );
  }
  i1826.defaultParameterValues = i1836
  request.r(i1827[7], i1827[8], 0, i1826, 'unityFallbackShader')
  i1826.readDepth = !!i1827[9]
  i1826.isCreatedByShaderGraph = !!i1827[10]
  i1826.compiled = !!i1827[11]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1841 = data
  i1840.shaderName = i1841[0]
  i1840.errorMessage = i1841[1]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1846 = root || new pc.UnityShaderPass()
  var i1847 = data
  i1846.id = i1847[0]
  i1846.subShaderIndex = i1847[1]
  i1846.name = i1847[2]
  i1846.passType = i1847[3]
  i1846.grabPassTextureName = i1847[4]
  i1846.usePass = !!i1847[5]
  i1846.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[6], i1846.zTest)
  i1846.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[7], i1846.zWrite)
  i1846.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[8], i1846.culling)
  i1846.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1847[9], i1846.blending)
  i1846.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1847[10], i1846.alphaBlending)
  i1846.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[11], i1846.colorWriteMask)
  i1846.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[12], i1846.offsetUnits)
  i1846.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[13], i1846.offsetFactor)
  i1846.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[14], i1846.stencilRef)
  i1846.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[15], i1846.stencilReadMask)
  i1846.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[16], i1846.stencilWriteMask)
  i1846.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1847[17], i1846.stencilOp)
  i1846.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1847[18], i1846.stencilOpFront)
  i1846.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1847[19], i1846.stencilOpBack)
  var i1849 = i1847[20]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1849[i + 0]) );
  }
  i1846.tags = i1848
  var i1851 = i1847[21]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( i1851[i + 0] );
  }
  i1846.passDefinedKeywords = i1850
  var i1853 = i1847[22]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1853[i + 0]) );
  }
  i1846.passDefinedKeywordGroups = i1852
  var i1855 = i1847[23]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1855[i + 0]) );
  }
  i1846.variants = i1854
  var i1857 = i1847[24]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1857[i + 0]) );
  }
  i1846.excludedVariants = i1856
  i1846.hasDepthReader = !!i1847[25]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1859 = data
  i1858.val = i1859[0]
  i1858.name = i1859[1]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1861 = data
  i1860.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1861[0], i1860.src)
  i1860.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1861[1], i1860.dst)
  i1860.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1861[2], i1860.op)
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1863 = data
  i1862.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[0], i1862.pass)
  i1862.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[1], i1862.fail)
  i1862.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[2], i1862.zFail)
  i1862.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[3], i1862.comp)
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.value = i1867[1]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1871 = data
  var i1873 = i1871[0]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( i1873[i + 0] );
  }
  i1870.keywords = i1872
  i1870.hasDiscard = !!i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1877 = data
  i1876.passId = i1877[0]
  i1876.subShaderIndex = i1877[1]
  var i1879 = i1877[2]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1876.keywords = i1878
  i1876.vertexProgram = i1877[3]
  i1876.fragmentProgram = i1877[4]
  i1876.exportedForWebGl2 = !!i1877[5]
  i1876.readDepth = !!i1877[6]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'shader')
  i1882.pass = i1883[2]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1887 = data
  i1886.name = i1887[0]
  i1886.type = i1887[1]
  i1886.value = new pc.Vec4( i1887[2], i1887[3], i1887[4], i1887[5] )
  i1886.textureValue = i1887[6]
  i1886.shaderPropertyFlag = i1887[7]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1889 = data
  i1888.name = i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'texture')
  i1888.aabb = i1889[3]
  i1888.vertices = i1889[4]
  i1888.triangles = i1889[5]
  i1888.textureRect = UnityEngine.Rect.MinMaxRect(i1889[6], i1889[7], i1889[8], i1889[9])
  i1888.packedRect = UnityEngine.Rect.MinMaxRect(i1889[10], i1889[11], i1889[12], i1889[13])
  i1888.border = new pc.Vec4( i1889[14], i1889[15], i1889[16], i1889[17] )
  i1888.transparency = i1889[18]
  i1888.bounds = i1889[19]
  i1888.pixelsPerUnit = i1889[20]
  i1888.textureWidth = i1889[21]
  i1888.textureHeight = i1889[22]
  i1888.nativeSize = new pc.Vec2( i1889[23], i1889[24] )
  i1888.pivot = new pc.Vec2( i1889[25], i1889[26] )
  i1888.textureRectOffset = new pc.Vec2( i1889[27], i1889[28] )
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.wrapMode = i1891[1]
  i1890.isLooping = !!i1891[2]
  i1890.length = i1891[3]
  var i1893 = i1891[4]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1893[i + 0]) );
  }
  i1890.curves = i1892
  var i1895 = i1891[5]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1895[i + 0]) );
  }
  i1890.events = i1894
  i1890.halfPrecision = !!i1891[6]
  i1890._frameRate = i1891[7]
  i1890.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1891[8], i1890.localBounds)
  i1890.hasMuscleCurves = !!i1891[9]
  var i1897 = i1891[10]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( i1897[i + 0] );
  }
  i1890.clipMuscleConstant = i1896
  i1890.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1891[11], i1890.clipBindingConstant)
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1901 = data
  i1900.path = i1901[0]
  i1900.hash = i1901[1]
  i1900.componentType = i1901[2]
  i1900.property = i1901[3]
  i1900.keys = i1901[4]
  var i1903 = i1901[5]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1903[i + 0]) );
  }
  i1900.objectReferenceKeys = i1902
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1907 = data
  i1906.time = i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'value')
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1911 = data
  i1910.functionName = i1911[0]
  i1910.floatParameter = i1911[1]
  i1910.intParameter = i1911[2]
  i1910.stringParameter = i1911[3]
  request.r(i1911[4], i1911[5], 0, i1910, 'objectReferenceParameter')
  i1910.time = i1911[6]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1913 = data
  i1912.center = new pc.Vec3( i1913[0], i1913[1], i1913[2] )
  i1912.extends = new pc.Vec3( i1913[3], i1913[4], i1913[5] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1917 = data
  var i1919 = i1917[0]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( i1919[i + 0] );
  }
  i1916.genericBindings = i1918
  var i1921 = i1917[1]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( i1921[i + 0] );
  }
  i1916.pptrCurveMapping = i1920
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.blendParameter = i1923[1]
  i1922.blendParameterY = i1923[2]
  i1922.blendType = i1923[3]
  var i1925 = i1923[4]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1925[i + 0]) );
  }
  i1922.children = i1924
  i1922.useAutomaticThresholds = !!i1923[5]
  i1922.minThreshold = i1923[6]
  i1922.maxThreshold = i1923[7]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'motion')
  i1928.threshold = i1929[2]
  i1928.position = new pc.Vec2( i1929[3], i1929[4] )
  i1928.timeScale = i1929[5]
  i1928.cycleOffset = i1929[6]
  i1928.directBlendParameter = i1929[7]
  i1928.mirror = !!i1929[8]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.ascent = i1931[1]
  i1930.originalLineHeight = i1931[2]
  i1930.fontSize = i1931[3]
  var i1933 = i1931[4]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1933[i + 0]) );
  }
  i1930.characterInfo = i1932
  request.r(i1931[5], i1931[6], 0, i1930, 'texture')
  i1930.originalFontSize = i1931[7]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1937 = data
  i1936.index = i1937[0]
  i1936.advance = i1937[1]
  i1936.bearing = i1937[2]
  i1936.glyphWidth = i1937[3]
  i1936.glyphHeight = i1937[4]
  i1936.minX = i1937[5]
  i1936.maxX = i1937[6]
  i1936.minY = i1937[7]
  i1936.maxY = i1937[8]
  i1936.uvBottomLeftX = i1937[9]
  i1936.uvBottomLeftY = i1937[10]
  i1936.uvBottomRightX = i1937[11]
  i1936.uvBottomRightY = i1937[12]
  i1936.uvTopLeftX = i1937[13]
  i1936.uvTopLeftY = i1937[14]
  i1936.uvTopRightX = i1937[15]
  i1936.uvTopRightY = i1937[16]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1939 = data
  i1938.name = i1939[0]
  var i1941 = i1939[1]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1941[i + 0]) );
  }
  i1938.layers = i1940
  var i1943 = i1939[2]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1943[i + 0]) );
  }
  i1938.parameters = i1942
  i1938.animationClips = i1939[3]
  i1938.avatarUnsupported = i1939[4]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.defaultWeight = i1947[1]
  i1946.blendingMode = i1947[2]
  i1946.avatarMask = i1947[3]
  i1946.syncedLayerIndex = i1947[4]
  i1946.syncedLayerAffectsTiming = !!i1947[5]
  i1946.syncedLayers = i1947[6]
  i1946.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1947[7], i1946.stateMachine)
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1949 = data
  i1948.id = i1949[0]
  i1948.name = i1949[1]
  i1948.path = i1949[2]
  var i1951 = i1949[3]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1951[i + 0]) );
  }
  i1948.states = i1950
  var i1953 = i1949[4]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1953[i + 0]) );
  }
  i1948.machines = i1952
  var i1955 = i1949[5]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1955[i + 0]) );
  }
  i1948.entryStateTransitions = i1954
  var i1957 = i1949[6]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1957[i + 0]) );
  }
  i1948.exitStateTransitions = i1956
  var i1959 = i1949[7]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1959[i + 0]) );
  }
  i1948.anyStateTransitions = i1958
  i1948.defaultStateId = i1949[8]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1963 = data
  i1962.id = i1963[0]
  i1962.name = i1963[1]
  i1962.cycleOffset = i1963[2]
  i1962.cycleOffsetParameter = i1963[3]
  i1962.cycleOffsetParameterActive = !!i1963[4]
  i1962.mirror = !!i1963[5]
  i1962.mirrorParameter = i1963[6]
  i1962.mirrorParameterActive = !!i1963[7]
  i1962.motionId = i1963[8]
  i1962.nameHash = i1963[9]
  i1962.fullPathHash = i1963[10]
  i1962.speed = i1963[11]
  i1962.speedParameter = i1963[12]
  i1962.speedParameterActive = !!i1963[13]
  i1962.tag = i1963[14]
  i1962.tagHash = i1963[15]
  i1962.writeDefaultValues = !!i1963[16]
  var i1965 = i1963[17]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 2) {
  request.r(i1965[i + 0], i1965[i + 1], 2, i1964, '')
  }
  i1962.behaviours = i1964
  var i1967 = i1963[18]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1967[i + 0]) );
  }
  i1962.transitions = i1966
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1973 = data
  i1972.fullPath = i1973[0]
  i1972.canTransitionToSelf = !!i1973[1]
  i1972.duration = i1973[2]
  i1972.exitTime = i1973[3]
  i1972.hasExitTime = !!i1973[4]
  i1972.hasFixedDuration = !!i1973[5]
  i1972.interruptionSource = i1973[6]
  i1972.offset = i1973[7]
  i1972.orderedInterruption = !!i1973[8]
  i1972.destinationStateId = i1973[9]
  i1972.isExit = !!i1973[10]
  i1972.mute = !!i1973[11]
  i1972.solo = !!i1973[12]
  var i1975 = i1973[13]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1975[i + 0]) );
  }
  i1972.conditions = i1974
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1979 = data
  i1978.mode = i1979[0]
  i1978.parameter = i1979[1]
  i1978.threshold = i1979[2]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1985 = data
  i1984.destinationStateId = i1985[0]
  i1984.isExit = !!i1985[1]
  i1984.mute = !!i1985[2]
  i1984.solo = !!i1985[3]
  var i1987 = i1985[4]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1987[i + 0]) );
  }
  i1984.conditions = i1986
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1991 = data
  i1990.defaultBool = !!i1991[0]
  i1990.defaultFloat = i1991[1]
  i1990.defaultInt = i1991[2]
  i1990.name = i1991[3]
  i1990.nameHash = i1991[4]
  i1990.type = i1991[5]
  return i1990
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1993 = data
  i1992.useSafeMode = !!i1993[0]
  i1992.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1993[1], i1992.safeModeOptions)
  i1992.timeScale = i1993[2]
  i1992.unscaledTimeScale = i1993[3]
  i1992.useSmoothDeltaTime = !!i1993[4]
  i1992.maxSmoothUnscaledTime = i1993[5]
  i1992.rewindCallbackMode = i1993[6]
  i1992.showUnityEditorReport = !!i1993[7]
  i1992.logBehaviour = i1993[8]
  i1992.drawGizmos = !!i1993[9]
  i1992.defaultRecyclable = !!i1993[10]
  i1992.defaultAutoPlay = i1993[11]
  i1992.defaultUpdateType = i1993[12]
  i1992.defaultTimeScaleIndependent = !!i1993[13]
  i1992.defaultEaseType = i1993[14]
  i1992.defaultEaseOvershootOrAmplitude = i1993[15]
  i1992.defaultEasePeriod = i1993[16]
  i1992.defaultAutoKill = !!i1993[17]
  i1992.defaultLoopType = i1993[18]
  i1992.debugMode = !!i1993[19]
  i1992.debugStoreTargetId = !!i1993[20]
  i1992.showPreviewPanel = !!i1993[21]
  i1992.storeSettingsLocation = i1993[22]
  i1992.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1993[23], i1992.modules)
  i1992.createASMDEF = !!i1993[24]
  i1992.showPlayingTweens = !!i1993[25]
  i1992.showPausedTweens = !!i1993[26]
  return i1992
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1994 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1995 = data
  i1994.logBehaviour = i1995[0]
  i1994.nestedTweenFailureBehaviour = i1995[1]
  return i1994
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1997 = data
  i1996.showPanel = !!i1997[0]
  i1996.audioEnabled = !!i1997[1]
  i1996.physicsEnabled = !!i1997[2]
  i1996.physics2DEnabled = !!i1997[3]
  i1996.spriteEnabled = !!i1997[4]
  i1996.uiEnabled = !!i1997[5]
  i1996.textMeshProEnabled = !!i1997[6]
  i1996.tk2DEnabled = !!i1997[7]
  i1996.deAudioEnabled = !!i1997[8]
  i1996.deUnityExtendedEnabled = !!i1997[9]
  i1996.epoOutlineEnabled = !!i1997[10]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2001[i + 0]) );
  }
  i1998.files = i2000
  i1998.componentToPrefabIds = i1999[1]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2005 = data
  i2004.path = i2005[0]
  request.r(i2005[1], i2005[2], 0, i2004, 'unityObject')
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2007 = data
  var i2009 = i2007[0]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2009[i + 0]) );
  }
  i2006.scriptsExecutionOrder = i2008
  var i2011 = i2007[1]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2011[i + 0]) );
  }
  i2006.sortingLayers = i2010
  var i2013 = i2007[2]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2013[i + 0]) );
  }
  i2006.cullingLayers = i2012
  i2006.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2007[3], i2006.timeSettings)
  i2006.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2007[4], i2006.physicsSettings)
  i2006.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2007[5], i2006.physics2DSettings)
  i2006.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2007[6], i2006.qualitySettings)
  i2006.enableRealtimeShadows = !!i2007[7]
  i2006.enableAutoInstancing = !!i2007[8]
  i2006.enableDynamicBatching = !!i2007[9]
  i2006.lightmapEncodingQuality = i2007[10]
  i2006.desiredColorSpace = i2007[11]
  var i2015 = i2007[12]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( i2015[i + 0] );
  }
  i2006.allTags = i2014
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.value = i2019[1]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2023 = data
  i2022.id = i2023[0]
  i2022.name = i2023[1]
  i2022.value = i2023[2]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2027 = data
  i2026.id = i2027[0]
  i2026.name = i2027[1]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2029 = data
  i2028.fixedDeltaTime = i2029[0]
  i2028.maximumDeltaTime = i2029[1]
  i2028.timeScale = i2029[2]
  i2028.maximumParticleTimestep = i2029[3]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2031 = data
  i2030.gravity = new pc.Vec3( i2031[0], i2031[1], i2031[2] )
  i2030.defaultSolverIterations = i2031[3]
  i2030.bounceThreshold = i2031[4]
  i2030.autoSyncTransforms = !!i2031[5]
  i2030.autoSimulation = !!i2031[6]
  var i2033 = i2031[7]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2033[i + 0]) );
  }
  i2030.collisionMatrix = i2032
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2037 = data
  i2036.enabled = !!i2037[0]
  i2036.layerId = i2037[1]
  i2036.otherLayerId = i2037[2]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'material')
  i2038.gravity = new pc.Vec2( i2039[2], i2039[3] )
  i2038.positionIterations = i2039[4]
  i2038.velocityIterations = i2039[5]
  i2038.velocityThreshold = i2039[6]
  i2038.maxLinearCorrection = i2039[7]
  i2038.maxAngularCorrection = i2039[8]
  i2038.maxTranslationSpeed = i2039[9]
  i2038.maxRotationSpeed = i2039[10]
  i2038.baumgarteScale = i2039[11]
  i2038.baumgarteTOIScale = i2039[12]
  i2038.timeToSleep = i2039[13]
  i2038.linearSleepTolerance = i2039[14]
  i2038.angularSleepTolerance = i2039[15]
  i2038.defaultContactOffset = i2039[16]
  i2038.autoSimulation = !!i2039[17]
  i2038.queriesHitTriggers = !!i2039[18]
  i2038.queriesStartInColliders = !!i2039[19]
  i2038.callbacksOnDisable = !!i2039[20]
  i2038.reuseCollisionCallbacks = !!i2039[21]
  i2038.autoSyncTransforms = !!i2039[22]
  var i2041 = i2039[23]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2041[i + 0]) );
  }
  i2038.collisionMatrix = i2040
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2045 = data
  i2044.enabled = !!i2045[0]
  i2044.layerId = i2045[1]
  i2044.otherLayerId = i2045[2]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2049[i + 0]) );
  }
  i2046.qualityLevels = i2048
  var i2051 = i2047[1]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( i2051[i + 0] );
  }
  i2046.names = i2050
  i2046.shadows = i2047[2]
  i2046.anisotropicFiltering = i2047[3]
  i2046.antiAliasing = i2047[4]
  i2046.lodBias = i2047[5]
  i2046.shadowCascades = i2047[6]
  i2046.shadowDistance = i2047[7]
  i2046.shadowmaskMode = i2047[8]
  i2046.shadowProjection = i2047[9]
  i2046.shadowResolution = i2047[10]
  i2046.softParticles = !!i2047[11]
  i2046.softVegetation = !!i2047[12]
  i2046.activeColorSpace = i2047[13]
  i2046.desiredColorSpace = i2047[14]
  i2046.masterTextureLimit = i2047[15]
  i2046.maxQueuedFrames = i2047[16]
  i2046.particleRaycastBudget = i2047[17]
  i2046.pixelLightCount = i2047[18]
  i2046.realtimeReflectionProbes = !!i2047[19]
  i2046.shadowCascade2Split = i2047[20]
  i2046.shadowCascade4Split = new pc.Vec3( i2047[21], i2047[22], i2047[23] )
  i2046.streamingMipmapsActive = !!i2047[24]
  i2046.vSyncCount = i2047[25]
  i2046.asyncUploadBufferSize = i2047[26]
  i2046.asyncUploadTimeSlice = i2047[27]
  i2046.billboardsFaceCameraPosition = !!i2047[28]
  i2046.shadowNearPlaneOffset = i2047[29]
  i2046.streamingMipmapsMemoryBudget = i2047[30]
  i2046.maximumLODLevel = i2047[31]
  i2046.streamingMipmapsAddAllCameras = !!i2047[32]
  i2046.streamingMipmapsMaxLevelReduction = i2047[33]
  i2046.streamingMipmapsRenderersPerFrame = i2047[34]
  i2046.resolutionScalingFixedDPIFactor = i2047[35]
  i2046.streamingMipmapsMaxFileIORequests = i2047[36]
  i2046.currentQualityLevel = i2047[37]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2055 = data
  i2054.name = i2055[0]
  var i2057 = i2055[1]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2057[i + 0]) );
  }
  i2054.tos = i2056
  var i2059 = i2055[2]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( i2059[i + 0] );
  }
  i2054.constant = i2058
  i2054.isValid = !!i2055[3]
  i2054.isHuman = !!i2055[4]
  i2054.hasRootMotion = !!i2055[5]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2063 = data
  i2062.hash = i2063[0]
  i2062.path = i2063[1]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2067 = data
  i2066.weight = i2067[0]
  i2066.vertices = i2067[1]
  i2066.normals = i2067[2]
  i2066.tangents = i2067[3]
  return i2066
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

Deserializers.buildID = "387d5a5e-8b5c-4ebe-bb83-ae8076bc8a22";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

