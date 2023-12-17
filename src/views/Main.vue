<template>
  <the-header></the-header>
  <main>
    <the-achievements></the-achievements>
    <the-portfolio></the-portfolio>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheAchievements from '@/components/TheAchievements.vue'
import ThePortfolio from '@/components/ThePortfolio.vue'
export default {
  components: { TheHeader, TheFooter, TheAchievements, ThePortfolio },
  name: 'Main',
}
</script>

<style scoped>
main {
  width: 100%;
}
</style>
