import { window } from "vscode";

const Utils = {
  arrayToCsv(array: Array<string>) {
    return array.join(",");
  },
  extensionDisplayName: "Remove Debugger Statements",
  displayError(err: string, code: number) {
    window.showErrorMessage(
      `${this.extensionDisplayName} - An error occurred: ${err} code: ${code}`
    );
  }
};

export default Utils;
