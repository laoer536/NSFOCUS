<template>
  <div>

    <div class="drop-down-menu">
    <el-dropdown>
  <div class="el-dropdown-link-left" >
    实时新闻 <i class="el-icon-arrow-down"></i>
  </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>这是一条新闻</el-dropdown-item>
        <el-dropdown-item>这是一条新闻</el-dropdown-item>
        <el-dropdown-item>这是一条新闻</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

      <div class="el-dropdown-LinkRight">
      <el-dropdown>
        <div class="el-dropdown-link-right" >
          <i class="el-icon-arrow-down"></i>请求帮助
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>资源中心</el-dropdown-item>
          <el-dropdown-item>视频中心</el-dropdown-item>
          <el-dropdown-item>安全公告</el-dropdown-item>
          <el-dropdown-item>公司新闻</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
    </div>            <!--新闻部分-->

  <rotation-chart-base></rotation-chart-base>


    <img src="../../assets/img/绿盟科技2.0.png">
    <img src="../../assets/img/流程脑图.png">           <!--绿盟科技2.0-->


    <div class="SolutionsBase">
      <div class="Solutions">
        <h1>行业解决方案  <sub>Solutions</sub></h1>
        <div></div>
        <a>更多></a> </div>       <!--行业解决方案部分-->

      <div class="achievements">
        <div class="achievement1"><p><span>90%</span></p><span>部委客户覆盖率</span></div>
        <div class="achievement2"><p><span>123+</span></p><span>央采入围产品型号</span></div>
        <div class="achievement3"><p><span>40+</span></p><span>信息技术应用创新产品</span></div>
        <div class="achievement4"><p><span>500+</span></p><span>政府行业解决方案</span></div>
      </div>
    </div>


    <div class="workAspects">    <!--几个介绍图标-->
      <h1>政府</h1>
      <p>
        绿盟科技长期致力于政务行业内外网网络安全建设和架构设计，积极参与信息化建设、国产化替代等政策性发展规划，为政务行业用户提供全面的安全解决方案，依据国家主管机构和行业监管机构的合规要求，将其与丰富的行业实践经验相结合，协助政务行业用户提升网络安全整体能力。
      </p>
      <a>更多></a>

      <div class="workAspectsIcon">
        <div class="Aspects"><div class="icon1"></div><b>政府</b></div>
        <div class="Aspects"><div class="icon2"></div><b>运营商</b></div>
        <div class="Aspects"><div class="icon3"></div><b>金融</b></div>
        <div class="Aspects"><div class="icon4"></div><b>能源</b></div>
        <div class="Aspects"><div class="icon5"></div><b>交通</b></div>
        <div class="Aspects"><div class="icon6"></div><b>企业</b></div>
        <div class="Aspects"><div class="icon7"></div><b>教育</b></div>
        <div class="Aspects"><div class="icon8"></div><b>医疗</b></div>
      </div>
    </div>


    <div class="foot">   <!--最后部分-->
        <div class="firstColumn">
          <div class="footLogo"><img src="../../assets/img/logo.png"></div>
          <div class="describe">
            <footer>
            <a>网站地图</a>
            |
            <a>法律声明</a>
            |
            <a>投资者关系</a>
            </footer>
          </div>
        </div>

        <div class="footForm">
          <div>
            <dl>
              <dt>关于我们</dt>
              <dd>公司介绍</dd>
              <dd>公司荣誉</dd>
              <dd>企业刊物</dd>
              <dd>绿盟新闻</dd>
              <dd>工作机会</dd>
            </dl>
          </div>

          <div>
            <dl>
              <dt>如何购买</dt>
              <dd>提交项目需求</dd>
              <dd>在线咨询</dd>
              <dd>请求回电</dd>
              <dd>购买热线</dd>
            </dl>
          </div>

          <div>
            <dl>
              <dt>联系我们</dt>
              <dd>公司总部</dd>
              <dd>分支机构</dd>
              <dd>海外机构</dd>
            </dl>
          </div>

          <div>
            <dl>
              <dt>快速链接</dt>
              <dd>绿盟云</dd>
              <dd>绿盟威胁情报中心NTI</dd>
              <dd>技术博客</dd>
              <dd>安全加社区</dd>
            </dl>
          </div>

          <div class="footFormRight">
          <dt><span class="footIcon"><img src="../../assets/img/foot/微信.png"> <img src="../../assets/img/foot/QQ.png"></span></dt>
            <dt>服务热线<span>400-818-6868</span></dt>
            <dt>服务时间<span>7*24小时</span></dt>
          </div>


        </div>

      <div></div>

    </div>


  </div>
</template>

<script>

  import RotationChartBase from "../../components/common/RotationChartBase";
  export default {
    name: "Home",
    components: {RotationChartBase}
  }
</script>

<style scoped>
  .drop-down-menu{
    z-index: 9;
    background-color: rgba(52, 52, 52, 0.8);
    position: fixed;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
  }


  .el-dropdown-link-left {
    height: 30px;
    cursor: pointer;
    color: #FFFFFF;

    display: flex;
    align-items: center;
  }

  .el-dropdown-link-right {
    height: 30px;
    cursor: pointer;
    color: #FFFFFF;

    display: flex;
    align-items: center;
  }

  .el-dropdown-LinkRight{
    margin-left: auto;
  }

  .el-icon-arrow-down {
    font-size: 15px;
  }

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

  .SolutionsBase{
    background-image: url("../../assets/img/solutionBg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;   /*使图片完美铺满盒子*/
    height: 200px;
    margin-top: 30px;
  }

  .Solutions{
    border-bottom: 1px solid #414141;
    border-bottom-color: rgb(65, 65, 65);
    height: 86px;
    padding-left: 200px;

    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    column-gap: 24px;
    align-items: center;

  }

  .Solutions h1{
    color: #FFFFFF;

  }

  .Solutions sub{
    color: #929292;

  }

  .Solutions a{
    color: #FFFFFF;
  }


  .achievements{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    margin-top: 25px;
    margin-left: 90px;
    margin-right: 90px;
  }

  .achievements p span{
    color: #6FBA2C;
    margin-bottom: 3px;
    font-size: 30px;
  }


  .achievement1{
    text-align: center;
  }

  .achievement2{
    text-align: center;
  }

  .achievement3{
    text-align: center;
  }

  .achievement4{
    text-align: center;
  }

  .workAspects{
    overflow: hidden;
    background: #F7F7F7;
    padding: 54px 0 90px 0;
  }

  .workAspects h1{
    color: #313131;
    text-align: center;
  }

  .workAspects p{
     font-size: 18px;
     line-height: 35px;
     margin-top: 35px;
     color: #313131;
     text-align: center;
     padding-left: 16%;
     padding-right: 16%;
    margin-bottom: 30px;
   }

  .workAspects a{
    display: block;
    width: 255px;
    height: 60px;
    font-size: 18px;
    color: #6fba2c;
    border: 1px solid #6fba2c;
    border-radius: 40px;
    text-align: center;  /* 让a元素中的文字水平居中*/
    line-height: 60px;
    margin: 0 auto;     /*让a元素水平居中的办法*/
  }

  .workAspects a:hover{
    color: #FFFFFF;
    background-color: #6DBC19;
  }

  .workAspectsIcon{
    margin-top: 85px;
    margin-left: 15%;
    margin-right: 15%;
    color: #313131;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .workAspectsIcon b{
    font-size: 20px;
  }

  .icon1{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/政府black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon1:hover{
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
    background: url("../../assets/img/aspectsIcon/政府.png") no-repeat center center;  /*让背景图片水平垂直居中在元素中*/
    background-size: 46px 45px;     /*最好以图片的大小来决定,不然会失真*/
    background-color: #6DBC19;    /*这个就是同时显示背景颜色和图片的方法*/
  }

  .icon2{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/运营商black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon2:hover{
    background: url("../../assets/img/aspectsIcon/运营商.png") no-repeat center center;
    background-size: 46px 45px;
    background-color: #6DBC19;
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
  }

  .icon3{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/金融black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon3:hover{
    background: url("../../assets/img/aspectsIcon/金融.png") no-repeat center center;
    background-size: 46px 45px;
    background-color: #6DBC19;
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
  }

  .icon4{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/能源black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon4:hover{
    background: url("../../assets/img/aspectsIcon/能源.png") no-repeat center center;
    background-size: 46px 45px;
    background-color: #6DBC19;
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
  }

  .icon5{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/交通black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon5:hover{
    background: url("../../assets/img/aspectsIcon/交通.png") no-repeat center center;
    background-size: 46px 45px;
    background-color: #6DBC19;
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
  }

  .icon6{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/企业black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon6:hover{
    background: url("../../assets/img/aspectsIcon/企业.png") no-repeat center center;
    background-size: 46px 45px;
    background-color: #6DBC19;
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
  }

  .icon7{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/教育black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon7:hover{
    background: url("../../assets/img/aspectsIcon/教育.png") no-repeat center center;
    background-size: 46px 45px;
    background-color: #6DBC19;
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
  }

  .icon8{
    height: 100px;
    width: 100px;
    border-radius: 50% 50%;   /*绘制圆形*/
    margin: 0 auto 15px auto;
    background: url("../../assets/img/aspectsIcon/医疗black.png") no-repeat center center;
    background-size: 46px 45px;
  }

  .icon8:hover{
    background: url("../../assets/img/aspectsIcon/医疗.png") no-repeat center center;
    background-size: 46px 45px;
    background-color: #6DBC19;
    box-shadow: 2px 4px 2px rgba(87, 101, 116,1.0);
  }

  .Aspects{
    text-align: center;
  }

  .foot{
    height: 330px;
    background-color: #222222;
  }

  .firstColumn{
    height: 51px;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #404040;
  }

  .footLogo{
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .footLogo img{
    width: 208px;
    height: 32px;
    margin-top: 7px;
  }

  .describe{
    margin-left: auto;    /*使元素靠右*/
  }

  .describe footer{
    font-size: 12px;
    color: #999999;
  }

  .describe a{
    color: #999999;
  }

  .footForm{
    height: 193px;
    border-bottom: 1px solid #404040;
    padding: 20px 15% 20px 15%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  }

  .footForm dt{
    margin-bottom: 10px;
    color: #CCCCCC;
  }

  .footForm dd{
    font-size: 13px;
    margin-bottom: 5px;
    color: #6B6C6C;
  }

  dt:hover{
    color: #F7F7F7;
  }

  dd:hover{
    color: #F7F7F7;
  }

  .footIcon img{
    width: 52px;
    height: 52px;
    margin-top: 0px;
  }


  .footFormRight dt{
    margin-left: 20%;
  }

  .footFormRight span{
    margin-left: 10px;
  }






</style>
