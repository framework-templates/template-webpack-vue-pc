<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-05-07 15:23:47
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-08 17:39:33
-->
<template>
  <el-container>
    <router-view />
  </el-container>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.el-container{
  display: flex;
  justify-content: center;
}
</style>
