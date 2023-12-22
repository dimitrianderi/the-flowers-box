<template>
  <app-accordion
    v-for="question in questions[topic]"
    :key="question"
    :title="question.title"
    >{{ question.text }}</app-accordion
  >
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { faq as questions } from '@/config/data/faq'
import AppAccordion from '../../components/ui/AppAccordion.vue'

export default {
  components: { AppAccordion },
  name: 'Builder',
  setup() {
    const topic = ref(null)
    const route = useRoute()

    onMounted(() => [(topic.value = route.params.topic)])

    return { topic, questions }
  },
}
</script>

<style></style>
