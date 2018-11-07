<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_600x330_1fbb0457.jpg">
      <div class="banner-info">
        <div class="banner-title">三亚海上观光巴士</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe7b3;</span>
          29
        </div>
      </div>
    </div>
    <common-gallary @close="handleCloseClick" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1707/a1/a111b2abc6e7a162a3.img.jpg_r_800x800_88d7fdb9.jpg', 'http://img1.qunarzz.com/sight/p0/1707/e7/e737c7ab401b43aaa3.img.jpg_r_800x800_404cf2c5.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleCloseClick () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    position: relative
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .2rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
