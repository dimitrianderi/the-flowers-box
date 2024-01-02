import { A as p } from './AppSections-A2s30T2U.js'; import {
  _ as m, U as f, u as l, b as s, c as a, d, g as _, h as q, i as g, F as h,
} from './index-OiT2zUcm.js'; import './getImageUrl-GZGfcVc1.js';

const F = [{ title: 'Creating bouquets', href: 'creating-bouquets' }, { title: 'Delivery', href: 'delivery' }, { title: 'About us', href: 'about' }]; const b = { components: { AppSections: p }, setup() { const o = f(); const t = l(); return { cards: F, route: o, goFaq: (e) => { const r = e; t.push(`/faq/${r}`); } }; }, name: 'FAQ' }; function v(o, t, n, e, r, A) {
  const c = s('app-sections'); const i = s('router-view'); return a(), d(h, null, [e.route.path === '/faq' ? (a(), _(c, {
    key: 0, title: 'FAQ', description: 'choose a topic of interest', btn: 'more', name: 'faq', cards: e.cards, getData: 'href', onGetData: t[0] || (t[0] = (u) => e.goFaq(u)),
  }, null, 8, ['cards'])) : q('', !0), g(i)], 64);
} const B = m(b, [['render', v]]); export { B as default };
