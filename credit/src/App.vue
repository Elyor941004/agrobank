<template>
  <nav class="header">
    <div class="header_container" v-if="mobile_navigator_show">
      <router-link to="/" class="header_url"><img src="./assets/icon/Mbank_logo.svg" alt=""></router-link>
      <router-link to="/" class="header_url">Оплата без регстрации</router-link>
      <router-link to="/" class="header_url">Об услуге</router-link>
      <router-link to="/" class="header_url">Партнерам</router-link>
      <router-link to="/" class="header_button">Agrobank.uz</router-link>
      <router-link to="/" class="header_button">Вход/регистрации</router-link>
      <!--    <router-link to="/home">Home</router-link> |-->
      <!--    <router-link to="/about">About</router-link>-->
      <hr class="header_hr">

      <div class="header_mobile_container">
        <router-link to="/" class="header_url">Переводы с карты на карту</router-link>
        <router-link to="/" class="header_url">Центр поддержки и справки</router-link>
        <router-link to="/" class="header_url">Банки доступные для переводов</router-link>
      </div>
    </div>
    <div class="header_mobile_navigator">
      <div>
        <div class="header_mobile_navigator_url" v-if="!mobile_navigator_show">
          <router-link to="/" class="header_url"><img src="./assets/icon/Mbank_logo.svg" alt=""></router-link>
        </div>
        <button @click="mobile_navigator">
          <img src="./assets/icon/mobile-nav-icon.png" alt="">
        </button>
      </div>
    </div>
  </nav>
  <div>
    <div class="header_body">
      <div class="header_body_credit">
        <router-link to="/credit-type" class="header_body_credit_link">
          <img src="./assets/icon/paytopayin.svg"  alt=""><br>
          <span>Переводы с карты на карту</span>
        </router-link>
        <router-link to="/credit-type" class="header_body_credit_link">
          <img src="./assets/icon/service.svg" alt=""><br>
          <span>Центр поддержки и справки</span>
        </router-link>
        <router-link to="/credit-type" class="header_body_credit_link">
          <img src="./assets/icon/bank.svg" alt=""><br>
          <span>Банки доступные для переводов</span>
        </router-link>
      </div>
    </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  data(){
    return {
      mobile_navigator_show: true,
    }
  },
  methods:{
    mobile_navigator(){
      if(this.mobile_navigator_show==false){
        this.mobile_navigator_show=true;
      }else{
        this.mobile_navigator_show=false;
      }
    }
  }
}
</script>
<style scoped>
@import './assets/css/all.css';
@import './assets/css/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}



</style>
