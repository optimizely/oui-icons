# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file follows the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## [Unreleased][Unreleased]

## [3.1.0][3.1.0] - 2017-01-30
### Added
- [Feature] Add Preferences, Vote Up and Vote Down icons for both 16px and 24px.

## [3.0.3][3.0.3] - 2017-01-09
__This version was created accidentally and does not contain any meaningful changes.__

## [3.0.2][3.0.2] - 2017-01-09
### Changed
- [Patch] Change `experiment` icon.

## [3.0.1][3.0.1] - 2016-08-02
### Fixed
- [Patch] Removed fill from `create-campaign` svg.

## [3.0.0][3.0.0] - 2016-08-02
### Added
- [Feature] Added new 24-px icons for `create-ab`, `create-campaign`, and `create-mvt`.

### Fixed
- [Release] Rename `src/24/variation-settings.svg` to `src/24/variation-settings-24.svg` so it follows our file naming conventions. (#23)

## [2.0.0][2.0.0] - 2016-04-06
### Changed
- [Release] Change `24/toolbar-new-window-closed-24` icon to `24/toolbar-new-window-close-24`.

## [1.1.3][1.1.3] - 2016-04-04
### Changed
- [Patch] Change `winner` and `loser` icons.
- [Patch] Change direction of `refresh` and `sync` icons.

## [1.1.2][1.1.2] - 2016-03-21
### Fixed
- [Patch] Flipping direction of `refresh` icon. It was backwards.
- [Patch] Add `dist/combined/svg-symbols.svg` as the `main` property in `package.json`. This enables developers to `require('oui-icons')` and get the combined SVG sprite.

## [1.1.1][1.1.1] - 2016-03-17
### Fixed
- [Patch] Move `gulp` into dependencies, not devDependencies, because it is needed for the postinstall script.

## [1.1.0][1.1.0] - 2016-03-17
### Added
- [Feature] Adding icon for `toolbar-new-window-closed-24`.

## [1.0.0][1.0.0] - 2016-03-17
### Added
- [Feature] Adding task to output single svg file with both 16 and 24 sized icons.
- [Feature] Adding icon for `exit`.

### Changed
- [Patch] Changed icon for hamburger to solid lines.
- [Patch] Change the directory that the files are uploaded to.

### Fixed
- [Release] Fix typo for previously misspelled "elipsis" and "exclimation", now "ellipsis" and "exclamation" (#6)
- [Patch] Converted icon colors to solid black so that `fill` color value will apply correctly.

## [0.2.0][0.2.0] - 2016-02-29
### Added
- [Feature] Add a deploy post version hook.

### Changed
- [Patch] Improve `.gitignore`.

## [0.1.2][0.1.2] - 2016-02-24
### Fixed
- [Patch] Move `gulp-svg-symbols` to `dependencies`, not `devDependencies`.

## [0.1.1][0.1.1] - 2016-02-22
### Fixed
- [Patch] Fixed typos in the CHANGELOG and README.

## [0.1.0][0.1.0] - 2016-02-22
### Added
- [Feature] Updated the README, added a CHANGELOG and a CONTRIBUTING file.

## 0.0.0 - 2016-02-22
Initial version.

[Unreleased]: https://github.com/optimizely/oui-icons/compare/v3.1.0...HEAD
[0.1.0]: https://github.com/optimizely/oui-icons/compare/v0.0.0...v0.1.0
[0.1.1]: https://github.com/optimizely/oui-icons/compare/v0.1.0...v0.1.1
[0.1.2]: https://github.com/optimizely/oui-icons/compare/v0.1.1...v0.1.2
[0.2.0]: https://github.com/optimizely/oui-icons/compare/v0.1.2...v0.2.0
[1.0.0]: https://github.com/optimizely/oui-icons/compare/v0.2.0...v1.0.0
[1.1.0]: https://github.com/optimizely/oui-icons/compare/v1.0.0...v1.1.0
[1.1.1]: https://github.com/optimizely/oui-icons/compare/v1.1.0...v1.1.1
[1.1.2]: https://github.com/optimizely/oui-icons/compare/v1.1.1...v1.1.2
[1.1.3]: https://github.com/optimizely/oui-icons/compare/v1.1.2...v1.1.3
[2.0.0]: https://github.com/optimizely/oui-icons/compare/v1.1.3...v2.0.0
[3.0.0]: https://github.com/optimizely/oui-icons/compare/v2.0.0...v3.0.0
[3.0.1]: https://github.com/optimizely/oui-icons/compare/v3.0.0...v3.0.1
[3.0.2]: https://github.com/optimizely/oui-icons/compare/v3.0.1...v3.0.2
[3.0.3]: https://github.com/optimizely/oui-icons/compare/v3.0.2...v3.0.3
[3.1.0]: https://github.com/optimizely/oui-icons/compare/v3.0.3...v3.1.0
