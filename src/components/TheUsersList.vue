<template>
<span v-html="persons" ></span>
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
