<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-24 23:19:34
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-08 17:41:13
-->
<template>
  <el-header>
    <div class="left">
      {{ name }}
      <svg-icon iconClass="money" />
    </div>
    <div class="right">
      <el-input v-model="searchVal" placeholder="请输入关键字" @input="searchInput" />
    </div>
  </el-header>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Header",
  data() {
    return {
      searchVal: "",
    }
  },
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
    searchInput() {
      console.log(this.searchVal)
    },
  },
  mounted() {
    console.log("vuex", this.$store)
  },
}
</script>
<style lang="less" scoped>
.el-header{
  width: 100%;
  max-width: @containerWidth;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  position:fixed;
  top:0;
  box-sizing: border-box;
}
</style>
