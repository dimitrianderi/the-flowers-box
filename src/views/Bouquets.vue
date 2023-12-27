<template>
  <section class="container bouquets">
    <!-- <div class="response">
      <app-alert :text="response" v-if="response.length"></app-alert>
    </div> -->
    <h2 class="bouquets__title">Bouquets</h2>
    <div class="bouquets__description">
      here you can order the bouquet you like!
      {{ bouquets.length }}
    </div>
    <div class="bouquets__wrapper">
      <div class="bouquets__shop">
        <div class="bouquets__shop-panel">
          <button
            v-for="bouquet in types"
            :key="bouquet.title"
            class="bouquets__shop-panel-btn"
            @click="toggleView(bouquet.title)"
            :class="{ active: filterStore.getViews.includes(bouquet.title) }"
          >
            {{ bouquet.title }}
          </button>
        </div>
        <app-loader v-if="isLoad"></app-loader>
        <div class="bouquets__shop__content" v-else-if="bouquets.length">
          <div class="bouquets__shop__content-contain">
            <app-collection
              v-for="bouquet in bouquets"
              :key="bouquet.name"
              collection="bouquets"
              :title="bouquet.name"
              textBtn="more"
              :price="+bouquet.price"
              :isPrice="true"
              :url="getMaxFlowers(bouquet.flowers)"
            ></app-collection>
          </div>
          <app-pagination></app-pagination>
        </div>
        <span v-else class="bouquets__shop-title">No bouquets available</span>
        <div class="bouquets__shop-panel">
          <button
            v-for="bouquet in authors"
            :key="bouquet.title"
            class="bouquets__shop-panel-btn"
            @click="toggleAuthor(bouquet.title)"
            :class="{ active: filterStore.getAuthors.includes(bouquet.title) }"
          >
            {{ bouquet.title }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useFilterStore } from '@/stores/FilterStore'
import { useOrderStore } from '@/stores/OrderStore.js'
import { types, authors } from '@/config/data/flowers.js'
import AppCollection from '@/components/ui/AppCollection.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppPagination from '@/components/ui/AppPagination.vue'

export default {
  components: { AppCollection, AppLoader, AppPagination },

  setup() {
    const orderStore = useOrderStore()
    const filterStore = useFilterStore()
    const bouquets = computed(() => filterStore.getBouquets)
    const isLoad = ref(false)

    const toggleView = (view) => {
      filterStore.getViews.includes(view)
        ? filterStore.delView(view)
        : filterStore.addView(view)
    }

    const toggleAuthor = (author) => {
      filterStore.getAuthors.includes(author)
        ? filterStore.delAuthor(author)
        : filterStore.addAuthor(author)
    }

    const getMaxFlowers = (data) => {
      const maxFlowers = data.reduce(
        (maxItem, currentItem) => {
          return currentItem.amount > maxItem.amount ? currentItem : maxItem
        },
        { amount: 0 }
      )
      return maxFlowers.title;
    }

    onMounted(async () => {
      isLoad.value = true
      await orderStore.loadBouquets()
      isLoad.value = false
    })

    return {
      bouquets,
      isLoad,
      types,
      authors,
      filterStore,
      toggleView,
      toggleAuthor,
      getMaxFlowers,
    }
  },
}
</script>

<style></style>
