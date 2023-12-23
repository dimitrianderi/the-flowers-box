<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__wrapper container">
      <li class="breadcrumb__item">
        <router-link class="breadcrumb__item-link" to="/">Home</router-link>
      </li>
      <li class="breadcrumb__item" v-for="route in routes" :key="route.path">
        <router-link class="breadcrumb__item-link" :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const routes = ref([])

    const getRoutes = () => {
      routes.value = route.matched
    }

    watchEffect(() => {
      getRoutes()
    })

    onMounted(() => {
      getRoutes()
    })

    return {
      routes,
    }
  },
}
</script>

<style></style>
