<template>
  <form class="info" @submit.prevent="submitHandler()">
    <div class="info__title">
      <span>Your bouquet</span
      ><span>{{ resultCost ? resultCost : '0.00' }} &#36;</span>
    </div>
    <div class="info__block" v-if="flowers.length || greeneries.length">
      <span>Bouquet ingredients</span>
      <div
        class="info__block__content"
        v-for="flower in flowers"
        :key="flower.title"
      >
        <span>{{ flower.title }}, {{ flower.amount }} pcs.</span
        ><span>{{ flower.res }}&#36;</span>
        <app-link-icon
          class="info__block__content-icon"
          iconClass="fa-solid fa-trash"
          @click="deleteFlower(flower.title)"
        ></app-link-icon>
      </div>
      <div
        class="info__block__content"
        v-for="greenery in greeneries"
        :key="greenery.title"
      >
        <span>{{ greenery.title }}, {{ greenery.amount }} pcs.</span
        ><span>{{ greenery.res }}&#36;</span>
        <app-link-icon
          class="info__block__content-icon"
          iconClass="fa-solid fa-trash"
          @click="deleteGreenery"
        ></app-link-icon>
      </div>
    </div>
    <div class="info__block" v-if="packagings.length">
      <span>Bouquet packaging</span>
      <div
        class="info__block__content"
        v-for="packaging in packagings"
        :key="packaging.title"
      >
        <span>{{ packaging.title }}</span
        ><span>{{ packaging.price }}&#36;</span>
      </div>
    </div>
    <div class="info__block" v-if="compositions.length">
      <span>Bouquet composition</span>
      <div
        class="info__block__content"
        v-for="composition in compositions"
        :key="composition.title"
      >
        <span>{{ composition.title }}</span
        ><span>x{{ composition.price }}</span>
      </div>
    </div>
    <div class="info__advanced">
      <div
        class="info__advanced__content"
        v-for="view in views"
        :key="view.title"
      >
        <span>{{ 'Type' }}</span>
        <span>{{ view.title }}</span>
      </div>
      <div class="info__advanced__content">
        <span>{{ 'Name' }}</span>
        <input
          class="info__advanced__content-input"
          type="text"
          maxlength="20"
          v-model="name"
        />
      </div>
    </div>
    <button
      id="name"
      type="submit"
      class="info-btn"
      :disabled="!isValidate || isSubmitting"
    >
      Compile
    </button>
  </form>
</template>

<script>
import { computed, ref } from 'vue'
import { useBuilderStore } from '@/stores/BuilderStore'
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue'

export default {
  components: { AppLinkIcon },
  setup() {
    const buildStore = useBuilderStore()

    const name = ref('')
    const isSubmitting = ref(false)

    const views = computed(() => buildStore.getViews)
    const flowers = computed(() => buildStore.getFlowers)
    const compositions = computed(() => buildStore.getCompositions)
    const packagings = computed(() => buildStore.getPackagings)
    const greeneries = computed(() => buildStore.getGreeneries)

    const resultCost = computed(() => buildStore.getResultCost)

    const submitHandler = async () => {
      try {
        isSubmitting.value = true
        await buildStore.submitHandler(name.value)
        name.value = ''
      } catch (e) {
      } finally {
        isSubmitting.value = false
      }
    }

    const isValidate = computed(
      () =>
        name.value.trim() &&
        views.value.length &&
        flowers.value.length &&
        compositions.value.length &&
        packagings.value.length
    )

    const deleteGreenery = () => {
      buildStore.cleanGreenery()
    }

    const deleteFlower = (title) => {
      buildStore.cleanFlower(title)
    }

    return {
      views,
      flowers,
      compositions,
      packagings,
      greeneries,
      resultCost,
      name,
      isValidate,
      submitHandler,
      deleteGreenery,
      deleteFlower,
      isSubmitting
    }
  },
}
</script>

<style></style>