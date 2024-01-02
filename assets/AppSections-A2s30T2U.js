import {
  _, V as d, c as n, d as c, e as t, t as e, F as l, f as g, v as m,
} from './index-OiT2zUcm.js'; import { g as u } from './getImageUrl-GZGfcVc1.js';

const h = {
  components: { AppBreadCrumbs: d },
  props: {
    title: String, description: String, btn: String, name: String, cards: Object, getData: String,
  },
  emits: ['getData'],
  setup() { return { getImageUrl: u }; },
}; const p = { class: 'sections' }; const f = { class: 'sections__container container' }; const S = { class: 'sections__title' }; const b = { class: 'sections__description' }; const v = { class: 'sections__cards' }; const k = { class: 'sections__card-title' }; const D = { class: 'sections__card-img' }; const B = ['src']; const C = ['onClick']; function A(i, U, s, r, y, F) { return n(), c('section', p, [t('div', f, [t('h2', S, e(s.title), 1), t('span', b, e(s.description), 1), t('div', v, [(n(!0), c(l, null, g(s.cards, (a, o) => (n(), c('div', { class: 'sections__card', key: o }, [t('div', k, e(a.title.toUpperCase()), 1), t('div', D, [t('img', { class: 'img', src: r.getImageUrl(o + 1, s.name), alt: 'bouquet' }, null, 8, B)]), t('button', { class: 'sections__card-btn', onClick: (I) => i.$emit('getData', a[s.getData]) }, e(s.btn), 9, C)]))), 128))]), m(i.$slots, 'default')])]); } const q = _(h, [['render', A]]); export { q as A };
