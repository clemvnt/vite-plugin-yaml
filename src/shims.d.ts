declare module 'tosource' {
  export default function toSource(
    object: any,
    replacer?: (a: any) => any,
    indent?: false | string,
    startingIndent?: string
  ): string
}
