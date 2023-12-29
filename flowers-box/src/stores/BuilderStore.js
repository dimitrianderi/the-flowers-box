import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import { useOrderStore } from '@/stores/OrderStore'
import { useAuthStore } from '@/stores/AuthStore'

export const useBuilderStore = defineStore('builderStore', () => {
    const authStore = useAuthStore()
    const orderStore = useOrderStore()

    const bouquet = reactive({
        flowers: [],
        greenery: [],
        packaging: [],
        composition: [],
        view: [],
    })

    const getFlowers = computed(() => bouquet.flowers)
    const getGreeneries = computed(() => bouquet.greenery)
    const getPackagings = computed(() => bouquet.packaging)
    const getCompositions = computed(() => bouquet.composition)
    const getViews = computed(() => bouquet.view);

    const totalFlowers = ref(0)

    watch(bouquet.flowers, (newValue) => {
        totalFlowers.value = newValue.reduce((total, flower) => total + +flower.amount, 0).toFixed(0)
    })

    const costFlowers = computed(() => bouquet.flowers.reduce((total, flower) => total + +flower.res, 0).toFixed(2))
    const costPackagings = computed(() => bouquet.packaging.length ? bouquet.packaging[0].price : 0)
    const costGreeneries = computed(() => bouquet.greenery.length ? bouquet.greenery[0].price * +totalFlowers.value : 0)
    const costComposition = computed(() => bouquet.composition.length ? bouquet.composition[0].price : 1);

    const getResultCost = computed(() => ((+costFlowers.value + +costPackagings.value + +costGreeneries.value) * +costComposition.value).toFixed(2));


    const addFlower = (data) => {
        bouquet.flowers.push({ ...data })
    }

    const cleanBouquet = () => {
        bouquet.flowers.length = 0
        bouquet.greenery.length = 0
        bouquet.packaging.length = 0
        bouquet.composition.length = 0
        bouquet.view.length = 0
        totalFlowers.value = 0
    }

    const cleanGreenery = () => {
        bouquet.greenery = []
    }

    const cleanFlower = (title) => {
        bouquet.flowers.splice(bouquet.flowers.findIndex(item => item.title === title), 1);
    }

    const addGreenery = (data) => {
        bouquet.greenery = [{ title: data.title, price: data.price, amount: computed(() => totalFlowers.value), res: computed(() => (+totalFlowers.value * data.price).toFixed(2)) }]
    }


    const addPackaging = (data) => {
        bouquet.packaging = [{ title: data.title, price: data.price }]
    }

    const addComposition = (data) => {
        bouquet.composition = [{ title: data.title, price: data.price }]
    }

    const addView = (data) => {
        bouquet.view = [{ title: data.title }]
    }

    const submitHandler = async (name) => {
        const author = authStore.getUser.split('@')[0];

        bouquet.name = name
        bouquet.author = author
        bouquet.price = getResultCost.value
        bouquet.greenery = [{ ...bouquet.greenery[0], amount: totalFlowers.value, res: +totalFlowers.value * bouquet.greenery[0].price }]

        try {
            await orderStore.createBouquet(bouquet)
            cleanBouquet()
        } catch (e) { }
    }

    return {
        addFlower,
        addGreenery,
        addPackaging,
        addComposition,
        addView,
        getViews,
        getCompositions,
        getFlowers,
        getPackagings,
        getGreeneries,
        getResultCost,
        submitHandler,
        cleanGreenery,
        cleanFlower,
        cleanBouquet,
    }
})