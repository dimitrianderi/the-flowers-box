<template>
  <app-sections
    title="Portfolio"
    description="a selection of our work"
    btn="more"
    name="portfolio"
    :cards="cards"
    get-data="author"
    @getData="sendAuthor($event)"
  >
    <button
      class="portfolio-btn"
      @click="allBouquets()"
    >
      see all bouquets
    </button>
  </app-sections>
</template>

<script>
import { useRouter } from 'vue-router';
import cards from '@/config/the-portfolio.js';
import useFilterStore from '@/stores/FilterStore';
import AppSections from '@/components/ui/AppSections.vue';

export default {
  components: { AppSections },

  setup() {
    const filterStore = useFilterStore();
    const router = useRouter();

    const sendAuthor = (e) => {
      const author = e;
      filterStore.clearFilters();
      filterStore.addAuthor(author);
      router.push('/bouquets');
    };

    const allBouquets = () => {
      filterStore.clearFilters();
      router.push('/bouquets');
    };

    return {
      cards,
      sendAuthor,
      allBouquets,
    };
  },
};
</script>

<style></style>
