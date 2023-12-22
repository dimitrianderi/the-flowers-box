<template>
  <section class="accordion">
    <input
      type="checkbox"
      class="accordion__checkbox"
      id="accordion__checkbox"
    />
    <label class="accordion__label" for="accordion__checkbox">
      <span class="accordion__label-idx" v-if="idx !== null">{{ idx }}</span>
      <span class="accordion__label-title">{{ title }}</span>
    </label>
    <div class="accordion__content">
      <slot>Accordion</slot>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    idx: {
      type: String,
      default: null,
    },
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
