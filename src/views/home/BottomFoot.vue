<template>
  <div class="foot">   <!--最后部分-->
    <div class="firstColumn">
      <div class="footLogo"><img src="../../assets/img/common/logo.png"></div>
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
        <dt>
          <span class="footIcon">
          <img src="../../assets/img/foot/micro-blog.png" @click="showWb">
          <img src="../../assets/img/foot/WeChat.png" @click="showWx">
          </span>
        </dt>
        <dt>服务热线<span>400-818-6868</span></dt>
        <dt>服务时间<span>7*24小时</span></dt>
      </div>

      <div class="QRcode">
        <div id="wb" v-show="wbActive"> <img src="../../assets/img/foot/wb二维码.png"></div>
        <div id="wx" v-show="wxActive"> <img src="../../assets/img/foot/wx二维码.png"></div>
      </div>

    </div>

    <div class="websiteCertificate">© 2020 NSFOCUS 绿盟科技 www.nsfocus.com All Rights Reserved . 京公网安备 11010802021605号 京ICP备14004349号 京ICP证110355号</div>

  </div>
</template>

<script>
  export default {
    name: "Foot",
    data() {
      return {
        wbActive: false,
        wxActive: false
      }
    },
    methods: {
      showWb (){
       return  [
           this.wbActive = !this.wbActive,
           this.wxActive = false
       ]
  },
      showWx () {
       return  [
         this.wxActive = !this.wxActive,
         this.wbActive = false   /*保证两者不同时出现*/
       ]
      }
    }
  }
</script>

<style scoped>
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
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr 1fr;
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
    cursor: pointer;    /*鼠标移入变手掌可点击样式*/
  }


  .footFormRight dt{
    margin-left: 20%;
  }

  .footFormRight span{
    margin-left: 10px;
  }

  .websiteCertificate{
    text-align: center;
    font-size: 13px;
    color: #6B6C6C;
    margin-top: 10px;
  }

  .QRcode img{
    margin-top: 0px;
    max-width: 100%;
    max-height: 100%;
  }

</style>
