<template>
  <div class="block">
    <el-carousel  height="900px">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "RotationChartBase",
    data(){
      return {
        imagebox:[{id:0,idView:require('../../assets/img/RotationChartBaseUse/轮播图1.jpg')},
          {id:1,idView:require('../../assets/img/RotationChartBaseUse/轮播图2.jpg')},
          {id:2,idView:require('../../assets/img/RotationChartBaseUse/轮播图3.jpg')},
          {id:3,idView:require('../../assets/img/RotationChartBaseUse/轮播图4.jpg')}
          //imagebox是assets下一个放图片的文件夹
        ]
      }
    }
  }
</script>

<style scoped>
  .block{
    margin-top: 100px;  /*导航条为100px高  这里就需要设置在他之下*/
  }

  img {
    max-width: 100%;
    max-height: 100%;  /* 指定盒子中元素填满该盒子*/
  }



</style>
