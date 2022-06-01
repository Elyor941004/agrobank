<template>
  <nav class="header">
    <div class="header_container" v-if="mobile_navigator_show">
      <router-link to="/agrobank" class="header_url"><img src="../assets/icon/Mbank_logo.svg" alt=""></router-link>
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
        <router-link to="/agrobank"  class="header_url">Центр поддержки и справки</router-link>
        <a @click="transferModal" href="#" class="header_url">Банки доступные для переводов</a>
      </div>
    </div>
    <div class="header_mobile_navigator">
      <div>
        <div class="header_mobile_navigator_url" v-if="!mobile_navigator_show">
          <a href="https://my.agrobank.uz" class="header_url"><img src="../assets/icon/Mbank_logo.svg" alt=""></a>
        </div>
        <button @click="mobile_navigator">
          <img src="../assets/icon/mobile-nav-icon.png" alt="">
        </button>
      </div>
    </div>
  </nav>
  <div>
    <div id="overlay" @click="modalHide"></div>
    <div class="form_avtorization" v-if="form_avtorization">
      <form action="" class="form-group">
        <input type="text" v-model="form.email" class="form-control">
        <input type="password" v-model="form.password" class="form-control">
        <button  class="btn btn-success" @click="submit_form_avtorization">Авторизация</button>
        <button @click="getUsers">get users</button>
      </form>
      <a @click="close_form_avtorization" type="submit"><b>x</b></a>
    </div>
    <div class="header_body">
      <div class="header_body_credit">
        <a href="https://my.agrobank.uz/pay" class="header_body_credit_link">
          <img src="../assets/icon/paytopayin.svg"  alt=""><br>
          <span>Переводы с карты на карту</span>
        </a>
        <router-link to="/agrobank" class="header_body_credit_link">
          <img src="../assets/icon/service.svg" alt=""><br>
          <span>Центр поддержки и справки</span>
        </router-link>
        <a @click="transferModal" href="#" class="header_body_credit_link">
          <img src="../assets/icon/bank.svg" alt=""><br>
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
              <img src="../assets/banks/agrobank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/utbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/aloqabank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="../assets/banks/asaka.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/aab.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/davr.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="../assets/banks/htb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/infin-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/ipakyolibank.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="../assets/banks/ipoteka.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/kapitalbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/mikrokredit-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="../assets/banks/nbu-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/kdb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/psb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="../assets/banks/ofb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/qqb.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/ravnaq.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="../assets/banks/savdogarbank.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/trastbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/turkiston-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
          <div class="row">
            <div class="body_transfer_content col">
              <img src="../assets/banks/turon.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/universal-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
            <div class="body_transfer_content col">
              <img src="../assets/banks/xalqbank-p2p.png" alt=""><br>
              <span>Стоимость услуг за перевод: 0.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import setAuthHeader from "../utils/setAuthHeader";
  import {mapState, mapMutations} from 'vuex';
  import Credit_layout from "@/components/CreditHeader";
  export default {
    name:'creditHeader',
    components: {Credit_layout},
    data(){
      return {
        form:{
          email:'',
          password:'',
        }
      }
    },
    computed:{
      ...mapState(['mobile_navigator_show', 'containerShow', 'form_avtorization', 'email', 'password', 'modalTransfer', 'ism']),
    },
    methods:{
      ...mapMutations(['mobile_navigator_func', 'avtorization_func', 'transferModal_func',  'close_form_avtorization_func',  'submit_form_avtorization_func',  'getUsers_func',]),
      mobile_navigator(){
        this.mobile_navigator_func();
        document.getElementById("overlay").style.display = "block";
      },
      avtorization(){
        this.avtorization_func();
      },
      transferModal(){
        this.transferModal_func();
      },
      close_form_avtorization(){
        this.close_form_avtorization_func();
      },
      async submit_form_avtorization(e){
        e.preventDefault();
        this.submit_form_avtorization_func(this.form)
      },
      getUsers(){
        this.getUsers_func();
      }
    },

  }
</script>
<style scoped>

</style>