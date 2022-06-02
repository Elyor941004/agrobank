<template>
  <credit-header/>
    <div class="container">
      <div class="dataNotFound">
        Шахсий маълумотлар топилмади. Маълумотларни текшириб қайта киритинг
      </div>
      <div class="body_credit_types">
        <div class="body_content_service">
          <router-link to="/credit-service" class="body_content_column">
            <div class="body_content_column_credit">
              <span>Мижоз маълумотларини текшириб қайтадан киритиши керак </span>
            </div>
          </router-link>
          <router-link to="/agrobank" class="body_content_column">
            <div class="body_content_column_credit">
              <span>Мижоз банк филиалига ўзини маълумотларини базага киритиб беришлари учун мурожат қилиши керак </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  <credit-footer/>
</template>
<script>
export default {
  name:'not_confirmed',
  data(){

  },
}
</script>
<style scoped>
.dataNotFound{
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
.body_content_column_credit{
  text-align: center;
  margin: 0px 34px 0px 34px;
}
</style>