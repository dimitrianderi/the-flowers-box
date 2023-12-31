<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__wrapper container">
      <li class="breadcrumb__item">
        <router-link
          class="breadcrumb__item-link"
          to="/"
        >
          Home
        </router-link>
      </li>
      <li
        v-for="route in routes"
        :key="route.path"
        class="breadcrumb__item"
      >
        <router-link
          class="breadcrumb__item-link"
          :to="route.path"
        >
          {{ route.name }}
        </router-link>
      </li>
    </ul>
    <span
      v-if="user"
      class="breadcrumb__user"
    >Hi, {{ user }}!</span>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore.js';

export default {
  setup() {
    const route = useRoute();
    const authStore = useAuthStore();
    const routes = ref([]);

    const user = authStore.getUser ? authStore.getUser.split('@')[0] : '';

    const getRoutes = () => {
      routes.value = route.matched;
    };

    watchEffect(() => {
      getRoutes();
    });

    onMounted(() => {
      getRoutes();
    });

    return {
      routes,
      user,
    };
  },
};
</script>

<style></style>
