<template>
  <section class="container builder">
    <h2 class="builder__title">Builder</h2>
    <div class="builder__description">
      follow the steps and create own bouquet!
    </div>
    <div class="builder__wrapper">
      <div class="builder__stages">
        <app-accordion id="flowers" :idx="0" title="Choose the flowers">
          <div class="builder__stages__content">
            <app-collection
              v-for="flower in flowers"
              :key="flower"
              collection="flowers"
              :title="flower.title"
              :price="flower.price"
            ></app-collection>
          </div>
        </app-accordion>
        <app-accordion id="greeneries" :idx="1" title="Choose the greeneries">
          <div class="builder__stages__content">
            <app-collection
              v-for="greenery in greeneries"
              :key="greenery"
              collection="greeneries"
              :title="greenery.title"
              :price="greenery.price"
            ></app-collection>
          </div>
        </app-accordion>
        <app-accordion id="packagings" :idx="2" title="Choose the packagings">
          <div class="builder__stages__content">
            <app-collection
              v-for="packaging in packagings"
              :key="packaging"
              collection="packagings"
              :title="packaging.title"
              :price="packaging.price"
            ></app-collection>
          </div>
        </app-accordion>
        <app-accordion id="compositions" :idx="3" title="Choose the compositions">
          <div class="builder__stages__content">
            <app-collection
              v-for="composition in compositions"
              :key="composition"
              collection="compositions"
              :title="composition.title"
              :price="composition.price"
            ></app-collection>
          </div>
        </app-accordion>
      </div>
      <div class="builder__res"></div>
    </div>
  </section>
</template>

<script>
import AppAccordion from '@/components/ui/AppAccordion.vue'
import AppCollection from '../components/ui/AppCollection.vue'
import { flowers, greeneries, packagings, compositions } from '@/config/data/flowers'

export default {
  components: { AppAccordion, AppCollection },
  setup() {
    return { flowers, greeneries, packagings, compositions }
  },
}
</script>

<style></style>
