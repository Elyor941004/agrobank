<template>
  <div class="body_user_form" v-if="modalShow">

  </div>
    <div class="body_credit_types">
      <router-link to="/" class="credit_type_button">
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
        <input type="text" placeholder="Паспорт"  class="form-control"><br>
        <input type="text" placeholder="Ид карта" class="form-control"><br>
        <button type="submit" @click="formSubmit">Тасдиқлаш</button>
      </form>
      <button class="form_close" @click="modalHide">x</button>
    </div>

</template>
<script>
export default {
  data(){
    return{
      modalShow:false
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
    }
  }
}
</script>
<style scoped>
@import '../assets/css/bootstrap.min.css';
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
  .user_form{
    margin-top: 24px;
    display: flex;
    justify-content: center;
    z-index: 2;
  }
  .user_form .form-group{
    background-color: white;
    width: 24%;
    border: solid 1px #CED4DA;
    padding: 14px 14px 14px 14px;
    border-radius: 4px;
    box-shadow: 4px 4px #B4B4B4;
  }
  .user_form .form-group>button{
    width: 100%;
    background-color: #00CD69;
    border: 0px;
    border-radius: 4px;
  }
  .user_form .form-group button:hover{
    background-color: #2ACD24;
    box-shadow: 2px 2px #8F9CB4;
  }
  .user_form .form_close{
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