<template>
  <bar-base>
    <img slot="logo" src="@/assets/img/MainBarUse/logo.png">

    <div slot="centerMenu1">安全产品与方案</div>
    <div slot="centerMenu2">行业解决方案</div>
    <div slot="centerMenu2">安全服务与运营</div>
    <div slot="centerMenu2">安全研究</div>
    <div slot="centerMenu2">合作伙伴</div>
    <div slot="centerMenu2">技术支持</div>

    <img slot="search" src="@/assets/img/MainBarUse/搜索图标.png">
    <div slot="language">English</div>
  </bar-base>
</template>

<script>
  import BarBase from "../common/BarBase";
  export default {
    name: "MainBar",
    components: {BarBase},
  }
</script>


<style scoped>

</style>
