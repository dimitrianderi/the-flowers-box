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
        >
        </iframe>
      </div>
      <div class="footer__wrapper">
        <div class="footer__info">
          <span class="footer__info-title">STORE ADDRESS</span>
          <div class="footer__info__block">
            <span
              class="footer__info__block-text"
              v-for="address in fullAddress"
              :key="address"
              >{{ address }}</span
            >
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
                :iconClass="icon.iconClass"
                :isDark="true"
              ></app-link-icon>
            </div>
            <span
              class="footer__info__block-text"
              v-for="contact in contacts"
              :key="contact.title"
            >
              <a class="footer__info__block-link" :href="contact.href">
                {{ contact.title }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <span class="footer__copyright-title"
        >Copyright © 2023 The Flowers Box</span
      >
    </div>
  </footer>
</template>

<script>
import AppLinkIcon from '@/components/ui/AppLinkIcon.vue'
import { mapUrl } from '@/config/the-footer.js'
import { fullAddress, contacts, icons } from '@/config/the-footer.js'

export default {
  components: { AppLinkIcon },

  setup() {
    return { icons, fullAddress, contacts, mapUrl }
  },
}
</script>

<style></style>
