<template>
   <v-toolbar class="d-flex flex-row">
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="3">
            <v-toolbar-title>ProjectGitHub</v-toolbar-title>
          </v-col>
          <v-col cols="9">
            <v-btn variant="outlined" flat to="/" exact class="mr-2">
            Home
            </v-btn>
            <v-btn variant="outlined" flat to="/Users" class="mr-2">
            Users
            </v-btn>
            <v-btn variant="outlined" flat to="/Posts">
            Posts
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-toolbar>
</template>