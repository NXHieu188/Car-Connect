var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSpring' )
  var i533 = data
  i532.spring = i533[0]
  i532.damper = i533[1]
  i532.targetPosition = i533[2]
  return i532
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor' )
  var i535 = data
  i534.m_TargetVelocity = i535[0]
  i534.m_Force = i535[1]
  i534.m_FreeSpin = i535[2]
  return i534
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointLimits' )
  var i537 = data
  i536.m_Min = i537[0]
  i536.m_Max = i537[1]
  i536.m_Bounciness = i537[2]
  i536.m_BounceMinVelocity = i537[3]
  i536.m_ContactDistance = i537[4]
  i536.minBounce = i537[5]
  i536.maxBounce = i537[6]
  return i536
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointDrive' )
  var i539 = data
  i538.m_PositionSpring = i539[0]
  i538.m_PositionDamper = i539[1]
  i538.m_MaximumForce = i539[2]
  return i538
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i541 = data
  i540.m_Spring = i541[0]
  i540.m_Damper = i541[1]
  return i540
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i543 = data
  i542.m_Limit = i543[0]
  i542.m_Bounciness = i543[1]
  i542.m_ContactDistance = i543[2]
  return i542
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i545 = data
  i544.m_ExtremumSlip = i545[0]
  i544.m_ExtremumValue = i545[1]
  i544.m_AsymptoteSlip = i545[2]
  i544.m_AsymptoteValue = i545[3]
  i544.m_Stiffness = i545[4]
  return i544
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i547 = data
  i546.m_LowerAngle = i547[0]
  i546.m_UpperAngle = i547[1]
  return i546
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i549 = data
  i548.m_MotorSpeed = i549[0]
  i548.m_MaximumMotorTorque = i549[1]
  return i548
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i551 = data
  i550.m_DampingRatio = i551[0]
  i550.m_Frequency = i551[1]
  i550.m_Angle = i551[2]
  return i550
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i553 = data
  i552.m_LowerTranslation = i553[0]
  i552.m_UpperTranslation = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i554 = root || new pc.UnityMaterial()
  var i555 = data
  i554.name = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'shader')
  i554.renderQueue = i555[3]
  i554.enableInstancing = !!i555[4]
  var i557 = i555[5]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i557[i + 0]) );
  }
  i554.floatParameters = i556
  var i559 = i555[6]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i559[i + 0]) );
  }
  i554.colorParameters = i558
  var i561 = i555[7]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i561[i + 0]) );
  }
  i554.vectorParameters = i560
  var i563 = i555[8]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i563[i + 0]) );
  }
  i554.textureParameters = i562
  var i565 = i555[9]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i565[i + 0]) );
  }
  i554.materialFlags = i564
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = new pc.Color(i573[1], i573[2], i573[3], i573[4])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = new pc.Vec4( i577[1], i577[2], i577[3], i577[4] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'value')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i585 = data
  i584.name = i585[0]
  i584.enabled = !!i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i587 = data
  i586.name = i587[0]
  i586.width = i587[1]
  i586.height = i587[2]
  i586.mipmapCount = i587[3]
  i586.anisoLevel = i587[4]
  i586.filterMode = i587[5]
  i586.hdr = !!i587[6]
  i586.format = i587[7]
  i586.wrapMode = i587[8]
  i586.alphaIsTransparency = !!i587[9]
  i586.alphaSource = i587[10]
  i586.graphicsFormat = i587[11]
  i586.sRGBTexture = !!i587[12]
  i586.desiredColorSpace = i587[13]
  i586.wrapU = i587[14]
  i586.wrapV = i587[15]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i589 = data
  i588.name = i589[0]
  i588.halfPrecision = !!i589[1]
  i588.useUInt32IndexFormat = !!i589[2]
  i588.vertexCount = i589[3]
  i588.aabb = i589[4]
  var i591 = i589[5]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( !!i591[i + 0] );
  }
  i588.streams = i590
  i588.vertices = i589[6]
  var i593 = i589[7]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i593[i + 0]) );
  }
  i588.subMeshes = i592
  var i595 = i589[8]
  var i594 = []
  for(var i = 0; i < i595.length; i += 16) {
    i594.push( new pc.Mat4().setData(i595[i + 0], i595[i + 1], i595[i + 2], i595[i + 3],  i595[i + 4], i595[i + 5], i595[i + 6], i595[i + 7],  i595[i + 8], i595[i + 9], i595[i + 10], i595[i + 11],  i595[i + 12], i595[i + 13], i595[i + 14], i595[i + 15]) );
  }
  i588.bindposes = i594
  var i597 = i589[9]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i597[i + 0]) );
  }
  i588.blendShapes = i596
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i603 = data
  i602.triangles = i603[0]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i609 = data
  i608.name = i609[0]
  var i611 = i609[1]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i611[i + 0]) );
  }
  i608.frames = i610
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i613 = data
  i612.name = i613[0]
  i612.atlasId = i613[1]
  i612.mipmapCount = i613[2]
  i612.hdr = !!i613[3]
  i612.size = i613[4]
  i612.anisoLevel = i613[5]
  i612.filterMode = i613[6]
  var i615 = i613[7]
  var i614 = []
  for(var i = 0; i < i615.length; i += 4) {
    i614.push( UnityEngine.Rect.MinMaxRect(i615[i + 0], i615[i + 1], i615[i + 2], i615[i + 3]) );
  }
  i612.rects = i614
  i612.wrapU = i613[8]
  i612.wrapV = i613[9]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i619 = data
  i618.name = i619[0]
  i618.index = i619[1]
  i618.startup = !!i619[2]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i621 = data
  i620.position = new pc.Vec3( i621[0], i621[1], i621[2] )
  i620.scale = new pc.Vec3( i621[3], i621[4], i621[5] )
  i620.rotation = new pc.Quat(i621[6], i621[7], i621[8], i621[9])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.aspect = i623[1]
  i622.orthographic = !!i623[2]
  i622.orthographicSize = i623[3]
  i622.backgroundColor = new pc.Color(i623[4], i623[5], i623[6], i623[7])
  i622.nearClipPlane = i623[8]
  i622.farClipPlane = i623[9]
  i622.fieldOfView = i623[10]
  i622.depth = i623[11]
  i622.clearFlags = i623[12]
  i622.cullingMask = i623[13]
  i622.rect = i623[14]
  request.r(i623[15], i623[16], 0, i622, 'targetTexture')
  i622.usePhysicalProperties = !!i623[17]
  i622.focalLength = i623[18]
  i622.sensorSize = new pc.Vec2( i623[19], i623[20] )
  i622.lensShift = new pc.Vec2( i623[21], i623[22] )
  i622.gateFit = i623[23]
  i622.commandBufferCount = i623[24]
  i622.cameraType = i623[25]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i625 = data
  i624.name = i625[0]
  i624.tagId = i625[1]
  i624.enabled = !!i625[2]
  i624.isStatic = !!i625[3]
  i624.layer = i625[4]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i627 = data
  i626.enabled = !!i627[0]
  i626.type = i627[1]
  i626.color = new pc.Color(i627[2], i627[3], i627[4], i627[5])
  i626.cullingMask = i627[6]
  i626.intensity = i627[7]
  i626.range = i627[8]
  i626.spotAngle = i627[9]
  i626.shadows = i627[10]
  i626.shadowNormalBias = i627[11]
  i626.shadowBias = i627[12]
  i626.shadowStrength = i627[13]
  i626.shadowResolution = i627[14]
  i626.lightmapBakeType = i627[15]
  i626.renderMode = i627[16]
  request.r(i627[17], i627[18], 0, i626, 'cookie')
  i626.cookieSize = i627[19]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i629 = data
  i628.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i629[0], i628.main)
  i628.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i629[1], i628.colorBySpeed)
  i628.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i629[2], i628.colorOverLifetime)
  i628.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i629[3], i628.emission)
  i628.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i629[4], i628.rotationBySpeed)
  i628.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i629[5], i628.rotationOverLifetime)
  i628.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i629[6], i628.shape)
  i628.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i629[7], i628.sizeBySpeed)
  i628.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i629[8], i628.sizeOverLifetime)
  i628.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i629[9], i628.textureSheetAnimation)
  i628.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i629[10], i628.velocityOverLifetime)
  i628.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i629[11], i628.noise)
  i628.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i629[12], i628.inheritVelocity)
  i628.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i629[13], i628.forceOverLifetime)
  i628.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i629[14], i628.limitVelocityOverLifetime)
  i628.useAutoRandomSeed = !!i629[15]
  i628.randomSeed = i629[16]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemMain()
  var i631 = data
  i630.duration = i631[0]
  i630.loop = !!i631[1]
  i630.prewarm = !!i631[2]
  i630.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.startDelay)
  i630.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[4], i630.startLifetime)
  i630.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[5], i630.startSpeed)
  i630.startSize3D = !!i631[6]
  i630.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[7], i630.startSizeX)
  i630.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[8], i630.startSizeY)
  i630.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[9], i630.startSizeZ)
  i630.startRotation3D = !!i631[10]
  i630.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[11], i630.startRotationX)
  i630.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[12], i630.startRotationY)
  i630.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[13], i630.startRotationZ)
  i630.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i631[14], i630.startColor)
  i630.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[15], i630.gravityModifier)
  i630.simulationSpace = i631[16]
  request.r(i631[17], i631[18], 0, i630, 'customSimulationSpace')
  i630.simulationSpeed = i631[19]
  i630.useUnscaledTime = !!i631[20]
  i630.scalingMode = i631[21]
  i630.playOnAwake = !!i631[22]
  i630.maxParticles = i631[23]
  i630.emitterVelocityMode = i631[24]
  i630.stopAction = i631[25]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i632 = root || new pc.MinMaxCurve()
  var i633 = data
  i632.mode = i633[0]
  i632.curveMin = new pc.AnimationCurve( { keys_flow: i633[1] } )
  i632.curveMax = new pc.AnimationCurve( { keys_flow: i633[2] } )
  i632.curveMultiplier = i633[3]
  i632.constantMin = i633[4]
  i632.constantMax = i633[5]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i634 = root || new pc.MinMaxGradient()
  var i635 = data
  i634.mode = i635[0]
  i634.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i635[1], i634.gradientMin)
  i634.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i635[2], i634.gradientMax)
  i634.colorMin = new pc.Color(i635[3], i635[4], i635[5], i635[6])
  i634.colorMax = new pc.Color(i635[7], i635[8], i635[9], i635[10])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i637 = data
  i636.mode = i637[0]
  var i639 = i637[1]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i639[i + 0]) );
  }
  i636.colorKeys = i638
  var i641 = i637[2]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i641[i + 0]) );
  }
  i636.alphaKeys = i640
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemColorBySpeed()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i643[1], i642.color)
  i642.range = new pc.Vec2( i643[2], i643[3] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i647 = data
  i646.color = new pc.Color(i647[0], i647[1], i647[2], i647[3])
  i646.time = i647[4]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i651 = data
  i650.alpha = i651[0]
  i650.time = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemColorOverLifetime()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i653[1], i652.color)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemEmitter()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[1], i654.rateOverTime)
  i654.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.rateOverDistance)
  var i657 = i655[3]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i657[i + 0]) );
  }
  i654.bursts = i656
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemBurst()
  var i661 = data
  i660.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[0], i660.count)
  i660.cycleCount = i661[1]
  i660.minCount = i661[2]
  i660.maxCount = i661[3]
  i660.repeatInterval = i661[4]
  i660.time = i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemRotationBySpeed()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.separateAxes = !!i663[4]
  i662.range = new pc.Vec2( i663[5], i663[6] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemRotationOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemShape()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.shapeType = i667[1]
  i666.randomDirectionAmount = i667[2]
  i666.sphericalDirectionAmount = i667[3]
  i666.randomPositionAmount = i667[4]
  i666.alignToDirection = !!i667[5]
  i666.radius = i667[6]
  i666.radiusMode = i667[7]
  i666.radiusSpread = i667[8]
  i666.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[9], i666.radiusSpeed)
  i666.radiusThickness = i667[10]
  i666.angle = i667[11]
  i666.length = i667[12]
  i666.boxThickness = new pc.Vec3( i667[13], i667[14], i667[15] )
  i666.meshShapeType = i667[16]
  request.r(i667[17], i667[18], 0, i666, 'mesh')
  request.r(i667[19], i667[20], 0, i666, 'meshRenderer')
  request.r(i667[21], i667[22], 0, i666, 'skinnedMeshRenderer')
  i666.useMeshMaterialIndex = !!i667[23]
  i666.meshMaterialIndex = i667[24]
  i666.useMeshColors = !!i667[25]
  i666.normalOffset = i667[26]
  i666.arc = i667[27]
  i666.arcMode = i667[28]
  i666.arcSpread = i667[29]
  i666.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[30], i666.arcSpeed)
  i666.donutRadius = i667[31]
  i666.position = new pc.Vec3( i667[32], i667[33], i667[34] )
  i666.rotation = new pc.Vec3( i667[35], i667[36], i667[37] )
  i666.scale = new pc.Vec3( i667[38], i667[39], i667[40] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemSizeBySpeed()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  i668.range = new pc.Vec2( i669[5], i669[6] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemSizeOverLifetime()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.mode = i673[1]
  i672.animation = i673[2]
  i672.numTilesX = i673[3]
  i672.numTilesY = i673[4]
  i672.useRandomRow = !!i673[5]
  i672.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[6], i672.frameOverTime)
  i672.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[7], i672.startFrame)
  i672.cycleCount = i673[8]
  i672.rowIndex = i673[9]
  i672.flipU = i673[10]
  i672.flipV = i673[11]
  i672.spriteCount = i673[12]
  var i675 = i673[13]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i672.sprites = i674
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[4], i678.radial)
  i678.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[5], i678.speedModifier)
  i678.space = i679[6]
  i678.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[7], i678.orbitalX)
  i678.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[8], i678.orbitalY)
  i678.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[9], i678.orbitalZ)
  i678.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[10], i678.orbitalOffsetX)
  i678.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[11], i678.orbitalOffsetY)
  i678.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[12], i678.orbitalOffsetZ)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemNoise()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.separateAxes = !!i681[1]
  i680.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.strengthX)
  i680.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.strengthY)
  i680.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[4], i680.strengthZ)
  i680.frequency = i681[5]
  i680.damping = !!i681[6]
  i680.octaveCount = i681[7]
  i680.octaveMultiplier = i681[8]
  i680.octaveScale = i681[9]
  i680.quality = i681[10]
  i680.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[11], i680.scrollSpeed)
  i680.scrollSpeedMultiplier = i681[12]
  i680.remapEnabled = !!i681[13]
  i680.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[14], i680.remapX)
  i680.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[15], i680.remapY)
  i680.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[16], i680.remapZ)
  i680.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[17], i680.positionAmount)
  i680.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[18], i680.rotationAmount)
  i680.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[19], i680.sizeAmount)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemInheritVelocity()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.mode = i683[1]
  i682.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.curve)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemForceOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.space = i685[4]
  i684.randomized = !!i685[5]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.limit)
  i686.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.limitX)
  i686.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.limitY)
  i686.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.limitZ)
  i686.dampen = i687[5]
  i686.separateAxes = !!i687[6]
  i686.space = i687[7]
  i686.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[8], i686.drag)
  i686.multiplyDragByParticleSize = !!i687[9]
  i686.multiplyDragByParticleVelocity = !!i687[10]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i689 = data
  i688.enabled = !!i689[0]
  request.r(i689[1], i689[2], 0, i688, 'sharedMaterial')
  var i691 = i689[3]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.sharedMaterials = i690
  i688.receiveShadows = !!i689[4]
  i688.shadowCastingMode = i689[5]
  i688.sortingLayerID = i689[6]
  i688.sortingOrder = i689[7]
  i688.lightmapIndex = i689[8]
  i688.lightmapSceneIndex = i689[9]
  i688.lightmapScaleOffset = new pc.Vec4( i689[10], i689[11], i689[12], i689[13] )
  i688.lightProbeUsage = i689[14]
  i688.reflectionProbeUsage = i689[15]
  request.r(i689[16], i689[17], 0, i688, 'mesh')
  i688.meshCount = i689[18]
  i688.activeVertexStreamsCount = i689[19]
  i688.alignment = i689[20]
  i688.renderMode = i689[21]
  i688.sortMode = i689[22]
  i688.lengthScale = i689[23]
  i688.velocityScale = i689[24]
  i688.cameraVelocityScale = i689[25]
  i688.normalDirection = i689[26]
  i688.sortingFudge = i689[27]
  i688.minParticleSize = i689[28]
  i688.maxParticleSize = i689[29]
  i688.pivot = new pc.Vec3( i689[30], i689[31], i689[32] )
  request.r(i689[33], i689[34], 0, i688, 'trailMaterial')
  return i688
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_FirstSelected')
  i694.m_sendNavigationEvents = !!i695[2]
  i694.m_DragThreshold = i695[3]
  return i694
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i697 = data
  i696.m_HorizontalAxis = i697[0]
  i696.m_VerticalAxis = i697[1]
  i696.m_SubmitButton = i697[2]
  i696.m_CancelButton = i697[3]
  i696.m_InputActionsPerSecond = i697[4]
  i696.m_RepeatDelay = i697[5]
  i696.m_ForceModuleActive = !!i697[6]
  i696.m_SendPointerHoverToParent = !!i697[7]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i699 = data
  i698.pivot = new pc.Vec2( i699[0], i699[1] )
  i698.anchorMin = new pc.Vec2( i699[2], i699[3] )
  i698.anchorMax = new pc.Vec2( i699[4], i699[5] )
  i698.sizeDelta = new pc.Vec2( i699[6], i699[7] )
  i698.anchoredPosition3D = new pc.Vec3( i699[8], i699[9], i699[10] )
  i698.rotation = new pc.Quat(i699[11], i699[12], i699[13], i699[14])
  i698.scale = new pc.Vec3( i699[15], i699[16], i699[17] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.planeDistance = i701[1]
  i700.referencePixelsPerUnit = i701[2]
  i700.isFallbackOverlay = !!i701[3]
  i700.renderMode = i701[4]
  i700.renderOrder = i701[5]
  i700.sortingLayerName = i701[6]
  i700.sortingOrder = i701[7]
  i700.scaleFactor = i701[8]
  request.r(i701[9], i701[10], 0, i700, 'worldCamera')
  i700.overrideSorting = !!i701[11]
  i700.pixelPerfect = !!i701[12]
  i700.targetDisplay = i701[13]
  i700.overridePixelPerfect = !!i701[14]
  return i700
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i703 = data
  i702.m_UiScaleMode = i703[0]
  i702.m_ReferencePixelsPerUnit = i703[1]
  i702.m_ScaleFactor = i703[2]
  i702.m_ReferenceResolution = new pc.Vec2( i703[3], i703[4] )
  i702.m_ScreenMatchMode = i703[5]
  i702.m_MatchWidthOrHeight = i703[6]
  i702.m_PhysicalUnit = i703[7]
  i702.m_FallbackScreenDPI = i703[8]
  i702.m_DefaultSpriteDPI = i703[9]
  i702.m_DynamicPixelsPerUnit = i703[10]
  i702.m_PresetInfoIsWorld = !!i703[11]
  return i702
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i705 = data
  i704.m_IgnoreReversedGraphics = !!i705[0]
  i704.m_BlockingObjects = i705[1]
  i704.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i705[2] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'animatorController')
  request.r(i707[2], i707[3], 0, i706, 'avatar')
  i706.updateMode = i707[4]
  i706.hasTransformHierarchy = !!i707[5]
  i706.applyRootMotion = !!i707[6]
  var i709 = i707[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.humanBones = i708
  i706.enabled = !!i707[8]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i713 = data
  i712.cullTransparentMesh = !!i713[0]
  return i712
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.Image' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_Sprite')
  i714.m_Type = i715[2]
  i714.m_PreserveAspect = !!i715[3]
  i714.m_FillCenter = !!i715[4]
  i714.m_FillMethod = i715[5]
  i714.m_FillAmount = i715[6]
  i714.m_FillClockwise = !!i715[7]
  i714.m_FillOrigin = i715[8]
  i714.m_UseSpriteMesh = !!i715[9]
  i714.m_PixelsPerUnitMultiplier = i715[10]
  request.r(i715[11], i715[12], 0, i714, 'm_Material')
  i714.m_Maskable = !!i715[13]
  i714.m_Color = new pc.Color(i715[14], i715[15], i715[16], i715[17])
  i714.m_RaycastTarget = !!i715[18]
  i714.m_RaycastPadding = new pc.Vec4( i715[19], i715[20], i715[21], i715[22] )
  return i714
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Text' )
  var i717 = data
  i716.m_FontData = request.d('UnityEngine.UI.FontData', i717[0], i716.m_FontData)
  i716.m_Text = i717[1]
  request.r(i717[2], i717[3], 0, i716, 'm_Material')
  i716.m_Maskable = !!i717[4]
  i716.m_Color = new pc.Color(i717[5], i717[6], i717[7], i717[8])
  i716.m_RaycastTarget = !!i717[9]
  i716.m_RaycastPadding = new pc.Vec4( i717[10], i717[11], i717[12], i717[13] )
  return i716
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.FontData' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_Font')
  i718.m_FontSize = i719[2]
  i718.m_FontStyle = i719[3]
  i718.m_BestFit = !!i719[4]
  i718.m_MinSize = i719[5]
  i718.m_MaxSize = i719[6]
  i718.m_Alignment = i719[7]
  i718.m_AlignByGeometry = !!i719[8]
  i718.m_RichText = !!i719[9]
  i718.m_HorizontalOverflow = i719[10]
  i718.m_VerticalOverflow = i719[11]
  i718.m_LineSpacing = i719[12]
  return i718
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.Outline' )
  var i721 = data
  i720.m_EffectColor = new pc.Color(i721[0], i721[1], i721[2], i721[3])
  i720.m_EffectDistance = new pc.Vec2( i721[4], i721[5] )
  i720.m_UseGraphicAlpha = !!i721[6]
  return i720
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i723 = data
  i722.m_EffectColor = new pc.Color(i723[0], i723[1], i723[2], i723[3])
  i722.m_EffectDistance = new pc.Vec2( i723[4], i723[5] )
  i722.m_UseGraphicAlpha = !!i723[6]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i725 = data
  i724.m_Alpha = i725[0]
  i724.m_Interactable = !!i725[1]
  i724.m_BlocksRaycasts = !!i725[2]
  i724.m_IgnoreParentGroups = !!i725[3]
  i724.enabled = !!i725[4]
  return i724
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.Button' )
  var i727 = data
  i726.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i727[0], i726.m_OnClick)
  i726.m_Navigation = request.d('UnityEngine.UI.Navigation', i727[1], i726.m_Navigation)
  i726.m_Transition = i727[2]
  i726.m_Colors = request.d('UnityEngine.UI.ColorBlock', i727[3], i726.m_Colors)
  i726.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i727[4], i726.m_SpriteState)
  i726.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i727[5], i726.m_AnimationTriggers)
  i726.m_Interactable = !!i727[6]
  request.r(i727[7], i727[8], 0, i726, 'm_TargetGraphic')
  return i726
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i729 = data
  i728.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i729[0], i728.m_PersistentCalls)
  return i728
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i731 = data
  var i733 = i731[0]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('UnityEngine.Events.PersistentCall', i733[i + 0]));
  }
  i730.m_Calls = i732
  return i730
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'm_Target')
  i736.m_TargetAssemblyTypeName = i737[2]
  i736.m_MethodName = i737[3]
  i736.m_Mode = i737[4]
  i736.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i737[5], i736.m_Arguments)
  i736.m_CallState = i737[6]
  return i736
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_ObjectArgument')
  i738.m_ObjectArgumentAssemblyTypeName = i739[2]
  i738.m_IntArgument = i739[3]
  i738.m_FloatArgument = i739[4]
  i738.m_StringArgument = i739[5]
  i738.m_BoolArgument = !!i739[6]
  return i738
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i741 = data
  i740.m_Mode = i741[0]
  i740.m_WrapAround = !!i741[1]
  request.r(i741[2], i741[3], 0, i740, 'm_SelectOnUp')
  request.r(i741[4], i741[5], 0, i740, 'm_SelectOnDown')
  request.r(i741[6], i741[7], 0, i740, 'm_SelectOnLeft')
  request.r(i741[8], i741[9], 0, i740, 'm_SelectOnRight')
  return i740
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i743 = data
  i742.m_NormalColor = new pc.Color(i743[0], i743[1], i743[2], i743[3])
  i742.m_HighlightedColor = new pc.Color(i743[4], i743[5], i743[6], i743[7])
  i742.m_PressedColor = new pc.Color(i743[8], i743[9], i743[10], i743[11])
  i742.m_SelectedColor = new pc.Color(i743[12], i743[13], i743[14], i743[15])
  i742.m_DisabledColor = new pc.Color(i743[16], i743[17], i743[18], i743[19])
  i742.m_ColorMultiplier = i743[20]
  i742.m_FadeDuration = i743[21]
  return i742
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_HighlightedSprite')
  request.r(i745[2], i745[3], 0, i744, 'm_PressedSprite')
  request.r(i745[4], i745[5], 0, i744, 'm_SelectedSprite')
  request.r(i745[6], i745[7], 0, i744, 'm_DisabledSprite')
  return i744
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i747 = data
  i746.m_NormalTrigger = i747[0]
  i746.m_HighlightedTrigger = i747[1]
  i746.m_PressedTrigger = i747[2]
  i746.m_SelectedTrigger = i747[3]
  i746.m_DisabledTrigger = i747[4]
  return i746
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i749 = data
  i748.m_HorizontalFit = i749[0]
  i748.m_VerticalFit = i749[1]
  return i748
}

Deserializers["Level"] = function (request, data, root) {
  var i750 = root || request.c( 'Level' )
  var i751 = data
  var i753 = i751[0]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i750.lstCouple = i752
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i757 = data
  i756.enabled = !!i757[0]
  request.r(i757[1], i757[2], 0, i756, 'sharedMaterial')
  var i759 = i757[3]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.sharedMaterials = i758
  i756.receiveShadows = !!i757[4]
  i756.shadowCastingMode = i757[5]
  i756.sortingLayerID = i757[6]
  i756.sortingOrder = i757[7]
  i756.lightmapIndex = i757[8]
  i756.lightmapSceneIndex = i757[9]
  i756.lightmapScaleOffset = new pc.Vec4( i757[10], i757[11], i757[12], i757[13] )
  i756.lightProbeUsage = i757[14]
  i756.reflectionProbeUsage = i757[15]
  i756.color = new pc.Color(i757[16], i757[17], i757[18], i757[19])
  request.r(i757[20], i757[21], 0, i756, 'sprite')
  i756.flipX = !!i757[22]
  i756.flipY = !!i757[23]
  i756.drawMode = i757[24]
  i756.size = new pc.Vec2( i757[25], i757[26] )
  i756.tileMode = i757[27]
  i756.adaptiveModeThreshold = i757[28]
  i756.maskInteraction = i757[29]
  i756.spriteSortPoint = i757[30]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'sharedMesh')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'additionalVertexStreams')
  i762.enabled = !!i763[2]
  request.r(i763[3], i763[4], 0, i762, 'sharedMaterial')
  var i765 = i763[5]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sharedMaterials = i764
  i762.receiveShadows = !!i763[6]
  i762.shadowCastingMode = i763[7]
  i762.sortingLayerID = i763[8]
  i762.sortingOrder = i763[9]
  i762.lightmapIndex = i763[10]
  i762.lightmapSceneIndex = i763[11]
  i762.lightmapScaleOffset = new pc.Vec4( i763[12], i763[13], i763[14], i763[15] )
  i762.lightProbeUsage = i763[16]
  i762.reflectionProbeUsage = i763[17]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i767 = data
  i766.playAutomatically = !!i767[0]
  request.r(i767[1], i767[2], 0, i766, 'clip')
  var i769 = i767[3]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.clips = i768
  i766.wrapMode = i767[4]
  i766.enabled = !!i767[5]
  return i766
}

Deserializers["Car"] = function (request, data, root) {
  var i772 = root || request.c( 'Car' )
  var i773 = data
  i772.typeColor = i773[0]
  i772.isContainHuman = !!i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i775 = data
  i774.center = new pc.Vec3( i775[0], i775[1], i775[2] )
  i774.size = new pc.Vec3( i775[3], i775[4], i775[5] )
  i774.enabled = !!i775[6]
  i774.isTrigger = !!i775[7]
  request.r(i775[8], i775[9], 0, i774, 'material')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i777 = data
  i776.textureMode = i777[0]
  i776.alignment = i777[1]
  i776.widthCurve = new pc.AnimationCurve( { keys_flow: i777[2] } )
  i776.colorGradient = i777[3] ? new pc.ColorGradient(i777[3][0], i777[3][1], i777[3][2]) : null
  var i779 = i777[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 3) {
    i778.push( new pc.Vec3( i779[i + 0], i779[i + 1], i779[i + 2] ) );
  }
  i776.positions = i778
  i776.positionCount = i777[5]
  i776.widthMultiplier = i777[6]
  i776.startWidth = i777[7]
  i776.endWidth = i777[8]
  i776.numCornerVertices = i777[9]
  i776.numCapVertices = i777[10]
  i776.useWorldSpace = !!i777[11]
  i776.loop = !!i777[12]
  i776.startColor = new pc.Color(i777[13], i777[14], i777[15], i777[16])
  i776.endColor = new pc.Color(i777[17], i777[18], i777[19], i777[20])
  i776.generateLightingData = !!i777[21]
  i776.enabled = !!i777[22]
  request.r(i777[23], i777[24], 0, i776, 'sharedMaterial')
  var i781 = i777[25]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i776.sharedMaterials = i780
  i776.receiveShadows = !!i777[26]
  i776.shadowCastingMode = i777[27]
  i776.sortingLayerID = i777[28]
  i776.sortingOrder = i777[29]
  i776.lightmapIndex = i777[30]
  i776.lightmapSceneIndex = i777[31]
  i776.lightmapScaleOffset = new pc.Vec4( i777[32], i777[33], i777[34], i777[35] )
  i776.lightProbeUsage = i777[36]
  i776.reflectionProbeUsage = i777[37]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i785 = data
  i784.mass = i785[0]
  i784.drag = i785[1]
  i784.angularDrag = i785[2]
  i784.useGravity = !!i785[3]
  i784.isKinematic = !!i785[4]
  i784.constraints = i785[5]
  i784.maxAngularVelocity = i785[6]
  i784.collisionDetectionMode = i785[7]
  i784.interpolation = i785[8]
  return i784
}

Deserializers["Stickman"] = function (request, data, root) {
  var i786 = root || request.c( 'Stickman' )
  var i787 = data
  i786.typeColor = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'animator')
  var i789 = i787[3]
  var i788 = []
  for(var i = 0; i < i789.length; i += 3) {
    i788.push( new pc.Vec3( i789[i + 0], i789[i + 1], i789[i + 2] ) );
  }
  i786.arrayOriginPosLine = i788
  var i791 = i787[4]
  var i790 = []
  for(var i = 0; i < i791.length; i += 3) {
    i790.push( new pc.Vec3( i791[i + 0], i791[i + 1], i791[i + 2] ) );
  }
  i786.arrOldPath = i790
  request.r(i787[5], i787[6], 0, i786, 'lineRenderer')
  i786.speed = i787[7]
  i786.timeRotate = i787[8]
  i786.pointRemoveThreshold = i787[9]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i793 = data
  i792.enabled = !!i793[0]
  request.r(i793[1], i793[2], 0, i792, 'sharedMaterial')
  var i795 = i793[3]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sharedMaterials = i794
  i792.receiveShadows = !!i793[4]
  i792.shadowCastingMode = i793[5]
  i792.sortingLayerID = i793[6]
  i792.sortingOrder = i793[7]
  i792.lightmapIndex = i793[8]
  i792.lightmapSceneIndex = i793[9]
  i792.lightmapScaleOffset = new pc.Vec4( i793[10], i793[11], i793[12], i793[13] )
  i792.lightProbeUsage = i793[14]
  i792.reflectionProbeUsage = i793[15]
  request.r(i793[16], i793[17], 0, i792, 'sharedMesh')
  var i797 = i793[18]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i792.bones = i796
  i792.updateWhenOffscreen = !!i793[19]
  i792.localBounds = i793[20]
  request.r(i793[21], i793[22], 0, i792, 'rootBone')
  var i799 = i793[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i799[i + 0]) );
  }
  i792.blendShapesWeights = i798
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i803 = data
  i802.weight = i803[0]
  return i802
}

Deserializers["PLY01Manager"] = function (request, data, root) {
  var i804 = root || request.c( 'PLY01Manager' )
  var i805 = data
  i804.isEndGame = !!i805[0]
  return i804
}

Deserializers["GamePlayController"] = function (request, data, root) {
  var i806 = root || request.c( 'GamePlayController' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'camera')
  request.r(i807[2], i807[3], 0, i806, 'fxTap')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i809 = data
  i808.ambientIntensity = i809[0]
  i808.reflectionIntensity = i809[1]
  i808.ambientMode = i809[2]
  i808.ambientLight = new pc.Color(i809[3], i809[4], i809[5], i809[6])
  i808.ambientSkyColor = new pc.Color(i809[7], i809[8], i809[9], i809[10])
  i808.ambientGroundColor = new pc.Color(i809[11], i809[12], i809[13], i809[14])
  i808.ambientEquatorColor = new pc.Color(i809[15], i809[16], i809[17], i809[18])
  i808.fogColor = new pc.Color(i809[19], i809[20], i809[21], i809[22])
  i808.fogEndDistance = i809[23]
  i808.fogStartDistance = i809[24]
  i808.fogDensity = i809[25]
  i808.fog = !!i809[26]
  request.r(i809[27], i809[28], 0, i808, 'skybox')
  i808.fogMode = i809[29]
  var i811 = i809[30]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i811[i + 0]) );
  }
  i808.lightmaps = i810
  i808.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i809[31], i808.lightProbes)
  i808.lightmapsMode = i809[32]
  i808.mixedBakeMode = i809[33]
  i808.environmentLightingMode = i809[34]
  i808.ambientProbe = new pc.SphericalHarmonicsL2(i809[35])
  i808.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i809[36])
  i808.useReferenceAmbientProbe = !!i809[37]
  request.r(i809[38], i809[39], 0, i808, 'customReflection')
  request.r(i809[40], i809[41], 0, i808, 'defaultReflection')
  i808.defaultReflectionMode = i809[42]
  i808.defaultReflectionResolution = i809[43]
  i808.sunLightObjectId = i809[44]
  i808.pixelLightCount = i809[45]
  i808.defaultReflectionHDR = !!i809[46]
  i808.hasLightDataAsset = !!i809[47]
  i808.hasManualGenerate = !!i809[48]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'lightmapColor')
  request.r(i815[2], i815[3], 0, i814, 'lightmapDirection')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i816 = root || new UnityEngine.LightProbes()
  var i817 = data
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i825[i + 0]));
  }
  i822.ShaderCompilationErrors = i824
  i822.name = i823[1]
  i822.guid = i823[2]
  var i827 = i823[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i822.shaderDefinedKeywords = i826
  var i829 = i823[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i829[i + 0]) );
  }
  i822.passes = i828
  var i831 = i823[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i831[i + 0]) );
  }
  i822.usePasses = i830
  var i833 = i823[6]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i833[i + 0]) );
  }
  i822.defaultParameterValues = i832
  request.r(i823[7], i823[8], 0, i822, 'unityFallbackShader')
  i822.readDepth = !!i823[9]
  i822.isCreatedByShaderGraph = !!i823[10]
  i822.compiled = !!i823[11]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i837 = data
  i836.shaderName = i837[0]
  i836.errorMessage = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i842 = root || new pc.UnityShaderPass()
  var i843 = data
  i842.id = i843[0]
  i842.subShaderIndex = i843[1]
  i842.name = i843[2]
  i842.passType = i843[3]
  i842.grabPassTextureName = i843[4]
  i842.usePass = !!i843[5]
  i842.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[6], i842.zTest)
  i842.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[7], i842.zWrite)
  i842.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[8], i842.culling)
  i842.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i843[9], i842.blending)
  i842.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i843[10], i842.alphaBlending)
  i842.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[11], i842.colorWriteMask)
  i842.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[12], i842.offsetUnits)
  i842.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[13], i842.offsetFactor)
  i842.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[14], i842.stencilRef)
  i842.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[15], i842.stencilReadMask)
  i842.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[16], i842.stencilWriteMask)
  i842.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i843[17], i842.stencilOp)
  i842.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i843[18], i842.stencilOpFront)
  i842.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i843[19], i842.stencilOpBack)
  var i845 = i843[20]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i845[i + 0]) );
  }
  i842.tags = i844
  var i847 = i843[21]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( i847[i + 0] );
  }
  i842.passDefinedKeywords = i846
  var i849 = i843[22]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i849[i + 0]) );
  }
  i842.passDefinedKeywordGroups = i848
  var i851 = i843[23]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i851[i + 0]) );
  }
  i842.variants = i850
  var i853 = i843[24]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i853[i + 0]) );
  }
  i842.excludedVariants = i852
  i842.hasDepthReader = !!i843[25]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i855 = data
  i854.val = i855[0]
  i854.name = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i857 = data
  i856.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[0], i856.src)
  i856.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[1], i856.dst)
  i856.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[2], i856.op)
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i859 = data
  i858.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[0], i858.pass)
  i858.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[1], i858.fail)
  i858.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[2], i858.zFail)
  i858.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[3], i858.comp)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i863 = data
  i862.name = i863[0]
  i862.value = i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i866.keywords = i868
  i866.hasDiscard = !!i867[1]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i873 = data
  i872.passId = i873[0]
  i872.subShaderIndex = i873[1]
  var i875 = i873[2]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i872.keywords = i874
  i872.vertexProgram = i873[3]
  i872.fragmentProgram = i873[4]
  i872.exportedForWebGl2 = !!i873[5]
  i872.readDepth = !!i873[6]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'shader')
  i878.pass = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i883 = data
  i882.name = i883[0]
  i882.type = i883[1]
  i882.value = new pc.Vec4( i883[2], i883[3], i883[4], i883[5] )
  i882.textureValue = i883[6]
  i882.shaderPropertyFlag = i883[7]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i885 = data
  i884.name = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'texture')
  i884.aabb = i885[3]
  i884.vertices = i885[4]
  i884.triangles = i885[5]
  i884.textureRect = UnityEngine.Rect.MinMaxRect(i885[6], i885[7], i885[8], i885[9])
  i884.packedRect = UnityEngine.Rect.MinMaxRect(i885[10], i885[11], i885[12], i885[13])
  i884.border = new pc.Vec4( i885[14], i885[15], i885[16], i885[17] )
  i884.transparency = i885[18]
  i884.bounds = i885[19]
  i884.pixelsPerUnit = i885[20]
  i884.textureWidth = i885[21]
  i884.textureHeight = i885[22]
  i884.nativeSize = new pc.Vec2( i885[23], i885[24] )
  i884.pivot = new pc.Vec2( i885[25], i885[26] )
  i884.textureRectOffset = new pc.Vec2( i885[27], i885[28] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i887 = data
  i886.name = i887[0]
  i886.wrapMode = i887[1]
  i886.isLooping = !!i887[2]
  i886.length = i887[3]
  var i889 = i887[4]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i889[i + 0]) );
  }
  i886.curves = i888
  var i891 = i887[5]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i891[i + 0]) );
  }
  i886.events = i890
  i886.halfPrecision = !!i887[6]
  i886._frameRate = i887[7]
  i886.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i887[8], i886.localBounds)
  i886.hasMuscleCurves = !!i887[9]
  var i893 = i887[10]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i886.clipMuscleConstant = i892
  i886.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i887[11], i886.clipBindingConstant)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i897 = data
  i896.path = i897[0]
  i896.hash = i897[1]
  i896.componentType = i897[2]
  i896.property = i897[3]
  i896.keys = i897[4]
  var i899 = i897[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i899[i + 0]) );
  }
  i896.objectReferenceKeys = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i903 = data
  i902.time = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'value')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i907 = data
  i906.functionName = i907[0]
  i906.floatParameter = i907[1]
  i906.intParameter = i907[2]
  i906.stringParameter = i907[3]
  request.r(i907[4], i907[5], 0, i906, 'objectReferenceParameter')
  i906.time = i907[6]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i909 = data
  i908.center = new pc.Vec3( i909[0], i909[1], i909[2] )
  i908.extends = new pc.Vec3( i909[3], i909[4], i909[5] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i912.genericBindings = i914
  var i917 = i913[1]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.pptrCurveMapping = i916
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i919 = data
  i918.name = i919[0]
  i918.blendParameter = i919[1]
  i918.blendParameterY = i919[2]
  i918.blendType = i919[3]
  var i921 = i919[4]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i921[i + 0]) );
  }
  i918.children = i920
  i918.useAutomaticThresholds = !!i919[5]
  i918.minThreshold = i919[6]
  i918.maxThreshold = i919[7]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'motion')
  i924.threshold = i925[2]
  i924.position = new pc.Vec2( i925[3], i925[4] )
  i924.timeScale = i925[5]
  i924.cycleOffset = i925[6]
  i924.directBlendParameter = i925[7]
  i924.mirror = !!i925[8]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i927 = data
  i926.name = i927[0]
  i926.ascent = i927[1]
  i926.originalLineHeight = i927[2]
  i926.fontSize = i927[3]
  var i929 = i927[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i929[i + 0]) );
  }
  i926.characterInfo = i928
  request.r(i927[5], i927[6], 0, i926, 'texture')
  i926.originalFontSize = i927[7]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i933 = data
  i932.index = i933[0]
  i932.advance = i933[1]
  i932.bearing = i933[2]
  i932.glyphWidth = i933[3]
  i932.glyphHeight = i933[4]
  i932.minX = i933[5]
  i932.maxX = i933[6]
  i932.minY = i933[7]
  i932.maxY = i933[8]
  i932.uvBottomLeftX = i933[9]
  i932.uvBottomLeftY = i933[10]
  i932.uvBottomRightX = i933[11]
  i932.uvBottomRightY = i933[12]
  i932.uvTopLeftX = i933[13]
  i932.uvTopLeftY = i933[14]
  i932.uvTopRightX = i933[15]
  i932.uvTopRightY = i933[16]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i935 = data
  i934.name = i935[0]
  var i937 = i935[1]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i937[i + 0]) );
  }
  i934.layers = i936
  var i939 = i935[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i939[i + 0]) );
  }
  i934.parameters = i938
  i934.animationClips = i935[3]
  i934.avatarUnsupported = i935[4]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i943 = data
  i942.name = i943[0]
  i942.defaultWeight = i943[1]
  i942.blendingMode = i943[2]
  i942.avatarMask = i943[3]
  i942.syncedLayerIndex = i943[4]
  i942.syncedLayerAffectsTiming = !!i943[5]
  i942.syncedLayers = i943[6]
  i942.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i943[7], i942.stateMachine)
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i945 = data
  i944.id = i945[0]
  i944.name = i945[1]
  i944.path = i945[2]
  var i947 = i945[3]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i947[i + 0]) );
  }
  i944.states = i946
  var i949 = i945[4]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i949[i + 0]) );
  }
  i944.machines = i948
  var i951 = i945[5]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i951[i + 0]) );
  }
  i944.entryStateTransitions = i950
  var i953 = i945[6]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i953[i + 0]) );
  }
  i944.exitStateTransitions = i952
  var i955 = i945[7]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i955[i + 0]) );
  }
  i944.anyStateTransitions = i954
  i944.defaultStateId = i945[8]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i959 = data
  i958.id = i959[0]
  i958.name = i959[1]
  i958.cycleOffset = i959[2]
  i958.cycleOffsetParameter = i959[3]
  i958.cycleOffsetParameterActive = !!i959[4]
  i958.mirror = !!i959[5]
  i958.mirrorParameter = i959[6]
  i958.mirrorParameterActive = !!i959[7]
  i958.motionId = i959[8]
  i958.nameHash = i959[9]
  i958.fullPathHash = i959[10]
  i958.speed = i959[11]
  i958.speedParameter = i959[12]
  i958.speedParameterActive = !!i959[13]
  i958.tag = i959[14]
  i958.tagHash = i959[15]
  i958.writeDefaultValues = !!i959[16]
  var i961 = i959[17]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.behaviours = i960
  var i963 = i959[18]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i963[i + 0]) );
  }
  i958.transitions = i962
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i969 = data
  i968.fullPath = i969[0]
  i968.canTransitionToSelf = !!i969[1]
  i968.duration = i969[2]
  i968.exitTime = i969[3]
  i968.hasExitTime = !!i969[4]
  i968.hasFixedDuration = !!i969[5]
  i968.interruptionSource = i969[6]
  i968.offset = i969[7]
  i968.orderedInterruption = !!i969[8]
  i968.destinationStateId = i969[9]
  i968.isExit = !!i969[10]
  i968.mute = !!i969[11]
  i968.solo = !!i969[12]
  var i971 = i969[13]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i971[i + 0]) );
  }
  i968.conditions = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i977 = data
  i976.destinationStateId = i977[0]
  i976.isExit = !!i977[1]
  i976.mute = !!i977[2]
  i976.solo = !!i977[3]
  var i979 = i977[4]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i979[i + 0]) );
  }
  i976.conditions = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i983 = data
  i982.defaultBool = !!i983[0]
  i982.defaultFloat = i983[1]
  i982.defaultInt = i983[2]
  i982.name = i983[3]
  i982.nameHash = i983[4]
  i982.type = i983[5]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i987 = data
  i986.mode = i987[0]
  i986.parameter = i987[1]
  i986.threshold = i987[2]
  return i986
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i989 = data
  i988.useSafeMode = !!i989[0]
  i988.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i989[1], i988.safeModeOptions)
  i988.timeScale = i989[2]
  i988.unscaledTimeScale = i989[3]
  i988.useSmoothDeltaTime = !!i989[4]
  i988.maxSmoothUnscaledTime = i989[5]
  i988.rewindCallbackMode = i989[6]
  i988.showUnityEditorReport = !!i989[7]
  i988.logBehaviour = i989[8]
  i988.drawGizmos = !!i989[9]
  i988.defaultRecyclable = !!i989[10]
  i988.defaultAutoPlay = i989[11]
  i988.defaultUpdateType = i989[12]
  i988.defaultTimeScaleIndependent = !!i989[13]
  i988.defaultEaseType = i989[14]
  i988.defaultEaseOvershootOrAmplitude = i989[15]
  i988.defaultEasePeriod = i989[16]
  i988.defaultAutoKill = !!i989[17]
  i988.defaultLoopType = i989[18]
  i988.debugMode = !!i989[19]
  i988.debugStoreTargetId = !!i989[20]
  i988.showPreviewPanel = !!i989[21]
  i988.storeSettingsLocation = i989[22]
  i988.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i989[23], i988.modules)
  i988.createASMDEF = !!i989[24]
  i988.showPlayingTweens = !!i989[25]
  i988.showPausedTweens = !!i989[26]
  return i988
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i990 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i991 = data
  i990.logBehaviour = i991[0]
  i990.nestedTweenFailureBehaviour = i991[1]
  return i990
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i993 = data
  i992.showPanel = !!i993[0]
  i992.audioEnabled = !!i993[1]
  i992.physicsEnabled = !!i993[2]
  i992.physics2DEnabled = !!i993[3]
  i992.spriteEnabled = !!i993[4]
  i992.uiEnabled = !!i993[5]
  i992.textMeshProEnabled = !!i993[6]
  i992.tk2DEnabled = !!i993[7]
  i992.deAudioEnabled = !!i993[8]
  i992.deUnityExtendedEnabled = !!i993[9]
  i992.epoOutlineEnabled = !!i993[10]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i997[i + 0]) );
  }
  i994.files = i996
  i994.componentToPrefabIds = i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1001 = data
  i1000.path = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'unityObject')
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1005[i + 0]) );
  }
  i1002.scriptsExecutionOrder = i1004
  var i1007 = i1003[1]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1007[i + 0]) );
  }
  i1002.sortingLayers = i1006
  var i1009 = i1003[2]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1009[i + 0]) );
  }
  i1002.cullingLayers = i1008
  i1002.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1003[3], i1002.timeSettings)
  i1002.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1003[4], i1002.physicsSettings)
  i1002.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1003[5], i1002.physics2DSettings)
  i1002.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1003[6], i1002.qualitySettings)
  i1002.enableRealtimeShadows = !!i1003[7]
  i1002.enableAutoInstancing = !!i1003[8]
  i1002.enableDynamicBatching = !!i1003[9]
  i1002.lightmapEncodingQuality = i1003[10]
  i1002.desiredColorSpace = i1003[11]
  var i1011 = i1003[12]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1002.allTags = i1010
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.value = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1019 = data
  i1018.id = i1019[0]
  i1018.name = i1019[1]
  i1018.value = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.name = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1025 = data
  i1024.fixedDeltaTime = i1025[0]
  i1024.maximumDeltaTime = i1025[1]
  i1024.timeScale = i1025[2]
  i1024.maximumParticleTimestep = i1025[3]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1027 = data
  i1026.gravity = new pc.Vec3( i1027[0], i1027[1], i1027[2] )
  i1026.defaultSolverIterations = i1027[3]
  i1026.bounceThreshold = i1027[4]
  i1026.autoSyncTransforms = !!i1027[5]
  i1026.autoSimulation = !!i1027[6]
  var i1029 = i1027[7]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1029[i + 0]) );
  }
  i1026.collisionMatrix = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.layerId = i1033[1]
  i1032.otherLayerId = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'material')
  i1034.gravity = new pc.Vec2( i1035[2], i1035[3] )
  i1034.positionIterations = i1035[4]
  i1034.velocityIterations = i1035[5]
  i1034.velocityThreshold = i1035[6]
  i1034.maxLinearCorrection = i1035[7]
  i1034.maxAngularCorrection = i1035[8]
  i1034.maxTranslationSpeed = i1035[9]
  i1034.maxRotationSpeed = i1035[10]
  i1034.baumgarteScale = i1035[11]
  i1034.baumgarteTOIScale = i1035[12]
  i1034.timeToSleep = i1035[13]
  i1034.linearSleepTolerance = i1035[14]
  i1034.angularSleepTolerance = i1035[15]
  i1034.defaultContactOffset = i1035[16]
  i1034.autoSimulation = !!i1035[17]
  i1034.queriesHitTriggers = !!i1035[18]
  i1034.queriesStartInColliders = !!i1035[19]
  i1034.callbacksOnDisable = !!i1035[20]
  i1034.reuseCollisionCallbacks = !!i1035[21]
  i1034.autoSyncTransforms = !!i1035[22]
  var i1037 = i1035[23]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1037[i + 0]) );
  }
  i1034.collisionMatrix = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.layerId = i1041[1]
  i1040.otherLayerId = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1045[i + 0]) );
  }
  i1042.qualityLevels = i1044
  var i1047 = i1043[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1042.names = i1046
  i1042.shadows = i1043[2]
  i1042.anisotropicFiltering = i1043[3]
  i1042.antiAliasing = i1043[4]
  i1042.lodBias = i1043[5]
  i1042.shadowCascades = i1043[6]
  i1042.shadowDistance = i1043[7]
  i1042.shadowmaskMode = i1043[8]
  i1042.shadowProjection = i1043[9]
  i1042.shadowResolution = i1043[10]
  i1042.softParticles = !!i1043[11]
  i1042.softVegetation = !!i1043[12]
  i1042.activeColorSpace = i1043[13]
  i1042.desiredColorSpace = i1043[14]
  i1042.masterTextureLimit = i1043[15]
  i1042.maxQueuedFrames = i1043[16]
  i1042.particleRaycastBudget = i1043[17]
  i1042.pixelLightCount = i1043[18]
  i1042.realtimeReflectionProbes = !!i1043[19]
  i1042.shadowCascade2Split = i1043[20]
  i1042.shadowCascade4Split = new pc.Vec3( i1043[21], i1043[22], i1043[23] )
  i1042.streamingMipmapsActive = !!i1043[24]
  i1042.vSyncCount = i1043[25]
  i1042.asyncUploadBufferSize = i1043[26]
  i1042.asyncUploadTimeSlice = i1043[27]
  i1042.billboardsFaceCameraPosition = !!i1043[28]
  i1042.shadowNearPlaneOffset = i1043[29]
  i1042.streamingMipmapsMemoryBudget = i1043[30]
  i1042.maximumLODLevel = i1043[31]
  i1042.streamingMipmapsAddAllCameras = !!i1043[32]
  i1042.streamingMipmapsMaxLevelReduction = i1043[33]
  i1042.streamingMipmapsRenderersPerFrame = i1043[34]
  i1042.resolutionScalingFixedDPIFactor = i1043[35]
  i1042.streamingMipmapsMaxFileIORequests = i1043[36]
  i1042.currentQualityLevel = i1043[37]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1051 = data
  i1050.name = i1051[0]
  var i1053 = i1051[1]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1053[i + 0]) );
  }
  i1050.tos = i1052
  var i1055 = i1051[2]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.constant = i1054
  i1050.isValid = !!i1051[3]
  i1050.isHuman = !!i1051[4]
  i1050.hasRootMotion = !!i1051[5]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1059 = data
  i1058.hash = i1059[0]
  i1058.path = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1063 = data
  i1062.weight = i1063[0]
  i1062.vertices = i1063[1]
  i1062.normals = i1063[2]
  i1062.tangents = i1063[3]
  return i1062
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[43],"56":[3],"57":[40],"58":[40],"59":[40],"60":[40],"61":[40],"62":[40],"63":[40],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[3],"79":[34],"80":[81],"82":[81],"13":[12],"83":[12],"84":[34,12],"85":[12,18],"86":[12],"87":[18,12],"88":[34],"89":[18,12],"90":[12],"91":[92],"93":[12],"94":[12],"15":[13],"19":[18,12],"95":[12],"14":[13],"27":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[12],"101":[12],"102":[12],"103":[12],"104":[18,12],"105":[12],"106":[12],"107":[12],"108":[12],"21":[18,12],"109":[12],"110":[10],"111":[10],"11":[10],"112":[10],"113":[3],"114":[3],"115":[92],"116":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Outline","UnityEngine.UI.Shadow","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.UI.ContentSizeFitter","UnityEngine.Mesh","UnityEngine.MonoBehaviour","Level","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","Car","UnityEngine.BoxCollider","UnityEngine.LineRenderer","UnityEngine.Rigidbody","Stickman","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","PLY01Manager","GamePlayController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "CarConnect";

Deserializers.lunaInitializationTime = "12/31/2024 09:00:08";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "";

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

Deserializers.buildID = "b38fdaed-aa20-4b86-8e55-c8e8fdf2e363";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

