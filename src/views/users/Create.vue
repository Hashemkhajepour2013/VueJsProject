<template>
  <v-container>
    <v-form fast-fail @submit.prevent="createUser">
      <v-row>
        <v-col cols="6">
          <label>Name :</label>
          <v-text-field
            v-model.lazy.trim="form.Name"
            label="Name*"
            :rules="firstNameRules"
          ></v-text-field>
          <div class="text-red">
            {{ form.nameErrorText }}
          </div>
          <label>Email :</label>
          <v-text-field
            label="Email*"
            v-model.lazy.trim="form.Email"
          ></v-text-field>
          <div class="text-red">
            {{ form.emailErrorText }}
          </div>

          <label>Phone :</label>
          <v-text-field
            label="Phone"
            v-model.lazy.trim="form.Phone"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <label>UserName :</label>
          <v-text-field
            label="userName*"
            v-model.lazy.trim="form.UserName"
          ></v-text-field>

          <label>Company :</label>
          <v-text-field
            label="company"
            v-model.lazy.trim="form.Company"
          ></v-text-field>

          <label>Website :</label>
          <v-text-field
            label="website"
            v-model.lazy.trim="form.Website"
          ></v-text-field>
        </v-col>
        <v-btn type="submit" class="mt-2">Create User</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { reactive } from "vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: reactive({
        Name: "",
        nameErrorText: "",
        Email: "",
        emailErrorText: "",
        Phone: "",
        Website: "",
        Company: "",
        UserName: "",
      }),
    };
  },
  methods: {
    ...mapActions(["AddUser"]),
    createUser() {
      this.AddUser(this.form);
    },
  },
};
</script>

<style></style>
