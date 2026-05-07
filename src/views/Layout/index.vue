<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LatoutFooter from './components/LatoutFooter.vue'

</script>

<template>
<LayoutNav />
<LayoutHeader />
<RouterView />
<LatoutFooter />
</template>
