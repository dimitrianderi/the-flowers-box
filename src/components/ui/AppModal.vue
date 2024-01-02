<template>
  <teleport to="body">
    <div
      class="modal__backdrop"
      data-btnClose="close-modal"
      @click="$emit('offModal')"
    />
    <div
      class="modal__layout"
      data-modalContent="content-modal"
    >
      <slot />
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ['offModal'],
};
</script>

<style></style>
