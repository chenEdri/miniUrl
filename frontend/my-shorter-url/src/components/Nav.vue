<template>
   <div class="main-header flex">
      <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link v-if="this.loggedUser" :to="`/url/${loggedUser._id}`">main-account</router-link> |
        <router-link v-if="!this.$store.state.userModule.user" to="/signup">sign-up</router-link>
        <router-link v-else to="/logout">Logout</router-link>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      loggedUser:null,
    }
  },
   created(){
   const user =this.$store.getters.getUser
   this.loggedUser = user;
  },
  methods:{
  },
  computed:{
    getUser (){
       return this.$store.getters.getUser
    }
  }
}
</script>