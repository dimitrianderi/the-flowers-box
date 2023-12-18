<template>
  <a class="link" target="_blank" :href="href">
    <font-awesome-icon
      class="link-icon"
      :icon="iconClass"
      :title="title"
      :class="{ dark: isDark }"
  /></a>
</template>

<script>
export default {
  props: {
    href: String,
    iconClass: String,
    title: String,
    isDark: Boolean,
  },
}
</script>

<style></style>
