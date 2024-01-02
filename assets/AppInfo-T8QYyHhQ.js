import {
  _ as y, r as g, q as d, s as w, c as o, d as c, v as F, e as i, j as b, l as A, t as s, h as v, R as C, S as x, K as I, P as V, b as q, F as m, f as p, i as k, x as G,
} from './index-OiT2zUcm.js'; import { g as N } from './getImageUrl-GZGfcVc1.js';

const rt = [{ title: 'Carnation', price: 0.51 }, { title: 'Hydrangea', price: 0.72 }, { title: 'Lily', price: 0.23 }, { title: 'Gerbera', price: 0.12 }, { title: 'Lisianthus', price: 0.13 }, { title: 'Alstroemeria', price: 0.17 }, { title: 'Tulip', price: 0.14 }, { title: 'Iris', price: 0.48 }, { title: 'Peony', price: 0.29 }, { title: 'Red rose', price: 0.26 }, { title: 'White rose', price: 0.22 }, { title: 'Yellow rose', price: 0.36 }, { title: 'Cornflowers', price: 0.19 }, { title: 'Chrysanthemums', price: 0.12 }, { title: 'Orchid', price: 0.11 }]; const dt = [{ title: 'Eucalyptus', price: 0.02 }, { title: 'Bergamot', price: 0.03 }, { title: 'Ruscus', price: 0.01 }]; const _t = [{ title: 'Wedding' }, { title: 'Birthday' }, { title: 'Festive' }]; const ut = [{ title: 'Atlas', price: 0.1 }, { title: 'Mesh', price: 0.13 }, { title: 'Film', price: 0.07 }, { title: 'Kraft', price: 0.09 }, { title: 'Felt', price: 0.11 }]; const mt = [{ title: 'Classic', price: 1 }, { title: 'Cascade', price: 1.2 }, { title: 'Oval', price: 1.3 }, { title: 'Pyramid', price: 1.5 }, { title: 'Spiral', price: 1.7 }]; const pt = [{ title: 'Design' }, { title: 'Custom' }, { title: 'My' }]; const P = {
  props: {
    collection: String, title: String, textBtn: String, price: Number, isInput: Boolean, isPrice: Boolean, active: Object, url: String,
  },
  emits: ['addData'],
  setup(l, a) {
    const n = g(null); const t = g(l.price); const _ = d(() => (+n.value * +t.value).toFixed(2)); const u = d(() => l.active && l.active.find((e) => e.title === l.title)); const r = () => {
      a.emit('addData', {
        title: l.title, price: t.value, amount: n.value, res: _.value,
      }), n.value = '';
    }; return w(n, (e) => { n.value = e > 100 ? 100 : n.value, n.value = e < 1 && e !== '' ? 1 : n.value; }), {
      amount: n, price: t, res: _, handlerClick: r, isActive: u, getImageUrl: N,
    };
  },
}; const D = { class: 'collection' }; const L = ['src']; const H = { class: 'collection-title' }; const M = { key: 0, class: 'collection-price' }; const R = { key: 0, class: 'collection__controller' }; const T = ['for']; const U = ['id']; const O = ['disabled']; function j(l, a, n, t, _, u) {
  return o(), c('div', D, [F(l.$slots, 'default'), i('div', { class: b({ 'collection-img': !0, big: n.collection === 'bouquets' }) }, [i('img', { src: t.getImageUrl(n.url.toLowerCase(), n.collection) }, null, 8, L)], 2), i('div', H, [A(`${s(n.title)} `, 1), t.price ? (o(), c('span', M, ` (${s(t.amount ? t.res : t.price)}${s(n.isPrice ? '$' : '')}) `, 1)) : v('', !0)]), n.isInput ? (o(), c('div', R, [i('label', { class: 'collection__controller-text', for: n.title }, 'amount:', 8, T), C(i('input', {
    type: 'number', class: 'collection__controller-input', id: n.title, max: '100', step: '1', min: '1', 'onUpdate:modelValue': a[0] || (a[0] = (r) => t.amount = r),
  }, null, 8, U), [[x, t.amount]])])) : v('', !0), i('button', { class: b(['collection-btn', { active: t.isActive }]), onClick: a[1] || (a[1] = (r) => t.handlerClick()), disabled: n.isInput && !t.amount }, s(t.isActive ? `${n.textBtn}ed` : n.textBtn), 11, O)]);
} const vt = y(P, [['render', j]]); const E = {
  components: { AppLinkIcon: I },
  setup() {
    const l = V(); const a = g(''); const n = g(!1); const t = d(() => l.getViews); const _ = d(() => l.getFlowers); const u = d(() => l.getCompositions); const r = d(() => l.getPackagings); const e = d(() => l.getGreeneries); const f = d(() => l.getResultCost); const B = async () => { try { n.value = !0, await l.submitHandler(a.value), a.value = ''; } catch {} finally { n.value = !1; } }; const S = d(() => a.value.trim() && t.value.length && _.value.length && u.value.length && r.value.length); return {
      views: t, flowers: _, compositions: u, packagings: r, greeneries: e, resultCost: f, name: a, isValidate: S, submitHandler: B, deleteGreenery: () => { l.cleanGreenery(); }, deleteFlower: (h) => { l.cleanFlower(h); }, isSubmitting: n,
    };
  },
}; const K = { class: 'info__title' }; const W = i('span', null, 'Your bouquet', -1); const Y = { key: 0, class: 'info__block' }; const z = i('span', null, 'Bouquet ingredients', -1); const J = { key: 1, class: 'info__block' }; const Q = i('span', null, 'Bouquet packaging', -1); const X = { key: 2, class: 'info__block' }; const Z = i('span', null, 'Bouquet composition', -1); const $ = { class: 'info__advanced' }; const tt = i('span', null, s('Type'), -1); const et = { class: 'info__advanced__content' }; const it = i('span', null, s('Name'), -1); const nt = ['disabled']; function lt(l, a, n, t, _, u) {
  const r = q('app-link-icon'); return o(), c('form', { class: 'info', onSubmit: a[1] || (a[1] = G((e) => t.submitHandler(), ['prevent'])) }, [i('div', K, [W, i('span', null, `${s(t.resultCost ? t.resultCost : '0.00')} $`, 1)]), t.flowers.length || t.greeneries.length ? (o(), c('div', Y, [z, (o(!0), c(m, null, p(t.flowers, (e) => (o(), c('div', { class: 'info__block__content', key: e.title }, [i('span', null, `${s(e.title)}, ${s(e.amount)} pcs.`, 1), i('span', null, `${s(e.res)}$`, 1), k(r, { class: 'info__block__content-icon', iconClass: 'fa-solid fa-trash', onClick: (f) => t.deleteFlower(e.title) }, null, 8, ['onClick'])]))), 128)), (o(!0), c(m, null, p(t.greeneries, (e) => (o(), c('div', { class: 'info__block__content', key: e.title }, [i('span', null, `${s(e.title)}, ${s(e.amount)} pcs.`, 1), i('span', null, `${s(e.res)}$`, 1), k(r, { class: 'info__block__content-icon', iconClass: 'fa-solid fa-trash', onClick: t.deleteGreenery }, null, 8, ['onClick'])]))), 128))])) : v('', !0), t.packagings.length ? (o(), c('div', J, [Q, (o(!0), c(m, null, p(t.packagings, (e) => (o(), c('div', { class: 'info__block__content', key: e.title }, [i('span', null, s(e.title), 1), i('span', null, `${s(e.price)}$`, 1)]))), 128))])) : v('', !0), t.compositions.length ? (o(), c('div', X, [Z, (o(!0), c(m, null, p(t.compositions, (e) => (o(), c('div', { class: 'info__block__content', key: e.title }, [i('span', null, s(e.title), 1), i('span', null, `x${s(e.price)}`, 1)]))), 128))])) : v('', !0), i('div', $, [(o(!0), c(m, null, p(t.views, (e) => (o(), c('div', { class: 'info__advanced__content', key: e.title }, [tt, i('span', null, s(e.title), 1)]))), 128)), i('div', et, [it, C(i('input', {
    class: 'info__advanced__content-input', type: 'text', maxlength: '20', 'onUpdate:modelValue': a[0] || (a[0] = (e) => t.name = e),
  }, null, 512), [[x, t.name]])])]), i('button', {
    id: 'name', type: 'submit', class: 'info-btn', disabled: !t.isValidate || t.isSubmitting,
  }, ' Compile ', 8, nt)], 32);
} const gt = y(E, [['render', lt]]); export {
  vt as A, gt as a, pt as b, mt as c, rt as f, dt as g, ut as p, _t as t,
};
