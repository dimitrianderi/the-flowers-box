const KEY = import.meta.env.VITE_KEY
const DB = import.meta.env.VITE_DB
const API_REG = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`
const API_AUTH = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`

export { KEY, DB, API_REG, API_AUTH }