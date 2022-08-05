<template>
    <div class="card card__getter">
    <div class="card-body">
      <h5 class="card-title">Получение данных о пользователях</h5>
      <AppBtn ></AppBtn>
    </div>
  </div>
</template>

<script>
import AppBtn from './AppBtn.vue'
export default {
  components: { AppBtn }
}
</script>

<style>
.card__getter{
  height: 150px;
  width: 350px;
  margin: 30px 60px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  text-align: center;
}
.card-title{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding-top: 20px;
  margin: 20px;
  font-size: 20px;
}
</style>
