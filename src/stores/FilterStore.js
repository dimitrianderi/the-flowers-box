import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useOrderStore } from "./OrderStore";


export const useFilterStore = defineStore('filterStore', () => {
    const orderStore = useOrderStore()

    const views = ref([])
    const getViews = computed(() => views.value)

    const bouquets = computed(() =>
        orderStore.getBouquets
            .filter(bouquet => {
                if (getViews.value.length) {
                    return getViews.value.includes(bouquet.view[0].title)
                }
                return bouquet
            })
    )

    const addView = (val) => {
        views.value = [...views.value, val]
    }

    const delView = (val) => {
        views.value = views.value.filter(view => view !== val)
    }

    const itemsPerPage = 8
    const currentPage = ref(1)
    const totalPage = computed(() => bouquets.value.length)

    watch(totalPage, (newValue) => {
        currentPage.value = newValue > currentPage.value * itemsPerPage ? currentPage.value : goMax()
    })

    const getBouquets = computed(() =>
        bouquets.value.slice(itemsPerPage * currentPage.value - itemsPerPage, itemsPerPage * currentPage.value))

    const next = computed(() => totalPage.value > itemsPerPage * currentPage.value ? true : false)

    const goMax = () => totalPage.value % itemsPerPage === 0 ? totalPage.value / itemsPerPage : ~~(totalPage.value / itemsPerPage) + 1

    const goNext = () => currentPage.value = next.value ? currentPage.value + 1 : currentPage.value
    const goEnd = () => currentPage.value = goMax()
    const goLast = () => currentPage.value = currentPage.value > 1 ? currentPage.value - 1 : currentPage.value
    const goStart = () => currentPage.value = 1

    const clearFilters = () => {
        views.value = [];
    }

    return {
        next,
        goNext,
        currentPage,
        getBouquets,
        goEnd,
        goLast,
        goStart,
        getViews,
        addView,
        delView,
        clearFilters
    }
})
