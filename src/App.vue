<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <RouterView />
  <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">Home</van-tabbar-item>
        <van-tabbar-item replace to="/about" icon="bulb-o">About</van-tabbar-item>
    </van-tabbar>
</template>


