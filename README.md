Instead of the "color" property in the "settings" object only having one property named "palette" - you can add additional properties like this to disable virtually all custom color options for all blocks:

```
    "color": {
          "background": true,
          "text": false,
          "link": false,
          "custom": false,
          "defaultPalette": false,
          "duotone": [],
          "customDuotone": false,
          "gradients": [],
          "customGradient": false,
          "palette": [
            {
              "slug": "primary",
              "color": "#0d3b66",
              "name": "Primary"
            },
            {
              "slug": "secondary",
              "color": "#ee964b",
              "name": "Secondary"
            },
            {
              "slug": "background",
              "color": "#FFFFFF",
              "name": "Background"
            },
            {
              "slug": "foreground",
              "color": "#333333",
              "name": "Foreground"
            }
          ]
        }
```

Also, instead of your "typography" object in "settings" only having the one property of "fontSizes" you can have additional properties like this to disable virtually all typographic options in blocks:

```
    "typography": {
          "fontFamilies": [],
          "fontStyle": false,
          "fontWeight": false,
          "letterSpacing": false,
          "textDecoration": false,
          "lineHeight": false,
          "textTransform": false,
          "dropCap": false,
          "customFontSize": false,
          "fontSizes": []
        }
```

Thanks!
Brad
