[![Build Status](https://travis-ci.org/optimizely/oui-icons.svg?branch=master)](https://travis-ci.org/optimizely/oui-icons)

# OUI Icons

Icons for the Optimizely application and other OUI projects.

## Getting Started

1. Run `npm install --save oui-icons` to include the latest icons in your project. A post-install script will build SVG sprites.
2. Include the following [SVG sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) at the beginning of your project's `<body>` tag:
    - `/node_modules/oui-icons/dist/16/svg-symbols.svg`
    - `/node_modules/oui-icons/dist/24/svg-symbols.svg`

  This is best done by including the file with your templating engine.
3. Reference an icon in the HTML with:

    ```html
      <svg>
        <use xlink:href="#icon-id"></use>
      </svg>
    ```
