<template>
  <div class="info">
    <div class="info__title">
      <span>{{ bouquet.name }}</span>
      <span>{{ bouquet.price }} &#36;</span>
    </div>

    <div class="info__block">
      <span>Bouquet ingredients</span>
      <div
        v-for="flower in bouquet.flowers"
        :key="flower.title"
        class="info__block__content"
      >
        <span>{{ flower.title }}, {{ flower.amount }} pcs.</span>
        <strong>{{ flower.res }}&#36;</strong>
      </div>

      <div
        v-for="greenery in bouquet.greenery"
        :key="greenery.title"
        class="info__block__content"
      >
        <span>{{ greenery.title }}, {{ greenery.amount }} pcs.</span>
        <strong>{{ greenery.res }}&#36;</strong>
      </div>
    </div>

    <div class="info__block">
      <span>Bouquet packaging</span>
      <div
        v-for="packaging in bouquet.packaging"
        :key="packaging.title"
        class="info__block__content"
      >
        <span>{{ packaging.title }}</span>
        <strong>{{ packaging.price }}&#36;</strong>
      </div>
    </div>

    <div class="info__block">
      <span>Bouquet composition</span>
      <div
        v-for="composition in bouquet.composition"
        :key="composition.title"
        class="info__block__content"
      >
        <span>{{ composition.title }}</span>
        <strong>x{{ composition.price }}</strong>
      </div>
    </div>

    <div class="info__block">
      <div
        v-for="view in bouquet.view"
        :key="view.title"
        class="info__advanced__content"
      >
        <span>{{ 'Type' }}</span>
        <strong>{{ view.title }}</strong>
      </div>
    </div>

    <div class="info__advanced resetBottom">
      <div class="info__advanced__content">
        <span>{{ 'Author' }}</span>
        <strong>{{ bouquet.author }}</strong>
      </div>
    </div>

    <button
      v-if="user === 'admin' || user === bouquet.author"
      class="info-btn"
      :disabled="isSubmitting"
      @click="$emit('delBouquet', bouquet.id)"
    >
      delete
    </button>
  </div>
</template>

<script>
import { computed } from 'vue';
import useAuthStore from '@/stores/AuthStore';

export default {
  props: {
    bouquet: {
      type: Object,
      default: () => {},
    },
    isSubmitting: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['delBouquet'],

  setup() {
    const authStore = useAuthStore();
    const user = computed(() => authStore.getUser);

    return {
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
  min-width: 400px;
  border-radius: 0;

  &::-webkit-scrollbar {
      width: 10px;
      margin-right: -10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: pink;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #fbb2be;
  }

  &__title {
    display: flex;
    gap: 40px;
  }

  &-btn {
    margin-top: 20px;
    background-color: rgba(red, 0.2);

    &:hover {
      background-color: rgba(red, 0.4);
    }
  }
}

.resetBottom {
  padding-bottom: 0;
}
</style>
