# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file follows the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## [Unreleased][Unreleased]

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

[Unreleased]: https://github.com/optimizely/oui-icons/compare/v1.1.2...HEAD
[0.1.0]: https://github.com/optimizely/oui-icons/compare/v0.0.0...v0.1.0
[0.1.1]: https://github.com/optimizely/oui-icons/compare/v0.1.0...v0.1.1
[0.1.2]: https://github.com/optimizely/oui-icons/compare/v0.1.1...v0.1.2
[0.2.0]: https://github.com/optimizely/oui-icons/compare/v0.1.2...v0.2.0
[1.0.0]: https://github.com/optimizely/oui-icons/compare/v0.2.0...v1.0.0
[1.1.0]: https://github.com/optimizely/oui-icons/compare/v1.0.0...v1.1.0
[1.1.1]: https://github.com/optimizely/oui-icons/compare/v1.1.0...v1.1.1
[1.1.2]: https://github.com/optimizely/oui-icons/compare/v1.1.1...v1.1.2
