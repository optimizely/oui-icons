# Contributing to OUI Icons

## Adding an icon

1. Create a `16px` and `24px` version of the icon and store in `src/`.
2. Update the `CHANGELOG.md` to include a summary of the change.
3. Create a new branch off of `master`, commit the changes, and push to GitHub.
4. Open a pull request and assign a UI Engineer.

## Other changes

1. Create a new branch off of `master` and make the changes.
2. Update the `CHANGELOG.md` to include a summary of the change.
3. Commit and push to GitHub. Open a pull request and assign to a UI Engineer.

## Releasing a new version

1. Run `git checkout master && git pull`.
2. Open the `CHANGELOG.md`, update to reflect the new version, and commit the change.
3. Run one of the following commands:
   * `npm version patch` - version includes a backwards-compatible bug fix or tweak. This includes small icon style modifications.
   * `npm version minor` - version includes a backwards compaitible new "feature" such as a new icon.
   * `npm version major` - version contains a non-backwards compaitible breaking change such as a renamed or deleted icon.
