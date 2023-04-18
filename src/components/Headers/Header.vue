<template>
  <v-card>
    <v-toolbar color="primary">

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>



      <template v-slot:extension>
        <v-tabs>
          <v-tab :to="{name: 'users'}">
            User
          </v-tab>
          <v-tab :to="{name: 'posts'}">
            Post
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>   
  </v-card>
</template>