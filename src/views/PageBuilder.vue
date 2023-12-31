<template>
  <section class="container builder">
    <div class="response">
      <app-alert
        v-if="response.length"
        :text="response"
      />
    </div>
    <h2 class="builder__title">
      Builder
    </h2>
    <div class="builder__description">
      follow the steps and create own bouquet!
    </div>
    <div class="builder__wrapper">
      <div class="builder__stages">
        <app-accordion
          id="flowers"
          :idx="0"
          title="Choose one or more flowers"
        >
          <app-alert
            text="Choose the quantity (1-100) and add to cart"
          />
          <div class="builder__stages__content">
            <app-collection
              v-for="flower in flowers"
              :key="flower"
              collection="flowers"
              text-btn="add"
              :title="flower.title"
              :price="flower.price"
              :is-input="true"
              :is-price="true"
              :active="flowersArr"
              :url="flower.title"
              @addData="addFlower"
            />
          </div>
        </app-accordion>
        <app-accordion
          id="greeneries"
          :idx="1"
          title="Choose the greeneries"
        >
          <app-alert
            text="The quantity of greenery will be equal to the quantity of flowers"
          />
          <div class="builder__stages__content">
            <app-collection
              v-for="greenery in greeneries"
              :key="greenery"
              collection="greeneries"
              text-btn="select"
              :title="greenery.title"
              :price="greenery.price"
              :is-price="true"
              :active="greeneriesArr"
              :url="greenery.title"
              @addData="addGreenery"
            />
          </div>
        </app-accordion>
        <app-accordion
          id="packagings"
          :idx="2"
          title="Choose the packagings"
        >
          <div class="builder__stages__content">
            <app-collection
              v-for="packaging in packagings"
              :key="packaging"
              collection="packagings"
              text-btn="select"
              :title="packaging.title"
              :price="packaging.price"
              :is-price="true"
              :active="packagingsArr"
              :url="packaging.title"
              @addData="addPackaging"
            />
          </div>
        </app-accordion>
        <app-accordion
          id="compositions"
          :idx="3"
          title="Choose the compositions"
        >
          <app-alert
            text="The final price will be multiplied by a coefficient"
          />
          <div class="builder__stages__content">
            <app-collection
              v-for="composition in compositions"
              :key="composition"
              collection="compositions"
              text-btn="select"
              :title="composition.title"
              :price="composition.price"
              :is-price="false"
              :active="compositionsArr"
              :url="composition.title"
              @addData="addComposition"
            />
          </div>
        </app-accordion>
        <app-accordion
          id="views"
          :idx="4"
          title="Choose the type of bouquet"
        >
          <div class="builder__stages__content">
            <app-collection
              v-for="view in types"
              :key="view"
              collection="types"
              text-btn="select"
              :title="view.title"
              :is-price="false"
              :active="views"
              :url="view.title"
              @addData="addView"
            />
          </div>
        </app-accordion>
      </div>
      <div class="builder__info">
        <app-info />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue';
import AppAccordion from '@/components/ui/AppAccordion.vue';
import AppCollection from '@/components/ui/AppCollection.vue';
import AppAlert from '@/components/ui/AppAlert.vue';
import {
  flowers,
  greeneries,
  packagings,
  compositions,
  types,
} from '@/config/data/flowers';
import AppInfo from '@/components/ui/AppInfo.vue';
import useBuilderStore from '@/stores/BuilderStore';
import useResponseStore from '@/stores/ResponseAuth';

export default {
  components: {
    AppAccordion, AppCollection, AppAlert, AppInfo,
  },

  setup() {
    const buildStore = useBuilderStore();
    const responseStore = useResponseStore();
    const isResponse = ref(false);

    const addFlower = (data) => {
      buildStore.addFlower({ ...data });
    };

    const addGreenery = (data) => {
      buildStore.addGreenery({ ...data });
    };

    const addPackaging = (data) => {
      buildStore.addPackaging({ ...data });
    };

    const addComposition = (data) => {
      buildStore.addComposition({ ...data });
    };

    const addView = (data) => {
      buildStore.addView({ ...data });
    };

    const response = computed(() => responseStore.getResponse);

    const flowersArr = computed(() => buildStore.getFlowers);
    const greeneriesArr = computed(() => buildStore.getGreeneries);
    const packagingsArr = computed(() => buildStore.getPackagings);
    const compositionsArr = computed(() => buildStore.getCompositions);
    const views = computed(() => buildStore.getViews);

    return {
      flowers,
      greeneries,
      packagings,
      compositions,
      types,
      addFlower,
      addGreenery,
      addPackaging,
      addComposition,
      addView,
      views,
      flowersArr,
      compositionsArr,
      packagingsArr,
      greeneriesArr,
      isResponse,
      response,
    };
  },
};
</script>

<style></style>
