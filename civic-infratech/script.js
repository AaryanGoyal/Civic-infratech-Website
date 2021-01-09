(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.playList_CCF1F9EC_E9CC_AA2A_41D2_AA371DB39E02.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": 28.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0632DBC_E9CC_AA2A_41D5_006724C3BDDB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 27.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF97FAA4_E9CC_AEDA_41DD_5CA27CDDD6D3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 121.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE6C4B80_E9CC_AEDB_41DF_79F86990C302",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -84.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0F89E23_E9CC_A9DD_41C7_E4597E04751B",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r3.1",
 "hfovMin": "150%",
 "id": "panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95",
 "overlays": [
  "this.overlay_92B917A2_B1DA_3271_41C3_D266F863066E",
  "this.overlay_97D4FF6A_B1DA_F2CA_41E5_48DC3D004929",
  "this.overlay_941155DE_B1DB_F1D1_41CF_C7840C45B890",
  "this.panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 86.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.13,
   "panorama": "this.panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5",
   "distance": 1
  },
  {
   "panorama": "this.panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -144.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 76.55,
   "panorama": "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r1.2",
 "hfovMin": "150%",
 "id": "panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE",
 "overlays": [
  "this.overlay_922513A9_B1DB_D273_41E4_7D7126A1DE09",
  "this.overlay_90E7E67F_B1DB_D2CF_41DD_B3747CD526E6",
  "this.panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -18.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 90.14,
   "panorama": "this.panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF",
   "distance": 1
  },
  {
   "yaw": 95.29,
   "class": "AdjacentPanorama",
   "backwardYaw": -140.76,
   "panorama": "this.panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -72.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1DB1D5E_E9CC_AA66_41D0_3BB32BB126F3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 22.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C03F0D9D_E9CC_AAEA_41E7_24E331E9DA0F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -102.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0C4CDFA_E9CC_AA2F_41A8_51EB3F59C88D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "temple",
 "hfovMin": "150%",
 "id": "panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1",
 "overlays": [
  "this.overlay_94FAE3DD_B1EA_31D3_41D1_2CBF3044BEB5",
  "this.panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 161.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.43,
   "panorama": "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -67.21,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF6C2A7B_E9CC_AE2E_41E7_DDB9AD6CA49E",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "w1",
 "hfovMin": "150%",
 "id": "panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA",
 "overlays": [
  "this.overlay_9676F71F_B1F6_D24E_41E4_3957A457B806",
  "this.panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -140.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.29,
   "panorama": "this.panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -89.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF223A31_E9CC_AE3A_41E8_9C092B1C914C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "E",
 "hfovMin": "150%",
 "id": "panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2",
 "overlays": [
  "this.overlay_85E27543_B26E_3637_417B_AB18E27F483C",
  "this.overlay_82406E17_B26E_325F_41BA_713DD71F15E3",
  "this.overlay_85E9B5DC_B26A_31D1_41DC_1578FB0AF90F",
  "this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 109.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -50.84,
   "panorama": "this.panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347",
   "distance": 1
  },
  {
   "yaw": 35.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -152.17,
   "panorama": "this.panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A",
   "distance": 1
  },
  {
   "yaw": -170.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.89,
   "panorama": "this.panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_18_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_18",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.55 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_18.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Staircase",
 "hfovMin": "150%",
 "id": "panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545",
 "overlays": [
  "this.overlay_851B2738_B27E_3251_41C4_BDB11992820C",
  "this.overlay_8573E3D2_B27E_31D1_41E3_4BDDF415B23B",
  "this.overlay_AC4B3D73_BC94_267D_41C3_159BF5212720",
  "this.overlay_A267CBDE_BCEC_62A6_41D6_6ADB93D904A4",
  "this.panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -61.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 112.79,
   "panorama": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
   "distance": 1
  },
  {
   "panorama": "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "w4.2",
 "hfovMin": "150%",
 "id": "panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7",
 "overlays": [
  "this.overlay_97D7FD35_B1FA_F653_41D5_064BF8944AD3",
  "this.overlay_9D210FB1_B1FB_D252_41D8_4FD598DD833B",
  "this.overlay_9C4AAEA3_B1FA_7277_41C9_8F5C3040A273",
  "this.overlay_9AF3118D_B1DE_4E33_419D_3F906832C8AD",
  "this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -28.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.7,
   "panorama": "this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498",
   "distance": 1
  },
  {
   "yaw": 121.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -45.76,
   "panorama": "this.panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF",
   "distance": 1
  },
  {
   "panorama": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 67.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 132.69,
   "panorama": "this.panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "commom w",
 "hfovMin": "150%",
 "id": "panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED",
 "overlays": [
  "this.overlay_B065DEE9_AE2A_53F3_41E4_417AAF844E4B",
  "this.panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 127.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.5,
   "panorama": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_camera",
 "class": "PanoramaCamera"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_A59D0A15_BCD4_E59C_41C6_F36C2B30E1AA_t.jpg",
 "id": "map_A59D0A15_BCD4_E59C_41C6_F36C2B30E1AA",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 877,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "levels": [
   {
    "url": "media/map_A59D0A15_BCD4_E59C_41C6_F36C2B30E1AA.jpeg",
    "width": 877,
    "class": "ImageResourceLevel",
    "height": 1241
   },
   {
    "url": "media/map_A59D0A15_BCD4_E59C_41C6_F36C2B30E1AA_lq.jpeg",
    "width": 215,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 305
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 4,
 "minimumZoomFactor": 1,
 "label": "WhatsApp Image 2020-12-30 at 10.22.09 PM",
 "class": "Map",
 "scaleMode": "fit_inside",
 "height": 1241
},
{
 "initialPosition": {
  "yaw": 39.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF355A3C_E9CC_AE2A_41D2_252716A6BEC6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C05D4DB2_E9CC_AA3E_41E7_5756772849E5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 111.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1EBDD69_E9CC_AA2A_41D5_E88CEBF05C73",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_10_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_10",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.53 PM (2)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_10.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 802
},
{
 "initialPosition": {
  "yaw": 9.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C13DACAA_E9CC_AA2F_41D8_1E09CAA5E5AC",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r3.2",
 "hfovMin": "150%",
 "id": "panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5",
 "overlays": [
  "this.overlay_97A2E37B_B1EA_72D6_41D5_2AC3C9033782",
  "this.overlay_94305CB3_B1EA_7657_41E2_E9F2315F4FCC",
  "this.panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 135.01,
   "class": "AdjacentPanorama",
   "backwardYaw": 77.7,
   "panorama": "this.panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC",
   "distance": 1
  },
  {
   "yaw": -93.13,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.98,
   "panorama": "this.panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -78.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C10E5C68_E9CC_AA2A_41D1_FAB90434FFA7",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_A59D0A15_BCD4_E59C_41C6_F36C2B30E1AA",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_CCF1B9ED_E9CC_AA2A_41DD_2FA109725A0C",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -93.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0CAAE05_E9CC_A9E5_4185_F3F8A8E9759A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -18.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C163CCEE_E9CC_AA26_41EC_F48F4D42A7FF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -98.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF4F9A5C_E9CC_AE6A_41D4_F16D80701487",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -14.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CEB67BEB_E9CC_AE2E_41D5_C000723F55D1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -95.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1D50D53_E9CC_AA7E_41DF_A4424C192EDE",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_2_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_2",
 "width": 960,
 "label": "WhatsApp Image 2020-12-30 at 10.22.37 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "initialPosition": {
  "yaw": 139.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF9BBAAD_E9CC_AE2A_41D1_6D701DF48320",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "kitchen",
 "hfovMin": "150%",
 "id": "panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8",
 "overlays": [
  "this.overlay_B2FF4FAC_AE2A_5272_4191_9AD9217BD350",
  "this.panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 163.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.71,
   "panorama": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -154.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CEDBCC29_E9CC_AA2D_41C1_D5AB3C324193",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R0010942",
 "hfovMin": "150%",
 "id": "panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
 "overlays": [
  "this.overlay_BF4CA061_AE36_4EF3_41E3_3F8B2EB46AC4",
  "this.overlay_B1666532_AE36_D651_41E5_C78386A1B717",
  "this.overlay_B15003EF_AE36_31CF_41C0_4153A1CDCE15",
  "this.overlay_B38D673F_AE36_324F_41E3_9761B715EA11",
  "this.overlay_B34B1E93_AE2A_3257_41E5_2DF787F2EC16",
  "this.overlay_81290610_B25A_5251_41E4_F85FDE6A8583",
  "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -6.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 127.34,
   "panorama": "this.panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED",
   "distance": 1
  },
  {
   "yaw": 86.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.91,
   "panorama": "this.panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8",
   "distance": 1
  },
  {
   "yaw": 39.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -151.81,
   "panorama": "this.panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50",
   "distance": 1
  },
  {
   "yaw": -54.89,
   "class": "AdjacentPanorama",
   "backwardYaw": 51.01,
   "panorama": "this.panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF",
   "distance": 1
  },
  {
   "yaw": -129.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 28.71,
   "panorama": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
   "distance": 1
  },
  {
   "yaw": 134.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.03,
   "panorama": "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R0011050",
 "hfovMin": "150%",
 "id": "panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B",
 "overlays": [
  "this.overlay_A0518CB9_BC94_26EA_41C5_EB08D3B08760",
  "this.overlay_A0459D72_BC94_267E_41DA_328C1817315D",
  "this.panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -40.89,
   "class": "AdjacentPanorama",
   "backwardYaw": 111.14,
   "panorama": "this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED",
   "distance": 1
  },
  {
   "yaw": -14.12,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.25,
   "panorama": "this.panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_t.jpg",
 "hfovMax": 130
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": -59.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF3D7A47_E9CC_AE66_4134_7DBFD3BD5054",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -93.29,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFAC8AB8_E9CC_AE2A_41E6_BE1B58D6F13F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -151.29,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C081FDD0_E9CC_AA7A_41DD_38972089FA36",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 35.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE73AB96_E9CC_AEE7_41D9_BFE0025B48E6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -140.31,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CEF96C53_E9CC_AA7E_41E7_153B913A3C6D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 91.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE0D9B0C_E9CC_AFEA_41D3_9FCCD3557AA4",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bal3",
 "hfovMin": "150%",
 "id": "panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9",
 "overlays": [
  "this.overlay_9B7B8BE3_B1DE_31F6_41E3_79AF3B274201",
  "this.panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -59.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.9,
   "panorama": "this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -70.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1A70D30_E9CC_AA3A_41E2_7DEBAD9B8EE7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 22.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C02F3D93_E9CC_AAFE_41C9_DEB936D84EA6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -45.13,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE283B2D_E9CC_AE2A_41CE_3B430B85125C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -153.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C11F9C7C_E9CC_AA2A_41E9_0DF7E1854379",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_19_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_19",
 "width": 960,
 "label": "WhatsApp Image 2020-12-30 at 10.22.57 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_19.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "initialPosition": {
  "yaw": -34.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0092D7E_E9CC_AA26_41E8_DFBE0EAFF768",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 140.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE832BAB_E9CC_AE2E_41DC_091DC2991A08",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 139.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE25BB22_E9CC_AFDE_41E2_478CCE6919A8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "P2",
 "hfovMin": "150%",
 "id": "panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF",
 "overlays": [
  "this.overlay_84621A3A_B276_F251_41C2_42A17F8E4DE2",
  "this.overlay_86526397_B275_D25F_41DC_2F281C1B9C7D",
  "this.panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -88.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 120.41,
   "panorama": "this.panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A",
   "distance": 1
  },
  {
   "yaw": 55.2,
   "class": "AdjacentPanorama",
   "backwardYaw": -19.34,
   "panorama": "this.panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -70.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C171BD04_E9CC_ABDA_41CE_92D599A48E48",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "w3",
 "hfovMin": "150%",
 "id": "panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC",
 "overlays": [
  "this.overlay_9A9E82C4_B1FA_5231_41E5_4DB265D8B3AD",
  "this.panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 77.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.01,
   "panorama": "this.panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R0011049",
 "hfovMin": "150%",
 "id": "panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD",
 "overlays": [
  "this.overlay_AF5E7967_BC94_2E65_41CD_880EF466112B",
  "this.overlay_AFD91D2E_BC94_27E7_41E6_4B9FD8CEAD32",
  "this.overlay_AF0080E0_BC94_5E9A_41DA_33DA47283424",
  "this.panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -75.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 81.97,
   "panorama": "this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED",
   "distance": 1
  },
  {
   "yaw": 161.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.12,
   "panorama": "this.panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -44.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CEEB6C3E_E9CC_AA26_41E1_40D99B5FC948",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -18.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE912BC0_E9CC_AE5A_41CF_6F89D0D00E66",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_6_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_6",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.52 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 879
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bal2",
 "hfovMin": "150%",
 "id": "panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498",
 "overlays": [
  "this.overlay_9C0C1876_B1D6_5ED1_41BE_3E685D1C0DBD",
  "this.overlay_99BAC375_B1D6_72D2_41CA_B95BA839D779",
  "this.overlay_9B41D3AF_B1DA_524F_41E5_5B564820259D",
  "this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 26.65,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.37,
   "panorama": "this.panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C",
   "distance": 1
  },
  {
   "yaw": -154.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -59.22,
   "panorama": "this.panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9",
   "distance": 1
  },
  {
   "yaw": 109.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -28.3,
   "panorama": "this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -45.59,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CEA6BBD6_E9CC_AE66_41E9_4FEC21418E3B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 118.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1F9CD74_E9CC_AA3A_41E9_1E455CDF3127",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 117.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1B5ED3C_E9CC_AA2A_41DE_D0B627252204",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_3_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_3",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.50 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 960
},
{
 "initialPosition": {
  "yaw": 86.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF717A86_E9CC_AEE6_41CE_26AC204502D9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -124.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1C5FD48_E9CC_AA6A_41C8_FD7892E72348",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_12_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_12",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.53 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_12.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "initialPosition": {
  "yaw": 25.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFC7AACD_E9CC_AE6A_41D9_A9E7B5FCD931",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 160.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF477A51_E9CC_AE7A_41C7_3B9C0CE8FCF5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 41.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0B77DF1_E9CC_AA3A_41E8_0774D1BCEB70",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -68.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1539CD8_E9CC_AA6A_41E1_CB0ED86569C0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "lobby",
 "hfovMin": "150%",
 "id": "panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7",
 "overlays": [
  "this.overlay_8FA6159B_AE2A_5657_41A2_FF354174D22E",
  "this.overlay_B090C96D_AE2A_5EF3_41DA_49A3F0E15438",
  "this.overlay_92638658_B1D5_D2D1_41E2_3B0CF7314711",
  "this.overlay_9306093E_B1D5_DE51_41B5_ABD762A63F50",
  "this.overlay_9440BBFE_B1D5_D1D1_41E0_C1297DB495E3",
  "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -138.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -58.12,
   "panorama": "this.panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF",
   "distance": 1
  },
  {
   "yaw": 76.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -144.6,
   "panorama": "this.panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95",
   "distance": 1
  },
  {
   "yaw": 122.19,
   "class": "AdjacentPanorama",
   "backwardYaw": -39.94,
   "panorama": "this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A",
   "distance": 1
  },
  {
   "yaw": 7.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.52,
   "panorama": "this.panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1",
   "distance": 1
  },
  {
   "yaw": -113.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 134.41,
   "panorama": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R0010979",
 "hfovMin": "150%",
 "id": "panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF",
 "overlays": [
  "this.overlay_9777B506_B1F6_7631_41DB_071B3F1B51D6",
  "this.overlay_974137F8_B1F6_71D2_41E4_18A4C576BC2E",
  "this.panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 90.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.65,
   "panorama": "this.panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE",
   "distance": 1
  },
  {
   "yaw": -58.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -138.63,
   "panorama": "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_A59D0A15_BCD4_E59C_41C6_F36C2B30E1AA",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_CCF1F9EC_E9CC_AA2A_41D2_AA371DB39E02",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Enter",
 "hfovMin": "150%",
 "id": "panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
 "overlays": [
  "this.overlay_851EC7E4_B257_F1F1_41DC_23095D9F2633",
  "this.overlay_8305C14B_B256_CE37_41D3_99FA876FC8A8",
  "this.overlay_83F60383_B256_D237_41E1_5E6842D7F6A8",
  "this.overlay_AC984954_BC94_2FBA_41A6_7581CBF84766",
  "this.overlay_ACFB864F_BC94_25A5_41E6_31117EB86478",
  "this.overlay_CA303CA9_E844_673B_41E0_CD2EDA309528",
  "this.overlay_CA2A3C97_E844_6717_41DC_2B14E1B4E0CC",
  "this.overlay_CA2D0FB3_E844_612F_41DD_4F99103F4CA6",
  "this.overlay_CA16845B_E844_A71F_41DE_63D260E01473",
  "this.overlay_CA001D3D_E844_A11B_41E9_4D4BB1120B29",
  "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 112.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -61.55,
   "panorama": "this.panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545",
   "distance": 1
  },
  {
   "yaw": 134.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 145.73,
   "panorama": "this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED",
   "distance": 1
  },
  {
   "yaw": 28.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -129.09,
   "panorama": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "distance": 1
  },
  {
   "yaw": -151.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -157.92,
   "panorama": "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0",
   "distance": 1
  },
  {
   "yaw": 144.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -157.92,
   "panorama": "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_t.jpg",
 "hfovMax": 150
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "P1",
 "hfovMin": "150%",
 "id": "panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A",
 "overlays": [
  "this.overlay_86B2CC76_B26A_F6DE_41D0_2B1E5028E634",
  "this.overlay_A9D240F2_BCAC_5E7F_41E1_446E9A4CDEA1",
  "this.panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -152.17,
   "class": "AdjacentPanorama",
   "backwardYaw": 35.64,
   "panorama": "this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2",
   "distance": 1
  },
  {
   "yaw": 120.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.94,
   "panorama": "this.panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 161.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0A6CDE6_E9CC_AA26_41D0_AB19AE6253EF",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_0_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_0",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.36 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_15_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_15",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.54 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_15.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 871
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_14_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_14",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.54 PM (2)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_14.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "initialPosition": {
  "yaw": 151.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE542B57_E9CC_AE66_41DA_1255B816CA6F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "LL1",
 "hfovMin": "150%",
 "id": "panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0",
 "overlays": [
  "this.overlay_820DD3CC_B26A_5231_41A5_7B76C53CB773",
  "this.overlay_858F524E_B26A_D231_41B8_ABBC2109539F",
  "this.overlay_AC96E317_BC94_63A5_41CA_23A9113BAD03",
  "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -62.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 125.55,
   "panorama": "this.panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347",
   "distance": 1
  },
  {
   "yaw": -157.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -151.12,
   "panorama": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
   "distance": 1
  },
  {
   "yaw": 129.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -151.12,
   "panorama": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_t.jpg",
 "hfovMax": 130
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_17_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_17",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.55 PM (2)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_17.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "initialPosition": {
  "yaw": 120.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE418B40_E9CC_AE5A_41DA_930FF0DAA853",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "w4.1",
 "hfovMin": "150%",
 "id": "panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF",
 "overlays": [
  "this.overlay_99EB73B2_B1FE_D256_41E1_1D732BEF66BD",
  "this.overlay_98B32C80_B1FE_D631_41D2_56C7A32D08C8",
  "this.overlay_9A8C9FE2_B1FE_D1F1_41BE_C0528381D642",
  "this.panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 51.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -54.89,
   "panorama": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "distance": 1
  },
  {
   "yaw": -45.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 121.71,
   "panorama": "this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 24.51,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": -3.46
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 129.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF8D6A9A_E9CC_AEEE_41DB_C41BEEA52FB0",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_13_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_13",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.54 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_13.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1177
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "L2",
 "hfovMin": "150%",
 "id": "panorama_97F3976D_B1EE_32F3_41E1_266534F8568B",
 "overlays": [
  "this.overlay_9AAAB7D0_B1EA_51D1_41D1_E82AAA179F96",
  "this.overlay_9A1FC087_B1EA_CE3F_41DC_E36313EA40E7",
  "this.panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -62.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 107.3,
   "panorama": "this.panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C",
   "distance": 1
  },
  {
   "yaw": 101.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -68.41,
   "panorama": "this.panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R0011048",
 "hfovMin": "150%",
 "id": "panorama_ACEC36F5_BCAC_2265_41D4_053149890EED",
 "overlays": [
  "this.overlay_AE0A275A_BC9C_63AF_41D0_2348A621838F",
  "this.overlay_AEC49158_BC9C_3FAB_41D9_F69BD3A7A810",
  "this.overlay_AEF2D4FE_BC9C_2667_41DB_62B5FDE1610D",
  "this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 81.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -75.21,
   "panorama": "this.panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD",
   "distance": 1
  },
  {
   "yaw": 111.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.89,
   "panorama": "this.panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B",
   "distance": 1
  },
  {
   "yaw": 145.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 134.87,
   "panorama": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE59EB6C_E9CC_AE2A_41DB_CCACCB3666A1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_7_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_7",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.52 PM (2)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_7.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 973
},
{
 "initialPosition": {
  "yaw": -112.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFB34AC2_E9CC_AE5E_41C8_9ECD7009C9A7",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "SIDE2",
 "hfovMin": "150%",
 "id": "panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126",
 "overlays": [
  "this.overlay_8424686A_B276_DEF1_41E0_80C40CDAC9CC",
  "this.overlay_8534BDF8_B27A_71D2_41B5_3FB4F6B70954",
  "this.panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -40.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.27,
   "panorama": "this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2",
   "distance": 1
  },
  {
   "yaw": 84.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.58,
   "panorama": "this.panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 134.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C181FD19_E9CC_ABEA_41E9_52AB97FF57C4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 165.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF500A66_E9CC_AE26_41A1_57E5E37EF052",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "w4",
 "hfovMin": "150%",
 "id": "panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D",
 "overlays": [
  "this.overlay_995B2F03_B1F5_D237_41BB_0C97657DD556",
  "this.panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 132.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 67.49,
   "panorama": "this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "LL2",
 "hfovMin": "150%",
 "id": "panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347",
 "overlays": [
  "this.overlay_842CA3DA_B26E_31D1_41DC_CB49F94DE3D3",
  "this.overlay_8170F7C8_B26E_3231_41E3_153D234A2393",
  "this.panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -50.84,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.77,
   "panorama": "this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2",
   "distance": 1
  },
  {
   "yaw": 125.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.85,
   "panorama": "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -144.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFF88B02_E9CC_AFDE_41B0_A4FA22AC271A",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_20_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_20",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.57 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_20.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 967
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -128.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0709DC5_E9CC_AA5A_41EB_02EC0CA4D005",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 104.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE101B17_E9CC_AFE6_41DB_1F3EE1B19D25",
 "class": "PanoramaCamera"
},
{
 "playList": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_AlbumPlayList",
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_t.png",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4",
 "label": "Photo Album WhatsApp Image 2020-12-30 at 10.22.36 PM (1)",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": -103.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF782A90_E9CC_AEFA_41E1_FED17E4E4CC7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -172.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CF5BEA71_E9CC_AE3A_41D6_9A01187B1E0F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 117.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C12C3C91_E9CC_AAFD_41EA_B06B2D204EEE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -54.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFDF7AE3_E9CC_AE5E_41E0_ED536E4EF45F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 69.16,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -0.61
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R0011044",
 "hfovMin": "150%",
 "id": "panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9",
 "overlays": [
  "this.overlay_8512B2D6_B27A_53DE_41C3_E1619ADAEC81",
  "this.overlay_854F3C89_B27A_3633_41E3_E8930317FF0D",
  "this.panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -19.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 55.2,
   "panorama": "this.panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF",
   "distance": 1
  },
  {
   "yaw": 163.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 84.65,
   "panorama": "this.panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -47.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1978D26_E9CC_AA26_41C1_21278FEF82E3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C1425CC1_E9CC_AA5A_41EB_6A973A52C7F2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 28.88,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFE07AEE_E9CC_AE26_41B3_0E045A01429E",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_16_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_16",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.55 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_16.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "initialPosition": {
  "yaw": 50.91,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C01FAD88_E9CC_AAEA_41C8_FC1414183DF9",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_1_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_1",
 "width": 960,
 "label": "WhatsApp Image 2020-12-30 at 10.22.36 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_camera"
  },
  {
   "media": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_camera"
  },
  {
   "media": "this.panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_camera"
  },
  {
   "media": "this.panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_camera"
  },
  {
   "media": "this.panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_camera"
  },
  {
   "media": "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_camera"
  },
  {
   "media": "this.panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_camera"
  },
  {
   "media": "this.panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_camera"
  },
  {
   "media": "this.panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_camera"
  },
  {
   "media": "this.panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_camera"
  },
  {
   "media": "this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_camera"
  },
  {
   "media": "this.panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_camera"
  },
  {
   "media": "this.panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_camera"
  },
  {
   "media": "this.panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_camera"
  },
  {
   "media": "this.panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_camera"
  },
  {
   "media": "this.panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_camera"
  },
  {
   "media": "this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_camera"
  },
  {
   "media": "this.panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_camera"
  },
  {
   "media": "this.panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_camera"
  },
  {
   "media": "this.panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_camera"
  },
  {
   "media": "this.panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_camera"
  },
  {
   "media": "this.panorama_97F3976D_B1EE_32F3_41E1_266534F8568B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_camera"
  },
  {
   "media": "this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_camera"
  },
  {
   "media": "this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_camera"
  },
  {
   "media": "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_camera"
  },
  {
   "media": "this.panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_camera"
  },
  {
   "media": "this.panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_camera"
  },
  {
   "media": "this.panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_camera"
  },
  {
   "media": "this.panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_camera"
  },
  {
   "media": "this.panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_camera"
  },
  {
   "media": "this.panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_camera"
  },
  {
   "media": "this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_camera"
  },
  {
   "media": "this.panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_camera"
  },
  {
   "media": "this.panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bal 1",
 "hfovMin": "150%",
 "id": "panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C",
 "overlays": [
  "this.overlay_9D3E8A0B_B1EA_3237_41E2_CC00721E2DF3",
  "this.overlay_9E57C91D_B1D6_5E53_41D4_73EF7011AA2D",
  "this.panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -170.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.65,
   "panorama": "this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498",
   "distance": 1
  },
  {
   "yaw": 107.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.58,
   "panorama": "this.panorama_97F3976D_B1EE_32F3_41E1_266534F8568B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_9_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_9",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.53 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_9.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "r2.2",
 "hfovMin": "150%",
 "id": "panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4",
 "overlays": [
  "this.overlay_95DCB862_B1DF_DEFA_41C3_8979EBE08325",
  "this.overlay_919A9B3C_B1DF_D251_41D6_067B27031653",
  "this.panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -63.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 165.98,
   "panorama": "this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A",
   "distance": 1
  },
  {
   "panorama": "this.panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -58.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0EAFE19_E9CC_A9ED_41E4_453DE12DFE1D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 66.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C096BDDB_E9CC_AA6E_41E0_3BFFC95B6CBB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -52.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C04D0DA8_E9CC_AA2A_41EB_2396A412DBEC",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_11_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_11",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.53 PM (3)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_11.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_4_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_4",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.51 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "initialPosition": {
  "yaw": 173.5,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFC8EAD9_E9CC_AE6A_41E8_AA39FB138973",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_8_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_8",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.52 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_8.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 853
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "room 2.1",
 "hfovMin": "150%",
 "id": "panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A",
 "overlays": [
  "this.overlay_9488D953_B1EF_DED7_41DE_D88785A80A45",
  "this.overlay_944E435F_B1EE_52CF_41E1_39A9BBDD7244",
  "this.overlay_98B4A047_B1ED_CE3F_41DA_0DCC38364C39",
  "this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -39.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 122.19,
   "panorama": "this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7",
   "distance": 1
  },
  {
   "yaw": 165.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -63.61,
   "panorama": "this.panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4",
   "distance": 1
  },
  {
   "yaw": 136.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 25.96,
   "panorama": "this.panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4",
   "start": "this.changeBackgroundWhilePlay(this.playList_CCD0C9DF_E9CC_AA66_41D4_BF4834D4B521, 0, '#001C60')",
   "begin": "this.loopAlbum(this.playList_CCD0C9DF_E9CC_AA66_41D4_BF4834D4B521, 0)",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_CCD0C9DF_E9CC_AA66_41D4_BF4834D4B521",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 9.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CE3D5B36_E9CC_AE26_41DD_A707D7B6697E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 28.88,
  "hfov": 145,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CFF4EAF9_E9CC_AE2A_41DF_6131015588B2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "L1",
 "hfovMin": "150%",
 "id": "panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50",
 "overlays": [
  "this.overlay_8F1D5AD0_AE2E_D3D1_41DF_FDF6622E672A",
  "this.overlay_B13D5DEB_AE2E_D1F7_41D1_4EFCFDFC0D8E",
  "this.panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -151.81,
   "class": "AdjacentPanorama",
   "backwardYaw": 39.69,
   "panorama": "this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5",
   "distance": 1
  },
  {
   "yaw": -68.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 101.12,
   "panorama": "this.panorama_97F3976D_B1EE_32F3_41E1_266534F8568B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 116.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CED5EC14_E9CC_A9FA_41D5_F2F90BE2D19E",
 "class": "PanoramaCamera"
},
{
 "duration": 3000,
 "thumbnailUrl": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_5_t.jpg",
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_5",
 "width": 1280,
 "label": "WhatsApp Image 2020-12-30 at 10.22.51 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 947
},
{
 "initialPosition": {
  "yaw": 125.11,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C0DABE0F_E9CC_A9E5_41EB_8064B7BD5B82",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -57.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CEC45C00_E9CC_A9DA_41C0_C87C2D2483FC",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "w2.1",
 "hfovMin": "150%",
 "id": "panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379",
 "overlays": [
  "this.overlay_9672B064_B1FA_CEF1_41C5_4D2739889690",
  "this.panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 25.96,
   "class": "AdjacentPanorama",
   "backwardYaw": 136.54,
   "panorama": "this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_camera",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 15,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 133,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 118,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.76,
   "yaw": -144.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7, this.camera_CF782A90_E9CC_AEFA_41E1_FED17E4E4CC7); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0_HS_4_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.33,
   "yaw": -144.6
  }
 ],
 "id": "overlay_92B917A2_B1DA_3271_41C3_D266F863066E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 86.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Rear view ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5, this.camera_CF717A86_E9CC_AEE6_41CE_26AC204502D9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0_HS_5_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.3,
   "yaw": 86.98
  }
 ],
 "id": "overlay_97D4FF6A_B1DA_F2CA_41E5_48DC3D004929",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 134.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Washroom ",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_0_HS_6_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59,
   "yaw": 134.34
  }
 ],
 "id": "overlay_941155DE_B1DB_F1D1_41CF_C7840C45B890",
 "data": {
  "label": "Arrow Transparent Right"
 }
},
{
 "inertia": true,
 "id": "panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 95.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Washroom ",
   "click": "this.startPanoramaWithCamera(this.panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA, this.camera_CF355A3C_E9CC_AE2A_41D2_252716A6BEC6); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.93,
   "yaw": 95.29
  }
 ],
 "id": "overlay_922513A9_B1DB_D273_41E4_7D7126A1DE09",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -18.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom 2 Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF, this.camera_CF223A31_E9CC_AE3A_41E8_9C092B1C914C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_0_HS_3_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.58,
   "yaw": -18.65
  }
 ],
 "id": "overlay_90E7E67F_B1DB_D2CF_41DD_B3747CD526E6",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.66,
   "yaw": 161.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7, this.camera_CF5BEA71_E9CC_AE3A_41D6_9A01187B1E0F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.8,
   "yaw": 161.52
  }
 ],
 "id": "overlay_94FAE3DD_B1EA_31D3_41D1_2CBF3044BEB5",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_CCD0C9DF_E9CC_AA66_41D4_BF4834D4B521.set('selectedIndex', -1); }, this); this.playList_CCD0C9DF_E9CC_AA66_41D4_BF4834D4B521.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "toolTipShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -140.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Side view ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE, this.camera_C0F89E23_E9CC_A9DD_41C7_E4597E04751B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.09,
   "yaw": -140.76
  }
 ],
 "id": "overlay_9676F71F_B1F6_D24E_41E4_3957A457B806",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_A28FCDC2_AE2A_D631_41B8_FC4DBFD1CFAA_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": -170.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Side Parking ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126, this.camera_CF9BBAAD_E9CC_AE2A_41D1_6D701DF48320); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.28,
   "yaw": -170.27
  }
 ],
 "id": "overlay_85E27543_B26E_3637_417B_AB18E27F483C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 35.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Parking Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A, this.camera_CF97FAA4_E9CC_AEDA_41DD_5CA27CDDD6D3); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97,
   "yaw": 35.64
  }
 ],
 "id": "overlay_82406E17_B26E_325F_41BA_713DD71F15E3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.76,
   "yaw": 109.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lift Lobby Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347, this.camera_CF8D6A9A_E9CC_AEEE_41DB_C41BEEA52FB0); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_1_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.03,
   "yaw": 109.77
  }
 ],
 "id": "overlay_85E9B5DC_B26A_31D1_41DC_1578FB0AF90F",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": -92.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lift Lobby ",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.86,
   "yaw": -92.78
  }
 ],
 "id": "overlay_851B2738_B27E_3251_41C4_BDB11992820C",
 "data": {
  "label": "Arrow Transparent Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": -61.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Main Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3, this.camera_CF6C2A7B_E9CC_AE2E_41E7_DDB9AD6CA49E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.48,
   "yaw": -61.55
  }
 ],
 "id": "overlay_8573E3D2_B27E_31D1_41E3_4BDDF415B23B",
 "data": {
  "label": "Arrow Transparent Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.07,
   "yaw": 112.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrace ",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0_HS_2_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.98,
   "yaw": 112.91
  }
 ],
 "id": "overlay_AC4B3D73_BC94_267D_41C3_159BF5212720",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.4,
   "yaw": -166.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lift Lobby ",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_0_HS_3_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.38,
   "yaw": -166.15
  }
 ],
 "id": "overlay_A267CBDE_BCEC_62A6_41D6_6ADB93D904A4",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 121.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Master Bedroom Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF, this.camera_C181FD19_E9CC_ABEA_41E9_52AB97FF57C4); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9,
   "yaw": 121.71
  }
 ],
 "id": "overlay_97D7FD35_B1FA_F653_41D5_064BF8944AD3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 67.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Washroom",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D, this.camera_C1978D26_E9CC_AA26_41C1_21278FEF82E3); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27,
   "yaw": 67.49
  }
 ],
 "id": "overlay_9D210FB1_B1FB_D252_41D8_4FD598DD833B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 95.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrance ",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61,
   "yaw": 95.63
  }
 ],
 "id": "overlay_9C4AAEA3_B1FA_7277_41C9_8F5C3040A273",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -28.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Balcony ",
   "click": "this.startPanoramaWithCamera(this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498, this.camera_C171BD04_E9CC_ABDA_41CE_92D599A48E48); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_0_HS_3_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21,
   "yaw": -28.3
  }
 ],
 "id": "overlay_9AF3118D_B1DE_4E33_419D_3F906832C8AD",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 127.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5, this.camera_CFC8EAD9_E9CC_AE6A_41E8_AA39FB138973); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9CEFC377_B236_52DF_41E4_E0E4E0E6407B",
   "pitch": -4.87,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 127.34
  }
 ],
 "id": "overlay_B065DEE9_AE2A_53F3_41E4_417AAF844E4B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.13,
   "yaw": 135.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Washroom ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC, this.camera_C0C4CDFA_E9CC_AA2F_41A8_51EB3F59C88D); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0_HS_2_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59,
   "yaw": 135.01
  }
 ],
 "id": "overlay_97A2E37B_B1EA_72D6_41D5_2AC3C9033782",
 "data": {
  "label": "Arrow Transparent Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.04,
   "yaw": -93.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom 4 Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95, this.camera_C0CAAE05_E9CC_A9E5_4185_F3F8A8E9759A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_0_HS_3_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.1,
   "yaw": -93.13
  }
 ],
 "id": "overlay_94305CB3_B1EA_7657_41E2_E9F2315F4FCC",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.75,
   "yaw": 163.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5, this.camera_CFAC8AB8_E9CC_AE2A_41E6_BE1B58D6F13F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_0_HS_3_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.02,
   "yaw": 163.91
  }
 ],
 "id": "overlay_B2FF4FAC_AE2A_5272_4191_9AD9217BD350",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -6.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Powder Room ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED, this.camera_C04D0DA8_E9CC_AA2A_41EB_2396A412DBEC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9CED8371_B236_52D3_41D3_D33F2A77444E",
   "pitch": -4.79,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -6.5
  }
 ],
 "id": "overlay_BF4CA061_AE36_4EF3_41E3_3F8B2EB46AC4",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 86.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Kitchen ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2D87678_AE2E_52D1_41A0_309DDFD9B4B8, this.camera_C05D4DB2_E9CC_AA3E_41E7_5756772849E5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_5_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95,
   "yaw": 86.71
  }
 ],
 "id": "overlay_B1666532_AE36_D651_41E5_C78386A1B717",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 39.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Living Room ",
   "click": "this.startPanoramaWithCamera(this.panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50, this.camera_C0632DBC_E9CC_AA2A_41D5_006724C3BDDB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_6_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.31,
   "yaw": 39.69
  }
 ],
 "id": "overlay_B15003EF_AE36_31CF_41C0_4153A1CDCE15",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 134.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7, this.camera_C096BDDB_E9CC_AA6E_41E0_3BFFC95B6CBB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_7_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61,
   "yaw": 134.41
  }
 ],
 "id": "overlay_B38D673F_AE36_324F_41E3_9761B715EA11",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -54.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Master Bedroom ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF, this.camera_C0709DC5_E9CC_AA5A_41EB_02EC0CA4D005); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9CEF3372_B236_52D1_41D3_EBC28FA1EC3B",
   "pitch": -4.11,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -54.89
  }
 ],
 "id": "overlay_B34B1E93_AE2A_3257_41E5_2DF787F2EC16",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -129.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Main Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3, this.camera_C081FDD0_E9CC_AA7A_41DD_38972089FA36); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_9_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.53,
   "yaw": -129.09
  }
 ],
 "id": "overlay_81290610_B25A_5251_41E4_F85FDE6A8583",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -14.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrace center view ",
   "click": "this.startPanoramaWithCamera(this.panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD, this.camera_C163CCEE_E9CC_AA26_41EC_F48F4D42A7FF); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.93,
   "yaw": -14.12
  }
 ],
 "id": "overlay_A0518CB9_BC94_26EA_41C5_EB08D3B08760",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -40.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrace Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED, this.camera_C1539CD8_E9CC_AA6A_41E1_CB0ED86569C0); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.19,
   "yaw": -40.89
  }
 ],
 "id": "overlay_A0459D72_BC94_267E_41DA_328C1817315D",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "progressBarBorderSize": 6,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -59.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Balcony ",
   "click": "this.startPanoramaWithCamera(this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498, this.camera_CFC7AACD_E9CC_AE6A_41D9_A9E7B5FCD931); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.47,
   "yaw": -59.22
  }
 ],
 "id": "overlay_9B7B8BE3_B1DE_31F6_41E3_79AF3B274201",
 "data": {
  "label": "Arrow Transparent Right"
 }
},
{
 "inertia": true,
 "id": "panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -88.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Parking Front view",
   "click": "this.startPanoramaWithCamera(this.panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A, this.camera_CF3D7A47_E9CC_AE66_4134_7DBFD3BD5054); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.53,
   "yaw": -88.94
  }
 ],
 "id": "overlay_84621A3A_B276_F251_41C2_42A17F8E4DE2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 55.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Garden",
   "click": "this.startPanoramaWithCamera(this.panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9, this.camera_CF477A51_E9CC_AE7A_41C7_3B9C0CE8FCF5); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.81,
   "yaw": 55.2
  }
 ],
 "id": "overlay_86526397_B275_D25F_41DC_2F281C1B9C7D",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": 77.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Rearview ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B36E6A_AE2A_72F1_41DE_88AAABA4BFF5, this.camera_CEEB6C3E_E9CC_AA26_41E1_40D99B5FC948); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17,
   "yaw": 77.7
  }
 ],
 "id": "overlay_9A9E82C4_B1FA_5231_41E5_4DB265D8B3AD",
 "data": {
  "label": "Arrow Transparent Left-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_A2ABF630_AE2A_7252_41B6_E963C6E0B3DC_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 161.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrace Rear view ",
   "click": "this.startPanoramaWithCamera(this.panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B, this.camera_CF500A66_E9CC_AE26_41A1_57E5E37EF052); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.19,
   "yaw": 161.25
  }
 ],
 "id": "overlay_AF5E7967_BC94_2E65_41CD_880EF466112B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -148.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Floor Entrance ",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94,
   "yaw": -148.99
  }
 ],
 "id": "overlay_AFD91D2E_BC94_27E7_41E6_4B9FD8CEAD32",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -75.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrce Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED, this.camera_CF4F9A5C_E9CC_AE6A_41D4_F16D80701487); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_1_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.56,
   "yaw": -75.21
  }
 ],
 "id": "overlay_AF0080E0_BC94_5E9A_41DA_33DA47283424",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 109.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Master Bedroom Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7, this.camera_CE542B57_E9CC_AE66_41DA_1255B816CA6F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92,
   "yaw": 109.7
  }
 ],
 "id": "overlay_9C0C1876_B1D6_5ED1_41BE_3E685D1C0DBD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 26.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Balcony ",
   "click": "this.startPanoramaWithCamera(this.panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C, this.camera_CE3D5B36_E9CC_AE26_41DD_A707D7B6697E); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.18,
   "yaw": 26.65
  }
 ],
 "id": "overlay_99BAC375_B1D6_72D2_41CA_B95BA839D779",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -154.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Side Balcony ",
   "click": "this.startPanoramaWithCamera(this.panorama_980321CF_B1ED_D1CE_41D4_07BA70BFBEC9, this.camera_CE418B40_E9CC_AE5A_41DA_930FF0DAA853); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_0_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.39,
   "yaw": -154.9
  }
 ],
 "id": "overlay_9B41D3AF_B1DA_524F_41E5_5B564820259D",
 "data": {
  "label": "Arrow Transparent Left"
 }
},
{
 "inertia": true,
 "id": "panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.76,
   "yaw": 7.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Temple ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2AA1993_AE2A_FE57_41DF_51361E1019A1, this.camera_CE912BC0_E9CC_AE5A_41CF_6F89D0D00E66); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_5_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36,
   "yaw": 7.43
  }
 ],
 "id": "overlay_8FA6159B_AE2A_5657_41A2_FF354174D22E",
 "data": {
  "label": "Temple "
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": -113.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5, this.camera_CEA6BBD6_E9CC_AE66_41E9_4FEC21418E3B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_6_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.3,
   "yaw": -113.03
  }
 ],
 "id": "overlay_B090C96D_AE2A_5EF3_41DA_49A3F0E15438",
 "data": {
  "label": "Entrance "
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.78,
   "yaw": 122.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom 3",
   "click": "this.startPanoramaWithCamera(this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A, this.camera_CE832BAB_E9CC_AE2E_41DC_091DC2991A08); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9CE14379_B236_52D3_41E3_FE1424A9BB80",
   "pitch": -7.19,
   "hfov": 6.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 122.19
  }
 ],
 "id": "overlay_92638658_B1D5_D2D1_41E2_3B0CF7314711",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.78,
   "yaw": 76.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom 4",
   "click": "this.startPanoramaWithCamera(this.panorama_A2D4D9DB_AE2A_51D6_41E5_746AAAB07A95, this.camera_CE73AB96_E9CC_AEE7_41D9_BFE0025B48E6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9CE10379_B236_52D3_41A5_05508F88DDBD",
   "pitch": -7.19,
   "hfov": 6.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 76.55
  }
 ],
 "id": "overlay_9306093E_B1D5_DE51_41B5_ABD762A63F50",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -138.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom 2",
   "click": "this.startPanoramaWithCamera(this.panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF, this.camera_CE6C4B80_E9CC_AEDB_41DF_79F86990C302); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9CE1B37E_B236_52D1_41E3_798E4C486E52",
   "pitch": -1.44,
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -138.63
  }
 ],
 "id": "overlay_9440BBFE_B1D5_D1D1_41E0_C1297DB495E3",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -58.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7, this.camera_C0B77DF1_E9CC_AA3A_41E8_0774D1BCEB70); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21,
   "yaw": -58.12
  }
 ],
 "id": "overlay_9777B506_B1F6_7631_41DB_071B3F1B51D6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 90.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Side view ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B9A1C7_AE2D_CE3F_41C6_703E153E6FAE, this.camera_C0A6CDE6_E9CC_AA26_41D0_AB19AE6253EF); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_0_HS_3_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.13,
   "yaw": 90.14
  }
 ],
 "id": "overlay_974137F8_B1F6_71D2_41E4_18A4C576BC2E",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_B88E0EB7_AE56_525F_41D9_C18A322533EF_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.77,
   "yaw": 28.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5, this.camera_C01FAD88_E9CC_AAEA_41C8_FC1414183DF9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.34,
   "yaw": 28.71
  }
 ],
 "id": "overlay_851EC7E4_B257_F1F1_41DC_23095D9F2633",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.71,
   "yaw": -151.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lift Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0, this.camera_C02F3D93_E9CC_AAFE_41C9_DEB936D84EA6); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.77,
   "yaw": -151.12
  }
 ],
 "id": "overlay_8305C14B_B256_CE37_41D3_99FA876FC8A8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 112.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Staircase ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4DB16A_B25A_4EF1_41E4_1DAA7AFFF545, this.camera_C1F9CD74_E9CC_AA3A_41E9_1E455CDF3127); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.28,
   "yaw": 112.79
  }
 ],
 "id": "overlay_83F60383_B256_D237_41E1_5E6842D7F6A8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.08,
   "yaw": 134.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrace ",
   "click": "this.startPanoramaWithCamera(this.panorama_ACEC36F5_BCAC_2265_41D4_053149890EED, this.camera_C0092D7E_E9CC_AA26_41E8_DFBE0EAFF768); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0_HS_3_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.29,
   "yaw": 134.87
  }
 ],
 "id": "overlay_AC984954_BC94_2FBA_41A6_7581CBF84766",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.97,
   "yaw": 144.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lift Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0, this.camera_C03F0D9D_E9CC_AAEA_41E7_24E331E9DA0F); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_0_HS_4_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.73,
   "yaw": 144.41
  }
 ],
 "id": "overlay_ACFB864F_BC94_25A5_41E6_31117EB86478",
 "data": {
  "label": "Arrow Transparent Right"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 62.55,
 "bleaching": 0.7,
 "id": "overlay_CA303CA9_E844_673B_41E0_CD2EDA309528",
 "yaw": -112.19
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 53.21,
 "bleaching": 0.7,
 "id": "overlay_CA2A3C97_E844_6717_41DC_2B14E1B4E0CC",
 "yaw": -147.88
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 76,
 "bleaching": 0.7,
 "id": "overlay_CA2D0FB3_E844_612F_41DD_4F99103F4CA6",
 "yaw": -164.9
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 75.17,
 "bleaching": 0.7,
 "id": "overlay_CA16845B_E844_A71F_41DE_63D260E01473",
 "yaw": 178.28
},
{
 "bleachingDistance": 0.06,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 39.48,
 "bleaching": 0.7,
 "id": "overlay_CA001D3D_E844_A11B_41E9_4D4BB1120B29",
 "yaw": 23.16
},
{
 "inertia": true,
 "id": "panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": 120.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Parking Rear view ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF, this.camera_CE0D9B0C_E9CC_AFEA_41D3_9FCCD3557AA4); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.22,
   "yaw": 120.41
  }
 ],
 "id": "overlay_86B2CC76_B26A_F6DE_41D0_2B1E5028E634",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.14,
   "yaw": -152.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Building Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2, this.camera_CFF88B02_E9CC_AFDE_41B0_A4FA22AC271A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_0_HS_2_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.02,
   "yaw": -152.17
  }
 ],
 "id": "overlay_A9D240F2_BCAC_5E7F_41E1_446E9A4CDEA1",
 "data": {
  "label": "Arrow Transparent Left"
 }
},
{
 "inertia": true,
 "id": "panorama_9F6A9CB7_B25B_F65F_41E2_0733FE490B6A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "maxHeight": 37,
 "right": 30,
 "width": 100,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 8,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.63,
   "yaw": -157.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Main Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3, this.camera_CFE07AEE_E9CC_AE26_41B3_0E045A01429E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.86,
   "yaw": -157.92
  }
 ],
 "id": "overlay_820DD3CC_B26A_5231_41A5_7B76C53CB773",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.75,
   "yaw": -62.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lift Lobby Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347, this.camera_CFDF7AE3_E9CC_AE5E_41E0_ED536E4EF45F); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.05,
   "yaw": -62.85
  }
 ],
 "id": "overlay_858F524E_B26A_D231_41B8_ABBC2109539F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.17,
   "yaw": 129.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Floor Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3, this.camera_CFF4EAF9_E9CC_AE2A_41DF_6131015588B2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_0_HS_2_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.77,
   "yaw": 129.38
  }
 ],
 "id": "overlay_AC96E317_BC94_63A5_41CA_23A9113BAD03",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -45.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7, this.camera_C0EAFE19_E9CC_A9ED_41E4_453DE12DFE1D); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.19,
   "yaw": -45.76
  }
 ],
 "id": "overlay_99EB73B2_B1FE_D256_41E1_1D732BEF66BD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 20.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Washroom",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92,
   "yaw": 20.81
  }
 ],
 "id": "overlay_98B32C80_B1FE_D631_41D2_56C7A32D08C8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 51.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5, this.camera_C0DABE0F_E9CC_A9E5_41EB_8064B7BD5B82); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_0_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61,
   "yaw": 51.01
  }
 ],
 "id": "overlay_9A8C9FE2_B1FE_D1F1_41BE_C0528381D642",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A2ABFA60_AE2A_52F1_41E4_0610E4A36ADF_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 101.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Living Room ",
   "click": "this.startPanoramaWithCamera(this.panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50, this.camera_C1EBDD69_E9CC_AA2A_41D5_E88CEBF05C73); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95,
   "yaw": 101.12
  }
 ],
 "id": "overlay_9AAAB7D0_B1EA_51D1_41D1_E82AAA179F96",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -62.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Balcony ",
   "click": "this.startPanoramaWithCamera(this.panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C, this.camera_C1DB1D5E_E9CC_AA66_41D0_3BB32BB126F3); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9,
   "yaw": -62.58
  }
 ],
 "id": "overlay_9A1FC087_B1EA_CE3F_41DC_E36313EA40E7",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_97F3976D_B1EE_32F3_41E1_266534F8568B_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 145.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Floor Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3, this.camera_CE283B2D_E9CC_AE2A_41CE_3B430B85125C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.02,
   "yaw": 145.73
  }
 ],
 "id": "overlay_AE0A275A_BC9C_63AF_41D0_2348A621838F",
 "data": {
  "label": "Arrow Transparent Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 111.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrace Rear View ",
   "click": "this.startPanoramaWithCamera(this.panorama_AB8D8F63_BCAC_239D_418D_49478BB5406B, this.camera_CE25BB22_E9CC_AFDE_41E2_478CCE6919A8); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.85,
   "yaw": 111.14
  }
 ],
 "id": "overlay_AEC49158_BC9C_3FAB_41D9_F69BD3A7A810",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": 81.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Terrace Center view ",
   "click": "this.startPanoramaWithCamera(this.panorama_ABAF9921_BCAC_2F9A_41DC_54AA27A69BCD, this.camera_CE101B17_E9CC_AFE6_41DB_1F3EE1B19D25); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_1_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88,
   "yaw": 81.97
  }
 ],
 "id": "overlay_AEF2D4FE_BC9C_2667_41DB_62B5FDE1610D",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_ACEC36F5_BCAC_2265_41D4_053149890EED_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -40.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Building Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2, this.camera_C13DACAA_E9CC_AA2F_41D8_1E09CAA5E5AC); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.53,
   "yaw": -40.89
  }
 ],
 "id": "overlay_8424686A_B276_DEF1_41E0_80C40CDAC9CC",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 84.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Garden ",
   "click": "this.startPanoramaWithCamera(this.panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9, this.camera_C1425CC1_E9CC_AA5A_41EB_6A973A52C7F2); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.03,
   "yaw": 84.65
  }
 ],
 "id": "overlay_8534BDF8_B27A_71D2_41B5_3FB4F6B70954",
 "data": {
  "label": "Arrow Transparent Left"
 }
},
{
 "inertia": true,
 "id": "panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.75,
   "yaw": 132.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B7AEC6_AE2A_323E_41B3_A98E7400B0A7, this.camera_CFB34AC2_E9CC_AE5E_41C8_9ECD7009C9A7); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.68,
   "yaw": 132.69
  }
 ],
 "id": "overlay_995B2F03_B1F5_D237_41BB_0C97657DD556",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A2B34278_AE2B_F2D1_41E1_3910ADE25C1D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.74,
   "yaw": 125.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lift Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4D2482_B25B_D631_41E1_0735896F0CC0, this.camera_C1B5ED3C_E9CC_AA2A_41DE_D0B627252204); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4,
   "yaw": 125.55
  }
 ],
 "id": "overlay_842CA3DA_B26E_31D1_41DC_CB49F94DE3D3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": -50.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Building Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F66D756_B25A_72D1_41E4_73A37C1695D2, this.camera_C1A70D30_E9CC_AA3A_41E2_7DEBAD9B8EE7); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97,
   "yaw": -50.84
  }
 ],
 "id": "overlay_8170F7C8_B26E_3231_41E3_153D234A2393",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_9F4D6094_B25B_CE51_41E4_066FAA1ED347_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "items": [
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_10",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_11",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_12",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_13",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_14",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_15",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_16",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_17",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_18",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_19",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_20",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 3000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_FCF5E923_E84D_E12E_41EA_F67EAD9788C4_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 163.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Side Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4DE531_B25A_3653_41B1_D7A5C91DB126, this.camera_C1D50D53_E9CC_AA7E_41DF_A4424C192EDE); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_1_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.02,
   "yaw": 163.58
  }
 ],
 "id": "overlay_8512B2D6_B27A_53DE_41C3_E1619ADAEC81",
 "data": {
  "label": "Arrow Transparent Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -19.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Parking Rear view ",
   "click": "this.startPanoramaWithCamera(this.panorama_9F4D58BD_B25B_DE53_41BD_96E3EDFE10DF, this.camera_C1C5FD48_E9CC_AA6A_41C8_FD7892E72348); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_1_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.15,
   "yaw": -19.34
  }
 ],
 "id": "overlay_854F3C89_B27A_3633_41E3_E8930317FF0D",
 "data": {
  "label": "Arrow Transparent Left"
 }
},
{
 "inertia": true,
 "id": "panorama_8432619B_B27A_CE57_41B4_3B2B454EAFA9_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.73,
   "yaw": 107.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Living Room Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_97F3976D_B1EE_32F3_41E1_266534F8568B, this.camera_C12C3C91_E9CC_AAFD_41EA_B06B2D204EEE); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.07,
   "yaw": 107.3
  }
 ],
 "id": "overlay_9D3E8A0B_B1EA_3237_41E2_CC00721E2DF3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -170.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Balcony ",
   "click": "this.startPanoramaWithCamera(this.panorama_9D2E1090_B1D6_4E51_41C4_5EA951271498, this.camera_C11F9C7C_E9CC_AA2A_41E9_0DF7E1854379); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.5,
   "yaw": -170.37
  }
 ],
 "id": "overlay_9E57C91D_B1D6_5E53_41D4_73EF7011AA2D",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_996523FA_B1EA_51D1_41BC_66E42EC59E7C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.73,
   "yaw": 159.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Washroom ",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.07,
   "yaw": 159.46
  }
 ],
 "id": "overlay_95DCB862_B1DF_DEFA_41C3_8979EBE08325",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": -63.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom 3 Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A, this.camera_CEB67BEB_E9CC_AE2E_41D5_C000723F55D1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59,
   "yaw": -63.61
  }
 ],
 "id": "overlay_919A9B3C_B1DF_D251_41D6_067B27031653",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.16,
   "yaw": -39.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lobby ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7, this.camera_CEC45C00_E9CC_A9DA_41C0_C87C2D2483FC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0_HS_3_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92,
   "yaw": -39.94
  }
 ],
 "id": "overlay_9488D953_B1EF_DED7_41DE_D88785A80A45",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 165.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Rear view ",
   "click": "this.startPanoramaWithCamera(this.panorama_A29E05D3_AE2A_31D7_41E5_BB9C1EB26AE4, this.camera_CED5EC14_E9CC_A9FA_41D5_F2F90BE2D19E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0_HS_4_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95,
   "yaw": 165.98
  }
 ],
 "id": "overlay_944E435F_B1EE_52CF_41E1_39A9BBDD7244",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 136.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Washroom ",
   "click": "this.startPanoramaWithCamera(this.panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379, this.camera_CEDBCC29_E9CC_AA2D_41C1_D5AB3C324193); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_0_HS_5_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.49,
   "yaw": 136.54
  }
 ],
 "id": "overlay_98B4A047_B1ED_CE3F_41DA_0DCC38364C39",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -151.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrance ",
   "click": "this.startPanoramaWithCamera(this.panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5, this.camera_CEF96C53_E9CC_AA7E_41E7_153B913A3C6D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.22,
   "yaw": -151.81
  }
 ],
 "id": "overlay_8F1D5AD0_AE2E_D3D1_41DF_FDF6622E672A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.77,
   "yaw": -68.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Living Room Front view ",
   "click": "this.startPanoramaWithCamera(this.panorama_97F3976D_B1EE_32F3_41E1_266534F8568B, this.camera_C10E5C68_E9CC_AA2A_41D1_FAB90434FFA7); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67,
   "yaw": -68.41
  }
 ],
 "id": "overlay_B13D5DEB_AE2E_D1F7_41D1_4EFCFDFC0D8E",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": true,
 "id": "panorama_A282B6EE_AE2E_53F1_41E2_B249EC527B50_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 25.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bedroom Rearview ",
   "click": "this.startPanoramaWithCamera(this.panorama_A2AAC606_AE2A_D231_41D3_AE0D70C9F27A, this.camera_CE59EB6C_E9CC_AE2A_41DB_CCACCB3666A1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88,
   "yaw": 25.96
  }
 ],
 "id": "overlay_9672B064_B1FA_CEF1_41C5_4D2739889690",
 "data": {
  "label": "Arrow Transparent Left-Up"
 }
},
{
 "inertia": true,
 "id": "panorama_A28C41F2_AE2A_51D1_41E4_04FD285B7379_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 24,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_9F7028A5_B25A_3E72_41D8_CEECC4F498A3_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "left",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": "0%",
 "width": 454,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "Civic Infratech ",
 "minHeight": 1,
 "propagateClick": true,
 "top": "3.76%",
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "height": 86,
 "minWidth": 1,
 "fontSize": 90,
 "textShadowVerticalLength": 0,
 "textShadowHorizontalLength": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "children": [
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "8.2%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "65.67%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2FD64D2_AE2E_D7D1_41C6_CA06031C67ED_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9CEFC377_B236_52DF_41E4_E0E4E0E6407B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9CED8371_B236_52D3_41D3_D33F2A77444E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A5F7F8EA_AE3E_5FF1_41D5_4B5F80C8B5F5_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9CEF3372_B236_52D1_41D3_EBC28FA1EC3B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9CE14379_B236_52D3_41E3_FE1424A9BB80",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9CE10379_B236_52D3_41A5_05508F88DDBD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A2B59A28_AE2E_3271_41E1_C5131199DDF7_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9CE1B37E_B236_52D1_41E3_798E4C486E52",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter('virtualcreators.in')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook('virtualcreators.in')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundOpacity": 0,
 "width": 120,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "iconHeight": 0,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "label": "HOUSE INFO",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "LOCATION",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundOpacity": 0,
 "width": 103,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "FLOORPLAN",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button floorplan"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundOpacity": 0,
 "width": 112,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "PHOTOALBUM",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button photoalbum"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "REALTOR",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button realtor"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "88.756%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "99.984%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "click": "this.openLink('http://https://www.google.co.in/maps/place/28%C2%B033'34.1%22N+77%C2%B012'00.1%22E/@28.559439,77.2001546,63m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d28.559414!4d77.2000468', '_blank')",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 400,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "91.751%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "class": "WebFrame",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.1366198642704!2d77.20049381813038!3d28.559480869785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzM0LjEiTiA3N8KwMTInMDAuMSJF!5e1!3m2!1sen!2sin!4v1609484521043!5m2!1sen!2sin",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.01vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.01vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "99.599%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "99.388%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:2.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:10.01vh;font-family:'Bodoni MT';\"><I>Civic Infratech</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.29vh;font-family:'Bodoni MT';\">  \u2022  450 sqyd. Plot along with 3 car parkings each.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.29vh;font-family:'Bodoni MT';\">  \u2022  4 bedroom width attached bathrooms.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.29vh;font-family:'Bodoni MT';\">  \u2022  Dining Room, Drawing Room, Powder Room &amp; Mandir.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.29vh;font-family:'Bodoni MT';\">  \u2022  Modular Kitchen, Modular Wardrobes, and Modular Doors.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.29vh;font-family:'Bodoni MT';\">  \u2022  Servant quarter with common toilet. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.29vh;font-family:'Bodoni MT';\">  \u2022  100 mtrs from Dear Park.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.29vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.44vh;font-family:'Bebas Neue Bold';\">Location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.15vh;font-family:'Bebas Neue Bold';\">B-7/118, Safdarjung Enclave </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.15vh;font-family:'Bebas Neue Bold';\">Extention, 110029, New Delhi </SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundOpacity": 0.7,
 "width": 207,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "class": "Button",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 59,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 34,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "18.98%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.01vh;font-family:'Bebas Neue Bold';\">Builder </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:6.01vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:6.01vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:6.01vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "80%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Bebas Neue Bold';\">Civic Infratech (formely known as \"Goyal Builders\") was founded in 1992 with a single mission: to build structures with enduring value and the potential to become timeless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Bebas Neue Bold';\">Our team of creative professionals carefully evaluate each project in order to adhere to both financial and time constraints, and over the years we\u2019ve become known as a leading Real Estate Developer.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Bebas Neue Bold';\">Browse the rest of our tour for more information on our project.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Bebas Neue Bold';\"> 011- 41830760</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Bebas Neue Bold';\">+91-9810626078</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
