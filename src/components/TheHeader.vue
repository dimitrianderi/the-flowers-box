<template>
  <header class="header">
    <div class="header__slider">
      <transition
        v-for="(slide, idx) in slides"
        :key="slide.src"
        class="slide"
        :style="{ 'z-index': idx === currentSlide ? 1 : 0 }"
        name="fade"
        mode="out-in"
      >
        <div v-if="idx === currentSlide">
          <img
            class="slide__img"
            :src="getImageUrl(`slide${idx + 1}`)"
            loading="lazy"
            alt="slide"
          >
          <div class="slide__info">
            <h2 class="slide__info-title">
              {{ slide.title }}
            </h2>
            <button
              class="slide__info-btn"
              @click="setView(slide.view)"
              @mouseleave="playInterval"
              @mouseover="stopInterval"
            >
              more
            </button>
          </div>
        </div>
      </transition>
    </div>
    <font-awesome-icon
      v-for="(icon, index) in ['left', 'right']"
      :key="index"
      :class="'header-icon ' + icon"
      :icon="'fa-solid fa-chevron-' + icon"
      @click="changeSlide(icon)"
    />
    <div class="header__marks">
      <span
        v-for="mark in slides.length"
        :key="mark"
        class="header__marks-mark"
        :class="{ active: currentSlide === mark - 1 }"
        @click="currentSlide = mark - 1"
        @mouseleave="playInterval"
        @mouseover="stopInterval"
      />
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFilterStore } from '@/stores/FilterStore';
import { slides } from '@/config/the-header.js';
import { getImageUrl } from '@/utils/getImageUrl.js';

export default {
  setup() {
    const currentSlide = ref(0);
    const interval = ref(null);
    const router = useRouter();
    const filterStore = useFilterStore();

    const prevSlide = () => {
      if (currentSlide.value === 0) {
        currentSlide.value = slides.length - 1;
      } else {
        currentSlide.value -= 1;
      }
    };

    const nextSlide = () => {
      if (currentSlide.value === slides.length - 1) {
        currentSlide.value = 0;
      } else {
        currentSlide.value += 1;
      }
    };

    const playInterval = () => {
      interval.value = setInterval(nextSlide, 4000);
    };

    const changeSlide = (slide) => {
      clearInterval(interval.value);
      playInterval();

      if (slide === 'right') {
        nextSlide();
      } else {
        prevSlide();
      }
    };

    const stopInterval = () => {
      clearInterval(interval.value);
    };

    const setView = (view) => {
      filterStore.clearFilters();
      filterStore.addView(view);
      router.push('/bouquets');
    };

    onMounted(() => {
      playInterval();
    });

    return {
      currentSlide,
      slides,
      changeSlide,
      stopInterval,
      playInterval,
      setView,
      getImageUrl,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
