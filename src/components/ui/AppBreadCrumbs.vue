<template>
  <ul class="breadcrumb">
    <li class="breadcrumb__item">
      <router-link class="breadcrumb__item-link" to="/">Home</router-link>
    </li>
    <li class="breadcrumb__item" v-for="route in routes" :key="route.path">
      <router-link class="breadcrumb__item-link" :to="route.path">
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const routes = ref([])

    const getRoutes = () => {
      routes.value = route.matched
    }

    watch(() => {
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
