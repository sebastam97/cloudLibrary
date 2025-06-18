import { strings } from "@angular-devkit/core";
import {
  apply,
  mergeWith,
  move,
  renameTemplateFiles,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from "@angular-devkit/schematics";

export function addFolder(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const moduleName = options.moduleName;

    const destinationPath = options.folderType === "storeCompose" ? "store" : options.folderType;
    const templateSource = apply(url(`../rsi/files/__moduleName@camelize__/${options.folderType}`), [
      template({
        ...options,
        ...strings,
        moduleName
      }),
      renameTemplateFiles(),
      move(`${options.path}/${moduleName}/${destinationPath}`)
    ]);

    return mergeWith(templateSource);
  };
}
