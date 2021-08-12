<template>
   <div class="main-header flex">
   <div class="right-nav">
     <div class="logo"><img src="https://img.icons8.com/fluency/48/000000/source-code.png"/></div>
   </div>
      <div class="nav">
        <router-link to="/">Home</router-link> 
        <router-link v-if="getUserId" :to="`/url/${getUserId}`">main-account</router-link> 
        <router-link v-if="!this.$store.state.userModule.user" to="/signup">Login</router-link>
        <router-link v-else to="/logout">Logout</router-link>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
   created(){
  },
  methods:{
  },
  computed:{
    getUser (){
       return this.$store.getters.getUser
    },
    getUserId (){
      return this.$store.getters.getUserId
    }
  }
}
</script>