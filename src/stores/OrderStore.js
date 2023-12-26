import axios from '@/axios/request'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/AuthStore'
import { useResponseStore } from '@/stores/ResponseAuth'
import { computed, ref } from 'vue'

export const useOrderStore = defineStore('orderStore', () => {
    const authStore = useAuthStore()
    const responseStore = useResponseStore()
    const bouquets = ref([])

    const getBouquets = computed(() => bouquets.value)
    const setBouquets = (requests) => bouquets.value = requests

    const createBouquet = async (payload) => {
        const token = authStore.getToken
        try {
            const { data } = await axios.post(`/flowers.json?auth=${token}`, payload)
            // addBook({ ...payload, id: data.name })
            responseStore.updateResponse('Bouquet is creating!')
        } catch (err) {
            responseStore.updateResponse('Request error')
            throw new Error()
        }
    }

    const loadBouquets = async () => {
        const token = authStore.getToken
        try {
            const { data } = await axios.get(`/flowers.json?auth=${token}`)
            if (data) {
                const requests = Object.keys(data).map(id => ({ ...data[id], id }))
                setBouquets(requests)
            }
        } catch (err) {
            responseStore.updateResponse('Request error')
            throw new Error()
        }
    }

    return {
        createBouquet,
        loadBouquets,
        getBouquets
    }
})