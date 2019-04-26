import { window, workspace } from "vscode";
import config from "./config";
import { Configurations } from "./configurations";

const Utils = {
  arrayToCsv(array: Array<string>) {
    return array.join(",");
  },
  displayError(err: string, code: number) {
    window.showErrorMessage(
      `${
        config.extensionDisplayName
      } - An error occurred: ${err}. Code: ${code}`
    );
  },
  getConfigurations() {
    let configurations = new Configurations();
    Object.keys(configurations).forEach(configuration => {
      const setConfigValue = workspace
        .getConfiguration(config.extensionName)
        .get(configuration, configurations[configuration]);
      configurations = { ...configurations, [configuration]: setConfigValue };
    });
    return configurations;
  },
  makeOptionalInRegex(property: boolean) {
    return property ? "*" : "+";
  },
  regExWithGlobalMultiLineCaseInsensitiveFlags(regEx: string) {
    return new RegExp(regEx, "gim");
  }
};

export default Utils;
