function checkPasswordsMatch(password, confirmPassword) {
    return password === confirmPassword ? "" : "Passwords do not match.";
  }
  module.exports = checkPasswordsMatch;
  