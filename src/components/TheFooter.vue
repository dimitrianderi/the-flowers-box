<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__map">
        <iframe
          class="footer__map-img"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.853412987903!2d35.85492943261694!3d31.964873249444064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca109bcb863c7%3A0x2186ad09ca835bfd!2sFlowers%20Box!5e0!3m2!1sru!2s!4v1702470526546!5m2!1sru!2s"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="footer__info">
        <div class="info">
          <span class="info-title">STORE ADDRESS</span>
          <div class="info__block">
            <span
              class="info__block-text"
              v-for="address in fullAddress"
              :key="address"
              >{{ address }}</span
            >
          </div>
        </div>
        <div class="info">
          <span class="info-title">CONTACTS</span>
          <div class="info__block">
            <div class="info__block__icons">
              <app-link-icon
                v-for="(icon, idx) in icons"
                :key="idx"
                :href="icon.href"
                :iconClass="icon.iconClass"
                :isDark="true"
              ></app-link-icon>
            </div>
            <span
              class="info__block-text"
              v-for="contact in contacts"
              :key="contact.title"
            >
              <a class="info__block-link" :href="contact.href">
              {{
                contact.title
              }}
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
import AppLinkIcon from './ui/AppLinkIcon.vue'
export default {
  components: { AppLinkIcon },
  setup() {
    const fullAddress = ['Jordan', 'Amman, 11942', 'Al-Mwadah St, 7th Cir.']
    const contacts = [
      { title: '+962 7 9663 0848', href: 'tel:+962796630848' },
      {
        title: 'flowersbox7@hotmail.com',
        href: 'mailto:flowersbox7@hotmail.com',
      },
    ]
    const icons = [
      {
        href: 'https://www.instagram.com/explore/tags/flowers_box/',
        iconClass: 'fa-brands fa-instagram',
      },
      {
        href: 'https://twitter.com/ammanflowers/',
        iconClass: 'fa-brands fa-x-twitter',
      },
      {
        href: 'https://www.facebook.com/flowersboxamman/',
        iconClass: 'fa-brands fa-facebook',
      },
    ]

    return { icons, fullAddress, contacts }
  },
}
</script>

<style></style>
