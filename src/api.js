const KEY = import.meta.env.VITE_KEY;
const API_REG = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`;
const API_AUTH = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`;

export { API_REG, API_AUTH };
