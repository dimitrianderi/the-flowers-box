<template>
  <the-nav />
  <router-view />
  <the-footer />
</template>

<script>
import TheNav from '@/components/TheNav.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: { TheNav, TheFooter },
};
</script>

<style></style>
