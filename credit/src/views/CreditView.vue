<template>
  <div class="container">
    <div class="row header_history">
      <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
        <router-link to="/" class="header_history_url_main">Оплата услуг</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
        <span to="/" class="header_history_url">Международные переводы</span>
      </div>
      <div class="col">
        <div class="body_credit">
          <router-link to="/credit-type" class="body_credit_link">
            <img src="../assets/img/credit_card.jpg" alt="">
            <b>Кредит карта</b>
          </router-link>
          <router-link to="/credit-type" class="body_credit_link">
            <img src="../assets/img/avtokredit.jpg" alt="">
            <b>Автокредит</b>
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="body_credit">
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
  </div>
</template>
<script>

</script>
<style scoped>
  @import '../assets/css/all.css';
  @import '../assets/css/bootstrap.min.css';

</style>