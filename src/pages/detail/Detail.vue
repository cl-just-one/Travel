<template>
  <div>
    <detail-banner />
    <detail-header />
    <div class="content">
      <detail-list :list="list" />
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人票三联票',
          children: [{
            title: '成人票三联票 - 某公司'
          }, {
            title: '成人票三联票 - 某集团'
          }]
        }, {
          title: '成人票五联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '老人票'
      }, {
        title: '特惠票'
      }]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
