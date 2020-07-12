<template>
  <div>
  <div class="SolutionsBase">
    <div class="Solutions">
      <h1>行业解决方案  <sub>Solutions</sub></h1>
      <div></div>
      <a v-bind:href= "topUrl">更多></a>
    </div>       <!--行业解决方案部分-->

    <div class="achievements">
      <div class="achievement1"><p><span>{{dataShow1}}</span></p><span>{{dataDescribe1}}</span></div>
      <div class="achievement2"><p><span>{{dataShow2}}</span></p><span>{{dataDescribe2}}</span></div>
      <div class="achievement3"><p><span>{{dataShow3}}</span></p><span>{{dataDescribe3}}</span></div>
      <div class="achievement4"><p><span>{{dataShow4}}</span></p><span>{{dataDescribe4}}</span></div>
    </div>
  </div>


  <div class="workAspects">    <!--几个介绍图标-->
    <h1>{{title}}</h1>
    <p>
      {{text}}
    </p>
    <a v-bind:href= "bottomUrl">更多></a>

    <div class="workAspectsIcon">
      <div class="Aspects" @click="iconBtn1"><div class="icon1"></div><b>政府</b></div>
      <div class="Aspects" @click="iconBtn2"><div class="icon2"></div><b>运营商</b></div>
      <div class="Aspects" @click="iconBtn3"><div class="icon3"></div><b>金融</b></div>
      <div class="Aspects" @click="iconBtn4"><div class="icon4"></div><b>能源</b></div>
      <div class="Aspects" @click="iconBtn5"><div class="icon5"></div><b>交通</b></div>
      <div class="Aspects" @click="iconBtn6"><div class="icon6"></div><b>企业</b></div>
      <div class="Aspects" @click="iconBtn7"><div class="icon7"></div><b>教育</b></div>
      <div class="Aspects" @click="iconBtn8"><div class="icon8"></div><b>医疗</b></div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "ShowSolutionAspects",
    data() {
      return{
        topUrl: 'https://www.nsfocus.com.cn/html/2/',
        bottomUrl: 'https://www.nsfocus.com.cn/index.php?m=content&c=index&a=lists&catid=188',
        dataShow1: '90%',
        dataShow2: '123+',
        dataShow3: '40+',
        dataShow4: '500+',
        dataDescribe1: '部委客服覆盖率',
        dataDescribe2: '央采入围产品型号',
        dataDescribe3: '信息技术应用创新产品',
        dataDescribe4: '政府行业解决方案',
        title: '政府',
        text: '绿盟科技长期致力于政务行业内外网网络安全建设和架构设计，积极参与信息化建设、国产化替代等政策性发展规划，为政务行业用户提供全面的安全解决方案，依据国家主管机构和行业监管机构的合规要求，将其与丰富的行业实践经验相结合，协助政务行业用户提升网络安全整体能力。'
      }
    },
    methods: {
      iconBtn1() {
            return [
            this.dataShow1 = '90%',
            this.dataShow2 =  '123+',
            this.dataShow3 =  '40+',
            this.dataShow4 =  '500+',
            this.dataDescribe1 = '部委客服覆盖率',
            this.dataDescribe2 = '央采入围产品型号',
            this.dataDescribe3 = '信息技术应用创新产品',
            this.dataDescribe4 = '政府行业解决方案',
               this.title = "政府",
               this.text = "绿盟科技长期致力于政务行业内外网网络安全建设和架构设计，积极参与信息化建设、国产化替代等政策性发展规划，为政务行业用户提供全面的安全解决方案，依据国家主管机构和行业监管机构的合规要求，将其与丰富的行业实践经验相结合，协助政务行业用户提升网络安全整体能力。"
       ]
      },
      iconBtn2() {
        return [
          this.dataShow1 = '7个',
          this.dataShow2 =  '100%+',
          this.dataShow3 =  '4亿+',
          this.dataShow4 =  '2亿+',
          this.dataDescribe1 = '工信部网络安全技术应用试点示范项目',
          this.dataDescribe2 = '中国省级运营商全覆盖',
          this.dataDescribe3 = '运营商行业2019销售额',
          this.dataDescribe4 = '态势感知运营商案例',
            this.title = "运营商",
            this.text = "无论是3G、4G，还是今天的5G时代，绿盟科技一直伴随着运营商快速发展，为客户的网络安全发展保驾护航。多年来深耕运营商市场，不断推陈出新，为客户提供着优质的产品和服务，同时结合业务安全需求提供针对性的解决方案。"
        ]
      },
      iconBtn3() {
          return [
          this.dataShow1 = '100%',
          this.dataShow2 =  '4亿+',
          this.dataShow3 =  '20+',
          this.dataShow4 =  '2000+',
          this.dataDescribe1 = '大型银行业务全覆盖',
          this.dataDescribe2 = '2019年金融行业销售额',
          this.dataDescribe3 = '行业获奖解决方案',
          this.dataDescribe4 = '7*24小时云端行业网站监测数量',
            this.title = "金融",
            this.text = "绿盟科技一直专注金融行业的信息安全研究，为银行、证券、保险及互联网金融等行业客户提供了包括电子银行整体安全防护、移动金融交易安全、金融云安全建设与防护、金融企业数据中心安全防护、网络安全保险、企业安全度量、应用开发安全、企业员工内部安全意识教育等特色产品和服务。 "
        ]
      },
      iconBtn4() {
        return [
          this.dataShow1 = '100%',
          this.dataShow2 =  '100%',
          this.dataShow3 =  '100%',
          this.dataShow4 =  '1000+',
          this.dataDescribe1 = '行国内省级电网公司全覆盖',
          this.dataDescribe2 = '各类型发电企业全覆盖',
          this.dataDescribe3 = '油化企业全覆盖',
          this.dataDescribe4 = '能源互联网专项解决方案',
            this.title = "能源",
            this.text = "绿盟科技基于自身网络安全攻防核心能力，结合能源行业近20年安全建设经验积累，为电网、发电、油化、燃气、煤炭等能源企业提供网络安全防控体系建设。面对当前工业互联网、物联网、智慧能源等新型业务模式的建设浪潮，绿盟科技集团聚焦能源行业安全发展态势，持续探索能源企业互联网模式发展新进程，助力能源企业构建网络安全新屏障，满足国家能源生产消费转型升级业务安全需求，为国家能源安全战略保驾护航。"
        ]
      },
      iconBtn5() {
        return [
          this.dataShow1 = '100%',
          this.dataShow2 =  '90%',
          this.dataShow3 =  '85%+',
          this.dataShow4 =  '100+',
          this.dataDescribe1 = '覆盖交通行业头部单位',
          this.dataDescribe2 = '以上覆盖航空业各级机构',
          this.dataDescribe3 = '覆盖高速公路运营单位',
          this.dataDescribe4 = '智慧交通专项安全解决方案',
            this.title = "交通",
             this.text = "绿盟科技集团深入研究交通行业信息安全的发展及趋势，针对国家和行业的政策合规要求及特点，在公路、铁路、民航、海事、轨道交通、港口、物流运输等交通行业的生产、调控、营销和IT管理等业务领域积累了丰富的关键信息基础设施安全防护经验。秉持“网安强国、基建先行”的理念，绿盟科技集团全面支撑交通行业各业务单元网络安全防护建设，长期实现交通行业网络安全可持续发展。"
        ]
      },
      iconBtn6() {
        return [
          this.dataShow1 = '100%',
          this.dataShow2 =  '80%',
          this.dataShow3 =  '200+',
          this.dataShow4 =  '8000+',
          this.dataDescribe1 = '一级央企企业全覆盖',
          this.dataDescribe2 = '二级央企企业全覆盖',
          this.dataDescribe3 = '北京市国资企业网安解决方案',
          this.dataDescribe4 = '中小企业客户',
            this.title = "企业",
            this.text = "绿盟科技深入了解大企业行业所面临的信息安全风险及需求，在中央企业、烟草、房地产、媒体、制造、物流、家电、酒店、服装等行业积累了丰富的行业经验，以满足国家政策法规、业务安全需求为前提，为企业行业用户的业务安全提供了主动、动态、自适应的弹性防御体系，为企业行业用户业务运营保驾护航。"
        ]
      },
      iconBtn7() {
        return [
          this.dataShow1 = '100%',
          this.dataShow2 =  '90%+',
          this.dataShow3 =  '300+',
          this.dataShow4 =  '100+',
          this.dataDescribe1 = '覆盖教育行业头部单位',
          this.dataDescribe2 = '覆盖双一流高校',
          this.dataDescribe3 = '智慧教育安全解决方案',
          this.dataDescribe4 = '高校安全实验室项目',
            this.title = "教育",
            this.text = "绿盟科技作为网络安全行业领军企业，长期支持教育行业开展网络安全建设、科研及网络安全人才培养等工作，提出包括数字图书馆、高校网站、智慧校园、教育云服务平台等等相关安全解决方案，推动教育行业“产学研”的特色发展。"
        ]
      },
      iconBtn8() {
        return [
          this.dataShow1 = '97%',
          this.dataShow2 =  '3000+',
          this.dataShow3 =  '50+',
          this.dataShow4 =  '200+',
          this.dataDescribe1 = '全国三甲医院覆盖率',
          this.dataDescribe2 = '医疗行业等保合规项目',
          this.dataDescribe3 = '卫生厅局专项互联网安全解决方案',
          this.dataDescribe4 = '智慧医疗安全解决方案',
            this.title = "医疗",
            this.text = "绿盟科技在医疗卫生信息安全领域有多年持续深挖和积累的研究成果，安全解决方案紧贴卫生行业信息安全最新政策要求，涵盖卫生行业内各主要安全业务场景，服务于医疗行业客户信息化高度发展的需要。"
        ]
      }
    }
  }
</script>

<style scoped>
  .SolutionsBase{
    background-image: url("../../assets/img/common/solutionBg.png");
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

  .achievements p{
    margin-bottom: 6px;
  }

  .achievements p span{
    color: #6FBA2C;
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
    cursor: text;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
  }

  .Aspects{
    text-align: center;
  }
</style>
