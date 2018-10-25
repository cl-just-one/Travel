<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或者拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .3rem
    .search-input
      height: .62rem
      width: 100%
      padding: 0 .1rem
      text-align: center
      color: #666
      border-radius: .06rem
</style>
