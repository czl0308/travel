<template>
  <div class="header">
    <div class="header-left">
      <!-- <span class="iconfont iconzuo"></span> -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconzuo"></use>
      </svg>
    </div>
    <div class="header-input">输入城市景点</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    height: 43px
    background: #00bcd4
    line-height: 43px
    color: #fff
    .header-left
      width: 32px
      font-size: 32px
    .header-input
      flex: 1
      background: #fff
      margin: 8px 8px
      padding-left: 10px
      line-height: 27px
      border-radius: 3px
      color: #999
    .header-right
      width: 62px
      text-align: center
</style>
