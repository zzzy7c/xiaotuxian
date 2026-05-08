<script setup>
import breadCrumb from './components/breadCrumb.vue'
import { getHomeBannerAPI } from '@/apis/home'
import { ref,onMounted } from 'vue'
const bannerList = ref([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI({ distributionsite: '2' })
  bannerList.value = res.result
}
onMounted(() => {
  getHomeBanner()
})
</script>
<template>
  <div>
    <breadCrumb></breadCrumb>
  </div>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>

    </el-carousel>

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
</style>
