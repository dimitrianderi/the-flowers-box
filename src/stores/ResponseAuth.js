import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

const useResponseStore = defineStore('responseStore', () => {
  const response = ref('');

  const getResponse = computed(() => response.value);

  const updateResponse = (newValue) => {
    response.value = newValue;
  };

  watch(response, () => {
    setTimeout(() => {
      response.value = '';
    }, 2000);
  });

  return {
    getResponse,
    updateResponse,
  };
});

export default useResponseStore;
