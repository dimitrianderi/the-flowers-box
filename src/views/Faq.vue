<template>
  <app-sections
    title="FAQ"
    description="choose a topic of interest"
    btn="more"
    name="faq"
    :cards="cards"
  >
  </app-sections>
</template>

<script>
import AppSections from '@/components/ui/AppSections.vue'
import { cards } from '@/config/app-sections.js'

export default {
  components: { AppSections },
  setup() {
    return { cards }
  },
}
</script>

<style></style>
