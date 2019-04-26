class Configurations {
  include: string[];
  exclude: string[];
  semicolonOptional: boolean;
  removeWhenOnSeparateLineOnly: boolean;
  [key: string]: any;

  constructor(
    include: string[] = [],
    exlude: string[] = [],
    semicolonOptional: boolean = false,
    removeWhenOnSeparateLineOnly: boolean = false
  ) {
    this.include = include;
    this.exclude = exlude;
    this.semicolonOptional = semicolonOptional;
    this.removeWhenOnSeparateLineOnly = removeWhenOnSeparateLineOnly;
  }
}

const ConfigurationDefaults = new Configurations();

export { Configurations, ConfigurationDefaults };
