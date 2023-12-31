<template>
  <div class="collection">
    <slot />
    <div :class="{ 'collection-img': true, big: collection === 'bouquets' }">
      <img :src="getImageUrl(url.toLowerCase(), collection)">
    </div>
    <div class="collection-title">
      {{ title }}
      <span
        v-if="currentPrice"
        class="collection-price"
      >
        ({{ amount ? res : currentPrice }}{{ isPrice ? '&#36;' : '' }})
      </span>
    </div>
    <div
      v-if="isInput"
      class="collection__controller"
    >
      <label
        class="collection__controller-text"
        :for="title"
      >amount:</label>
      <input
        :id="title"
        v-model="amount"
        type="number"
        class="collection__controller-input"
        max="100"
        step="1"
        min="1"
      >
    </div>
    <button
      class="collection-btn"
      :disabled="isInput && !amount"
      :class="{ active: isActive }"
      @click="handlerClick()"
    >
      {{ isActive ? textBtn + 'ed' : textBtn }}
    </button>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import getImageUrl from '@/utils/getImageUrl.js';

export default {
  props: {
    collection: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    textBtn: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    isInput: Boolean,
    isPrice: Boolean,
    active: {
      type: Object,
      default: () => {},
    },
    url: {
      type: String,
      default: '',
    },
  },
  emits: ['addData'],

  setup(props, context) {
    const amount = ref(null);
    const currentPrice = ref(props.price);

    const res = computed(() => (+amount.value * +currentPrice.value).toFixed(2));
    const isActive = computed(
      () => props.active && props.active.find((obj) => obj.title === props.title),
    );

    const handlerClick = () => {
      context.emit('addData', {
        title: props.title,
        price: currentPrice.value,
        amount: amount.value,
        res: res.value,
      });
      amount.value = '';
    };

    watch(amount, (newValue) => {
      amount.value = newValue > 100 ? 100 : amount.value;
      amount.value = newValue < 1 && newValue !== '' ? 1 : amount.value;
    });

    return {
      amount,
      currentPrice,
      res,
      handlerClick,
      isActive,
      getImageUrl,
    };
  },
};
</script>

<style></style>
