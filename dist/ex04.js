"use strict";
// Create a function called greet.
// This function should accept a required name (string) and an optional greeting message (string).
// If no greeting is provided, use "Hello" as the default message.
// The function should log the greeting message followed by the name. Specify the correct return type for logging.
function greet(name, message = "Hello") {
    console.log(`${message}, ${name}!`);
}
greet("John"); // Expected output: Hello, John!
greet("John", "Good morning"); // Expected output: Good morning, John!
