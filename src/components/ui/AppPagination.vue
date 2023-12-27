<template>
  <div class="pagination">
    <app-link-icon
      class="pagination-icon"
      iconClass="fa-solid fa-backward-fast"
      :disabled="page === 1"
      @click="filterStore.goStart()"
    ></app-link-icon>
    <app-link-icon
      class="pagination-icon"
      iconClass="fa-solid fa-backward"
      :disabled="page === 1"
      @click="filterStore.goLast()"
    ></app-link-icon>
    <span class="pagination-page">{{ page }}</span>
    <app-link-icon
      class="pagination-icon"
      iconClass="fa-solid fa-forward"
      :disabled="!filterStore.next"
      @click="filterStore.goNext()"
    ></app-link-icon>
    <app-link-icon
      class="pagination-icon"
      iconClass="fa-solid fa-forward-fast"
      :disabled="!filterStore.next"
      @click="filterStore.goEnd()"
    ></app-link-icon>
  </div>
</template>

<script>
import AppLinkIcon from './AppLinkIcon.vue'
import { useFilterStore } from '@/stores/filterStore'
import { computed } from 'vue'

export default {
  components: { AppLinkIcon },
  setup() {
    const filterStore = useFilterStore()
    const page = computed(() => filterStore.getCurrentPage)

    return {
      filterStore,
      page
    }
  },
}
</script>

<style></style>
