<template>
  <div class="formControl">
    <label class="formControl__label" :for="id">{{ label }}:</label>
    <input
      :class="[`formControl__input`, { error: error }]"
      :type="type"
      :id="id"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      maxlength="30"
    />
  </div>
  <small :class="`formControl__errorText`">{{ error }}</small>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    type: String,
    label: String,
    error: String,
    modelValue: String,
    autocomplete: {
      type: String,
      default: 'off',
    },
  },
  emits: ['update:modelValue'],
}
</script>

<style></style>
