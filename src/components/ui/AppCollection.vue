<template>
  <div class="collection">
    <div class="collection-img">
      <img :src="`src/assets/img/${collection}/${title}.jpg`" />
    </div>
    <div class="collection-title">
      {{ title }}
      <span class="collection-price" v-if="price">
        ({{ amount ? res : price }}{{ isPrice ? '&#36;' : '' }})
      </span>
    </div>
    <div class="collection__controller" v-if="isInput">
      <label class="collection__controller-text" :for="title">amount:</label>
      <input
        type="number"
        class="collection__controller-input"
        :id="title"
        max="100"
        min="1"
        v-model="amount"
      />
    </div>
    <button class="collection-btn" @click="addFlower">{{ textBtn }}</button>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue'

export default {
  props: {
    collection: String,
    title: String,
    textBtn: String,
    price: Number,
    isInput: Boolean,
    isPrice: Boolean,
  },

  setup(props) {
    const amount = ref(null)
    const price = ref(props.price)
    const res = computed(() => (+amount.value * +price.value).toFixed(2))
    const flower = reactive({})

    const addFlower = () => {
      flower.name = props.title
      flower.amount = amount.value
      flower.price = res.value

      console.log(flower)
    }

    watch(amount, (newValue) => {
      amount.value = newValue > 100 ? 100 : amount.value
      amount.value = newValue < 1 && newValue !== '' ? 1 : amount.value
    })

    return {
      amount,
      price,
      res,
      addFlower,
    }
  },
}
</script>

<style></style>
