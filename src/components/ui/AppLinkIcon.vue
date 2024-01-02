<template>
  <a
    class="link"
    :target="blank ? '_blank' : ''"
    :href="href"
    data-testId="link-test"
  >
    <font-awesome-icon
      class="link-icon"
      :icon="iconClass"
      :class="{ dark: isDark, disabled: disabled }"
      data-testId="icon-test"
    /></a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    iconClass: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    isDark: Boolean,
    disabled: Boolean,
  },
};
</script>

<style></style>
