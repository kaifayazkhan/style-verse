export const ValidateSigInForm = (username, password) => {
    const errors = {};
  
    validateInputFields(errors, "username", username, /\S+@\S+\.\S+/, "Username");
    validateInputFields(errors, "password", password, /\S+/, "Password");
  
    return errors;
  };
  export const ValidateSigUpForm = (name, email, password, confirmPassword) => {
    const errors = {};
  
    validateInputFields(errors, "name", name, /\S+/, "Name");
    validateInputFields(errors, "email", email, /\S+@\S+\.\S+/, "Email");
    validateInputFields(errors, "password", password, /\S+/, "Password");
  
    if (!confirmPassword) {
      errors.confirmPassword = "Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Password does not matched";
    }
  
    return errors;
  };
  const validateInputFields = (
    errors,
    fieldName,
    value,
    validationRegex,
    errorMessage
  ) => {
      if (!value) {
        errors[fieldName] = `${errorMessage} is required`;
      } else if (!validationRegex.test(value)) {
        errors[fieldName] = `${errorMessage} is invalid`;
      }   
  };
  