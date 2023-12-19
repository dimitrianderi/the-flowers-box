<template>
  <section class="portfolio">
    <div class="portfolio__container container">
      <h2 class="portfolio__title">{{ portfolio.title }}</h2>
      <span class="portfolio__description">{{ portfolio.description }}</span>
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
          <div class="portfolio__card-btn">{{ btn.small }}</div>
        </div>
      </div>
      <button class="portfolio-btn">{{ btn.big }}</button>
    </div>
  </section>
</template>

<script>
import { cards, portfolioData as portfolio, btn } from '@/config/the-portfolio.js'
export default {
  setup() {
    return {
      cards,
      portfolio,
      btn
    }
  },
}
</script>

<style></style>
