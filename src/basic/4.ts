function displayMessage(text: string): void {
  console.log(text);
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function throwError(): never {
  throw new Error("An unexpected error occurred");
}
