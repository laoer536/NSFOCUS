<template>
  <div>

    <news-and-help></news-and-help>

  <rotation-chart-base></rotation-chart-base>


    <img src="../../assets/img/绿盟科技2.0.png">
    <img src="../../assets/img/流程脑图.png">           <!--绿盟科技2.0-->

    <show-solution-aspects></show-solution-aspects>   <!-- 绿盟安全2.0部分介绍-->

    <bottom-foot></bottom-foot>


  </div>
</template>

<script>

  import RotationChartBase from "../../components/common/RotationChartBase";
  import NewsAndHelp from "./NewsAndHelp";
  import ShowSolutionAspects from "./ShowSolutionAspects";
  import BottomFoot from "./BottomFoot";
  export default {
    name: "Home",
    components: {ShowSolutionAspects, NewsAndHelp, RotationChartBase, BottomFoot}
  }
</script>

<style scoped>


  /*.smartSecurityBase{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }   */                 /*让其中的子元素锤子水平居中 这里不使用这种方案*/

  img{
    margin-top: 40px;
    width: 100%;
  }


</style>
