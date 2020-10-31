export class MethodNotImplementedError extends Error {
  constructor(methodName: string) {
    super(`implement #${methodName} method on your handle`);
  }
}
