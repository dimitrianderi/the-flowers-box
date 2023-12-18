<template>
  <div class="menu" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="menu__logo">
        <img class="menu__logo-img" src="@@/img/logo.png" alt="logo" />
      </div>
      <nav class="menu__navbar">
        <ul class="nav">
          <li class="nav__item">
            <a href="#" :class="['nav__link', { scrolled: isScrolled }]"
              >Link1</a
            >
          </li>
          <li class="nav__item">
            <a href="#" :class="['nav__link', { scrolled: isScrolled }]"
              >Ссылка2</a
            >
          </li>
          <li class="nav__item">
            <a href="#" :class="['nav__link', { scrolled: isScrolled }]"
              >Ссылка3</a
            >
          </li>
          <li class="nav__item">
            <a href="#" :class="['nav__link', { scrolled: isScrolled }]"
              >Ссылка4</a
            >
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

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 100
    }

    onMounted(() =>
      window.addEventListener('scroll', handleScroll, { passive: true })
    )

    return {
      isScrolled,
      icons,
    }
  },
}
</script>

<style></style>
