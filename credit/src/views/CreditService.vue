<template>
  <credit-header/>
    <div class="container">
    <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
      <router-link to="/" class="header_history_url_main">Кредит турлари</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
      <span class="header_history_url">Кредит хизматлари</span>
    </div>
    <div class="body_user_form" v-if="modalShow">

    </div>
    <div class="body_credit_types">
      <div class="body_content_service">
        <router-link to="/credit-procedure" class="body_content_column">
          <div class="body_content_column_credit">
            <img src="../assets/img/credit_order.png"> <span>Кредитлаш тартиби</span>
          </div>
        </router-link>
        <a @click="modalForm" class="body_content_column">
          <div class="body_content_column_credit">
            <img src="../assets/img/get_credit.png"> <span>Кредит олиш</span>
          </div>
        </a>
        <router-link to="/credit-calculator" class="body_content_column">
          <div class="body_content_column_credit">
            <img src="../assets/img/credit_calculator.png"> <span>Кредит калькулятори</span>
          </div>
        </router-link>
      </div>
    </div>
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

  </div>
  <credit-footer/>
</template>
<script>
import {mapState, mapMutations} from "vuex";

export default {
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
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/all.css';

</style>