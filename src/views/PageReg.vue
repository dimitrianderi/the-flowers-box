<template>
  <section class="auth_reg">
    <div class="auth_reg__wrapper">
      <app-form
        title="Registration"
        btn-text="Sign Up"
        :is-submitting="isSubmitting"
        @onSubmit="onSubmit"
      >
        <app-control
          id="name"
          v-model="name"
          name="auth"
          type="text"
          label="Name"
          :error="errorName"
          autocomplete="off"
        />
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
import { useReg } from '@/use/useReg.js';

export default {
  components: { AppForm, AppControl },
  setup() {
    return {
      ...useReg(),
    };
  },
};
</script>

<style></style>
