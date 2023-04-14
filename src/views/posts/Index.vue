<template>
  <v-container class="mt-5">
    <v-btn
    class="mb-5"
      rounded="lg"
      :to="{ name: 'createPost' }"
      variant="tonal"
      color="indigo-darken-3"
    >
      Create Post
    </v-btn>

    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="4">
        <v-card variant="outlined">
          <template v-slot:title>
            <v-btn
              :to="{ name: 'postId', params: { id: post.id } }"
            >
              {{ post.title }}
            </v-btn>
          </template>
          <template v-slot:text>
            {{ post.body }}
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { ref } from "vue";  

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    function getPosts() {
      axios
        .get("https://localhost:7193/api/v1/Post/get-all")
        .then(function (response) {
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPosts();

    return { posts, loading };
  },
};
</script>

<style></style>
