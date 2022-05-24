<template>
  <nav class="header">
    <div class="header_container">
      <router-link to="/" class="header_url"><img src="./assets/icon/Mbank_logo.svg" alt=""></router-link>
      <router-link to="/" class="header_url">Оплата без регстрации</router-link>
      <router-link to="/" class="header_url">Об услуге</router-link>
      <router-link to="/" class="header_url">Партнерам</router-link>
      <router-link to="/" class="header_button">Agrobank.uz</router-link>
      <router-link to="/" class="header_button">Вход/регистрации</router-link>
      <!--    <router-link to="/home">Home</router-link> |-->
      <!--    <router-link to="/about">About</router-link>-->
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header_body_img{
  height: 104px;
}
.header_body{
  height: 244px;
  background-color: #E7EBF0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header_body_credit{
  width: 1200px;
  display: flex;
  justify-content: space-around;
}
.header_body_credit_link{
  color: black;
  text-decoration: none !important;
  width: 364px;
  padding: 34px 0px 34px 0px;
  border-radius: 4px;
  background-color: white;
  text-align: center;
  transition: transform .3s;
}
.header_body_credit_link:hover{
  color: black;
  box-shadow: 3px 3px #EEEEEE;
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}
.header_body_credit_link img{
  height: 74px;
}
.header_url{
  font-family: Sans-serif;
  color: black;
  font-weight: bold;
  display: flex;
  font-size: 16px;
  align-items: center;
  height: 74px;
  width: 100%;
  justify-content: center;
  text-decoration: none !important;
}
.header_url:hover{
  color: #00CD69;
}
.header{
  height: 74px;
  display: flex;
  justify-content: center;
}
.header_container{
  width: 1200px;
  height: 74px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 84px;
}
.header_button{
  background-color: #00cd69;
  color: white;
  font-weight: bold;
  display: flex;
  font-size: 14px;
  align-items: center;
  height: 34px;
  width: 100%;
  justify-content: center;
  text-decoration: none !important;
  margin-right: 14px;
  border-radius: 4px;
}
.header_button:hover{
  color: white;
  box-shadow:0px 2px silver;
}
.header_container img{
  height: 34px;
  margin: 0px 24px 0px 0px;
}
</style>
