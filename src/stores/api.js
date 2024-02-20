import { defineStore } from 'pinia';

const useApiStore = defineStore('api', {
  state: () => ({
    API_URL: 'http://localhost:8000/api/'
  })
});

export default useApiStore;