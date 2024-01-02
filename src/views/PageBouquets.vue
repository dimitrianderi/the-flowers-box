<template>
  <section class="container bouquets">
    <div class="response">
      <app-alert
        v-if="response.length"
        :text="response"
      />
    </div>
    <h2 class="bouquets__title">
      Bouquets
    </h2>
    <div class="bouquets__description">
      here you can order the bouquet you like!
    </div>
    <div class="bouquets__wrapper">
      <div class="bouquets__wrapper__search">
        <input
          class="bouquets__wrapper__search-input"
          type="text"
          placeholder="search..."
          :value="searchValue"
          @input="changeSearch"
        >
      </div>
      <div class="bouquets__shop">
        <div class="bouquets__shop-panel">
          <button
            v-for="bouquet in types"
            :key="bouquet.title"
            class="bouquets__shop-panel-btn"
            :class="{ active: filterStore.getViews.includes(bouquet.title) }"
            @click="toggleView(bouquet.title)"
          >
            {{ bouquet.title }}
          </button>
        </div>
        <app-loader v-if="isLoad" />
        <div
          v-else-if="bouquets.length"
          class="bouquets__shop__content"
        >
          <div class="bouquets__shop__content-contain">
            <app-collection
              v-for="bouquet in bouquets"
              :key="bouquet.name"
              collection="bouquets"
              :title="bouquet.name"
              text-btn="more"
              :price="+bouquet.price"
              :is-price="true"
              :url="getMaxFlowers(bouquet.flowers)"
              @addData="onModal(bouquet)"
            />
          </div>
          <app-pagination />
        </div>
        <span
          v-else
          class="bouquets__shop-title"
        >No bouquets available</span>
        <div class="bouquets__shop-panel">
          <button
            v-for="bouquet in authors"
            :key="bouquet.title"
            class="bouquets__shop-panel-btn"
            :class="{ active: filterStore.getAuthors.includes(bouquet.title) }"
            @click="toggleAuthor(bouquet.title)"
          >
            {{ bouquet.title }}
          </button>
        </div>
      </div>
    </div>
    <app-modal
      v-if="isModal"
      @offModal="offModal()"
    >
      <app-resume
        :bouquet="bouquetData"
        :is-submitting="isSubmitting"
        @delBouquet="deleteBouquet"
      />
    </app-modal>
  </section>
</template>

<script>
import {
  computed, onMounted, reactive, ref,
} from 'vue';
import useFilterStore from '@/stores/FilterStore';
import useOrderStore from '@/stores/OrderStore.js';
import { types, authors } from '@/config/data/flowers.js';
import AppCollection from '@/components/ui/AppCollection.vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import AppPagination from '@/components/ui/AppPagination.vue';
import AppModal from '@/components/ui/AppModal.vue';
import AppResume from '@/components/ui/AppResume.vue';
import useResponseStore from '@/stores/ResponseAuth';
import AppAlert from '@/components/ui/AppAlert.vue';

export default {
  components: {
    AppCollection,
    AppLoader,
    AppPagination,
    AppModal,
    AppResume,
    AppAlert,
  },

  setup() {
    const orderStore = useOrderStore();
    const filterStore = useFilterStore();
    const bouquets = computed(() => filterStore.getBouquets);
    const isSubmitting = ref(false);
    const isLoad = ref(false);
    const isModal = ref(false);
    const responseStore = useResponseStore();

    const bouquetData = reactive({});

    const response = computed(() => responseStore.getResponse);

    const toggleView = (view) => {
      if (filterStore.getViews.includes(view)) {
        filterStore.delView(view);
      } else {
        filterStore.addView(view);
      }
    };

    const toggleAuthor = (author) => {
      if (filterStore.getAuthors.includes(author)) {
        filterStore.delAuthor(author);
      } else {
        filterStore.addAuthor(author);
      }
    };

    const getMaxFlowers = (data) => {
      const maxFlowers = data.reduce(
        (maxItem, currentItem) => (currentItem.amount > maxItem.amount ? currentItem : maxItem),
        { amount: 0 },
      );
      return maxFlowers.title;
    };

    const searchValue = computed(() => filterStore.getSearch);

    const changeSearch = (e) => {
      filterStore.changeSearch(e.target.value);
    };

    const offModal = () => {
      isModal.value = false;
    };

    const onModal = (bouquet) => {
      isModal.value = true;
      Object.assign(bouquetData, bouquet);
    };

    const deleteBouquet = async (id) => {
      try {
        isSubmitting.value = true;
        await orderStore.deleteBouquet(id);
        offModal();
      } catch (e) { /* empty */ } finally {
        isSubmitting.value = false;
      }
    };

    onMounted(async () => {
      isLoad.value = true;
      await orderStore.loadBouquets();
      isLoad.value = false;
    });

    return {
      bouquets,
      isLoad,
      types,
      authors,
      filterStore,
      toggleView,
      toggleAuthor,
      getMaxFlowers,
      changeSearch,
      deleteBouquet,
      onModal,
      offModal,
      searchValue,
      isModal,
      bouquetData,
      isSubmitting,
      response,
    };
  },
};
</script>

<style></style>
