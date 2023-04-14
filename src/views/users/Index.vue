<template>
  <v-container class="mt-5">
    <v-row>
      <v-col v-for="user in users" :key="user.id" cols="4">
        <UserCardView :user="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardView from "../../components/users/CardView.vue";

export default {
  components: {
    UserCardView,
  },
  setup() {
    const users = ref([]);

    function getUsers() {
      axios
        .get("https://localhost:7193/api/v1/User/get-all")
        .then(function (response) {
          users.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getUsers();

    return { users };
  },
};
</script>

<style></style>
