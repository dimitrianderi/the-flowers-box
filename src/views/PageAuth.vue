<template>
  <section class="auth_reg">
    <div class="auth_reg__wrapper">
      <app-form
        title="Authorization"
        btn-text="Log In"
        :is-submitting="isSubmitting"
        @onSubmit="onSubmit"
      >
        <app-control
          id="email"
          v-model="email"
          name="auth"
          type="email"
          label="Email"
          :error="errorEmail"
          autocomplete="on"
        />
        <app-control
          id="pass"
          v-model="pass"
          name="auth"
          type="password"
          label="Password"
          :error="errorPass"
          autocomplete="on"
        />
      </app-form>
    </div>
  </section>
</template>

<script>
import AppForm from '@/components/ui/AppForm.vue';
import AppControl from '@/components/ui/AppControl.vue';
import { useAuth } from '@/use/useAuth.js';

export default {
  components: { AppForm, AppControl },
  setup() {
    return {
      ...useAuth(),
    };
  },
};
</script>

<style></style>
