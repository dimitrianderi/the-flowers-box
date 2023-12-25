<template>
  <form class="info">
    <div class="info__title">
      <span>Your bouquet</span><span>{{ '100' }} &#36;</span>
    </div>
    <div class="info__block">
      <span>Bouquet ingredients</span>
      <div class="info__block__content">
        <span>{{ 'Flower' }}, {{ '100' }} pcs.</span
        ><span>{{ '100' }}&#36;</span>
      </div>
      <div class="info__block__content">
        <span>{{ 'Greenery' }}, {{ '100' }} pcs.</span
        ><span>{{ '100' }}&#36;</span>
      </div>
    </div>
    <div class="info__block">
      <span>Bouquet packaging</span>
      <div class="info__block__content">
        <span>{{ 'Packaging' }}</span
        ><span>{{ '100' }}&#36;</span>
      </div>
    </div>
    <div class="info__block">
      <span>Bouquet composition</span>
      <div class="info__block__content">
        <span>{{ 'Composition' }}</span
        ><span>x{{ '100' }}</span>
      </div>
    </div>
    <div class="info__advanced">
      <div class="info__advanced__content">
        <span>{{ 'The type of bouquets' }}</span>
        <span>{{ 'type' }}</span>
      </div>
      <div class="info__advanced__content">
        <span>{{ 'Name' }}</span>
        <input class="info__advanced__content-input" type="text" maxlength="30"/>
      </div>
    </div>
    <button type="submit" class="info-btn" disabled>Compile</button>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
