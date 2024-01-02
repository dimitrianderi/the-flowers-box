import {
  u as P, a as h, c as v, A as $, b as y,
} from './vee-validate.esm-cZCOJPlo.js'; import {
  u as C, p as q, r as b, q as i, s as S, _ as B, b as _, c as F, d as M, e as N, i as m, w as k,
} from './index-OiT2zUcm.js';

function I() {
  const { handleSubmit: e, isSubmitting: s, submitCount: l } = P(); const p = C(); const n = q(); const u = 6; const a = b(!1); const r = b(!1); const t = i(() => n.getErrAuth); const { value: c, errorMessage: g } = h('email', v().trim().email('the email address is entered incorrectly').required('fill in this field')); const { value: d, errorMessage: A } = h('password', v().trim().required('fill in this field').min(u, `the password must be at least ${u} characters long`)); const E = e(async (o) => { try { await n.login(o), p.push('/'); } catch {} }); return S(l, (o) => { o > 0 && (a.value = !0, r.value = !0); }), S([c, d], ([o, f], [w, V]) => { l.value = 0, a.value = o !== w ? !1 : a.value, r.value = f !== V ? !1 : r.value; }), {
    email: c, errorEmail: i(() => (a.value ? g.value || t.value : '')), pass: d, errorPass: i(() => (r.value ? A.value || t.value : '')), isSubmitting: s, onSubmit: E,
  };
} const O = { components: { AppForm: $, AppControl: y }, setup() { return { ...I() }; } }; const U = { class: 'auth_reg' }; const z = { class: 'auth_reg__wrapper' }; function L(e, s, l, p, n, u) {
  const a = _('app-control'); const r = _('app-form'); return F(), M('section', U, [N('div', z, [m(r, {
    title: 'Authorization', btnText: 'Log In', onOnSubmit: e.onSubmit, isSubmitting: e.isSubmitting,
  }, {
    default: k(() => [m(a, {
      name: 'auth', type: 'email', label: 'Email', id: 'email', modelValue: e.email, 'onUpdate:modelValue': s[0] || (s[0] = (t) => e.email = t), error: e.errorEmail, autocomplete: 'on',
    }, null, 8, ['modelValue', 'error']), m(a, {
      name: 'auth', type: 'password', label: 'Password', id: 'pass', modelValue: e.pass, 'onUpdate:modelValue': s[1] || (s[1] = (t) => e.pass = t), error: e.errorPass, autocomplete: 'on',
    }, null, 8, ['modelValue', 'error'])]),
    _: 1,
  }, 8, ['onOnSubmit', 'isSubmitting'])])]);
} const j = B(O, [['render', L]]); export { j as default };
