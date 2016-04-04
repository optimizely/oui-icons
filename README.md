[![Build Status](https://travis-ci.org/optimizely/oui-icons.svg?branch=master)](https://travis-ci.org/optimizely/oui-icons)

# OUI Icons

Icons for the Optimizely application and other OUI projects.

## Getting started

1. Run `npm install --save oui-icons` to include the latest icons in your project. A post-install script will build SVG sprites.
2. Include the following [SVG sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) at the beginning of your project's `<body>` tag:
    - `./node_modules/oui-icons/dist/combined/svg-symbols.svg`

  This is best done by including the file with your templating engine.
3. Reference an icon in the HTML with:

    ```html
    <svg>
      <use xlink:href="#icon-id"></use>
    </svg>
    ```

## Adding and Editing Icons

Please make changes to the source .ai files in Dropbox:
[https://www.dropbox.com/work/Design/oui-icons/source](https://www.dropbox.com/work/Design/oui-icons/source)

Then to export the svg files:
- make sure you export from the `expanded` version
- Select `File` > `Save a copy`
- Then select `Format` > `SVG`
- And check `Use artboards`
- Change the Filename to `icon_` so that when files are saved each file will have an `icon_` prefix with the artboard name after
- Once svg files are saved, you can remove the `icon_` prefix by selecting all the files in the finder folder, clicking the gear icon, and selecting `Rename # items...`
- Then you can copy the icons to this repo and make a Pull Request

## Releasing a new version

See [CONTRIBUTING.md](https://github.com/optimizely/oui-icons/blob/master/CONTRIBUTING.md).
