var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointSpring' )
  var i529 = data
  i528.spring = i529[0]
  i528.damper = i529[1]
  i528.targetPosition = i529[2]
  return i528
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointMotor' )
  var i531 = data
  i530.m_TargetVelocity = i531[0]
  i530.m_Force = i531[1]
  i530.m_FreeSpin = i531[2]
  return i530
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointLimits' )
  var i533 = data
  i532.m_Min = i533[0]
  i532.m_Max = i533[1]
  i532.m_Bounciness = i533[2]
  i532.m_BounceMinVelocity = i533[3]
  i532.m_ContactDistance = i533[4]
  i532.minBounce = i533[5]
  i532.maxBounce = i533[6]
  return i532
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointDrive' )
  var i535 = data
  i534.m_PositionSpring = i535[0]
  i534.m_PositionDamper = i535[1]
  i534.m_MaximumForce = i535[2]
  return i534
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i537 = data
  i536.m_Spring = i537[0]
  i536.m_Damper = i537[1]
  return i536
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i539 = data
  i538.m_Limit = i539[0]
  i538.m_Bounciness = i539[1]
  i538.m_ContactDistance = i539[2]
  return i538
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i541 = data
  i540.m_ExtremumSlip = i541[0]
  i540.m_ExtremumValue = i541[1]
  i540.m_AsymptoteSlip = i541[2]
  i540.m_AsymptoteValue = i541[3]
  i540.m_Stiffness = i541[4]
  return i540
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i543 = data
  i542.m_LowerAngle = i543[0]
  i542.m_UpperAngle = i543[1]
  return i542
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i545 = data
  i544.m_MotorSpeed = i545[0]
  i544.m_MaximumMotorTorque = i545[1]
  return i544
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i547 = data
  i546.m_DampingRatio = i547[0]
  i546.m_Frequency = i547[1]
  i546.m_Angle = i547[2]
  return i546
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i549 = data
  i548.m_LowerTranslation = i549[0]
  i548.m_UpperTranslation = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i550 = root || new pc.UnityMaterial()
  var i551 = data
  i550.name = i551[0]
  request.r(i551[1], i551[2], 0, i550, 'shader')
  i550.renderQueue = i551[3]
  i550.enableInstancing = !!i551[4]
  var i553 = i551[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i553[i + 0]) );
  }
  i550.floatParameters = i552
  var i555 = i551[6]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i555[i + 0]) );
  }
  i550.colorParameters = i554
  var i557 = i551[7]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i557[i + 0]) );
  }
  i550.vectorParameters = i556
  var i559 = i551[8]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i559[i + 0]) );
  }
  i550.textureParameters = i558
  var i561 = i551[9]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i561[i + 0]) );
  }
  i550.materialFlags = i560
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Color(i569[1], i569[2], i569[3], i569[4])
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = new pc.Vec4( i573[1], i573[2], i573[3], i573[4] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i577 = data
  i576.name = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'value')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i581 = data
  i580.name = i581[0]
  i580.enabled = !!i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i583 = data
  i582.name = i583[0]
  i582.width = i583[1]
  i582.height = i583[2]
  i582.mipmapCount = i583[3]
  i582.anisoLevel = i583[4]
  i582.filterMode = i583[5]
  i582.hdr = !!i583[6]
  i582.format = i583[7]
  i582.wrapMode = i583[8]
  i582.alphaIsTransparency = !!i583[9]
  i582.alphaSource = i583[10]
  i582.graphicsFormat = i583[11]
  i582.sRGBTexture = !!i583[12]
  i582.desiredColorSpace = i583[13]
  i582.wrapU = i583[14]
  i582.wrapV = i583[15]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i585 = data
  i584.name = i585[0]
  i584.halfPrecision = !!i585[1]
  i584.useUInt32IndexFormat = !!i585[2]
  i584.vertexCount = i585[3]
  i584.aabb = i585[4]
  var i587 = i585[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( !!i587[i + 0] );
  }
  i584.streams = i586
  i584.vertices = i585[6]
  var i589 = i585[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i589[i + 0]) );
  }
  i584.subMeshes = i588
  var i591 = i585[8]
  var i590 = []
  for(var i = 0; i < i591.length; i += 16) {
    i590.push( new pc.Mat4().setData(i591[i + 0], i591[i + 1], i591[i + 2], i591[i + 3],  i591[i + 4], i591[i + 5], i591[i + 6], i591[i + 7],  i591[i + 8], i591[i + 9], i591[i + 10], i591[i + 11],  i591[i + 12], i591[i + 13], i591[i + 14], i591[i + 15]) );
  }
  i584.bindposes = i590
  var i593 = i585[9]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i593[i + 0]) );
  }
  i584.blendShapes = i592
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i599 = data
  i598.triangles = i599[0]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i605 = data
  i604.name = i605[0]
  var i607 = i605[1]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i607[i + 0]) );
  }
  i604.frames = i606
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i609 = data
  i608.name = i609[0]
  i608.atlasId = i609[1]
  i608.mipmapCount = i609[2]
  i608.hdr = !!i609[3]
  i608.size = i609[4]
  i608.anisoLevel = i609[5]
  i608.filterMode = i609[6]
  var i611 = i609[7]
  var i610 = []
  for(var i = 0; i < i611.length; i += 4) {
    i610.push( UnityEngine.Rect.MinMaxRect(i611[i + 0], i611[i + 1], i611[i + 2], i611[i + 3]) );
  }
  i608.rects = i610
  i608.wrapU = i609[8]
  i608.wrapV = i609[9]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i615 = data
  i614.name = i615[0]
  i614.index = i615[1]
  i614.startup = !!i615[2]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i617 = data
  i616.position = new pc.Vec3( i617[0], i617[1], i617[2] )
  i616.scale = new pc.Vec3( i617[3], i617[4], i617[5] )
  i616.rotation = new pc.Quat(i617[6], i617[7], i617[8], i617[9])
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i619 = data
  i618.enabled = !!i619[0]
  i618.aspect = i619[1]
  i618.orthographic = !!i619[2]
  i618.orthographicSize = i619[3]
  i618.backgroundColor = new pc.Color(i619[4], i619[5], i619[6], i619[7])
  i618.nearClipPlane = i619[8]
  i618.farClipPlane = i619[9]
  i618.fieldOfView = i619[10]
  i618.depth = i619[11]
  i618.clearFlags = i619[12]
  i618.cullingMask = i619[13]
  i618.rect = i619[14]
  request.r(i619[15], i619[16], 0, i618, 'targetTexture')
  i618.usePhysicalProperties = !!i619[17]
  i618.focalLength = i619[18]
  i618.sensorSize = new pc.Vec2( i619[19], i619[20] )
  i618.lensShift = new pc.Vec2( i619[21], i619[22] )
  i618.gateFit = i619[23]
  i618.commandBufferCount = i619[24]
  i618.cameraType = i619[25]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i621 = data
  i620.name = i621[0]
  i620.tagId = i621[1]
  i620.enabled = !!i621[2]
  i620.isStatic = !!i621[3]
  i620.layer = i621[4]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.type = i623[1]
  i622.color = new pc.Color(i623[2], i623[3], i623[4], i623[5])
  i622.cullingMask = i623[6]
  i622.intensity = i623[7]
  i622.range = i623[8]
  i622.spotAngle = i623[9]
  i622.shadows = i623[10]
  i622.shadowNormalBias = i623[11]
  i622.shadowBias = i623[12]
  i622.shadowStrength = i623[13]
  i622.shadowResolution = i623[14]
  i622.lightmapBakeType = i623[15]
  i622.renderMode = i623[16]
  request.r(i623[17], i623[18], 0, i622, 'cookie')
  i622.cookieSize = i623[19]
  return i622
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

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_FirstSelected')
  i690.m_sendNavigationEvents = !!i691[2]
  i690.m_DragThreshold = i691[3]
  return i690
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i693 = data
  i692.m_HorizontalAxis = i693[0]
  i692.m_VerticalAxis = i693[1]
  i692.m_SubmitButton = i693[2]
  i692.m_CancelButton = i693[3]
  i692.m_InputActionsPerSecond = i693[4]
  i692.m_RepeatDelay = i693[5]
  i692.m_ForceModuleActive = !!i693[6]
  i692.m_SendPointerHoverToParent = !!i693[7]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i695 = data
  i694.pivot = new pc.Vec2( i695[0], i695[1] )
  i694.anchorMin = new pc.Vec2( i695[2], i695[3] )
  i694.anchorMax = new pc.Vec2( i695[4], i695[5] )
  i694.sizeDelta = new pc.Vec2( i695[6], i695[7] )
  i694.anchoredPosition3D = new pc.Vec3( i695[8], i695[9], i695[10] )
  i694.rotation = new pc.Quat(i695[11], i695[12], i695[13], i695[14])
  i694.scale = new pc.Vec3( i695[15], i695[16], i695[17] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i697 = data
  i696.enabled = !!i697[0]
  i696.planeDistance = i697[1]
  i696.referencePixelsPerUnit = i697[2]
  i696.isFallbackOverlay = !!i697[3]
  i696.renderMode = i697[4]
  i696.renderOrder = i697[5]
  i696.sortingLayerName = i697[6]
  i696.sortingOrder = i697[7]
  i696.scaleFactor = i697[8]
  request.r(i697[9], i697[10], 0, i696, 'worldCamera')
  i696.overrideSorting = !!i697[11]
  i696.pixelPerfect = !!i697[12]
  i696.targetDisplay = i697[13]
  i696.overridePixelPerfect = !!i697[14]
  return i696
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i699 = data
  i698.m_UiScaleMode = i699[0]
  i698.m_ReferencePixelsPerUnit = i699[1]
  i698.m_ScaleFactor = i699[2]
  i698.m_ReferenceResolution = new pc.Vec2( i699[3], i699[4] )
  i698.m_ScreenMatchMode = i699[5]
  i698.m_MatchWidthOrHeight = i699[6]
  i698.m_PhysicalUnit = i699[7]
  i698.m_FallbackScreenDPI = i699[8]
  i698.m_DefaultSpriteDPI = i699[9]
  i698.m_DynamicPixelsPerUnit = i699[10]
  i698.m_PresetInfoIsWorld = !!i699[11]
  return i698
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i701 = data
  i700.m_IgnoreReversedGraphics = !!i701[0]
  i700.m_BlockingObjects = i701[1]
  i700.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i701[2] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'animatorController')
  request.r(i703[2], i703[3], 0, i702, 'avatar')
  i702.updateMode = i703[4]
  i702.hasTransformHierarchy = !!i703[5]
  i702.applyRootMotion = !!i703[6]
  var i705 = i703[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.humanBones = i704
  i702.enabled = !!i703[8]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i709 = data
  i708.cullTransparentMesh = !!i709[0]
  return i708
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.Image' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Sprite')
  i710.m_Type = i711[2]
  i710.m_PreserveAspect = !!i711[3]
  i710.m_FillCenter = !!i711[4]
  i710.m_FillMethod = i711[5]
  i710.m_FillAmount = i711[6]
  i710.m_FillClockwise = !!i711[7]
  i710.m_FillOrigin = i711[8]
  i710.m_UseSpriteMesh = !!i711[9]
  i710.m_PixelsPerUnitMultiplier = i711[10]
  request.r(i711[11], i711[12], 0, i710, 'm_Material')
  i710.m_Maskable = !!i711[13]
  i710.m_Color = new pc.Color(i711[14], i711[15], i711[16], i711[17])
  i710.m_RaycastTarget = !!i711[18]
  i710.m_RaycastPadding = new pc.Vec4( i711[19], i711[20], i711[21], i711[22] )
  return i710
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Text' )
  var i713 = data
  i712.m_FontData = request.d('UnityEngine.UI.FontData', i713[0], i712.m_FontData)
  i712.m_Text = i713[1]
  request.r(i713[2], i713[3], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[4]
  i712.m_Color = new pc.Color(i713[5], i713[6], i713[7], i713[8])
  i712.m_RaycastTarget = !!i713[9]
  i712.m_RaycastPadding = new pc.Vec4( i713[10], i713[11], i713[12], i713[13] )
  return i712
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.FontData' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_Font')
  i714.m_FontSize = i715[2]
  i714.m_FontStyle = i715[3]
  i714.m_BestFit = !!i715[4]
  i714.m_MinSize = i715[5]
  i714.m_MaxSize = i715[6]
  i714.m_Alignment = i715[7]
  i714.m_AlignByGeometry = !!i715[8]
  i714.m_RichText = !!i715[9]
  i714.m_HorizontalOverflow = i715[10]
  i714.m_VerticalOverflow = i715[11]
  i714.m_LineSpacing = i715[12]
  return i714
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Outline' )
  var i717 = data
  i716.m_EffectColor = new pc.Color(i717[0], i717[1], i717[2], i717[3])
  i716.m_EffectDistance = new pc.Vec2( i717[4], i717[5] )
  i716.m_UseGraphicAlpha = !!i717[6]
  return i716
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i719 = data
  i718.m_EffectColor = new pc.Color(i719[0], i719[1], i719[2], i719[3])
  i718.m_EffectDistance = new pc.Vec2( i719[4], i719[5] )
  i718.m_UseGraphicAlpha = !!i719[6]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i721 = data
  i720.m_Alpha = i721[0]
  i720.m_Interactable = !!i721[1]
  i720.m_BlocksRaycasts = !!i721[2]
  i720.m_IgnoreParentGroups = !!i721[3]
  i720.enabled = !!i721[4]
  return i720
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Button' )
  var i723 = data
  i722.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i723[0], i722.m_OnClick)
  i722.m_Navigation = request.d('UnityEngine.UI.Navigation', i723[1], i722.m_Navigation)
  i722.m_Transition = i723[2]
  i722.m_Colors = request.d('UnityEngine.UI.ColorBlock', i723[3], i722.m_Colors)
  i722.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i723[4], i722.m_SpriteState)
  i722.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i723[5], i722.m_AnimationTriggers)
  i722.m_Interactable = !!i723[6]
  request.r(i723[7], i723[8], 0, i722, 'm_TargetGraphic')
  return i722
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i725 = data
  i724.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i725[0], i724.m_PersistentCalls)
  return i724
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('UnityEngine.Events.PersistentCall', i729[i + 0]));
  }
  i726.m_Calls = i728
  return i726
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Target')
  i732.m_TargetAssemblyTypeName = i733[2]
  i732.m_MethodName = i733[3]
  i732.m_Mode = i733[4]
  i732.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i733[5], i732.m_Arguments)
  i732.m_CallState = i733[6]
  return i732
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_ObjectArgument')
  i734.m_ObjectArgumentAssemblyTypeName = i735[2]
  i734.m_IntArgument = i735[3]
  i734.m_FloatArgument = i735[4]
  i734.m_StringArgument = i735[5]
  i734.m_BoolArgument = !!i735[6]
  return i734
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i737 = data
  i736.m_Mode = i737[0]
  i736.m_WrapAround = !!i737[1]
  request.r(i737[2], i737[3], 0, i736, 'm_SelectOnUp')
  request.r(i737[4], i737[5], 0, i736, 'm_SelectOnDown')
  request.r(i737[6], i737[7], 0, i736, 'm_SelectOnLeft')
  request.r(i737[8], i737[9], 0, i736, 'm_SelectOnRight')
  return i736
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i739 = data
  i738.m_NormalColor = new pc.Color(i739[0], i739[1], i739[2], i739[3])
  i738.m_HighlightedColor = new pc.Color(i739[4], i739[5], i739[6], i739[7])
  i738.m_PressedColor = new pc.Color(i739[8], i739[9], i739[10], i739[11])
  i738.m_SelectedColor = new pc.Color(i739[12], i739[13], i739[14], i739[15])
  i738.m_DisabledColor = new pc.Color(i739[16], i739[17], i739[18], i739[19])
  i738.m_ColorMultiplier = i739[20]
  i738.m_FadeDuration = i739[21]
  return i738
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_HighlightedSprite')
  request.r(i741[2], i741[3], 0, i740, 'm_PressedSprite')
  request.r(i741[4], i741[5], 0, i740, 'm_SelectedSprite')
  request.r(i741[6], i741[7], 0, i740, 'm_DisabledSprite')
  return i740
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i743 = data
  i742.m_NormalTrigger = i743[0]
  i742.m_HighlightedTrigger = i743[1]
  i742.m_PressedTrigger = i743[2]
  i742.m_SelectedTrigger = i743[3]
  i742.m_DisabledTrigger = i743[4]
  return i742
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i745 = data
  i744.m_HorizontalFit = i745[0]
  i744.m_VerticalFit = i745[1]
  return i744
}

Deserializers["Level"] = function (request, data, root) {
  var i746 = root || request.c( 'Level' )
  var i747 = data
  var i749 = i747[0]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i746.lstCouple = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i753 = data
  i752.enabled = !!i753[0]
  request.r(i753[1], i753[2], 0, i752, 'sharedMaterial')
  var i755 = i753[3]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 2, i754, '')
  }
  i752.sharedMaterials = i754
  i752.receiveShadows = !!i753[4]
  i752.shadowCastingMode = i753[5]
  i752.sortingLayerID = i753[6]
  i752.sortingOrder = i753[7]
  i752.lightmapIndex = i753[8]
  i752.lightmapSceneIndex = i753[9]
  i752.lightmapScaleOffset = new pc.Vec4( i753[10], i753[11], i753[12], i753[13] )
  i752.lightProbeUsage = i753[14]
  i752.reflectionProbeUsage = i753[15]
  i752.color = new pc.Color(i753[16], i753[17], i753[18], i753[19])
  request.r(i753[20], i753[21], 0, i752, 'sprite')
  i752.flipX = !!i753[22]
  i752.flipY = !!i753[23]
  i752.drawMode = i753[24]
  i752.size = new pc.Vec2( i753[25], i753[26] )
  i752.tileMode = i753[27]
  i752.adaptiveModeThreshold = i753[28]
  i752.maskInteraction = i753[29]
  i752.spriteSortPoint = i753[30]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'sharedMesh')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'additionalVertexStreams')
  i758.enabled = !!i759[2]
  request.r(i759[3], i759[4], 0, i758, 'sharedMaterial')
  var i761 = i759[5]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.sharedMaterials = i760
  i758.receiveShadows = !!i759[6]
  i758.shadowCastingMode = i759[7]
  i758.sortingLayerID = i759[8]
  i758.sortingOrder = i759[9]
  i758.lightmapIndex = i759[10]
  i758.lightmapSceneIndex = i759[11]
  i758.lightmapScaleOffset = new pc.Vec4( i759[12], i759[13], i759[14], i759[15] )
  i758.lightProbeUsage = i759[16]
  i758.reflectionProbeUsage = i759[17]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i763 = data
  i762.playAutomatically = !!i763[0]
  request.r(i763[1], i763[2], 0, i762, 'clip')
  var i765 = i763[3]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.clips = i764
  i762.wrapMode = i763[4]
  i762.enabled = !!i763[5]
  return i762
}

Deserializers["Car"] = function (request, data, root) {
  var i768 = root || request.c( 'Car' )
  var i769 = data
  i768.typeColor = i769[0]
  i768.isContainHuman = !!i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i771 = data
  i770.center = new pc.Vec3( i771[0], i771[1], i771[2] )
  i770.size = new pc.Vec3( i771[3], i771[4], i771[5] )
  i770.enabled = !!i771[6]
  i770.isTrigger = !!i771[7]
  request.r(i771[8], i771[9], 0, i770, 'material')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i773 = data
  i772.textureMode = i773[0]
  i772.alignment = i773[1]
  i772.widthCurve = new pc.AnimationCurve( { keys_flow: i773[2] } )
  i772.colorGradient = i773[3] ? new pc.ColorGradient(i773[3][0], i773[3][1], i773[3][2]) : null
  var i775 = i773[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 3) {
    i774.push( new pc.Vec3( i775[i + 0], i775[i + 1], i775[i + 2] ) );
  }
  i772.positions = i774
  i772.positionCount = i773[5]
  i772.widthMultiplier = i773[6]
  i772.startWidth = i773[7]
  i772.endWidth = i773[8]
  i772.numCornerVertices = i773[9]
  i772.numCapVertices = i773[10]
  i772.useWorldSpace = !!i773[11]
  i772.loop = !!i773[12]
  i772.startColor = new pc.Color(i773[13], i773[14], i773[15], i773[16])
  i772.endColor = new pc.Color(i773[17], i773[18], i773[19], i773[20])
  i772.generateLightingData = !!i773[21]
  i772.enabled = !!i773[22]
  request.r(i773[23], i773[24], 0, i772, 'sharedMaterial')
  var i777 = i773[25]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i772.sharedMaterials = i776
  i772.receiveShadows = !!i773[26]
  i772.shadowCastingMode = i773[27]
  i772.sortingLayerID = i773[28]
  i772.sortingOrder = i773[29]
  i772.lightmapIndex = i773[30]
  i772.lightmapSceneIndex = i773[31]
  i772.lightmapScaleOffset = new pc.Vec4( i773[32], i773[33], i773[34], i773[35] )
  i772.lightProbeUsage = i773[36]
  i772.reflectionProbeUsage = i773[37]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i781 = data
  i780.mass = i781[0]
  i780.drag = i781[1]
  i780.angularDrag = i781[2]
  i780.useGravity = !!i781[3]
  i780.isKinematic = !!i781[4]
  i780.constraints = i781[5]
  i780.maxAngularVelocity = i781[6]
  i780.collisionDetectionMode = i781[7]
  i780.interpolation = i781[8]
  return i780
}

Deserializers["Stickman"] = function (request, data, root) {
  var i782 = root || request.c( 'Stickman' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'arrayLinePoint')
  i782.typeColor = i783[2]
  request.r(i783[3], i783[4], 0, i782, 'animator')
  request.r(i783[5], i783[6], 0, i782, 'lineRenderer')
  i782.speed = i783[7]
  i782.timeRotate = i783[8]
  i782.pointRemoveThreshold = i783[9]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i785 = data
  i784.enabled = !!i785[0]
  request.r(i785[1], i785[2], 0, i784, 'sharedMaterial')
  var i787 = i785[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sharedMaterials = i786
  i784.receiveShadows = !!i785[4]
  i784.shadowCastingMode = i785[5]
  i784.sortingLayerID = i785[6]
  i784.sortingOrder = i785[7]
  i784.lightmapIndex = i785[8]
  i784.lightmapSceneIndex = i785[9]
  i784.lightmapScaleOffset = new pc.Vec4( i785[10], i785[11], i785[12], i785[13] )
  i784.lightProbeUsage = i785[14]
  i784.reflectionProbeUsage = i785[15]
  request.r(i785[16], i785[17], 0, i784, 'sharedMesh')
  var i789 = i785[18]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i784.bones = i788
  i784.updateWhenOffscreen = !!i785[19]
  i784.localBounds = i785[20]
  request.r(i785[21], i785[22], 0, i784, 'rootBone')
  var i791 = i785[23]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i791[i + 0]) );
  }
  i784.blendShapesWeights = i790
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i795 = data
  i794.weight = i795[0]
  return i794
}

Deserializers["PLY01Manager"] = function (request, data, root) {
  var i796 = root || request.c( 'PLY01Manager' )
  var i797 = data
  i796.isEndGame = !!i797[0]
  return i796
}

Deserializers["GamePlayController"] = function (request, data, root) {
  var i798 = root || request.c( 'GamePlayController' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'camera')
  request.r(i799[2], i799[3], 0, i798, 'fxTap')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i801 = data
  i800.ambientIntensity = i801[0]
  i800.reflectionIntensity = i801[1]
  i800.ambientMode = i801[2]
  i800.ambientLight = new pc.Color(i801[3], i801[4], i801[5], i801[6])
  i800.ambientSkyColor = new pc.Color(i801[7], i801[8], i801[9], i801[10])
  i800.ambientGroundColor = new pc.Color(i801[11], i801[12], i801[13], i801[14])
  i800.ambientEquatorColor = new pc.Color(i801[15], i801[16], i801[17], i801[18])
  i800.fogColor = new pc.Color(i801[19], i801[20], i801[21], i801[22])
  i800.fogEndDistance = i801[23]
  i800.fogStartDistance = i801[24]
  i800.fogDensity = i801[25]
  i800.fog = !!i801[26]
  request.r(i801[27], i801[28], 0, i800, 'skybox')
  i800.fogMode = i801[29]
  var i803 = i801[30]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i803[i + 0]) );
  }
  i800.lightmaps = i802
  i800.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i801[31], i800.lightProbes)
  i800.lightmapsMode = i801[32]
  i800.mixedBakeMode = i801[33]
  i800.environmentLightingMode = i801[34]
  i800.ambientProbe = new pc.SphericalHarmonicsL2(i801[35])
  i800.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i801[36])
  i800.useReferenceAmbientProbe = !!i801[37]
  request.r(i801[38], i801[39], 0, i800, 'customReflection')
  request.r(i801[40], i801[41], 0, i800, 'defaultReflection')
  i800.defaultReflectionMode = i801[42]
  i800.defaultReflectionResolution = i801[43]
  i800.sunLightObjectId = i801[44]
  i800.pixelLightCount = i801[45]
  i800.defaultReflectionHDR = !!i801[46]
  i800.hasLightDataAsset = !!i801[47]
  i800.hasManualGenerate = !!i801[48]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'lightmapColor')
  request.r(i807[2], i807[3], 0, i806, 'lightmapDirection')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i808 = root || new UnityEngine.LightProbes()
  var i809 = data
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i815 = data
  var i817 = i815[0]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i817[i + 0]));
  }
  i814.ShaderCompilationErrors = i816
  i814.name = i815[1]
  i814.guid = i815[2]
  var i819 = i815[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.shaderDefinedKeywords = i818
  var i821 = i815[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i821[i + 0]) );
  }
  i814.passes = i820
  var i823 = i815[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i823[i + 0]) );
  }
  i814.usePasses = i822
  var i825 = i815[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i825[i + 0]) );
  }
  i814.defaultParameterValues = i824
  request.r(i815[7], i815[8], 0, i814, 'unityFallbackShader')
  i814.readDepth = !!i815[9]
  i814.isCreatedByShaderGraph = !!i815[10]
  i814.compiled = !!i815[11]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i829 = data
  i828.shaderName = i829[0]
  i828.errorMessage = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i834 = root || new pc.UnityShaderPass()
  var i835 = data
  i834.id = i835[0]
  i834.subShaderIndex = i835[1]
  i834.name = i835[2]
  i834.passType = i835[3]
  i834.grabPassTextureName = i835[4]
  i834.usePass = !!i835[5]
  i834.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[6], i834.zTest)
  i834.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[7], i834.zWrite)
  i834.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[8], i834.culling)
  i834.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[9], i834.blending)
  i834.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[10], i834.alphaBlending)
  i834.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[11], i834.colorWriteMask)
  i834.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[12], i834.offsetUnits)
  i834.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[13], i834.offsetFactor)
  i834.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[14], i834.stencilRef)
  i834.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[15], i834.stencilReadMask)
  i834.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[16], i834.stencilWriteMask)
  i834.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[17], i834.stencilOp)
  i834.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[18], i834.stencilOpFront)
  i834.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[19], i834.stencilOpBack)
  var i837 = i835[20]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i837[i + 0]) );
  }
  i834.tags = i836
  var i839 = i835[21]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i834.passDefinedKeywords = i838
  var i841 = i835[22]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i841[i + 0]) );
  }
  i834.passDefinedKeywordGroups = i840
  var i843 = i835[23]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i834.variants = i842
  var i845 = i835[24]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i845[i + 0]) );
  }
  i834.excludedVariants = i844
  i834.hasDepthReader = !!i835[25]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i847 = data
  i846.val = i847[0]
  i846.name = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i849 = data
  i848.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.src)
  i848.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.dst)
  i848.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.op)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i851 = data
  i850.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[0], i850.pass)
  i850.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[1], i850.fail)
  i850.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[2], i850.zFail)
  i850.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[3], i850.comp)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i855 = data
  i854.name = i855[0]
  i854.value = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i858.keywords = i860
  i858.hasDiscard = !!i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i865 = data
  i864.passId = i865[0]
  i864.subShaderIndex = i865[1]
  var i867 = i865[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i864.keywords = i866
  i864.vertexProgram = i865[3]
  i864.fragmentProgram = i865[4]
  i864.exportedForWebGl2 = !!i865[5]
  i864.readDepth = !!i865[6]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'shader')
  i870.pass = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i875 = data
  i874.name = i875[0]
  i874.type = i875[1]
  i874.value = new pc.Vec4( i875[2], i875[3], i875[4], i875[5] )
  i874.textureValue = i875[6]
  i874.shaderPropertyFlag = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i877 = data
  i876.name = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'texture')
  i876.aabb = i877[3]
  i876.vertices = i877[4]
  i876.triangles = i877[5]
  i876.textureRect = UnityEngine.Rect.MinMaxRect(i877[6], i877[7], i877[8], i877[9])
  i876.packedRect = UnityEngine.Rect.MinMaxRect(i877[10], i877[11], i877[12], i877[13])
  i876.border = new pc.Vec4( i877[14], i877[15], i877[16], i877[17] )
  i876.transparency = i877[18]
  i876.bounds = i877[19]
  i876.pixelsPerUnit = i877[20]
  i876.textureWidth = i877[21]
  i876.textureHeight = i877[22]
  i876.nativeSize = new pc.Vec2( i877[23], i877[24] )
  i876.pivot = new pc.Vec2( i877[25], i877[26] )
  i876.textureRectOffset = new pc.Vec2( i877[27], i877[28] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i879 = data
  i878.name = i879[0]
  i878.wrapMode = i879[1]
  i878.isLooping = !!i879[2]
  i878.length = i879[3]
  var i881 = i879[4]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i881[i + 0]) );
  }
  i878.curves = i880
  var i883 = i879[5]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i883[i + 0]) );
  }
  i878.events = i882
  i878.halfPrecision = !!i879[6]
  i878._frameRate = i879[7]
  i878.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i879[8], i878.localBounds)
  i878.hasMuscleCurves = !!i879[9]
  var i885 = i879[10]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i878.clipMuscleConstant = i884
  i878.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i879[11], i878.clipBindingConstant)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i889 = data
  i888.path = i889[0]
  i888.hash = i889[1]
  i888.componentType = i889[2]
  i888.property = i889[3]
  i888.keys = i889[4]
  var i891 = i889[5]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i891[i + 0]) );
  }
  i888.objectReferenceKeys = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i895 = data
  i894.time = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'value')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i899 = data
  i898.functionName = i899[0]
  i898.floatParameter = i899[1]
  i898.intParameter = i899[2]
  i898.stringParameter = i899[3]
  request.r(i899[4], i899[5], 0, i898, 'objectReferenceParameter')
  i898.time = i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i901 = data
  i900.center = new pc.Vec3( i901[0], i901[1], i901[2] )
  i900.extends = new pc.Vec3( i901[3], i901[4], i901[5] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i904.genericBindings = i906
  var i909 = i905[1]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i904.pptrCurveMapping = i908
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i911 = data
  i910.name = i911[0]
  i910.blendParameter = i911[1]
  i910.blendParameterY = i911[2]
  i910.blendType = i911[3]
  var i913 = i911[4]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i913[i + 0]) );
  }
  i910.children = i912
  i910.useAutomaticThresholds = !!i911[5]
  i910.minThreshold = i911[6]
  i910.maxThreshold = i911[7]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'motion')
  i916.threshold = i917[2]
  i916.position = new pc.Vec2( i917[3], i917[4] )
  i916.timeScale = i917[5]
  i916.cycleOffset = i917[6]
  i916.directBlendParameter = i917[7]
  i916.mirror = !!i917[8]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i919 = data
  i918.name = i919[0]
  i918.ascent = i919[1]
  i918.originalLineHeight = i919[2]
  i918.fontSize = i919[3]
  var i921 = i919[4]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i921[i + 0]) );
  }
  i918.characterInfo = i920
  request.r(i919[5], i919[6], 0, i918, 'texture')
  i918.originalFontSize = i919[7]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i925 = data
  i924.index = i925[0]
  i924.advance = i925[1]
  i924.bearing = i925[2]
  i924.glyphWidth = i925[3]
  i924.glyphHeight = i925[4]
  i924.minX = i925[5]
  i924.maxX = i925[6]
  i924.minY = i925[7]
  i924.maxY = i925[8]
  i924.uvBottomLeftX = i925[9]
  i924.uvBottomLeftY = i925[10]
  i924.uvBottomRightX = i925[11]
  i924.uvBottomRightY = i925[12]
  i924.uvTopLeftX = i925[13]
  i924.uvTopLeftY = i925[14]
  i924.uvTopRightX = i925[15]
  i924.uvTopRightY = i925[16]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i927 = data
  i926.name = i927[0]
  var i929 = i927[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i929[i + 0]) );
  }
  i926.layers = i928
  var i931 = i927[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i931[i + 0]) );
  }
  i926.parameters = i930
  i926.animationClips = i927[3]
  i926.avatarUnsupported = i927[4]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i935 = data
  i934.name = i935[0]
  i934.defaultWeight = i935[1]
  i934.blendingMode = i935[2]
  i934.avatarMask = i935[3]
  i934.syncedLayerIndex = i935[4]
  i934.syncedLayerAffectsTiming = !!i935[5]
  i934.syncedLayers = i935[6]
  i934.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i935[7], i934.stateMachine)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i937 = data
  i936.id = i937[0]
  i936.name = i937[1]
  i936.path = i937[2]
  var i939 = i937[3]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i939[i + 0]) );
  }
  i936.states = i938
  var i941 = i937[4]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i941[i + 0]) );
  }
  i936.machines = i940
  var i943 = i937[5]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i943[i + 0]) );
  }
  i936.entryStateTransitions = i942
  var i945 = i937[6]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i945[i + 0]) );
  }
  i936.exitStateTransitions = i944
  var i947 = i937[7]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i947[i + 0]) );
  }
  i936.anyStateTransitions = i946
  i936.defaultStateId = i937[8]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i951 = data
  i950.id = i951[0]
  i950.name = i951[1]
  i950.cycleOffset = i951[2]
  i950.cycleOffsetParameter = i951[3]
  i950.cycleOffsetParameterActive = !!i951[4]
  i950.mirror = !!i951[5]
  i950.mirrorParameter = i951[6]
  i950.mirrorParameterActive = !!i951[7]
  i950.motionId = i951[8]
  i950.nameHash = i951[9]
  i950.fullPathHash = i951[10]
  i950.speed = i951[11]
  i950.speedParameter = i951[12]
  i950.speedParameterActive = !!i951[13]
  i950.tag = i951[14]
  i950.tagHash = i951[15]
  i950.writeDefaultValues = !!i951[16]
  var i953 = i951[17]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.behaviours = i952
  var i955 = i951[18]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i955[i + 0]) );
  }
  i950.transitions = i954
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i961 = data
  i960.fullPath = i961[0]
  i960.canTransitionToSelf = !!i961[1]
  i960.duration = i961[2]
  i960.exitTime = i961[3]
  i960.hasExitTime = !!i961[4]
  i960.hasFixedDuration = !!i961[5]
  i960.interruptionSource = i961[6]
  i960.offset = i961[7]
  i960.orderedInterruption = !!i961[8]
  i960.destinationStateId = i961[9]
  i960.isExit = !!i961[10]
  i960.mute = !!i961[11]
  i960.solo = !!i961[12]
  var i963 = i961[13]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i963[i + 0]) );
  }
  i960.conditions = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i969 = data
  i968.destinationStateId = i969[0]
  i968.isExit = !!i969[1]
  i968.mute = !!i969[2]
  i968.solo = !!i969[3]
  var i971 = i969[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i971[i + 0]) );
  }
  i968.conditions = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i975 = data
  i974.defaultBool = !!i975[0]
  i974.defaultFloat = i975[1]
  i974.defaultInt = i975[2]
  i974.name = i975[3]
  i974.nameHash = i975[4]
  i974.type = i975[5]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i979 = data
  i978.mode = i979[0]
  i978.parameter = i979[1]
  i978.threshold = i979[2]
  return i978
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i980 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i981 = data
  i980.useSafeMode = !!i981[0]
  i980.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i981[1], i980.safeModeOptions)
  i980.timeScale = i981[2]
  i980.unscaledTimeScale = i981[3]
  i980.useSmoothDeltaTime = !!i981[4]
  i980.maxSmoothUnscaledTime = i981[5]
  i980.rewindCallbackMode = i981[6]
  i980.showUnityEditorReport = !!i981[7]
  i980.logBehaviour = i981[8]
  i980.drawGizmos = !!i981[9]
  i980.defaultRecyclable = !!i981[10]
  i980.defaultAutoPlay = i981[11]
  i980.defaultUpdateType = i981[12]
  i980.defaultTimeScaleIndependent = !!i981[13]
  i980.defaultEaseType = i981[14]
  i980.defaultEaseOvershootOrAmplitude = i981[15]
  i980.defaultEasePeriod = i981[16]
  i980.defaultAutoKill = !!i981[17]
  i980.defaultLoopType = i981[18]
  i980.debugMode = !!i981[19]
  i980.debugStoreTargetId = !!i981[20]
  i980.showPreviewPanel = !!i981[21]
  i980.storeSettingsLocation = i981[22]
  i980.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i981[23], i980.modules)
  i980.createASMDEF = !!i981[24]
  i980.showPlayingTweens = !!i981[25]
  i980.showPausedTweens = !!i981[26]
  return i980
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i982 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i983 = data
  i982.logBehaviour = i983[0]
  i982.nestedTweenFailureBehaviour = i983[1]
  return i982
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i984 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i985 = data
  i984.showPanel = !!i985[0]
  i984.audioEnabled = !!i985[1]
  i984.physicsEnabled = !!i985[2]
  i984.physics2DEnabled = !!i985[3]
  i984.spriteEnabled = !!i985[4]
  i984.uiEnabled = !!i985[5]
  i984.textMeshProEnabled = !!i985[6]
  i984.tk2DEnabled = !!i985[7]
  i984.deAudioEnabled = !!i985[8]
  i984.deUnityExtendedEnabled = !!i985[9]
  i984.epoOutlineEnabled = !!i985[10]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i989[i + 0]) );
  }
  i986.files = i988
  i986.componentToPrefabIds = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i993 = data
  i992.path = i993[0]
  request.r(i993[1], i993[2], 0, i992, 'unityObject')
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i997[i + 0]) );
  }
  i994.scriptsExecutionOrder = i996
  var i999 = i995[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i999[i + 0]) );
  }
  i994.sortingLayers = i998
  var i1001 = i995[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1001[i + 0]) );
  }
  i994.cullingLayers = i1000
  i994.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i995[3], i994.timeSettings)
  i994.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i995[4], i994.physicsSettings)
  i994.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i995[5], i994.physics2DSettings)
  i994.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i995[6], i994.qualitySettings)
  i994.enableRealtimeShadows = !!i995[7]
  i994.enableAutoInstancing = !!i995[8]
  i994.enableDynamicBatching = !!i995[9]
  i994.lightmapEncodingQuality = i995[10]
  i994.desiredColorSpace = i995[11]
  var i1003 = i995[12]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i994.allTags = i1002
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.name = i1011[1]
  i1010.value = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1015 = data
  i1014.id = i1015[0]
  i1014.name = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1017 = data
  i1016.fixedDeltaTime = i1017[0]
  i1016.maximumDeltaTime = i1017[1]
  i1016.timeScale = i1017[2]
  i1016.maximumParticleTimestep = i1017[3]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1019 = data
  i1018.gravity = new pc.Vec3( i1019[0], i1019[1], i1019[2] )
  i1018.defaultSolverIterations = i1019[3]
  i1018.bounceThreshold = i1019[4]
  i1018.autoSyncTransforms = !!i1019[5]
  i1018.autoSimulation = !!i1019[6]
  var i1021 = i1019[7]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'material')
  i1026.gravity = new pc.Vec2( i1027[2], i1027[3] )
  i1026.positionIterations = i1027[4]
  i1026.velocityIterations = i1027[5]
  i1026.velocityThreshold = i1027[6]
  i1026.maxLinearCorrection = i1027[7]
  i1026.maxAngularCorrection = i1027[8]
  i1026.maxTranslationSpeed = i1027[9]
  i1026.maxRotationSpeed = i1027[10]
  i1026.baumgarteScale = i1027[11]
  i1026.baumgarteTOIScale = i1027[12]
  i1026.timeToSleep = i1027[13]
  i1026.linearSleepTolerance = i1027[14]
  i1026.angularSleepTolerance = i1027[15]
  i1026.defaultContactOffset = i1027[16]
  i1026.autoSimulation = !!i1027[17]
  i1026.queriesHitTriggers = !!i1027[18]
  i1026.queriesStartInColliders = !!i1027[19]
  i1026.callbacksOnDisable = !!i1027[20]
  i1026.reuseCollisionCallbacks = !!i1027[21]
  i1026.autoSyncTransforms = !!i1027[22]
  var i1029 = i1027[23]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1029[i + 0]) );
  }
  i1026.collisionMatrix = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.layerId = i1033[1]
  i1032.otherLayerId = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1037[i + 0]) );
  }
  i1034.qualityLevels = i1036
  var i1039 = i1035[1]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.names = i1038
  i1034.shadows = i1035[2]
  i1034.anisotropicFiltering = i1035[3]
  i1034.antiAliasing = i1035[4]
  i1034.lodBias = i1035[5]
  i1034.shadowCascades = i1035[6]
  i1034.shadowDistance = i1035[7]
  i1034.shadowmaskMode = i1035[8]
  i1034.shadowProjection = i1035[9]
  i1034.shadowResolution = i1035[10]
  i1034.softParticles = !!i1035[11]
  i1034.softVegetation = !!i1035[12]
  i1034.activeColorSpace = i1035[13]
  i1034.desiredColorSpace = i1035[14]
  i1034.masterTextureLimit = i1035[15]
  i1034.maxQueuedFrames = i1035[16]
  i1034.particleRaycastBudget = i1035[17]
  i1034.pixelLightCount = i1035[18]
  i1034.realtimeReflectionProbes = !!i1035[19]
  i1034.shadowCascade2Split = i1035[20]
  i1034.shadowCascade4Split = new pc.Vec3( i1035[21], i1035[22], i1035[23] )
  i1034.streamingMipmapsActive = !!i1035[24]
  i1034.vSyncCount = i1035[25]
  i1034.asyncUploadBufferSize = i1035[26]
  i1034.asyncUploadTimeSlice = i1035[27]
  i1034.billboardsFaceCameraPosition = !!i1035[28]
  i1034.shadowNearPlaneOffset = i1035[29]
  i1034.streamingMipmapsMemoryBudget = i1035[30]
  i1034.maximumLODLevel = i1035[31]
  i1034.streamingMipmapsAddAllCameras = !!i1035[32]
  i1034.streamingMipmapsMaxLevelReduction = i1035[33]
  i1034.streamingMipmapsRenderersPerFrame = i1035[34]
  i1034.resolutionScalingFixedDPIFactor = i1035[35]
  i1034.streamingMipmapsMaxFileIORequests = i1035[36]
  i1034.currentQualityLevel = i1035[37]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1043 = data
  i1042.name = i1043[0]
  var i1045 = i1043[1]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1045[i + 0]) );
  }
  i1042.tos = i1044
  var i1047 = i1043[2]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1042.constant = i1046
  i1042.isValid = !!i1043[3]
  i1042.isHuman = !!i1043[4]
  i1042.hasRootMotion = !!i1043[5]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1051 = data
  i1050.hash = i1051[0]
  i1050.path = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1055 = data
  i1054.weight = i1055[0]
  i1054.vertices = i1055[1]
  i1054.normals = i1055[2]
  i1054.tangents = i1055[3]
  return i1054
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[43],"56":[3],"57":[40],"58":[40],"59":[40],"60":[40],"61":[40],"62":[40],"63":[40],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[3],"79":[34],"80":[81],"82":[81],"13":[12],"83":[12],"84":[34,12],"85":[12,18],"86":[12],"87":[18,12],"88":[34],"89":[18,12],"90":[12],"91":[92],"93":[12],"94":[12],"15":[13],"19":[18,12],"95":[12],"14":[13],"27":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[12],"101":[12],"102":[12],"103":[12],"104":[18,12],"105":[12],"106":[12],"107":[12],"108":[12],"21":[18,12],"109":[12],"110":[10],"111":[10],"11":[10],"112":[10],"113":[3],"114":[3],"115":[92],"116":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Outline","UnityEngine.UI.Shadow","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.UI.ContentSizeFitter","UnityEngine.Mesh","UnityEngine.MonoBehaviour","Level","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","Car","UnityEngine.BoxCollider","UnityEngine.LineRenderer","UnityEngine.Rigidbody","Stickman","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","PLY01Manager","GamePlayController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "CarConnect";

Deserializers.lunaInitializationTime = "01/01/2025 17:53:10";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1756";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4202";

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

Deserializers.buildID = "e88b5d55-c2a3-429e-a636-5c3b375b8994";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

