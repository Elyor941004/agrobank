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
  .body_credit_types{
    margin-top: 144px;
    display: flex;
    justify-content: space-around;
  }
  .credit_type_button{
    display: flex;
    align-items: center;
    height: 44px;
    color:black;
    border: 0px;
    background-color: #B0C2E5;
    padding: 0px 14px 0px 14px;
    text-decoration: none;
    box-shadow: 4px 4px #8F9CB4;
    transition: transform .2s;
  }
  .credit_type_button:hover{
    box-shadow: 6px 6px #8F9CB4;
    -ms-transform: scale(1.04); /* IE 9 */
    -webkit-transform: scale(1.04); /* Safari 3-8 */
    transform: scale(1.04);
  }
  .user_form>button{

  }
  .user_form>button:hover{

  }
  .user_form_select{
    width: 100%;
    border: solid 1px #CED4DA;
    padding: 9px;
    border-radius: 4px;
    margin-bottom: 14px;
    background-color: white;
  }
  .user_form{
    margin-top: 24px;
    display: flex;
    justify-content: center;
    z-index: 2;
  }
  .user_form>.form-group{
    background-color: white;
    width: 24%;
    border: solid 1px #CED4DA;
    padding: 14px 14px 14px 14px;
    border-radius: 4px;
    box-shadow: 4px 4px #B4B4B4;
  }
  .user_form>.form-group>button{
    width: 100%;
    background-color: #00CD69;
    border: 0px;
    border-radius: 4px;
    transition: transform .2s;
    margin-top: 14px;
  }
  .user_form>.form-group>button:hover{
    box-shadow: 2px 2px #8F9CB4;
    -ms-transform: scale(1.04); /* IE 9 */
    -webkit-transform: scale(1.04); /* Safari 3-8 */
    transform: scale(1.04);
  }
  .user_form>.form_close{
    height: 34px;
    margin-left: 14px;
    background-color: transparent;
    border: 0px;
  }
  .body_user_form{
    background-color:rgba(0, 0, 0, 0.2);
    z-index: -1;
    width: 100%;
    height: 100%;
    margin-top: -84px;
    position: absolute;
  }
</style>