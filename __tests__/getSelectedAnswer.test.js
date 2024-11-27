const getSelectedAnswer = require("../src/getSelectedAnswer");

test("Returns the value of the selected answer", () => {
  const answers = [
    { checked: false, value: "A" },
    { checked: true, value: "B" },
    { checked: false, value: "C" },
  ];
  expect(getSelectedAnswer(answers)).toBe("B");
});

test("Returns null if no answer is selected", () => {
  const answers = [
    { checked: false, value: "A" },
    { checked: false, value: "B" },
    { checked: false, value: "C" },
  ];
  expect(getSelectedAnswer(answers)).toBe(null);
});
