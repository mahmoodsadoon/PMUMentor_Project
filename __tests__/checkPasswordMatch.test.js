const checkPasswordsMatch = require("../src/checkPasswordsMatch");

test("Matching passwords pass validation", () => {
  expect(checkPasswordsMatch("password", "password")).toBe("");
});

test("Non-matching passwords fail validation", () => {
  expect(checkPasswordsMatch("password", "123456")).toBe("Passwords do not match.");
});
