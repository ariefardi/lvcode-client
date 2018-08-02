<template>
  <v-toolbar>
    <v-toolbar-title><v-btn to="/" flat> Hacktiv Press </v-btn></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/login" flat>Login</v-btn>
      <v-btn to="/register" flat>Register</v-btn>
      <v-btn to="/upload" flat  > Upload <v-icon> cloud_upload </v-icon> </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    
}
</script>
<style scoped>

</style>
