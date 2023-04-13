<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" v-model.lazy.trim="form.title" />
      <div class="form-text text-danger">
        {{ form.titleErrorText }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea
        class="form-control"
        rows="6"
        v-model.lazy.trim="form.body"
      ></textarea>
      <div class="form-text text-danger">
        {{ form.bodyErrorText }}
      </div>
    </div>
    <div v-for="uservalue in users" :key="uservalue.id">asdfasdf</div>
    <!-- <div class="mb-3">
      <select
        class="form-select"
        id="inputGroupSelect03"
        aria-label="Example select with button addon"
        v-model.lazy="form.userId"
      >
        <option v-for="user in users" :key="user.id" value="user.name">
          asdf
        </option>
       
      </select>
    </div> -->
    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      ></div>
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { reactive } from "vue";


export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
  },
  setup(props, { emit }) {
    
    const users = ref([]);
    
    function getUsers() {
      axios
        .get("https://localhost:7193/api/v1/User/get-all-for-add-post")
        .then(function (response) {
          users.value = response.data;
          console.log(users.value)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getUsers();

    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      userId: "",
      bodyErrorText: "",
    });

    function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput();

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "Body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        emit("formData", form);
      }
    }  

    return { form, validate };
  },
};
</script>

<style></style>
