declare namespace camelcase { }
declare module "camelcase" {
  export default function camelcase(args: string | string[], options?: ICamelCaseOptions): string;
}

declare interface ICamelCaseOptions {
  pascalCase: boolean
}