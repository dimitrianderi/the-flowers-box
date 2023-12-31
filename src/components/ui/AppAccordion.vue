<template>
  <div class="accordion">
    <input
      :id="id"
      type="checkbox"
      class="accordion__checkbox"
    >
    <label
      class="accordion__label"
      :for="id"
    >
      <span
        v-if="idx !== null"
        class="accordion__label-idx"
      >{{ index }}</span>
      <span class="accordion__label-title">{{ title }}</span>
    </label>
    <div class="accordion__content">
      <div class="accordion__content-contain">
        <slot>Accordion</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    idx: {
      type: Number,
      default: null,
    },
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const index = ref(null);

    if (props.idx !== null) {
      index.value = (props.idx + 1).toString().padStart(2, '0');
    }

    return { index };
  },
};
</script>

<style></style>
