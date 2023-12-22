<template>
  <div class="accordion">
    <input
      type="checkbox"
      class="accordion__checkbox"
      :id="id"
    />
    <label class="accordion__label" :for="id">
      <span class="accordion__label-idx" v-if="idx !== null">{{ idx }}</span>
      <span class="accordion__label-title">{{ title }}</span>
    </label>
    <div class="accordion__content">
      <slot>Accordion</slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    idx: {
      type: String,
      default: null,
    },
    id: String,
    title: String,
  },

  setup(props) {
    const idx = ref(null)

    if (props.idx !== null) {
      idx.value = +props.idx + 1
      idx.value = idx.value > 9 ? idx.value : '0' + idx.value
    }

    return { idx }
  },
}
</script>

<style></style>
