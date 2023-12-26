import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useOrderStore } from "./OrderStore";


export const useFilterStore = defineStore('filterStore', () => {
    const orderStore = useOrderStore()
    const bouquets = computed(() => orderStore.getBouquets)

    const itemsPerPage = 8
    const currentPage = ref(1)
    const totalPage = computed(() => bouquets.value.length)

    const getBouquets = computed(() =>
        bouquets.value.slice(itemsPerPage * currentPage.value - itemsPerPage, itemsPerPage * currentPage.value))

    const next = computed(() => totalPage.value > itemsPerPage * currentPage.value ? true : false)

    const goNext = () => {
        currentPage.value = currentPage.value += 1
    }

    const goEnd = () => {
        currentPage.value = totalPage.value % itemsPerPage === 0 ? totalPage.value / itemsPerPage : ~~(totalPage.value / itemsPerPage) + 1
    }

    const goLast = () => {
        currentPage.value -= 1
    }

    const goStart = () => {
        currentPage.value = 1
    }

    return {
        next,
        goNext,
        currentPage,
        getBouquets,
        goEnd,
        goLast,
        goStart
    }
})
