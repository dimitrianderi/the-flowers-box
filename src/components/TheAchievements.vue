<template>
  <section class="achievements">
    <div class="achievements__container container">
      <div
        v-for="(item, key) in achievements"
        :key="key"
        class="achievements__item"
      >
        <span class="achievements__item-value">{{ item.value }}</span>
        <span class="achievements__item-title">
          {{ item.title.toUpperCase() }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue';
import { achievements } from '@/config/the-achievements.js';
import { startAnime } from '@/libraries/anime.js';

export default {
  setup() {
    const handleScroll = () => {
      if (window.scrollY >= 85) {
        achievements.forEach((item) => {
          startAnime(item, +item.newValue);
        });
      }
    };

    onMounted(() => window.addEventListener('scroll', handleScroll));

    return {
      achievements,
    };
  },
};
</script>

<style></style>
