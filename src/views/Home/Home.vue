<template>
  <div class="home-cotainer">
    <!-- 头部区域 -->
    <van-nav-bar
  title="地瓜头条" :fixed="true"
/>
<!-- 导入，注册，使用ArticalInfo组件 -->
<van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <ArticalInfo  v-for="item in articalList" :key="item.art_id"
    :title="item.title"
    :author="item.aut_name"
    :comment="item.comm_count"
    :pubDate="item.pubdate"
    :cover="item.cover"></ArticalInfo>

  </van-list>
</van-pull-refresh>

  </div>

</template>

<script>
import { getArticalAPI } from '@/api/aritcalAPI'
import ArticalInfo from '@/components/ArticalInfo.vue'
import _ from 'lodash'
const fn = null
export default {
  components: {
    ArticalInfo
  },
  name: 'CmpHome',
  data () {
    return {
      page: 1,
      limit: 10,
      articalList: [],
      // 页面是否加载下一页数据，true不会加载下一页数据
      loading: true,
      // 页面是否加载完成
      finished: false,
      // 是否下拉刷新默认false
      isLoading: false
    }
  },
  methods: {
    recordTopHandler () {
      // _.debounce作用是防抖，trailing=true] (boolean): 指定在延迟结束后调用
      return _.debounce(() => {
        this.$router.meta.top = window.scrollY
      }, 50, { trailing: true })
    },
    async initArticalList (isRefresh) {
      const { data: res } = await getArticalAPI(this.page, this.limit)
      if (isRefresh) {
      // 成立是下拉刷新，新数据放在前面
        this.articalList = [...res, ...this.articalList]
        this.loading = false
      } else {
      // 不成立新数据放在后面

        this.articalList = [...this.articalList, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad () {
      this.page++
      this.initArticalList()
      this.isLoading = true
    },
    onRefresh () {
      this.isLoading = true
      this.page++
      this.initArticalList(true)
    }
  },
  // 下拉刷新处理函数

  created () {
    this.initArticalList()
  },
  // 页面激活时读取页面存储信息
  activated () {
    const fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  // 页面被缓存后移除事件监听
  deactivated () {
    window.removeEventListener('scroll', fn)
  }

}
</script>

<style lang="less" scoped>

.home-cotainer {
  padding: 46px 0 50px 0;

}

</style>
