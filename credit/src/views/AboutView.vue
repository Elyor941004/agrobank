<template>
  <div class="about">
    <form action="" class="form-group">
      <input type="text" v-model="email" class="form-control">
      <input type="text" v-model="password" class="form-control">
      <input type="submit" class="form-control">
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      password:null,
      email:null,
    }
  },
  methods:{
    login(){
      axios.get('/sanctum/csrf-cookie')
      .then( response =>{
        axios.post('/login', {email:this.email, password:this.password})
        .then( r => {
          console.log(r)
        })
        .catch( err => {
           console.log(err.response)
        })
      })
    }
  }
}
</script>
