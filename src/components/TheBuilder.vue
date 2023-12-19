<template>
  <div class="builder">
    <div class="builder__header"></div>
    <div class="container builder__container">
      <h2 class="builder-title">{{ title }}</h2>
      <span class="builder-description">{{ description }}</span>
      <article class="builder-text">{{ text }}</article>
      <button class="builder-btn">{{ btn }}</button>
    </div>
  </div>
</template>

<script>
import { builderData as builder } from '@/config/the-builder.js'

export default {
  setup() {
    return { ...builder }
  },
}
</script>

<style></style>
