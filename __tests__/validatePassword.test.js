const validatePassword = require("../src/validatePassword");

test("Valid password passes validation", () => {
  expect(validatePassword("123456")).toBe(""); // Validation passed
});

test("Short password fails validation", () => {
  expect(validatePassword("123")).toBe("Password must be at least 6 characters.");
});
