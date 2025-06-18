export interface ModuleOptions {
  moduleName: string;
  path: string;
  includeAdapters: boolean;
  includeComponents: boolean;
  includeConstants: boolean;
  includeModels: boolean;
  includeStyles: boolean;
  includePages: boolean;
  includeEnums: boolean;
  includeHooks: boolean;
  includeStore: "simple" | "composed" | "none";
  includeRedux: "base" | "extended" | "none";
}
