<template>
  <div class="formControl">
    <label
      class="formControl__label"
      :for="id"
    >{{ label }}:</label>
    <input
      :id="id"
      :class="[`formControl__input`, { error: error }]"
      :type="type"
      :autocomplete="autocomplete"
      :value="modelValue"
      maxlength="30"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
  <small :class="`formControl__errorText`">{{ error }}</small>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
