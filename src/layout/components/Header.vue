<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-24 23:19:34
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 23:38:34
-->
<template>
  <el-header>
    <div class="left">
      {{ name }}的0-1框架
      <svg-icon iconClass="money" />
    </div>
    <div class="right">
      <el-input v-model="searchVal" @input="searchInput" />
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

<style></style>
