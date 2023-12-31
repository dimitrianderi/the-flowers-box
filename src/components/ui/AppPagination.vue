<template>
  <div class="pagination">
    <app-link-icon
      class="pagination-icon"
      icon-class="fa-solid fa-backward-fast"
      :disabled="page === 1"
      @click.prevent="filterStore.goStart()"
    />
    <app-link-icon
      class="pagination-icon"
      icon-class="fa-solid fa-backward"
      :disabled="page === 1"
      @click.prevent="filterStore.goLast()"
    />
    <span class="pagination-page">{{ page }}</span>
    <app-link-icon
      class="pagination-icon"
      icon-class="fa-solid fa-forward"
      :disabled="!filterStore.next"
      @click.prevent="filterStore.goNext()"
    />
    <app-link-icon
      class="pagination-icon"
      icon-class="fa-solid fa-forward-fast"
      :disabled="!filterStore.next"
      @click.prevent="filterStore.goEnd()"
    />
  </div>
</template>

<script>
import { computed } from 'vue';
import useFilterStore from '@/stores/filterStore';
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue';

export default {
  components: { AppLinkIcon },
  setup() {
    const filterStore = useFilterStore();
    const page = computed(() => filterStore.getCurrentPage);

    return {
      filterStore,
      page,
    };
  },
};
</script>

<style></style>
