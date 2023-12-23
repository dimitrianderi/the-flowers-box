<template>
  <section class="faq-section container">
    <h2 class="faq-section__description">{{ questions[topic]['title'] }}</h2>
    <div class="faq-section__items">
      <app-accordion
        v-for="question in questions[topic].items"
        :key="question"
        :id="question.id"
        :title="question.title"
      >
        <div class="faq-section__content">
          {{ question.text }}
        </div>
      </app-accordion>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { faq as questions } from '@/config/data/faq'
import AppAccordion from '@/components/ui/AppAccordion.vue'

export default {
  components: { AppAccordion },
  
  setup() {
    const route = useRoute()
    const topic = computed(() => route.path.split('/').reverse()[0])

    return {
      topic,
      questions,
    }
  },
}
</script>

<style></style>
