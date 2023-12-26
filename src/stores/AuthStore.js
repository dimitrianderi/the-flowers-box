import axios from '@/axios/request'
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { API_REG, API_AUTH } from '@/api'
import { errors } from '@/utils/errors'
import { useRouter } from 'vue-router'
import { useBuilderStore } from './BuilderStore'
const TOKEN_KEY = 'token'
const USER = 'user'


export const useAuthStore = defineStore('authStore', () => {
    const token = ref(localStorage.getItem(TOKEN_KEY))
    const user = ref(localStorage.getItem(USER))
    const errAuth = ref('')
    const router = useRouter()
    const builderStore = useBuilderStore()
    const getToken = computed(() => token.value)
    const getUser = computed(() => user.value)
    const isAuth = computed(() => !!token.value)
    const getErrAuth = computed(() => errAuth.value)

    const setToken = (newToken) => token.value = newToken
    const setEmail = (newEmail) => user.value = newEmail
    const setErrAuth = (errorMessage) => errAuth.value = errorMessage
    const clearErrAuth = () => errAuth.value = null

    const login = async (payload) => {
        try {
            const { data } = await axios.post(API_AUTH, { ...payload, returnSecureToken: true })
            setToken(data.idToken)
            setEmail(data.email)
            console.log(getToken.value)
        } catch (err) {
            setErrAuth(errors(err.response.data.error.message))
            throw new Error()
        }
    }

    const logout = () => {
        router.push('/auth')
        token.value = null
        user.value = null
        builderStore.cleanBouquet()
        // filterStore.clearFilters()
        // requestStore.delBooks()
    }

    const reg = async (payload) => {
        try {
            await axios.post(API_REG, { ...payload, returnSecureToken: true })
            await login({ email: payload.email, password: payload.password })
        } catch (err) {
            setErrAuth(errors(err.response.data.error.message))
            throw new Error()
        }
    }

    watch(token, (newToken) => newToken ? localStorage.setItem(TOKEN_KEY, newToken) : localStorage.removeItem(TOKEN_KEY))
    watch(user, (newEmail) => newEmail ? localStorage.setItem(USER, newEmail) : localStorage.removeItem(USER))

    return {
        getToken,
        getUser,
        isAuth,
        getErrAuth,
        login,
        logout,
        reg,
        clearErrAuth,
    }
})