<template>
  <credit-header/>
  <div class="container">
    <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
      <router-link to="/" class="header_history_url_main">Кредит турлари</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
      <span class="header_history_url">Кредит карта хизматлари</span>
    </div>
    <div class="body_credit_types">
      <div class="body_content_service">
        <router-link to="/credit-card-procedure" class="body_content_column">
          <div class="body_content_column_credit">
            <img src="../assets/img/credit_order.png"> <span>Кредит карта тартиби</span>
          </div>
        </router-link>
        <a @click="modalForm" class="body_content_column">
          <div class="body_content_column_credit">
            <img src="../assets/img/get_credit.png"> <span>Кредит олиш</span>
          </div>
        </a>
        <router-link to="/credit-calculator" class="body_content_column">
          <div class="body_content_column_credit">
            <img src="../assets/img/credit_calculator.png"> <span>Кредит калькулятори</span>
          </div>
        </router-link>
      </div>
    </div>
    <credit-user-form/>
  </div>
  <credit-footer/>
</template>
<script>

import CreditUserForm from "@/components/CreditUserForm";
import {mapMutations, mapState} from "vuex";
export default {
  components: {CreditUserForm},
  computed:{
    ...mapState(['modalShow'])
  },
  methods:{
    ...mapMutations(['modalForm_func']),
    modalForm(){
      this.modalForm_func()
    }
  },
}
</script>
<style scoped>
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/all.css';

</style>