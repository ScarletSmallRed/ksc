<template>
  <el-container id="dishes">

    <el-header>
      <el-row>
        <el-col :span="5"><div class="grid-content bg-purple">
          <el-button type="primary">
            <i class="el-icon-circle-plus"></i> 新增餐厅
          </el-button>
        </div></el-col>
        <el-col :span="6" :offset="13"><div class="grid-content bg-purple">
              <el-input
                placeholder="请输入内容"
                v-model="input23">
                <i slot="suffix" class="el-input__icon el-icon-search" @click="search"></i>
              </el-input>
        </div></el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">菜品一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-edit"></i>
            <span slot="title">编辑</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
      name: "dish",
      data() {
        return {
          input23: ''
        }
      },
      methods: {
        search() {
          console.log('search')
        }
      }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-container {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
