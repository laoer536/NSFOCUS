<template>
  <div id="Bar">
    <div class="leftIcon">
      <div class="logo"><slot name="logo"></slot></div>
    </div>

    <div class="centerMenu">
      <slot name="centerMenu1"></slot>
      <slot name="centerMenu2"></slot>
      <slot name="centerMenu3"></slot>
      <slot name="centerMenu4"></slot>
      <slot name="centerMenu5"></slot>
      <slot name="centerMenu6"></slot>
    </div>

    <div class="rightSearchLanguage">
      <div class="search"><slot name="search"></slot></div>
      <slot name="language"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Bar"
  }
</script>

<style scoped>
  #Bar {
    position: fixed; /*固定位置  悬浮*/
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;    /*设置显示层级 数值越大 越上层*/

    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    box-shadow: 0px 1px 2px rgba(34,34,34,0.5);
    height: 100px;
    background-color: #222222;    /*定义基本框*/
  }

  .leftIcon{
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .logo img{
    width: 208px;
    height: 32px;
    margin-top: 7px;
    margin-left: 40px;
  }                             /*定义左边logo部分*/

  .centerMenu{
    display: grid;
    grid-template-columns: 1.25fr 1.25fr 1.25fr 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
    margin-left: 120px;
    margin-right: 150px;
    color: #FFFFFF;
  }                             /*定义中间菜单部分*/


  .rightSearchLanguage{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }

  .rightSearchLanguage img{
    height: 20px;
    width: 20px;
    margin-left: 100px;
  }                             /*定义右边搜索和切换语言部分*/


</style>
