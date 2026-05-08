<script setup>
import Homebanner from './components/Homebanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeProduct from './components/Homeproduct.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
</script>
<template>
  <div>
    <div class="container">
      <Homebanner></Homebanner>
      <HomeCategory></HomeCategory>
    </div>

    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>
  </div>
</template>
