<template>
  <component
    :is="layout + '-layout'"
    v-if="layout"
  />
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import ContentLayout from '@/layouts/ContentLayout.vue';

export default {
  components: { MainLayout, ContentLayout },
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => route.meta.layout),
    };
  },
};
</script>

<style></style>
