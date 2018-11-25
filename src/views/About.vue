<template>
  <div class="about">
    <h1>This is nextTick</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 0
    }
  },
  mounted () {
    this.msg = 1
    this.msg = 2
    this.msg = 3
  },
  watch: {
    msg: function () {
      // console.log(this.msg)
    }
  }
}
</script>
