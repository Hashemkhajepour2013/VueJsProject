<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
   <v-container>
    <v-row>
      <v-col cols="4">
        <v-card variant="outlined">
          <template v-slot:title>
            {{ post.title }}
          </template>
          <template v-slot:text>
            {{ post.body }}
          </template>
          <v-card-actions>
            <v-btn @click="deletePost" variant="outlined" color="red"> Delete </v-btn>
            <v-btn variant="outlined"
            :to="{ name: 'editPost', params: { id: route.params.id } }"
            > Edit </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from 'sweetalert2';

export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://localhost:7193/api/v1/Post/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

    function deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Thanks!",
            text: "Post deleted successfully",
            icon: "warning",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { post, loading, route , deletePost};
  },
};
</script>

<style></style>
