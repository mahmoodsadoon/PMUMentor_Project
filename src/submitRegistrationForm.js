function submitRegistrationForm(user) {
    if (!user.name || !user.email || !user.password) {
      return "All fields are required.";
    }
    return "Registration successful.";
  }
  module.exports = submitRegistrationForm;