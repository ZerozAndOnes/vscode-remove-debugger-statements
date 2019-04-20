import * as vscode from "vscode";
import Utils from "./utils";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "remove-debugger-statements" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.removeDebuggerStatements",
    () => {
      const { workspace, WorkspaceEdit, window } = vscode;
      // The code you place here will be executed every time your command is executed
      const includes = ["**/*.js", "**/*.ts"];
      const excludes = ["**/node_modules/**"];

      workspace
        .findFiles(
          `{${Utils.arrayToCsv(includes)}}`,
          `{${Utils.arrayToCsv(excludes)}}`
        )
        .then(
          (results: vscode.Uri[]) => {
            let filesToProcess = results.map(result => {
              return new Promise((resolve, reject) => {
                workspace
                  .openTextDocument(result)
                  .then(
                    textDocument => {
                      let removed = false;
                      const documentText = textDocument.getText();
                      let toFindRegex = /^\s*debugger;\s*\n/gim;
                      let match;
                      while ((match = toFindRegex.exec(documentText))) {
                        removed = true;
                        const workspaceEdit = new WorkspaceEdit();
                        const { index } = match;

                        workspaceEdit.replace(
                          textDocument.uri,
                          new vscode.Range(
                            textDocument.positionAt(index),
                            textDocument.positionAt(index + match[0].length)
                          ),
                          ""
                        );
                        workspace
                          .applyEdit(workspaceEdit)
                          .then(res => resolve(removed))
                          .then(undefined, reason => reject(reason));
                      }
                      if (!removed) {
                        resolve(removed);
                      }
                    },
                    reason => reject(reason)
                  )
                  .then(undefined, err => reject(err));
              });
            });

            Promise.all(filesToProcess)
              .then(
                resolve => {
                  let removedDebuggerStatment = resolve.find(
                    value => value === true
                  );
                  window.showInformationMessage(
                    removedDebuggerStatment
                      ? `Successfully removed debugger statements.`
                      : `No debugger (i.e., debugger;) statements found.`
                  );
                },
                err => {
                  Utils.displayError(err, 0);
                }
              )
              .catch(err => {
                Utils.displayError(err, 1);
              });
          },
          reason => Utils.displayError(reason, 2)
        )
        .then(undefined, err => {
          Utils.displayError(err, 3);
        });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
