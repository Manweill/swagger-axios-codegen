declare namespace structuredLog { }
declare module "structured-log" {
  function configure(): any;
  class ConsoleSink {
    constructor(props: {
      includeTimestamps: boolean
    })
  }
}
