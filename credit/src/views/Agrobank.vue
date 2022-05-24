<template>
  <div class="container">
    <label class="body_text">Оплата без регистрации</label>
    <div class="input-group mb-3 body_search">
      <input type="text" class="form-control" placeholder="Введите названия услуги">&nbsp;&nbsp;
      <div class="input-group-append">
        <button class="btn btn-success body_submit" type="submit">Найти</button>
      </div>
    </div>
  </div>

</template>
<script>
  export default {

  }
</script>
<style scoped>
@import '../assets/css/all.css';
@import '../assets/css/bootstrap.min.css';
.body_text{
  font-size: 22px;
  margin: 14px 0px 14px 0px;
}
.body_search{
  border-radius: 6px;
  background-color: #E7EBF0;
  padding: 9px;
}
.body_submit{
  width: 94px;
  border-radius: 4px;
}
</style>