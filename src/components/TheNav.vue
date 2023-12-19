<template>
  <div class="menu" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="menu__logo">
        <img class="menu__logo-img" src="@@/img/logo.png" alt="logo" />
      </div>
      <nav class="menu__navbar">
        <ul class="nav">
          <li class="nav__item" v-for="link in links" :key="link">
            <a href="#" :class="['nav__link', { scrolled: isScrolled }]">
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
      </nav>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue'

export default {
  components: { AppLinkIcon },

  setup() {
    const isScrolled = ref(false)
    const icons = [
      {
        href: '#',
        iconClass: 'fa-solid fa-user',
        title: 'log in',
      },
      {
        href: '#',
        iconClass: 'fa-solid fa-address-card',
        title: 'sign up',
      },
    ]

    const links = ['Home', 'Bouquets', 'Builder', 'FAQ']

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 100
    }

    onMounted(() =>
      window.addEventListener('scroll', handleScroll, { passive: true })
    )

    return {
      isScrolled,
      icons,
      links,
    }
  },
}
</script>

<style></style>
