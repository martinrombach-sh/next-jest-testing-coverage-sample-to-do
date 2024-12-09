export function forEach(items: Array<any>, callback: Function) {
  for (const item of items) {
    callback(item)
  }
}
