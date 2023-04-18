<template>
  <v-container class="mt-5">
    <v-btn
      class="mb-5"
      rounded="lg"
      variant="tonal"
      color="indigo-darken-3"
      to="/addUser"
    >
      Create User
    </v-btn>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Name *</th>
          <th class="text-left">Email *</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Website</th>
          <th class="text-left">Company</th>
          <th class="text-left">Command</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUser" :key="user.id" :class="{ 'text-grey': !user.isActive}">
          <td></td>

          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>{{ user.company }}</td>
          <td>
            <v-btn
              :class="{ 'mr-4 rounded-pill text-green': user.isActive , 'mr-4 rounded-pill text-red': !user.isActive}"
              @click="StateUser(user.id, user.isActive)"
              >Active</v-btn
            >
            <v-btn
              density="comfortable"
              icon="mdi-trash-can-outline"
              class="mr-4 text-red"
              @click="userDelete(user.id)"
            >
            </v-btn>

            <v-btn
              density="comfortable"
              icon="mdi-square-edit-outline"
              class="text-cyan"
            >
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  methods: {
    ...mapActions(["GetAllUser", "deleteUser", "changeStatusUser"]),
    userDelete(userId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(userId);
          Swal.fire("Deleted!", "Your user has been deleted.", "success");
        }
      });
    },
    StateUser(userId, isActive) {
      this.changeStatusUser(userId);
      if(isActive === false){
      Swal.fire({
        icon: "success",
        title: "Active User !",
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
      Swal.fire({
        icon: "warning",
        title: "DeActive User",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    },
  },
  computed: {
    ...mapGetters(["allUser"]),
  },
  created() {
    this.GetAllUser();
  },
};
</script>
