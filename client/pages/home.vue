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
export default {
  name: "HomePage",
  data() {
    return {
      user: {
        name: "John Doe",
        age: 30,
      },
    };
  },
  fetchOnServer: true,
};
</script>