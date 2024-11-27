function submitLoginForm(email, password) {
    if (!email || !password) {
      return "Fields cannot be empty.";
    }
    return "Login successful.";
  }
  module.exports = submitLoginForm;
  