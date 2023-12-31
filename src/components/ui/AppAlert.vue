<template>
  <div class="alert">
    <div class="alert__wrapper">
      <font-awesome-icon
        class="alert-icon"
        icon="fa-regular fa-bell"
      />
      <span class="alert-text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
