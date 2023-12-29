<template>
  <section class="sections">
    <div class="sections__container container">
      <h2 class="sections__title">{{ title }}</h2>
      <span class="sections__description">{{ description }}</span>
      <div class="sections__cards">
        <div class="sections__card" v-for="(card, idx) in cards" :key="idx">
          <div class="sections__card-title">
            {{ card.title.toUpperCase() }}
          </div>
          <div class="sections__card-img">
            <img
              class="img"
              :src="getImageUrl(idx + 1, name)"
              alt="bouquet"
            />
          </div>
          <button
            class="sections__card-btn"
            @click="$emit('getData', card[getData])"
          >
            {{ btn }}
          </button>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import AppBreadCrumbs from '@/components/ui/AppBreadCrumbs.vue'
import { getImageUrl } from '@/utils/getImageUrl.js'

export default {
  components: { AppBreadCrumbs },
  props: {
    title: String,
    description: String,
    btn: String,
    name: String,
    cards: Object,
    getData: String,
  },
  emits: ['getData'],
  setup() {
    return { getImageUrl }
  },
}
</script>

<style></style>
