# README

Removes debugger statements from the specified files/folders to be included, while ignoring the files/folders to be excluded.

- [Requirements](#requirements)
- [Extension Settings](#extension-settings)
- [Release Notes](#release-notes)
  - [0.0.5](#005)
  - [0.0.4](#004)
  - [0.0.1](#001)

## Requirements

- VSCode >= 1.32.3

## Extension Settings

This extension contributes the following settings:

- `remove-debugger-statements.include`: Files/Folders from where debugger statements are to be removed. The files/folders are specified using a [GlobPattern String](https://code.visualstudio.com/api/references/vscode-api#GlobPattern). Example: `[ "**/*.js", "**/*.ts" ]`
- `remove-debugger-statements.exclude`: Files/Folders to be excluded when removing debugger statements. The files/folders are specified using a [GlobPattern String](https://code.visualstudio.com/api/references/vscode-api#GlobPattern). Example: `[ "**/node_modules/** ]`
- `remove-debugger-statements.semicolonOptional`: A boolean, if set to true, removes debugger statements with and without `;` i.e., `debugger;` and `debugger`
- `remove-debugger-statements.removeWhenOnSeparateLineOnly`: If set to true, removes only debugger statements that are on a separate line and only have spaces/new lines around them. i.e., statements like constructor(){debugger;} are ignored.

## Release Notes

### 0.0.5

Remove debugger statements when on same line with other codes by default. Remove `separateLineFind` configuration and add `removeWhenOnSeparateLineOnly` configuration.

### 0.0.4

Add shortcut to remove debugger statements. `ctrl+alt+shift+d` on windows/linux and `ctrl+cmd+shift+d` on mac.

### 0.0.1

Initial release of with configurations of `include`, `exclude`, `semicolonOptional` and `separateLineFind`

**Enjoy!**
