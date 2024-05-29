report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_0_desktop.png",
        "test": "../bitmaps_test/20240524-113731/backstop_default_BackstopJS_Homepage_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_desktop.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": 0.1,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:5173",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0,
          "misMatchPercentage": "0.00",
          "analysisTime": 30
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});