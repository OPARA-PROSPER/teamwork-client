export const signinValidator = (state) => {
  let message;
  if (state.email.length === 0) {
    message = {
      status: 'error',
      message: 'email field is empty'
    }
  } else if (state.password.length === 0) {
    message = {
      status: 'error',
      message: 'password field is empty'
    }
  } else {
    message = {
      status: 'success',
      message: 'form fields are valid'
    }
  }

  return message;
};