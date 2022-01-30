import { defineStore } from 'pinia';

let promise = null;

// useStore could be anything like useUser, useCart
export const useUserStore = defineStore({
  // unique id of the store across your application
  id: 'userStore',

  state: () => {
    return {
      user: {
        name: '',
        age: null,
        id: null,
      },
      loading: false,
    };
  },

  actions: {
    fetchUser() {
      if (this.$state.loading || this.$state.id) {
        return promise;
      }
      this.$state.loading = true;
      const $axios = this.$nuxt.$axios;
      promise = $axios.$get('user').then((user) => {
        this.$state.loading = false;
        this.$state.user.name = user.name;
        this.$state.user.age = user.age;
        this.$state.user.id = user.id;
      });

      return promise;
    },
  },
});
