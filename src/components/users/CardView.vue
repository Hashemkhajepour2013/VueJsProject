<template>
  <v-card variant="outlined">
    <template v-slot:title>
      <v-btn
        block
        rounded="lg"
        :to="{ name: 'userId', params: { id: user.id } }"
        variant="flat"
        color="indigo-darken-3"
      >
        {{ user.name }}
      </v-btn>
    </template>
    <template v-slot:subtitle>
      {{ user.username }}
    </template>
    <template v-slot:text>
      {{ user.email }} --
      {{ user.phone }}
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>
