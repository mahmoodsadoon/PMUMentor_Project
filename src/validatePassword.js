function validatePassword(password) {
    return password.length >= 6 ? "" : "Password must be at least 6 characters.";

  }
  module.exports = validatePassword;
  