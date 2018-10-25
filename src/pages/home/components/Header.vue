<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      景点/目的地/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        text-align: center
        font-size: .24rem
    .header-input
      flex: 1
      height: 0.62rem
      line-height: 0.62rem
      background: #fff
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem;
      color: #ccc
    .header-right
      width: 1.28rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: 0.24rem
</style>
