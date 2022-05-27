<template>
  <nav class="header">
    <div class="header_container" v-if="mobile_navigator_show">
      <a href="https://my.agrobank.uz" class="header_url"><img src="./assets/icon/Mbank_logo.svg" alt=""></a>
      <a href="/" class="header_url">Оплата без регстрации</a>
      <a href="/" class="header_url">Об услуге</a>
      <a href="/" class="header_url">Партнерам</a>
      <a href="https://agrobank.uz" class="header_button">Agrobank.uz</a>
      <a href="https://my.agrobank.uz/" class="header_button">Вход/регистрации</a>
      <!--    <router-link to="/home">Home</router-link> |-->
      <!--    <router-link to="/about">About</router-link>-->
      <hr class="header_hr">
      <div class="header_mobile_container">
        <a href="/" class="header_url">Переводы с карты на карту</a>
        <a href="/" class="header_url">Центр поддержки и справки</a>
        <a href="/" class="header_url">Банки доступные для переводов</a>
      </div>
    </div>
    <div class="header_mobile_navigator">
      <div>
        <div class="header_mobile_navigator_url" v-if="!mobile_navigator_show">
          <a href="https://my.agrobank.uz" class="header_url"><img src="./assets/icon/Mbank_logo.svg" alt=""></a>
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
  <footer class="footer">
    <div class="footer_header"></div>
    <div class="footer_body">
      <div class="footer_body_content">
          <b> <span>2017-2022 © AKБ "Агробанк". Все права защищены.</span><br>
              <span>Все услуги лицензированы</span><br>
              <span>1216</span>
          </b>
      </div>
      <div class="footer_body_content">
        <a href="https://www.facebook.com/agrobankuzbekistan"><img src="./assets/icon/facebook.svg" alt=""></a>&nbsp;
        <a href="https://t.me/AgrobankChannel"><img src="./assets/icon/telegram.svg" alt=""></a>
      </div>
      <div class="footer_body_content">
        <a href="https://play.google.com/store/apps/details?id=uz.agrobank.mobile.mbank" class="footer_body_googleplay"><img src="./assets/icon/googleplay.png" alt=""></a>
      </div>
      <div class="footer_body_content">
        <a href="https://apps.apple.com/ru/app/agrobank-mobile-new/id1451292895" class="footer_body_googleplay"><img src="./assets/icon/appstore.png" alt=""></a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data(){
    return {
      mobile_navigator_show: true,
      containerShow: ''
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
