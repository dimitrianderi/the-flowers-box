import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'

export const useBuilderStore = defineStore('builderStore', () => {
    const bouquet = reactive({
        flowers: [],
        greenery: [],
        packaging: [],
        composition: [],
        type: [],
    })

    const getFlowers = computed(() => bouquet.flowers)
    const getGreeneries = computed(() => bouquet.greenery)
    const getPackagings = computed(() => bouquet.packaging)
    const getCompositions = computed(() => bouquet.composition)
    const getTypes = computed(() => bouquet.type);

    const totalFlowers = ref(0)

    watch(bouquet.flowers, (newValue) => {
        totalFlowers.value = newValue.reduce((total, flower) => total + +flower.amount, 0).toFixed(0)
    })

    const costFlowers = computed(() => bouquet.flowers.reduce((total, flower) => total + +flower.res, 0).toFixed(2))
    const costPackagings = computed(() => bouquet.packaging.length ? bouquet.packaging[0].price : 0)
    const costComposition = computed(() => bouquet.composition.length ? bouquet.composition[0].price : 1);
    const getResultCost = computed(() => ((+costFlowers.value + +costPackagings.value) * +costComposition.value).toFixed(2));


    const addFlower = (data) => {
        bouquet.flowers.push({ ...data })
    }

    const addGreenery = (data) => {
        bouquet.greenery = [{ title: data.title, price: data.price, amount: totalFlowers.value, res: computed(() => (+totalFlowers.value * data.price).toFixed(2)) }]
    }
    

    const addPackaging = (data) => {
        bouquet.packaging = [{ title: data.title, price: data.price }]
    }

    const addComposition = (data) => {
        bouquet.composition = [{ title: data.title, price: data.price }]
    }

    const addType = (data) => {
        bouquet.type = [{ title: data.title }]
    }

    const submitHandler = (name) => {
        console.log(name)
    }

    return {
        addFlower,
        addGreenery,
        addPackaging,
        addComposition,
        addType,
        getTypes,
        getCompositions,
        getFlowers,
        getPackagings,
        getGreeneries,
        getResultCost,
        submitHandler
    }
})