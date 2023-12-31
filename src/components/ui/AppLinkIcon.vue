<template>
  <a
    class="link"
    :target="blank ? '_blank' : ''"
    :href="href"
  >
    <font-awesome-icon
      class="link-icon"
      :icon="iconClass"
      :class="{ dark: isDark, disabled: disabled }"
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
