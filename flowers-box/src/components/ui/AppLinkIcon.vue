<template>
  <a class="link" target="_blank" :href="href">
    <font-awesome-icon
      class="link-icon"
      :icon="iconClass"
      :class="{ dark: isDark, disabled: disabled }"
  /></a>
</template>

<script>
export default {
  props: {
    href: String,
    iconClass: String,
    title: String,
    isDark: Boolean,
    disabled: Boolean
  },
}
</script>

<style></style>
