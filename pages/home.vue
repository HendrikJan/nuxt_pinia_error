<template>
  <v-card>
    <v-card-title>User</v-card-title>
    <v-card-text>
      name: {{ user.name }}<br>
      age: {{ user.age }}<br>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/store/userStore';

export default {
  name: 'HomePage',
  data() {
    return {};
  },
  async fetch() {
    await this.fetchUser();
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  methods: {
    ...mapActions(useUserStore, ['fetchUser']),
  },
  fetchOnServer: true,
};
</script>