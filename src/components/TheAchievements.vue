<template>
  <section class="achievements">
    <div class="achievements__container container">
      <div
        class="achievements__item"
        v-for="(item, key) in achievements"
        :key="key"
      >
        <span class="achievements__item-value">{{ item.value }}</span>
        <span class="achievements__item-title">{{ item.title }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'
import { onMounted, reactive } from 'vue'
export default {
  setup() {
    const achievements = reactive([
      { newValue: 13, value: 0, title: 'Years of work' },
      { newValue: 15, value: 0, title: 'Flower sorts' },
      { newValue: 35, value: 0, title: 'Happy clients' },
      { newValue: 44, value: 0, title: 'Arranged bouquets' },
    ])

    const startAnime = (el, endValue) => {
      anime({
        targets: el,
        value: endValue,
        easing: 'easeOutCubic',
        round: 1,
        duration: 1000,
      })
    }

    const handleScroll = () => {
      achievements.forEach((item) => {
        if (window.scrollY >= 100) {
          startAnime(item, +item.newValue)
        }
      })
    }

    onMounted(() => window.addEventListener('scroll', handleScroll))

    return {
      achievements,
    }
  },
}
</script>

<style></style>
