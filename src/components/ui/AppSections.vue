<template>
  <section class="sections">
    <div class="sections__container container">
      <h2 class="sections__title">
        {{ title }}
      </h2>
      <span class="sections__description">{{ description }}</span>
      <div class="sections__cards">
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="sections__card"
        >
          <div class="sections__card-title">
            {{ card.title.toUpperCase() }}
          </div>
          <div class="sections__card-img">
            <img
              class="img"
              :src="getImageUrl(idx + 1, name)"
              alt="bouquet"
            >
          </div>
          <button
            class="sections__card-btn"
            @click="$emit('getData', card[getData])"
          >
            {{ btn }}
          </button>
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>

<script>
import getImageUrl from '@/utils/getImageUrl.js';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    btn: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    cards: {
      type: Object,
      default: () => {},
    },
    getData: {
      type: String,
      default: '',
    },
  },
  emits: ['getData'],
  setup() {
    return { getImageUrl };
  },
};
</script>

<style></style>
