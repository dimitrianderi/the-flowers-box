<template>
  <form
    class="form"
    @submit.prevent="$emit('onSubmit')"
  >
    <h2 class="form__title">
      {{ title }}
    </h2>
    <slot />
    <button
      type="submit"
      class="form__btn"
      data-testId="btn"
      :disabled="isSubmitting"
      @click="clearErrAuth"
    >
      {{ btnText }}
    </button>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
    isSubmitting: Boolean,
  },
  emits: ['onSubmit'],
};
</script>

<style></style>
