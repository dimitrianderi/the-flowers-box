<template>
  <the-header></the-header>
  <main>
    <the-achievements></the-achievements>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheAchievements from '@/components/TheAchievements.vue'
export default {
  components: { TheHeader, TheFooter, TheAchievements },
  name: 'Main',
}
</script>

<style scoped>
main {
  width: 100%;
}
</style>
