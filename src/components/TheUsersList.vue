<template>
<span v-html="persons" ></span>
<button @click="show">aaaa</button>
<app-btn style="display:none;"> <span v-html="persons"></span> </app-btn>
</template>

<script>
export default {
  props: ['person'],
  data () {
    return {
      u: [1, 2, 3, 4]
    }
  },
  methods: {
    show () {
      console.log(this.persons)
    }
  }

}
</script>

<style >

</style>
