<template>
  <form class="form" @submit.prevent="$emit('onSubmit')">
    <h2 class="form__title">{{ title }}</h2>
    <slot></slot>
    <button
      type="submit"
      class="form__btn"
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
    title: String,
    btnText: String,
    isSubmitting: Boolean
  },
}
</script>

<style></style>
