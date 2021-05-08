<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-25 09:47:37
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-08 17:30:01
-->
<template>
  <div class="layout">
    <Header />
    <div class="layout-container">
      <Container />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header"
import Container from "./components/Container"
import Footer from "./components/Footer"
export default {
  name: "Layout",
  components: {
    Header,
    Container,
    Footer,
  },
  mounted() {
    this.$store.dispatch("user/getInfo")
  },
}
</script>

<style lang="less" scoped>
.layout {
  width: @containerWidth;
  margin: 0 auto;
  &-container {
    margin: 60px 0;
    padding: 20px;
  }
}
</style>
