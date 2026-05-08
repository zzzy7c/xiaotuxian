<script setup>
import breadCrumb from './components/breadCrumb.vue'
import { getHomeBannerAPI } from '@/apis/home'
import { ref,onMounted } from 'vue'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const bannerList = ref([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI({ distributionsite: '2' })
  bannerList.value = res.result
}
const categoryData = ref({})
const getCategory = (data) => {
  categoryData.value = data
  console.log(categoryData.value)
  // console.log('接收到的数据:', JSON.stringify(data, null, 2))
}
onMounted(() => {
  getHomeBanner()
})
</script>
<template>
  <!-- 面包屑导航 -->
  <div>
    <breadCrumb @getCategoryData="getCategory"></breadCrumb>
  </div>
  <!-- 轮播图 -->
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>

    </el-carousel>

  </div>
  <!-- 商品列表 -->
  <div class="sub-list">
  <h3>全部分类</h3>

  <ul>
    <li v-for="i in categoryData.children" :key="i.id">
      <RouterLink to="/">
        <img :src="i.picture" />
        <p>{{ i.name }}</p>

      </RouterLink>

    </li>

  </ul>

</div>

<div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
  <div class="head">
    <h3>- {{ item.name }}-</h3>

  </div>

  <div class="body">
    <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
  </div>

</div>

</template>
<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;


  img {
    width: 100%;
    height: 500px;
  }
}
.sub-list {
    margin-top: 20px;
    width: 1240px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
.ref-goods {
    background-color: #fff;
    width: 1240px;
    height: 500px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
img {
    width: 100%;
    height: 500px;
  }
</style>
