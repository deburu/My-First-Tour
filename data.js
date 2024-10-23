var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07288141191104636,
          "pitch": 0.02603731785757013,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.9382971240102691,
          "pitch": 0.06625204662733353,
          "rotation": 5.497787143782138,
          "target": "1-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.24140829777593353,
          "pitch": -0.09854739903280318,
          "title": "EA Auditorium Atrium",
          "text": "<br>"
        },
        {
          "yaw": -1.0676577467392683,
          "pitch": -0.036908331263191485,
          "title": "Driveway with some parking lots",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.24191368991371576,
        "pitch": 0.025367114758015674,
        "fov": 1.298796275610421
      },
      "linkHotspots": [
        {
          "yaw": 0.26119723188423727,
          "pitch": -0.2294697061583264,
          "rotation": 7.0685834705770345,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5698509296822358,
          "pitch": -0.0211576840592258,
          "title": "Welcome to Engineering!",
          "text": "<br>"
        },
        {
          "yaw": 2.4667005567828237,
          "pitch": -0.042271327735495134,
          "title": "The place where graduation ceremonies are held :))",
          "text": "Text"
        },
        {
          "yaw": -1.9366021387286665,
          "pitch": 0.15835413174652935,
          "title": "Bus 96 drives past here~",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.073951533433359,
          "pitch": 0.05905732253275531,
          "rotation": 0,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6906135860567062,
          "pitch": 0.03371020461661267,
          "title": "No longer here :((",
          "text": "Text"
        },
        {
          "yaw": -2.4174866916990716,
          "pitch": 0.01817377560165845,
          "title": "Mechanical Testing Lab",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
