export function isString(str: any): str is string {
  return typeof str === 'string';
}

export function isObject(obj: any): obj is object {
  return typeof obj === 'object' && obj !== null;
}

export function isNull(obj: any): obj is null {
  return obj === null;
}
