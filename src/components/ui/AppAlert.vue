<template>
  <div class="alert">
    <div class="alert__wrapper">
      <span class="alert-text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style></style>
