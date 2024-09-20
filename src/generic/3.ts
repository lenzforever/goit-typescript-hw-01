function merge<T extends object, O extends object>(objA: T, objB: O) {
  return Object.assign(objA, objB);
}
