[![Build Status](https://travis-ci.org/optimizely/oui-icons.svg?branch=master)](https://travis-ci.org/optimizely/oui-icons)

# OUI Icons

Icons for the Optimizely application and other OUI projects.

[View all the icons](http://link.optimizely.com/oui-icons).

## Using the icons

1. **Download the package:** Run `npm install --save oui-icons` to include the latest icons in your project.
2. **Include the SVG sprite:** This package ships with an SVG sprite that contains all of the icons. Include the SVG sprite at the beginning of your website’s `<body>` tag. The sprite can be referenced with `require('oui-icons')` if using a project with webpack and an SVG loader. Projects not using webpack can include the sprite by including the icons with your templating engine: `./node_modules/oui-icons/dist/combined/svg-symbols.svg`.
3. **Using an icon:** You can use one of the icons in the HTML with:

    ```html
    <svg>
      <use xlink:href="#code-24"></use>
    </svg>
    ```

    The complete list of icons can be found at: [link.otimizely.com/oui-icons](http://link.optimizely.com/oui-icons).

## Adding and editing icons

1. Add the icon to the appropriate folder in `src/`.
2. Update the [CHANGELOG.md](https://github.com/optimizely/oui-icons/blob/master/CHANGELOG.md) to include information about the change in the “Unreleased” section. Here are some tips:
  - Each list item falls under one of the following categories: `Added`, `Changed`, `Fixed`, or `Removed`.
  - Each item is labeled either `[Patch]`, `[Feature]`, or `Release`.
    - `[Patch]`: Backwards compatible fixes (patches) to existing icons, infrastructure, or documentation.
    - `[Feature]`: New icons or features that are backwards compatible.
    - `[Release]`: Changes that are not backwards compatible such as the removal of an icon.
  - Changes should always be added in the “Unreleased” section.
3. Create a pull request on GitHub and assign a UI Engineer or Frontend Engineer.

## Releasing a new version

### Prerequisite
* You must have deploy access to [design.optimizely.com](http://design.optimizely.com/) and be listed as a contributor on the [`oui-icons` NPM package](https://www.npmjs.com/package/oui-icons). Contact a UI Engineer for help.
* You must be using a version of NPM larger than `2.11.0`. This is when NPM added support for the `postversion` hook that we rely on. You can check your version by running `npm -v` in the command line.

### How to release

1. Run `git checkout master && git pull`.
2. Open the `CHANGELOG.md`, update to reflect the new version, and commit the change. Here are some tips:
  * The new version number depends on the severity of the changes in the version that is being released. Here are examples:
    * `[Release]` – `1.2.3` would become `2.0.0`.
    * `[Feature]` – `1.2.3` would become `1.3.0`.
    * `[Patch]` – `1.2.3` would become `1.2.4`.
  * The commit should include the `CHANGELOG.md` update. The message could be: “Prep for 3.1.3 release.”
  * Do _not_ update the `package.json` in this step.
  * There should be nothing left in the “Unreleased” section.
3. Run the command that matches the highest severity change in this release:
  * `npm version patch` - version includes a backwards-compatible bug fix or tweak. This includes small icon style modifications.
  * `npm version minor` - version includes a backwards compatible new "feature" such as a new icon.
  * `npm version major` - version contains a non-backwards compatible breaking change such as a renamed or deleted icon.
