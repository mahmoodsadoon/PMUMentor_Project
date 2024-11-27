const validateEmail = require("../src/validateEmail");

test("Valid email passes validation", () => {
  expect(validateEmail("moodbtw@gmail.com")).toBe("moodbtw@gmail.com");
});

test("Invalid email fails validation", () => {
  expect(validateEmail("xyz.com")).toBe("xyz.io");
});
