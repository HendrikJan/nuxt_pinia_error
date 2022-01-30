<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/store/userStore';

export default {
  name: 'DefaultLayout',
  async fetch() {
    const userStore = useUserStore();
    await userStore.fetchUser();
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  fetchOnServer: true,
};
</script>

<style scoped>
#content {
  padding-top: 50px;
}
</style>
