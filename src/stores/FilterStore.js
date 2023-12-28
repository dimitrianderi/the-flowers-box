import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useOrderStore } from "./OrderStore";
import { useAuthStore } from "./AuthStore";
const itemsPerPage = 4

export const useFilterStore = defineStore('filterStore', () => {
    const orderStore = useOrderStore()
    const authStore = useAuthStore()

    const search = ref('')
    const getSearch = computed(() => search.value)
    const changeSearch = (newValue) => search.value = newValue

    const views = ref([])
    const getViews = computed(() => views.value)

    const authors = ref([])
    const getAuthors = computed(() => authors.value)

    const user = computed(() => authStore.getUser)

    const bouquets = computed(() =>
        orderStore.getBouquets
            .filter((bouquet) => {
                if (getViews.value.length) {
                    return getViews.value.includes(bouquet.view[0].title)
                }
                return true
            })
            .filter((bouquet) => {
                if (getAuthors.value.length) {
                    return getAuthors.value.includes(getTypeOfAuthor(bouquet.author))
                }
                return true
            })
            .filter((bouquet) => {
                if (
                    getSearch.value &&
                    getSearch.value.length
                ) {
                    return bouquet.name
                        .toLowerCase()
                        .includes(getSearch.value.toLowerCase())
                }
                return true
            })
    )

    const addView = (val) => {
        views.value = [...views.value, val]
    }

    const delView = (val) => {
        views.value = views.value.filter(view => view !== val)
    }

    const addAuthor = (val) => {
        authors.value = [...authors.value, val]
    }

    const delAuthor = (val) => {
        authors.value = authors.value.filter(author => author !== val)
    }

    const currentPage = ref(1)
    const getCurrentPage = computed(() => currentPage.value)

    const totalPage = computed(() => bouquets.value.length)

    const getTypeOfAuthor = (author) => {
        if (author === 'admin') {
            return 'Design'
        } else if (author === 'dimitrianderi') {
            return 'My'
        } else {
            return 'Custom'
        }
    }

    watch(totalPage, (newValue) => {
        currentPage.value = newValue > currentPage.value * itemsPerPage ? currentPage.value : goMax()
    })

    const getBouquets = computed(() =>
        bouquets.value.slice(itemsPerPage * currentPage.value - itemsPerPage, itemsPerPage * currentPage.value))

    const next = computed(() => totalPage.value > itemsPerPage * currentPage.value ? true : false)

    const goMax = () => totalPage.value % itemsPerPage === 0 ? totalPage.value / itemsPerPage || 1 : ~~(totalPage.value / itemsPerPage) + 1

    const goNext = () => currentPage.value = next.value ? currentPage.value + 1 : currentPage.value
    const goEnd = () => currentPage.value = goMax()
    const goLast = () => currentPage.value = currentPage.value > 1 ? currentPage.value - 1 : currentPage.value
    const goStart = () => currentPage.value = 1

    const clearFilters = () => {
        views.value = [];
        authors.value = []
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
        getAuthors,
        addAuthor,
        delAuthor,
        addView,
        delView,
        getCurrentPage,
        clearFilters,
        getSearch,
        changeSearch
    }
})
