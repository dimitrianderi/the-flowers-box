import { A as B } from './AppAccordion-DottYMJe.js'; import {
  A as D, a as P, f as q, g as V, p as F, c as S, t as G,
} from './AppInfo-T8QYyHhQ.js'; import {
  _ as b, b as h, c as o, d, e as s, i as n, t as N, P as R, Q as I, r as T, q as _, g as p, h as E, w as u, F as f, f as g,
} from './index-OiT2zUcm.js'; import './getImageUrl-GZGfcVc1.js';

const L = { props: { text: String } }; const Q = { class: 'alert' }; const j = { class: 'alert__wrapper' }; const z = { class: 'alert-text' }; function H(i, A, m, t, v, w) { const a = h('font-awesome-icon'); return o(), d('div', Q, [s('div', j, [n(a, { class: 'alert-icon', icon: 'fa-regular fa-bell' }), s('span', z, N(m.text), 1)])]); } const J = b(L, [['render', H]]); const K = {
  components: {
    AppAccordion: B, AppCollection: D, AppAlert: J, AppInfo: P,
  },
  setup() {
    const i = R(); const A = I(); const m = T(!1); const t = (r) => { i.addFlower({ ...r }); }; const v = (r) => { i.addGreenery({ ...r }); }; const w = (r) => { i.addPackaging({ ...r }); }; const a = (r) => { i.addComposition({ ...r }); }; const c = (r) => { i.addView({ ...r }); }; const l = _(() => A.getResponse); const x = _(() => i.getFlowers); const e = _(() => i.getGreeneries); const k = _(() => i.getPackagings); const y = _(() => i.getCompositions); const C = _(() => i.getViews); return {
      flowers: q, greeneries: V, packagings: F, compositions: S, types: G, addFlower: t, addGreenery: v, addPackaging: w, addComposition: a, addView: c, views: C, flowersArr: x, compositionsArr: y, packagingsArr: k, greeneriesArr: e, isResponse: m, response: l,
    };
  },
}; const M = { class: 'container builder' }; const O = { class: 'response' }; const U = s('h2', { class: 'builder__title' }, 'Builder', -1); const W = s('div', { class: 'builder__description' }, ' follow the steps and create own bouquet! ', -1); const X = { class: 'builder__wrapper' }; const Y = { class: 'builder__stages' }; const Z = { class: 'builder__stages__content' }; const $ = { class: 'builder__stages__content' }; const ee = { class: 'builder__stages__content' }; const te = { class: 'builder__stages__content' }; const oe = { class: 'builder__stages__content' }; const se = { class: 'builder__info' }; function ie(i, A, m, t, v, w) {
  const a = h('app-alert'); const c = h('app-collection'); const l = h('app-accordion'); const x = h('app-info'); return o(), d('section', M, [s('div', O, [t.response.length ? (o(), p(a, { key: 0, text: t.response }, null, 8, ['text'])) : E('', !0)]), U, W, s('div', X, [s('div', Y, [n(l, { id: 'flowers', idx: 0, title: 'Choose one or more flowers' }, {
    default: u(() => [n(a, { text: 'Choose the quantity (1-100) and add to cart' }), s('div', Z, [(o(!0), d(f, null, g(t.flowers, (e) => (o(), p(c, {
      key: e, collection: 'flowers', textBtn: 'add', title: e.title, price: e.price, isInput: !0, isPrice: !0, active: t.flowersArr, url: e.title, onAddData: t.addFlower,
    }, null, 8, ['title', 'price', 'active', 'url', 'onAddData']))), 128))])]),
    _: 1,
  }), n(l, { id: 'greeneries', idx: 1, title: 'Choose the greeneries' }, {
    default: u(() => [n(a, { text: 'The quantity of greenery will be equal to the quantity of flowers' }), s('div', $, [(o(!0), d(f, null, g(t.greeneries, (e) => (o(), p(c, {
      key: e, collection: 'greeneries', textBtn: 'select', title: e.title, price: e.price, isPrice: !0, active: t.greeneriesArr, url: e.title, onAddData: t.addGreenery,
    }, null, 8, ['title', 'price', 'active', 'url', 'onAddData']))), 128))])]),
    _: 1,
  }), n(l, { id: 'packagings', idx: 2, title: 'Choose the packagings' }, {
    default: u(() => [s('div', ee, [(o(!0), d(f, null, g(t.packagings, (e) => (o(), p(c, {
      key: e, collection: 'packagings', textBtn: 'select', title: e.title, price: e.price, isPrice: !0, active: t.packagingsArr, url: e.title, onAddData: t.addPackaging,
    }, null, 8, ['title', 'price', 'active', 'url', 'onAddData']))), 128))])]),
    _: 1,
  }), n(l, { id: 'compositions', idx: 3, title: 'Choose the compositions' }, {
    default: u(() => [n(a, { text: 'The final price will be multiplied by a coefficient' }), s('div', te, [(o(!0), d(f, null, g(t.compositions, (e) => (o(), p(c, {
      key: e, collection: 'compositions', textBtn: 'select', title: e.title, price: e.price, isPrice: !1, active: t.compositionsArr, url: e.title, onAddData: t.addComposition,
    }, null, 8, ['title', 'price', 'active', 'url', 'onAddData']))), 128))])]),
    _: 1,
  }), n(l, { id: 'views', idx: 4, title: 'Choose the type of bouquet' }, {
    default: u(() => [s('div', oe, [(o(!0), d(f, null, g(t.types, (e) => (o(), p(c, {
      key: e, collection: 'types', textBtn: 'select', title: e.title, isPrice: !1, active: t.views, url: e.title, onAddData: t.addView,
    }, null, 8, ['title', 'active', 'url', 'onAddData']))), 128))])]),
    _: 1,
  })]), s('div', se, [n(x)])])]);
} const le = b(K, [['render', ie]]); export { le as default };
