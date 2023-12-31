const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: 'invalid username or password',
  EMAIL_EXISTS: 'the user already exists',
};

const errors = (code) => ERROR_CODES[code] || 'request error';

export default errors;
