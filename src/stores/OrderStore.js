import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from '@/axios/request';
import useAuthStore from '@/stores/AuthStore';
import useResponseStore from '@/stores/ResponseAuth';

const useOrderStore = defineStore('orderStore', () => {
  const authStore = useAuthStore();
  const responseStore = useResponseStore();
  const bouquets = ref([]);

  const getBouquets = computed(() => bouquets.value);
  const setBouquets = (requests) => {
    bouquets.value = requests;
  };

  const addBouquet = (bouquet) => bouquets.value.push(bouquet);

  const clearBouquet = (id) => {
    const idx = bouquets.value.findIndex((bouquet) => bouquet.id === id);
    if (idx !== -1) {
      bouquets.value.splice(idx, 1);
    }
  };

  const createBouquet = async (payload) => {
    const token = authStore.getToken;
    try {
      const { data } = await axios.post(`/flowers.json?auth=${token}`, payload);
      addBouquet({ ...payload, id: data.name });
      responseStore.updateResponse('Bouquet is creating!');
    } catch (err) {
      responseStore.updateResponse('Request error');
      throw new Error();
    }
  };

  const deleteBouquet = async (id) => {
    const token = authStore.getToken;
    try {
      await axios.delete(`/flowers/${id}.json?auth=${token}`);
      clearBouquet(id);
      responseStore.updateResponse('Bouquet is deleted!');
    } catch (err) {
      responseStore.updateResponse('Request error');
      throw new Error();
    }
  };

  const loadBouquets = async () => {
    const token = authStore.getToken;
    try {
      const { data } = await axios.get(`/flowers.json?auth=${token}`);
      if (data) {
        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
        setBouquets(requests);
      }
    } catch (err) {
      responseStore.updateResponse('Request error');
      throw new Error();
    }
  };

  return {
    createBouquet,
    loadBouquets,
    deleteBouquet,
    getBouquets,
  };
});

export default useOrderStore;
