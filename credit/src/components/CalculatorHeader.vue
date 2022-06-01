<template>
    <nav class="header_calculator_content">
      <router-link to="/">
        <img src="../assets/icon/logo_uz.png" alt="">
      </router-link>
      <div>
        <span>KREDITNI HISOBLASH KALKULYATORI</span>
      </div>
    </nav>
</template>
<script>
  export default {

  }
</script>
<style scoped>
.header_calculator_content{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_calculator_content img{
  height: 74px;
}
.header_calculator_content span{
  color: #189738;
  font-size: 27px;
  font-weight: bold;
}
@media only screen and (min-width: 769px) {
  .header_calculator_content{
    margin-top: 14px;
    display: flex;
    height: 84px;
    justify-content: space-around;
  }
}
@media only screen and (max-width: 769px) {
  .header_calculator_content{
    margin-top: 14px;
    display: flex;
    height: 204px;
    flex-direction: column;
  }
}
</style>