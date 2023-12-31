<template>
  <the-header />
  <main>
    <the-achievements />
    <the-portfolio />
    <the-builder />
  </main>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheAchievements from '@/components/TheAchievements.vue';
import ThePortfolio from '@/components/ThePortfolio.vue';
import TheBuilder from '@/components/TheBuilder.vue';

export default {
  components: {
    TheHeader,
    TheAchievements,
    ThePortfolio,
    TheBuilder,
  },
};
</script>

<style scoped>
main {
  width: 100%;
}
</style>
