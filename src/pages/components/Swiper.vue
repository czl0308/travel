<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="https://dimg04.c-ctrip.com/images/zg0j15000000xfv9s9AA1.png" class="swiper-img">
      </swiper-slide>
      <swiper-slide>
        <img src="https://dimg04.c-ctrip.com/images/zg0h15000000xdhmd3E4D.png" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination
  position: relative
  top: -100px
  padding-right: 10px
  text-align: right
  .swiper-pagination-bullet-active
    background-color: red
.wrapper
  height: 0
  padding-bottom: 40%
  overflow: hidden
  background-color #f1f1f1
  .swiper-img
    width: 100%
    position: relative
    top: -60px
</style>
