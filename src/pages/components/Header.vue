<template>
  <div class="header">
    <div class="header-left">
      <!-- 返回图标 -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconzuo"></use>
      </svg>
    </div>
    <div class="header-input">
      <!-- 搜索图标 -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconiconfontzhizuobiaozhun22"></use>
      </svg>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span>城市</span>
      <!-- 下拉图标 -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxiala"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
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
      font-size: 23px
      padding-left: 8px
    .header-input
      flex: 1
      background: #fff
      margin: 8px 16px
      padding-left: 10px
      line-height: 27px
      border-radius: 3px
      color: #999
      font-size: 14px
    .header-right
      display: flex
      width: 70px
      font-size: 10px
      justify-content: flex-end
      align-items: center
      padding-right: 15px
      span
        font-size: 16px
        margin-right: 5px
</style>
