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
      </div>
      <div
        class="info__block__content"
        v-for="greenery in greeneries"
        :key="greenery.title"
      >
        <span>{{ greenery.title }}, {{ greenery.amount }} pcs.</span
        ><span>{{ greenery.res }}&#36;</span>
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
        v-for="typeItem in types"
        :key="typeItem.title"
      >
        <span>{{ 'The type of bouquets' }}</span>
        <span>{{ typeItem.title }}</span>
      </div>
      <div class="info__advanced__content">
        <span>{{ 'Name' }}</span>
        <input
          class="info__advanced__content-input"
          type="text"
          maxlength="30"
          v-model="name"
        />
      </div>
    </div>
    <button type="submit" class="info-btn" :disabled="!isValidate">
      Compile
    </button>
  </form>
</template>

<script>
import { computed, ref } from 'vue'
import { useBuilderStore } from '@/stores/BuilderStore'

export default {
  setup() {
    const buildStore = useBuilderStore()
    const name = ref('')

    const types = computed(() => buildStore.getTypes)
    const flowers = computed(() => buildStore.getFlowers)
    const compositions = computed(() => buildStore.getCompositions)
    const packagings = computed(() => buildStore.getPackagings)
    const greeneries = computed(() => buildStore.getGreeneries)

    const resultCost = computed(() => buildStore.getResultCost)

    const submitHandler = () => {
      buildStore.submitHandler(name.value)
    }

    const isValidate = computed(
      () =>
        name.value.trim().length &&
        types.value.length &&
        flowers.value.length &&
        compositions.value.length &&
        packagings.value.length
    )

    return {
      types,
      flowers,
      compositions,
      packagings,
      greeneries,
      resultCost,
      name,
      submitHandler,
      isValidate,
    }
  },
}
</script>

<style></style>
