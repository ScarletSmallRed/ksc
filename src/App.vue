<template>
  <div id="app">

    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">管理</template>
            <el-menu-item index="2-1">菜品</el-menu-item>
            <el-menu-item index="2-2"><router-link to="/">锅底</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="tangDi">汤底口味</router-link></el-menu-item>
            <el-menu-item index="2-4"><router-link to="canZhuo">餐桌</router-link></el-menu-item>
            <el-menu-item index="2-5"><router-link to="eWai">额外收费项目</router-link></el-menu-item>
            <el-menu-item index="2-6"><router-link to="liPin">礼品</router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
    </el-container>


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
