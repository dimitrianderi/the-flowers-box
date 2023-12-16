<template>
  <div class="menu" :class="{'scrolled': isScrolled}">
    <div class="container">
      <div class="menu__logo">
        <img class="menu__logo-img" src="@@/img/logo.png" alt="logo" />
      </div>
      <nav class="menu__navbar">
        <ul class="nav">
          <li class="nav__item"><a href="#" :class="['nav__link', {'scrolled': isScrolled}]">Link1</a></li>
          <li class="nav__item"><a href="#" :class="['nav__link', {'scrolled': isScrolled}]">Ссылка2</a></li>
          <li class="nav__item"><a href="#" :class="['nav__link', {'scrolled': isScrolled}]">Ссылка3</a></li>
          <li class="nav__item"><a href="#" :class="['nav__link', {'scrolled': isScrolled}]">Ссылка4</a></li>
        </ul>
        <div class="menu__icons">
          <font-awesome-icon
            :class="['menu__icons-icon', {'scrolled': isScrolled}]"
            icon="fa-solid fa-user"
            title="log in"
          />
          <font-awesome-icon
            :class="['menu__icons-icon', {'scrolled': isScrolled}]"
            icon="fa-solid fa-address-card"
            title="sign up"
          />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const isScrolled = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 100
    }

    onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))

    return {
      isScrolled,
    }
  },
}
</script>

<style></style>
