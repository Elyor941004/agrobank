<template>
  <credit-header/>
    <div class="container">
    <label class="body_text">Оплата без регистрации</label>
    <div class="input-group mb-3 body_search">
      <input type="text" class="form-control" placeholder="Введите названия услуги">&nbsp;&nbsp;
      <div class="input-group-append">
        <button class="btn btn-success body_submit" type="submit">Найти</button>
      </div>
    </div>
    <div class="body_main_content">
      <div class="body_main_content_service">
        <div class="body_main_content_column">
          <img src="../assets/icon/paytopay.svg"> <b>Международные переводы</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/percentage.svg"> <b>Погашение кредита</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/mobile.svg"> <b>Мобильные операторы</b>
        </div>
      </div>
      <div class="body_main_content_service">
        <div class="body_content_column">
          <img src="../assets/icon/laptop.svg"> <b>Интернет</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/house.svg"> <b>Коммунальные услуги</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/byudjet.svg"> <b>Бюджетные платежи</b>
        </div>
      </div>
      <div class="body_main_content_service">
        <div class="body_main_content_column">
          <img src="../assets/icon/215.svg"> <b>Одноразовый платёж</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/domain-registration.svg"> <b>Услуги</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/television.svg"> <b>Телевидение</b>
        </div>
      </div>
      <div class="body_main_content_service">
        <div class="body_main_content_column">
          <img src="../assets/icon/charity.svg"> <b>Благотворительность</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/world.svg"> <b>Зарубежные услуги</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/taxi.svg"> <b>Такси</b>
        </div>
      </div>
      <div class="body_main_content_service">
        <div class="body_main_content_column">
          <img src="../assets/icon/hand.svg"> <b>Оплата на местах</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/taxes.svg"> <b>Налог</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/telephonia.svg"> <b>Телефония</b>
        </div>
      </div>
      <div class="body_main_content_service">
        <div class="body_main_content_column">
          <img src="../assets/icon/TSJ.svg"> <b>ТЧСЖ</b>
        </div>
        <div class="body_main_content_column">
          <img src="../assets/icon/TransportNew.svg"> <b>Транспорт</b>
        </div>
        <router-link to="/" class="body_main_content_column">
          <img src="../assets/icon/hand.svg"> <b>Электрон кредит олиш</b>
        </router-link>
      </div>
    </div>
  </div>
  <credit-footer/>
</template>
<script>
  export default {

  }
</script>
<style scoped>
@import '../assets/css/all.css';
@import '../assets/css/bootstrap.min.css';

.body_credit_link img{
  height: 244px;
}
.body_credit_link b{
  font-size: 24px;
  color: #6C013D;

}
@media only screen and (min-width: 769px) {
  .body_main_content_service{
    display: flex;
    justify-content: space-around;
  }
}
@media only screen and (max-width: 768px) {
  .body_main_content_service{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
.body_main_content_column{
  height: 186px;
  width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:7px 7px 7px 7px;
  border-radius: 4px;
  flex-direction: column;
  border: solid 1px #DCDCDC;
  transition: transform .3s;
  color: black;

}
.body_main_content_column:hover{
  color: black;
  box-shadow: 0px 3px rgba(0, 0, 0, 0.5);
  -ms-transform: scale(1.04); /* IE 9 */
  -webkit-transform: scale(1.04); /* Safari 3-8 */
  transform: scale(1.04);
  text-decoration: none;
}
.body_main_content_column img{
  height: 60px;
  margin-bottom: 14px;
}
</style>