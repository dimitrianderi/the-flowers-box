<template>
  <app-sections
    v-if="route.path === '/faq'"
    title="FAQ"
    description="choose a topic of interest"
    btn="more"
    name="faq"
    :cards="cards"
    get-data="href"
    @getData="goFaq($event)"
  />
  <router-view />
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import AppSections from '@/components/ui/AppSections.vue';
import { cards } from '@/config/app-sections.js';

export default {
  name: 'FAQ',
  components: { AppSections },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const goFaq = (e) => {
      const href = e;
      router.push(`/faq/${href}`);
    };

    return {
      cards,
      route,
      goFaq,
    };
  },
};
</script>

<style></style>
