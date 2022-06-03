<template>
  <div class="user_form" v-if="modalShow">
    <form action="" class="form-group" >
      <label>Вход/регистрация</label><br>
      <select class="user_form_select" @change="InputChange" v-model="formValue">
        <option class="form-control" value="password">Паспорт</option>
        <option class="form-control" value="card">Ид карта</option>
      </select>
      <input type="text" placeholder="серия" v-if="user_password" class="form-control">
      <input type="text" placeholder="ид" v-if="user_cardid" class="form-control">
      <router-link type="submit" class="form_submit" to="/about-user" @click="formSubmit">Тасдиқлаш</router-link>
      <router-link type="submit" class="form_submit" to="/not-confirmed" @click="formSubmit">бекор қилиш</router-link>
    </form>
    <button class="form_close" @click="modalHide"><b>x</b></button>
  </div>
</template>
<script>
import {mapState, mapMutations} from "vuex";
  export default {
    name:'credit-user-form',
    data(){
      return{
        formValue:''
      }
    },
    computed:{
      ...mapState(['modalShow', 'user_password', 'user_cardid'])
    },
    methods:{
      ...mapMutations(['modalForm_func', 'modalHide_func', 'formSubmit_func', 'inputChange_func']),
      modalForm(){
        this.modalForm_func()
      },
      modalHide(){
        this.modalHide_func()
      },
      formSubmit(){
        this.formSubmit_func()
      },
      InputChange(){
        this.inputChange_func(this.formValue);
      },
    },
  }
</script>
<style scoped>
  @import "../assets/css/all.css";
  @import "../assets/css/bootstrap.min.css";
</style>