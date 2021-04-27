<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-25 09:47:37
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 15:55:51
-->
<template>
  <div class="layout-container">
    <Header />
    <Container />
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

<style></style>
