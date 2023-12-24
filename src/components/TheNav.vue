<template>
  <div
    class="menu"
    :class="{
      active: isScrolled || $route.path === '/auth' || $route.path === '/reg',
    }"
  >
    <div class="container">
      <div class="menu__logo">
        <img class="menu__logo-img" src="@@/img/logo.png" alt="logo" />
      </div>
      <nav class="menu__navbar">
        <ul class="nav" :class="{ active: isOpenBurger }">
          <li class="nav__item" v-for="link in links" :key="link">
            <router-link :to="link.to" custom v-slot="{ navigate, href }"
              ><a
                href="#"
                @click="navigate"
                :class="[
                  'nav__link',
                  { active: $route.path.split('/')[1] === href.split('/')[1] },
                  { scrolled: isScrolled || $route.path !== '/' },
                ]"
              >
                {{ link.title }}
              </a>
            </router-link>
          </li>
        </ul>
        <div class="menu__icons">
          <template v-if="isAuth === false">
            <router-link
              class="link"
              v-for="(icon, idx) in iconsNotAuth"
              :key="idx"
              :to="icon.href"
            >
              <app-link-icon
                :iconClass="icon.iconClass"
                :title="icon.title"
                :isDark="isScrolled || $route.path !== '/'"
              ></app-link-icon>
            </router-link>
          </template>
          <template v-else>
            <div class="link" @click="logout">
              <app-link-icon
                :iconClass="iconAuth.iconClass"
                :title="iconAuth.title"
                :isDark="isScrolled || $route.path !== '/'"
              ></app-link-icon>
            </div>
          </template>
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
import { computed, onMounted, ref } from 'vue'
import { iconsNotAuth, iconAuth, links } from '@/config/the-nav.js'
import { useAuthStore } from '@/stores/AuthStore.js'
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue'

export default {
  components: { AppLinkIcon },

  setup() {
    const isScrolled = ref(false)
    const isOpenBurger = ref(false)
    const authStore = useAuthStore()

    const isAuth = computed(() => authStore.isAuth)

    const logout = () => {
      authStore.logout()
    }

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 1
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
      iconAuth,
      iconsNotAuth,
      links,
      isAuth,
      toggleBurger,
      logout,
    }
  },
}
</script>

<style></style>
