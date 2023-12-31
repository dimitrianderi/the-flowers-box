<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__map">
        <iframe
          class="footer__map-img"
          :src="mapUrl"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <div class="footer__wrapper">
        <div class="footer__info">
          <span class="footer__info-title">STORE ADDRESS</span>
          <div class="footer__info__block">
            <span
              v-for="address in fullAddress"
              :key="address"
              class="footer__info__block-text"
            >{{ address }}</span>
          </div>
        </div>
        <div class="footer__info">
          <span class="footer__info-title">CONTACTS</span>
          <div class="footer__info__block">
            <div class="footer__info__block__icons">
              <app-link-icon
                v-for="(icon, idx) in icons"
                :key="idx"
                :href="icon.href"
                :icon-class="icon.iconClass"
                :blank="true"
                :is-dark="true"
              />
            </div>
            <span
              v-for="contact in contacts"
              :key="contact.title"
              class="footer__info__block-text"
            >
              <a
                class="footer__info__block-link"
                :href="contact.href"
              >
                {{ contact.title }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <span class="footer__copyright-title">Copyright © 2023 The Flowers Box</span>
    </div>
  </footer>
</template>

<script>
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue';
import {
  mapUrl, fullAddress, contacts, icons,
} from '@/config/the-footer.js';

export default {
  components: { AppLinkIcon },

  setup() {
    return {
      icons, fullAddress, contacts, mapUrl,
    };
  },
};
</script>

<style></style>
