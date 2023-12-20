<template>
  <section class="portfolio">
    <div class="portfolio__container container">
      <h2 class="portfolio__title">Portfolio</h2>
      <span class="portfolio__description">a selection of our work</span>
      <div class="portfolio__cards">
        <div class="portfolio__card" v-for="(card, idx) in cards" :key="idx">
          <div class="portfolio__card-title">
            {{ card.title.toUpperCase() }}
          </div>
          <div class="portfolio__card-img">
            <img
              class="img"
              :src="`src/assets/img/title/${idx + 1}.jpg`"
              alt="bouquet"
            />
          </div>
          <div class="portfolio__card-btn">more</div>
        </div>
      </div>
      <button class="portfolio-btn">see all bouquets</button>
    </div>
  </section>
</template>

<script>
import { cards } from '@/config/the-portfolio.js'
export default {
  setup() {
    return {
      cards,
    }
  },
}
</script>

<style></style>
