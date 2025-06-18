import { strings } from "@angular-devkit/core";
import {
  apply,
  chain,
  mergeWith,
  move,
  renameTemplateFiles,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from "@angular-devkit/schematics";

import { ModuleOptions } from "./schema";

export function rsi(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rules: Rule[] = [];

    // Optional folders
    if (options.includeAdapters) {
      rules.push(generateAdapters(options));
    }
    if (options.includeComponents) {
      rules.push(generateComponents(options));
    }
    if (options.includeConstants) {
      rules.push(generateConstants(options));
    }
    if (options.includeModels) {
      rules.push(generateModels(options));
    }
    if (options.includeStyles) {
      rules.push(generateStyles(options));
    }
    if (options.includePages) {
      rules.push(generatePages(options));
    }
    if (options.includeEnums) {
      rules.push(generateEnums(options));
    }
    if (options.includeHooks) {
      rules.push(generateHooks(options));
    }
    if (options.includeStore && options.includeStore === "simple") {
      rules.push(generateSimpleStore(options));
    }
    if (options.includeStore && options.includeStore === "composed") {
      rules.push(generateComposedStore(options));
    }
    if (options.includeRedux && options.includeRedux === "base") {
      rules.push(generateBaseQuery(options));
    }
    if (options.includeRedux && options.includeRedux === "extended") {
      rules.push(generateExtendedQuery(options));
    }

    return chain(rules);
  };
}

function generateAdapters(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/adapters"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(
          `${options.path}/${strings.camelize(options.moduleName)}/adapters`,
        ),
      ],
    );

    return mergeWith(templateSource);
  };
}
function generateComponents(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/components"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(
          `${options.path}/${strings.camelize(options.moduleName)}/components`,
        ),
      ],
    );

    return mergeWith(templateSource);
  };
}
function generateConstants(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/constants"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(
          `${options.path}/${strings.camelize(options.moduleName)}/constants`,
        ),
      ],
    );

    return mergeWith(templateSource);
  };
}
function generateModels(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/models"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(`${options.path}/${strings.camelize(options.moduleName)}/models`),
      ],
    );

    return mergeWith(templateSource);
  };
}
function generateStyles(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/styles"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(`${options.path}/${strings.camelize(options.moduleName)}/styles`),
      ],
    );

    return mergeWith(templateSource);
  };
}
function generatePages(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url("./files/__moduleName@camelize__"), [
      template({
        ...options,
        ...strings,
      }),
      renameTemplateFiles(),
      move(`${options.path}/${strings.camelize(options.moduleName)}`),
    ]);

    return mergeWith(templateSource);
  };
}
function generateEnums(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url("./files/__moduleName@camelize__/enums"), [
      template({
        ...options,
        ...strings,
      }),
      renameTemplateFiles(),
      move(`${options.path}/${strings.camelize(options.moduleName)}/enums`),
    ]);

    return mergeWith(templateSource);
  };
}
function generateHooks(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url("./files/__moduleName@camelize__/hooks"), [
      template({
        ...options,
        ...strings,
      }),
      renameTemplateFiles(),
      move(`${options.path}/${strings.camelize(options.moduleName)}/hooks`),
    ]);

    return mergeWith(templateSource);
  };
}
function generateBaseQuery(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/reduxExtended"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(`${options.path}/${strings.camelize(options.moduleName)}/redux`),
      ],
    );

    return mergeWith(templateSource);
  };
}
function generateExtendedQuery(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/reduxExtended"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(`${options.path}/${strings.camelize(options.moduleName)}/redux`),
      ],
    );

    return mergeWith(templateSource);
  };
}
function generateSimpleStore(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url("./files/__moduleName@camelize__/store"), [
      template({
        ...options,
        ...strings,
      }),
      renameTemplateFiles(),
      move(`${options.path}/${strings.camelize(options.moduleName)}/store`),
    ]);

    return mergeWith(templateSource);
  };
}
function generateComposedStore(options: ModuleOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(
      url("./files/__moduleName@camelize__/storeCompose"),
      [
        template({
          ...options,
          ...strings,
        }),
        renameTemplateFiles(),
        move(`${options.path}/${strings.camelize(options.moduleName)}/store`),
      ],
    );

    return mergeWith(templateSource);
  };
}
