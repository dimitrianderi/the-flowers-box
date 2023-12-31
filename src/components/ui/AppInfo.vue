<template>
  <form
    class="info"
    @submit.prevent="submitHandler()"
  >
    <div class="info__title">
      <span>Your bouquet</span><span>{{ resultCost ? resultCost : '0.00' }} &#36;</span>
    </div>
    <div
      v-if="flowers.length || greeneries.length"
      class="info__block"
    >
      <span>Bouquet ingredients</span>
      <div
        v-for="flower in flowers"
        :key="flower.title"
        class="info__block__content"
      >
        <span>{{ flower.title }}, {{ flower.amount }} pcs.</span><span>{{ flower.res }}&#36;</span>
        <app-link-icon
          class="info__block__content-icon"
          icon-class="fa-solid fa-trash"
          @click="deleteFlower(flower.title)"
        />
      </div>
      <div
        v-for="greenery in greeneries"
        :key="greenery.title"
        class="info__block__content"
      >
        <span>
          {{ greenery.title }}, {{ greenery.amount }} pcs.
        </span>
        <span>
          {{ greenery.res }}&#36;
        </span>

        <app-link-icon
          class="info__block__content-icon"
          icon-class="fa-solid fa-trash"
          @click="deleteGreenery"
        />
      </div>
    </div>
    <div
      v-if="packagings.length"
      class="info__block"
    >
      <span>Bouquet packaging</span>
      <div
        v-for="packaging in packagings"
        :key="packaging.title"
        class="info__block__content"
      >
        <span>{{ packaging.title }}</span><span>{{ packaging.price }}&#36;</span>
      </div>
    </div>
    <div
      v-if="compositions.length"
      class="info__block"
    >
      <span>Bouquet composition</span>
      <div
        v-for="composition in compositions"
        :key="composition.title"
        class="info__block__content"
      >
        <span>{{ composition.title }}</span><span>x{{ composition.price }}</span>
      </div>
    </div>
    <div class="info__advanced">
      <div
        v-for="view in views"
        :key="view.title"
        class="info__advanced__content"
      >
        <span>{{ 'Type' }}</span>
        <span>{{ view.title }}</span>
      </div>
      <div class="info__advanced__content">
        <span>{{ 'Name' }}</span>
        <input
          v-model="name"
          class="info__advanced__content-input"
          type="text"
          maxlength="20"
        >
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
import { computed, ref } from 'vue';
import { useBuilderStore } from '@/stores/BuilderStore';
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue';

export default {
  components: { AppLinkIcon },
  setup() {
    const buildStore = useBuilderStore();

    const name = ref('');
    const isSubmitting = ref(false);

    const views = computed(() => buildStore.getViews);
    const flowers = computed(() => buildStore.getFlowers);
    const compositions = computed(() => buildStore.getCompositions);
    const packagings = computed(() => buildStore.getPackagings);
    const greeneries = computed(() => buildStore.getGreeneries);
    const resultCost = computed(() => buildStore.getResultCost);

    const submitHandler = async () => {
      try {
        isSubmitting.value = true;
        await buildStore.submitHandler(name.value);
        name.value = '';
      } catch (e) { /* empty */ } finally {
        isSubmitting.value = false;
      }
    };

    const isValidate = computed(
      () => name.value.trim()
        && views.value.length
        && flowers.value.length
        && compositions.value.length
        && packagings.value.length,
    );

    const deleteGreenery = () => {
      buildStore.cleanGreenery();
    };

    const deleteFlower = (title) => {
      buildStore.cleanFlower(title);
    };

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
      isSubmitting,
    };
  },
};
</script>

<style></style>
