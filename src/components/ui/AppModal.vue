<template>
  <teleport to="body">
    <div class="modal__backdrop" @click="$emit('offModal')"></div>
    <div class="modal__layout">
      <slot></slot>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ['offModal'],
}
</script>

<style></style>
