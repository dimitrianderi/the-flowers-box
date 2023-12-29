<template>
  <app-sections
    v-if="route.path === '/faq'"
    title="FAQ"
    description="choose a topic of interest"
    btn="more"
    name="faq"
    :cards="cards"
    getData="href"
    @getData="goFaq($event)"
  >
  </app-sections>
  <router-view></router-view>
</template>

<script>
import AppSections from '@/components/ui/AppSections.vue'
import { cards } from '@/config/app-sections.js'
import { useRoute, useRouter } from 'vue-router'

export default {
  components: { AppSections },
  setup() {
    const route = useRoute()
    const router = useRouter()

    const goFaq = (e) => {
      const href = e
      router.push(`/faq/${href}`)
    }

    return {
      cards,
      route,
      goFaq,
    }
  },
  name: 'FAQ',
}
</script>

<style></style>
