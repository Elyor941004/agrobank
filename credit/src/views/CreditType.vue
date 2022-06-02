<template>
  <credit-header/>
    <div class="container">
    <div class="row header_history">
      <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
        <router-link to="/agrobank" class="header_history_url_main">Оплата услуг</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
        <span to="/" class="header_history_url">Кредит турлари</span>
      </div>
      <div class="body_content">
        <div class="body_content_service">
          <router-link to="/credit-service" class="body_content_column">
            <div  class="body_credit_link">
              <img src="../assets/img/credit_card.jpg" alt="">
              <span>Кредит карта</span>
            </div>
          </router-link>
          <router-link to="/credit-service" class="body_content_column">
            <div class="body_credit_link">
              <img src="../assets/img/mikroqarz.jpg" alt="">
              <span>Микроқарз</span>
            </div>
          </router-link>
        </div>
        <div class="body_content_service">
          <router-link to="/credit-service" class="body_content_column">
            <div class="body_credit_link">
              <img src="../assets/img/avtokredit.jpg" alt="">
              <span>Автокредит</span>
            </div>
          </router-link>
          <router-link to="/credit-service" class="body_content_column">
            <div class="body_credit_link">
              <img src="../assets/img/talimkredit.jpg" alt="">
              <span>Та'лим кредити</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <credit-footer/>
</template>
<script>
import Credit_footer from "@/components/CreditFooter";
export default {
  components: {Credit_footer}
}
</script>
<style scoped>
  @import '../assets/css/all.css';
  @import '../assets/css/bootstrap.min.css';

</style>