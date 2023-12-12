<template>
  <header class="header">
    <div class="header__slider">
      <transition
        class="slide"
        v-for="(slide, idx) in slides"
        :key="slide.src"
        :style="{ 'z-index': idx === currentSlide ? 1 : 0 }"
        name="fade"
        mode="out-in"
      >
        <div v-if="idx === currentSlide">
          <img
            class="slide__img"
            :src="`src/assets/img/slider/slide${idx + 1}.jpg`"
            loading="lazy"
            alt="slide"
          />
          <div class="slide__info">
            <h2 class="slide__info-title">{{ slide.title }}</h2>
            <a
              class="slide__info-btn"
              @mouseleave="playInterval"
              @mouseover="stopInterval"
              >more</a
            >
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
        class="header__marks-mark"
        v-for="mark in slides.length"
        :key="mark"
        :class="{ active: currentSlide === mark - 1 }"
        @click="currentSlide = mark - 1"
        @mouseleave="playInterval"
        @mouseover="stopInterval"
      ></span>
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const currentSlide = ref(0)
    const interval = ref(null)

    const slides = [
      { title: 'wedding bouquets' },
      { title: 'birthday bouquets' },
      { title: 'festive bouquets' },
    ]

    const changeSlide = (slide) => {
      clearInterval(interval.value)
      playInterval()
      slide === 'right' ? nextSlide() : prevSlide()
    }

    const nextSlide = () => {
      currentSlide.value === slides.length - 1
        ? (currentSlide.value = 0)
        : currentSlide.value++
    }

    const prevSlide = () => {
      currentSlide.value === 0
        ? (currentSlide.value = slides.length - 1)
        : currentSlide.value--
    }

    const playInterval = () => {
      interval.value = setInterval(nextSlide, 4000)
    }

    const stopInterval = () => {
      clearInterval(interval.value)
    }

    onMounted(() => {
      playInterval()
    })

    return {
      currentSlide,
      slides,
      changeSlide,
      stopInterval,
      playInterval,
    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
