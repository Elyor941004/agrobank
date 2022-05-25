<template>
  <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
    <router-link to="/" class="header_history_url_main">Оплата услуг</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
    <span to="/" class="header_history_url">Международные переводы</span>
  </div>
  <div class="body_user_form" v-if="modalShow">

  </div>
    <div class="body_credit_types">
      <router-link to="/credit-procedure" class="credit_type_button">
        Кредитлаш тартиби
      </router-link>
      <button @click="modalForm" class="credit_type_button">
        Кредит олиш
      </button>
      <router-link to="/" class="credit_type_button">
        Кредит калькулятори
      </router-link>
    </div>
    <div class="user_form" v-if="modalShow">
      <form action="" class="form-group" >
        <label>Вход/регистрация</label><br>
        <select class="user_form_select" name="" id="">
          <option class="form-control" value="" @click="UserPassword">Паспорт</option>
          <option class="form-control" value="" @click="UserCardId">Ид карта</option>
        </select>
        <input type="text" placeholder="Паспорт" v-if="user_password" class="form-control">
        <input type="text" placeholder="Ид карта" v-if="user_cardid" class="form-control">
        <router-link type="submit" to="/about-user" @click="formSubmit">Тасдиқлаш</router-link>
      </form>
      <button class="form_close" @click="modalHide">x</button>
    </div>
</template>
<script>
export default {
  data(){
    return{
      modalShow:false,
      user_password:false,
      user_cardid:false
    }
  },
  methods:{
    modalForm(){
      this.modalShow=true;
    },
    modalHide(){
      this.modalShow=false;
    },
    formSubmit(){
      this.modalShow=false;
    },
    UserPassword(){
      this.user_password=true;
      this.user_cardid=false;
    },
    UserCardId(){
      this.user_cardid=true;
      this.user_password=false;
    }
  }
}
</script>
<style scoped>
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/all.css';

</style>