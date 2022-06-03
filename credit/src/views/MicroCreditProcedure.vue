<template>
  <credit-header/>
    <div class="container credit-procedure ">
      <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
        <router-link to="/micro-credit-service" class="header_history_url_main">Кредит хизматлари</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
        <span class="header_history_url">Кредитлаш тартиби</span>
      </div>
      <div class="header_history">
        <div class="body_content">
          <div class="body_content_service">
            <router-link to="/simple-micro-credit" class="body_content_column">
              <b>Оддий микроқарз</b>
            </router-link>
            <router-link to="/https://play.google.com/store/apps/details?id=uz.agrobank.mobile.mbank" class="body_content_column">
              <b>Онлайн микроқарз</b>
            </router-link>
          </div>
          <div class="body_content_service">
            <router-link to="/https://play.google.com/store/apps/details?id=uz.agrobank.mobile.mbank" class="body_content_column">
              <b>Мадад микроқарз</b>
            </router-link>
            <router-link to="/market-place-micro-credit" class="body_content_column">
              <b>Маркет плейс микроқарз</b>
            </router-link>
          </div>
        </div>
      </div>
  </div>
  <credit-footer/>
</template>
<style>
.body_content_column{
  font-size: 20px;
}
</style>
