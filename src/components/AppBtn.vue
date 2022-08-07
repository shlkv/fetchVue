<template>
  <button href="#" class="users__get-users "
  @click="getUsers(); show()">Get users</button>
  <span v-html="persons"></span>
  <AppUserCard> :user="users[0]"</AppUserCard>
  <!-- <button @click="show">SHOW</button> -->
   <!-- {{ persons }} -->
  <!-- <h3> {{ state.firstName }}</h3>
  <img :src="state.avatar"> -->
</template>

<script>
import AppUserCard from './AppUserCard.vue'
export default {
  data () {
    return {
      state: {
        users: []
      },
      persons: []
    }
  },
  methods: {
    async getUsers () {
      const response = await fetch('https://randomuser.me/api?results=10')
      const result = await response.json()
      // console.log(result.results[0])
      this.state.users = this.state.users.concat(result.results)
      console.log(this.state.users[0])
      this.persons = this.state.users.map(item => `<div class="card card__user " >
        
         <img src="${item.picture.large}" class="card-user__ava" alt="...">
          <h1 class="wrapper__name">${item.name.first} ${item.name.last}</h1>
          <div class="wrapper__gender">Пол:  ${item.gender}</div>
          <div class="wrapper__location">Город:  ${item.location.city}</div>
          <div class="wrapper__email">Почта:  ${item.email}</div>
          <div class="wrapper__phone">Телефон:  ${item.phone}</div>
          <div class="wrapper__age">Возраст:  ${item.dob.age}</div>
        
      </div>`)
      console.log(this.persons)
    },
    show () {
      console.log(this.state.users[0])
    }
  },
  components: { AppUserCard }
}
</script>

<style>
.users__get-users{
  color: #720af1;
  background-color: white;
  padding: .5em 2em;
  border: 2px solid;
  border-radius: 6px;
  transition: 0.2s;
  }
.users__get-users:hover {
  background: #720af1;
  color: white;
  }
.users__get-users:active {
  background: #720af1;
}
</style>
