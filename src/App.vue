<template>
  <the-navbar></the-navbar>
  <AppUserGetter>
    <AppBtn></AppBtn>
  </AppUserGetter>
  <AppPreloader></AppPreloader>
  <TheUsersList>
    <AppUserCard>
      <AppUserAvatar></AppUserAvatar>
    </AppUserCard>
  </TheUsersList>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppUserGetter from './components/AppUserGetter.vue'
import AppBtn from './components/AppBtn.vue'
import AppPreloader from './components/AppPreloader.vue'
import TheUsersList from './components/TheUsersList.vue'
import AppUserAvatar from './components/AppUserAvatar.vue'
import AppUserCard from './components/AppUserCard.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    AppUserGetter,
    AppBtn,
    AppPreloader,
    TheUsersList,
    AppUserAvatar,
    AppUserCard
  }
}
</script>

<style lang="scss">
html, body, div, span,
h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

</style>
