// Create a function called combine that can accept two numbers OR two strings.
// Use function overloading to define two versions of this function.
// If two numbers are passed, return their sum.
// If two strings are passed, return their concatenated (combined) value.

// Overload signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Implementation
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Both arguments must be of the same type (number or string).");
  }
}

console.log(combine(10, 20));                 // Expected output: 30
console.log(combine("Hello, ", "World!"));    // Expected output: Hello, World!
