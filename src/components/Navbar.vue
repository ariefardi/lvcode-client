<template>
  <v-toolbar>
    <v-toolbar-title><v-btn to="/" flat> Hacktiv Press </v-btn></v-toolbar-title>
    <v-text-field v-model="queryAuthor" label="Search Author" ></v-text-field>
    <v-btn @click="searchAuthor" flat icon > <v-icon>search</v-icon> </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!loginStatus" to="/login" flat>Login</v-btn>
      <v-btn v-if="!loginStatus" to="/register" flat>Register</v-btn>
      <v-btn v-if="loginStatus" @click="logout" flat>Logout</v-btn>
      <v-btn v-if="loginStatus" to="/upload" flat  > Upload <v-icon> cloud_upload </v-icon> </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    created () {
        console.log(this.loginStatus)
        if (localStorage.hasOwnProperty('token')) {
            this.$store.commit('setLoginStatus', true)
        }
    },
    methods: {
        ...mapActions([
            'searchAuthor', 'logout'
        ])
    },
     computed: {
         queryAuthor: {
             get () {
                 return this.$store.state.queryAuthor
             },
             set (value) {
                 this.$store.commit('setQueryAuthor', value)
             }
         },
         ...mapState([
             'loginStatus'
         ])
     }
}
</script>
<style scoped>

</style>
