class Configurations {
  include: string[];
  exclude: string[];
  semicolonOptional: boolean;
  newlineOptional: boolean;
  [key: string]: any;

  constructor(
    include: string[] = [],
    exlude: string[] = [],
    semicolonOptional: boolean = false,
    newlineOptional: boolean = false
  ) {
    this.include = include;
    this.exclude = exlude;
    this.semicolonOptional = semicolonOptional;
    this.newlineOptional = newlineOptional;
  }
}

const ConfigurationDefaults = new Configurations();

export { Configurations, ConfigurationDefaults };
