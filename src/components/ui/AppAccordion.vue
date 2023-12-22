<template>
  <section class="accordion">
    <input
      type="checkbox"
      class="accordion__checkbox"
      id="accordion__checkbox"
    />
    <label class="accordion__label" for="accordion__checkbox">
      <span class="accordion__label-idx">{{ idx >= 9 ? idx : '0' + idx }}</span>
      <span class="accordion__label-title">{{ title }}</span>
    </label>
    <div class="accordion__content">
      <slot>Accordion</slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    idx: String,
    title: String
  }
}
</script>

<style></style>
