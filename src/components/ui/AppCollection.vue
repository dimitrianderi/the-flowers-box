<template>
  <div class="collection">
    <div class="collection-img">
      <img :src="`src/assets/img/${collection}/${title}.jpg`" />
    </div>
    <div class="collection-title">{{ title }} <span class="collection-price">({{ price }}&#162;)</span></div>
    <button class="collection-btn">add</button>
  </div>
</template>

<script>
export default {
  props: {
    collection: String,
    title: String,
    price: String
  },
}
</script>

<style></style>
