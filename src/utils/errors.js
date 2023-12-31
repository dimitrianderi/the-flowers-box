const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: 'invalid username or password',
  EMAIL_EXISTS: 'the user already exists',
};

export const errors = (code) => ERROR_CODES[code] || 'request error';
