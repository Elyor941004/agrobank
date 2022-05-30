<template>
  <nav class="header">
    <div class="header_container" v-if="mobile_navigator_show">
      <a href="https://my.agrobank.uz" class="header_url"><img src="./assets/icon/Mbank_logo.svg" alt=""></a>
      <a href="/" class="header_url">Оплата без регстрации</a>
      <a href="/" class="header_url">Об услуге</a>
      <a href="/" class="header_url">Партнерам</a>
      <a href="https://agrobank.uz" class="header_button">Agrobank.uz</a>
      <a  class="header_button" @click="avtorization">Вход/регистрации</a>
      <!--    <router-link to="/home">Home</router-link> |-->
      <!--    <router-link to="/about">About</router-link>-->
      <hr class="header_hr">
      <div class="header_mobile_container">
        <a href="https://my.agrobank.uz/pay" class="header_url">Переводы с карты на карту</a>
        <a href="/agrobank" class="header_url">Центр поддержки и справки</a>
        <a @click="transferModal" class="header_url">Банки доступные для переводов</a>
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
    <div class="form_avtorization" v-if="form_avtorization">
      <form action="" class="form-group">
        <input type="text" v-model="email" class="form-control">
        <input type="text" v-model="password" class="form-control">
        <button  class="btn btn-success" @click="submit_form_avtorization">Авторизация</button>
        <button @click="getUsers">get users</button>
      </form>
      <a @click="close_form_avtorization">x</a>
    </div>
    <div class="header_body">
      <div class="header_body_credit">
        <a href="https://my.agrobank.uz/pay" class="header_body_credit_link">
          <img src="./assets/icon/paytopayin.svg"  alt=""><br>
          <span>Переводы с карты на карту</span>
        </a>
        <router-link to="/agrobank" class="header_body_credit_link">
          <img src="./assets/icon/service.svg" alt=""><br>
          <span>Центр поддержки и справки</span>
        </router-link>
        <a @click="transferModal" class="header_body_credit_link">
          <img src="./assets/icon/bank.svg" alt=""><br>
          <span>Банки доступные для переводов</span>
        </a>
      </div>
    </div>
    <div class="transfers" v-if="modalTransfer">
      <div class="card">
        <div class="card-header">
          <span>
            Банки доступные для переводов
          </span>
          <a @click="transferModal">x</a>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/agrobank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/utbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/aloqabank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/asaka.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/aab.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/davr.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/htb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/infin-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/ipakyolibank.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/ipoteka.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/kapitalbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/mikrokredit-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/nbu-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/kdb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/psb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/ofb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/qqb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/ravnaq.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/savdogarbank.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/trastbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/turkiston-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="./assets/banks/turon.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/universal-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="./assets/banks/xalqbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
        </div>
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
import axios from "axios";
import setAuthHeader from "./utils/setAuthHeader";
export default {
  data(){
    return {
      mobile_navigator_show: true,
      containerShow: '',
      form_avtorization: false,
      email:'',
      password:'',
      modalTransfer:false
    }
  },
  methods:{
    mobile_navigator(){
      if(this.mobile_navigator_show==false){
        this.mobile_navigator_show=true;
      }else{
        this.mobile_navigator_show=false;
      }
    },
    avtorization(){
      if(this.form_avtorization==false){
        this.form_avtorization = true;
      }else{
        this.form_avtorization = false;
      }
    },
    transferModal(){
      if(this.modalTransfer==false){
        this.modalTransfer=true;
      }else{
        this.modalTransfer=false;
      }
    },
    close_form_avtorization(){
      this.form_avtorization = false;
    },
    async submit_form_avtorization(e){
      e.preventDefault();
      const login = {
        name: this.name,
        email: this.email
      }
      axios.post('http://agrobankapi/api/login', login)
      .then((response)=>{
        localStorage.setItem('token', response.data.token);
        setAuthHeader(response.data.token);
      })
      .catch((err)=>console.log(err));
      this.form_avtorization = false;
    },
    getUsers(){
      axios.get('http://agrobankapi/api/users')
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.response));
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
.form_avtorization{
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.2);
}
.form_avtorization form{
  margin-top: 54px;
  width: 15%;
  background-color: white;
  border: solid 1px whitesmoke;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}
.form_avtorization input,button{
  width: 97%;
  margin: 4px 4px 4px 4px;
}
.form_avtorization>a{
  color: white;
  font-weight: bold;
  margin-top: 34px;
}
.transfers{
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 4;
  margin-top: -144px;
}
.transfers .card{
  width: 80%;
  max-height: 800px;
  overflow-y: auto;
}
.transfers .card-header{
  display: flex;
  font-size: 18px;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  z-index: 6;
  background-color: #F7F7F7;
}
.transfers .card-body{
 margin-top: 44px;
}
.body_transfer_content img{
  height: 104px;
  width: 60%;
}
.body_transfer_content{
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 14px;
}
.transfers .card-header>a{
  text-decoration: none;
  color:black;
}
</style>
