<template>
  <section class="faq-section container">
    <h2 class="faq-section__description">
      {{ faq[topic]['title'] }}
    </h2>
    <div class="faq-section__items">
      <app-accordion
        v-for="(question, idx) in faq[topic].items"
        :id="String(idx)"
        :key="question"
        :idx="(faq[topic].idx === true) ? idx : null"
        :title="question.title"
      >
        <article class="faq-section__content">
          {{ question.text }}
        </article>
      </app-accordion>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import faq from '@/config/faq';
import AppAccordion from '@/components/ui/AppAccordion.vue';

export default {
  components: { AppAccordion },

  setup() {
    const route = useRoute();
    const topic = computed(() => route.path.split('/').reverse()[0]);

    return {
      topic,
      faq,
    };
  },
};
</script>

<style></style>
