<template>
  <div
    class="menu"
    :class="{
      active: isScrolled
        || $route.path === '/auth'
        || $route.path === '/reg'
        || $route.meta.isError,
    }"
  >
    <div class="container">
      <div class="menu__logo">
        <img
          class="menu__logo-img"
          src="@@/img/logo.png"
          alt="logo"
        >
      </div>
      <nav class="menu__navbar">
        <ul
          class="nav"
          :class="{ active: isOpenBurger }"
        >
          <li
            v-for="link in links"
            :key="link"
            class="nav__item"
            @click="isOpenBurger = false"
          >
            <router-link
              v-slot="{ navigate, href }"
              :to="link.to"
              custom
            >
              <a
                href="#"
                :class="[
                  'nav__link',
                  { active: $route.path.split('/')[1] === href.split('/')[1] },
                  { scrolled: isScrolled || $route.path !== '/' },
                ]"
                @click="navigate"
              >
                {{ link.title }}
              </a>
            </router-link>
          </li>
        </ul>
        <div class="menu__icons">
          <template v-if="isAuth === false">
            <router-link
              v-for="(icon, idx) in iconsNotAuth"
              :key="idx"
              class="link"
              :to="icon.href"
            >
              <app-link-icon
                :icon-class="icon.iconClass"
                :title="icon.title"
                :is-dark="isScrolled || $route.path !== '/'"
              />
            </router-link>
          </template>
          <template v-else>
            <div
              class="link"
              @click.prevent="logout"
            >
              <app-link-icon
                :icon-class="iconAuth.iconClass"
                :title="iconAuth.title"
                :is-dark="isScrolled || $route.path !== '/'"
              />
            </div>
          </template>
        </div>
        <div
          class="burger"
          :class="{ active: isOpenBurger }"
          @click="toggleBurger"
        >
          <span class="burger-line" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { iconsNotAuth, iconAuth, links } from '@/config/the-nav.js';
import useAuthStore from '@/stores/AuthStore.js';
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue';

export default {
  components: { AppLinkIcon },

  setup() {
    const isScrolled = ref(false);
    const isOpenBurger = ref(false);
    const authStore = useAuthStore();

    const isAuth = computed(() => authStore.isAuth);

    const logout = () => {
      authStore.logout();
    };

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 1;
    };

    const toggleBurger = () => {
      isOpenBurger.value = !isOpenBurger.value;
    };

    onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));

    return {
      isOpenBurger,
      isScrolled,
      iconAuth,
      iconsNotAuth,
      links,
      isAuth,
      toggleBurger,
      logout,
    };
  },
};
</script>

<style></style>
