<template>
  <div class="row header_history">
    <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
      <router-link to="/" class="header_history_url_main">Оплата услуг</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
      <span to="/" class="header_history_url">Международные переводы</span>
    </div>
    <div class="col body_credit">
      <router-link to="/credit-type" class="body_credit_link">
        <img src="../assets/img/credit_card.jpg" alt="">
        <b>Кредит карта</b>
      </router-link>
      <router-link to="/credit-type" class="body_credit_link">
        <img src="../assets/img/avtokredit.jpg" alt="">
        <b>Автокредит</b>
      </router-link>
    </div>
    <div class="col">
      <div class="col body_credit">
        <router-link to="/credit-type" class="body_credit_link">
          <img src="../assets/img/mikroqarz.jpg" alt="">
          <b>Микроқарз</b>
        </router-link>
        <router-link to="/credit-type" class="body_credit_link">
          <img src="../assets/img/talimkredit.jpg" alt="">
          <b>Та'лим кредиты</b>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  @import '../assets/css/all.css';
  .body_credit{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .body_credit_link{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 254px;
    width: 34%;
    transition: transform .2s;
    border: solid 1px #EEEEEE;
    margin: 0px 24px 24px 0px;
  }
  .body_credit_link:hover{
    box-shadow: 3px 3px #EEEEEE;
    -ms-transform: scale(1.04); /* IE 9 */
    -webkit-transform: scale(1.04); /* Safari 3-8 */
    transform: scale(1.04);
  }
  .body_credit_link img{
    height: 244px;
  }
  .body_credit_link b{
    font-size: 24px;
    color: #6C013D;

  }
</style>