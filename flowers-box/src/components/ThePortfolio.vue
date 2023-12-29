<template>
  <app-sections
    title="Portfolio"
    description="a selection of our work"
    btn="more"
    name="portfolio"
    :cards="cards"
    getData="author"
    @getData="sendAuthor($event)"
  >
    <button class="portfolio-btn">see all bouquets</button>
  </app-sections>
</template>

<script>
import { cards } from '@/config/the-portfolio.js'
import { useFilterStore } from '@/stores/FilterStore'
import { useRouter } from 'vue-router'
import AppSections from '@/components/ui/AppSections.vue'

export default {
  components: { AppSections },

  setup() {
    const filterStore = useFilterStore()
    const router = useRouter()

    const sendAuthor = (e) => {
      const author = e
      filterStore.clearFilters()
      filterStore.addAuthor(author)
      router.push('/bouquets')
    }

    return {
      cards,
      sendAuthor,
    }
  },
}
</script>

<style></style>
