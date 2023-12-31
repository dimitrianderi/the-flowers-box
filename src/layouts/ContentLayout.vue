<template>
  <the-nav />
  <app-bread-crumbs />
  <router-view />
  <the-footer />
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheNav from '@/components/TheNav.vue';
import AppBreadCrumbs from '@/components/ui/AppBreadCrumbs.vue';

export default {
  components: { AppBreadCrumbs, TheNav, TheFooter },
};
</script>

<style></style>
