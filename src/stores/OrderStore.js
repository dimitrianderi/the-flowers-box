import axios from '@/axios/request'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/AuthStore'
import { useResponseStore } from '@/stores/ResponseAuth'

export const useOrderStore = defineStore('orderStore', () => {
    const authStore = useAuthStore()
    const responseStore = useResponseStore()

    const createBouquet = async (payload) => {
        const token = authStore.getToken
        try {
            const { data } = await axios.post(`/flowers.json?auth=${token}`, payload)
            // addBook({ ...payload, id: data.name })
            responseStore.updateResponse('Bouquet is creating!')
        } catch (err) {
            // successStore.updateSuccess('')
            // throw new Error()
        }
    }

    return {
        createBouquet
    }
})