<template>
  <button @click="shows">UserCard
  </button>
  <div class="card card__user " v-if="user">

    <img :src="user.picture.large" class="card-user__ava" alt="...">
    <AppUserAvatar :srcImg="user.picture.large" :width="140 " :height="140 "> </AppUserAvatar>
    <h1 class="wrapper__name">{{ user.name.first}} {{user.name.last}}</h1>
    <div class="wrapper__gender">Пол: {{user.gender}}</div>
    <div class="wrapper__location">Город:  {{user.location.city}}</div>
    <div class="wrapper__email">Почта:  {{user.email}}</div>
    <div class="wrapper__phone">Телефон:  {{user.phone}}</div>
    <div class="wrapper__age">Возраст:  {{user.dob.age}}</div>

  </div>
</template>

<script>
import AppUserAvatar from '../components/AppUserAvatar.vue'
export default {
  components: {
    AppUserAvatar
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    shows () {
      console.log(this.user)
    }
  }
}
</script>

<style scoped>

</style>
