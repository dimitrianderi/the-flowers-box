<template>
  <div class="info">
    <div class="info__title">
      <span>{{ bouquet.name }}</span>
      <span>{{ bouquet.price }} &#36;</span>
    </div>

    <div class="info__block">
      <span>Bouquet ingredients</span>
      <div
        class="info__block__content"
        v-for="flower in bouquet.flowers"
        :key="flower.title"
      >
        <span>{{ flower.title }}, {{ flower.amount }} pcs.</span>
        <strong>{{ flower.res }}&#36;</strong>
      </div>

      <div
        class="info__block__content"
        v-for="greenery in bouquet.greenery"
        :key="greenery.title"
      >
        <span>{{ greenery.title }}, {{ greenery.amount }} pcs.</span>
        <strong>{{ greenery.res }}&#36;</strong>
      </div>
    </div>

    <div class="info__block">
      <span>Bouquet packaging</span>
      <div
        class="info__block__content"
        v-for="packaging in bouquet.packaging"
        :key="packaging.title"
      >
        <span>{{ packaging.title }}</span>
        <strong>{{ packaging.price }}&#36;</strong>
      </div>
    </div>

    <div class="info__block">
      <span>Bouquet composition</span>
      <div
        class="info__block__content"
        v-for="composition in bouquet.composition"
        :key="composition.title"
      >
        <span>{{ composition.title }}</span>
        <strong>x{{ composition.price }}</strong>
      </div>
    </div>

    <div class="info__block">
      <div
        class="info__advanced__content"
        v-for="view in bouquet.view"
        :key="view.title"
      >
        <span>{{ 'Type' }}</span>
        <strong>{{ view.title }}</strong>
      </div>
    </div>

    <div class="info__advanced resetBottom">
      <div class="info__advanced__content">
        <span>{{ 'Author' }}</span>
        <strong>{{ bouquet.author }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bouquet: Object,
  },
}
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
  min-width: 400px;
  border-radius: 0;
  
  &::-webkit-scrollbar {
      width: 10px;
      margin-right: -10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: pink;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #fbb2be;
  }

  &__title {
    display: flex;
    gap: 40px;
  }
}

.resetBottom {
  padding-bottom: 0;
}
</style>
