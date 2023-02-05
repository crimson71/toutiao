<template >
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type ===1">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type===3">
          <img :src="cover.images[0]" alt="" class="thumb">
          <img :src="cover.images[1]" alt="" class="thumb">
          <img :src="cover.images[2]" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{author}} &nbsp;&nbsp; {{comment}}评论 &nbsp;&nbsp; 发布日期{{pubDate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      dafault: ''
    },
    comment: {
      type: [Number, String],
      dafault: 0
    },
    pubDate: {
      type: String,
      dafault: ''
    },
    cover: {
      // 如果是对象格式的props，default是一个函数，返回他的默认值
      type: Object,
      default: function () {
        return {
          type: 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   .thumb {
     // 矩形黄金比例：0.618
     width: 113px;
     height: 70px;
     background-color: #f8f8f8;
     object-fit: cover;
   }

   .title-box {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
   }

   .thumb-box {
     display: flex;
     justify-content: space-between;
   }

</style>
