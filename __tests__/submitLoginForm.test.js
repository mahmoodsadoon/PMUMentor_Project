const submitLoginForm = require("../src/submitLoginForm");

test("Empty fields return error", () => {
  expect(submitLoginForm("", "")).toBe("Fields cannot be empty.");
});

test("Valid input returns success", () => {
  expect(submitLoginForm("user@example.com", "123456")).toBe("Login successful.");
});
