<template>
   <nav class="navbar ">
    <div class="navbar__container">
      <img class="navbar__logo" src="../assets/pngegg.png" alt="" height="70">
      <a class="navbar__title navbar-brand" href="#" >Fetch api</a>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
  background-color: #720af1;
  height: 90px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
}
.navbar__title{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-decoration: none;
  margin-top: 100px;
  color: white;
  text-transform: uppercase;
  font-size: 25px;
}
.navbar__title:hover{
  color:white;
}
.navbar__container{
  margin-left: 60px;

}
</style>
