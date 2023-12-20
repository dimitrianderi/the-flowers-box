<template>
  <div class="menu" :class="{ active: isScrolled || isOpenBurger }">
    <div class="container">
      <div class="menu__logo">
        <img class="menu__logo-img" src="@@/img/logo.png" alt="logo" />
      </div>
      <nav class="menu__navbar">
        <ul class="nav" :class="{ active: isOpenBurger }">
          <li class="nav__item" v-for="link in links" :key="link">
            <a href="#" :class="['nav__link', { active: isScrolled }]">
              {{ link }}
            </a>
          </li>
        </ul>
        <div class="menu__icons">
          <app-link-icon
            v-for="(icon, idx) in icons"
            :key="idx"
            :href="icon.href"
            :iconClass="icon.iconClass"
            :title="icon.title"
            :isDark="isScrolled"
          ></app-link-icon>
        </div>
        <div
          class="burger"
          @click="toggleBurger"
          :class="{ active: isOpenBurger }"
        >
          <span class="burger-line"></span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue'
import { icons, links } from '@/config/the-nav.js'

export default {
  components: { AppLinkIcon },

  setup() {
    const isScrolled = ref(false)
    const isOpenBurger = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 100
    }

    const toggleBurger = () => {
      isOpenBurger.value = !isOpenBurger.value
    }

    onMounted(() =>
      window.addEventListener('scroll', handleScroll, { passive: true })
    )

    return {
      isOpenBurger,
      isScrolled,
      icons,
      links,
      toggleBurger,
    }
  },
}
</script>

<style></style>
