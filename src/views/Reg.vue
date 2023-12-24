<template>
  <section class="auth_reg">
    <div class="auth_reg__wrapper">
      <app-form
        title="Registration"
        btnText="Sign Up"
        @onSubmit="onSubmit"
        :isSubmitting="isSubmitting"
      >
        <app-control
          name="auth"
          type="text"
          label="Name"
          id="name"
          v-model="name"
          :error="errorName"
          autocomplete="off"
        ></app-control>
        <app-control
          name="auth"
          type="email"
          label="Email"
          id="email"
          v-model="email"
          :error="errorEmail"
          autocomplete="on"
        ></app-control>
        <app-control
          name="auth"
          type="password"
          label="Password"
          id="pass"
          v-model="pass"
          :error="errorPass"
          autocomplete="on"
        ></app-control>
      </app-form>
    </div>
  </section>
</template>

<script>
import AppForm from '@/components/ui/AppForm.vue'
import AppControl from '@/components/ui/AppControl.vue'
import { useReg } from '@/use/useReg.js'

export default {
  components: { AppForm, AppControl },
  setup() {
    return {
      ...useReg(),
    }
  },
}
</script>

<style></style>
