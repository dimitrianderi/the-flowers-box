import {
  u as P, a as d, c, A as q, b as C,
} from './vee-validate.esm-cZCOJPlo.js'; import {
  u as R, p as U, r as f, q as l, s as E, _ as B, b as V, c as F, d as k, e as O, i as n, w as I,
} from './index-OiT2zUcm.js';

function T() {
  const { handleSubmit: e, isSubmitting: r, submitCount: u } = P(); const v = R(); const i = U(); const m = 6; const o = 12; const s = f(!1); const a = f(!1); const h = f(!1); const p = l(() => i.getErrAuth); const { value: b, errorMessage: w } = d('email', c().trim().email('the email address is entered incorrectly').required('fill in this field')); const { value: g, errorMessage: A } = d('password', c().trim().required('fill in this field').min(m, `the password must be at least ${m} characters long`)); const { value: N, errorMessage: _ } = d('name', c().trim().required('fill in this field').max(o, `the name must be no more than ${o} characters`)); const $ = e(async (t) => { try { await i.reg(t), v.push('/'); } catch {} }); return E(u, (t) => { t > 0 && (s.value = !0, a.value = !0, h.value = !0); }), E([b, g], ([t, S], [y, M]) => { u.value = 0, s.value = t !== y ? !1 : s.value, a.value = S !== M ? !1 : a.value; }), {
    email: b, errorEmail: l(() => (s.value ? w.value || p.value : '')), pass: g, errorPass: l(() => (a.value ? A.value || p.value : '')), name: N, errorName: l(() => (h.value ? _.value || p.value : '')), isSubmitting: r, onSubmit: $,
  };
} const X = { components: { AppForm: q, AppControl: C }, setup() { return { ...T() }; } }; const j = { class: 'auth_reg' }; const z = { class: 'auth_reg__wrapper' }; function D(e, r, u, v, i, m) {
  const o = V('app-control'); const s = V('app-form'); return F(), k('section', j, [O('div', z, [n(s, {
    title: 'Registration', btnText: 'Sign Up', onOnSubmit: e.onSubmit, isSubmitting: e.isSubmitting,
  }, {
    default: I(() => [n(o, {
      name: 'auth', type: 'text', label: 'Name', id: 'name', modelValue: e.name, 'onUpdate:modelValue': r[0] || (r[0] = (a) => e.name = a), error: e.errorName, autocomplete: 'off',
    }, null, 8, ['modelValue', 'error']), n(o, {
      name: 'auth', type: 'email', label: 'Email', id: 'email', modelValue: e.email, 'onUpdate:modelValue': r[1] || (r[1] = (a) => e.email = a), error: e.errorEmail, autocomplete: 'on',
    }, null, 8, ['modelValue', 'error']), n(o, {
      name: 'auth', type: 'password', label: 'Password', id: 'pass', modelValue: e.pass, 'onUpdate:modelValue': r[2] || (r[2] = (a) => e.pass = a), error: e.errorPass, autocomplete: 'on',
    }, null, 8, ['modelValue', 'error'])]),
    _: 1,
  }, 8, ['onOnSubmit', 'isSubmitting'])])]);
} const J = B(X, [['render', D]]); export { J as default };
