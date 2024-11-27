function getSelectedAnswer(answers) {
    return answers.find(answer => answer.checked)?.value || null;
  }
  module.exports = getSelectedAnswer;
  