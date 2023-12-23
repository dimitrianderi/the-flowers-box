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
              :src="`src/assets/img/${name}/${idx + 1}.jpg`"
              alt="bouquet"
            />
          </div>
          <router-link :to="'/faq/' + card.href" class="sections__card-btn">{{ btn }}</router-link>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import AppBreadCrumbs from '@/components/ui/AppBreadCrumbs.vue'
export default {
  components: { AppBreadCrumbs },
  props: {
    title: String,
    description: String,
    btn: String,
    name: String,
    cards: Object,
  },
}
</script>

<style></style>
