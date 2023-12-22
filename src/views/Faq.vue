<template>
  <app-sections
    title="FAQ"
    description="choose a topic of interest"
    btn="more"
    name="faq"
    :cards="cards"
    v-if="route.path === '/faq'"
  >
  </app-sections>
  <router-view></router-view>
</template>

<script>
import AppSections from '@/components/ui/AppSections.vue'
import { cards } from '@/config/app-sections.js'
import { useRoute } from 'vue-router'

export default {
  components: { AppSections },
  setup() {
    const route = useRoute()

    return { 
      cards, 
      route 
    }
  },
  name: 'FAQ'
}
</script>

<style></style>
