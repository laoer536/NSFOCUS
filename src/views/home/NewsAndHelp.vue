<template>
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
</template>

<script>
  export default {
    name: "NewsAndHelp"
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
</style>
