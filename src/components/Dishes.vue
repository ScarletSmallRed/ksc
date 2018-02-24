<template>
  <el-container id="dishes">

    <el-header>
      <el-row style="width: 85%">
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

    <el-container style="width: 85%">
      <el-row :gutter="10">

        <el-col :span="6">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="-1">
                <i class="el-icon-menu"></i> 全部菜品
              </el-menu-item>
              <el-menu-item v-for="(item, index, key) in categories"
                            :index="getIndex(index)"
                            :key="key">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu>
            <el-button type="primary">
              <i class="el-icon-edit"></i> 编辑
            </el-button>
        </el-col>


        <el-col :span="18">
            <el-row :gutter="20">
              <el-col :md="8" :lg="8" :xl="6"
                      v-for="(item) in products"
                      :key="item.name"
                      style="margin-bottom: 10px">
                <el-card :body-style="{ padding: '10px' }">
                  <img :src="'./../../Resource/img/1比1/' + item.name + '.jpg'" class="image">
                  <div style="padding: 14px;">
                    <span>{{item.name}}</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ item.price }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
        </el-col>


      </el-row>
    </el-container>
  </el-container>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "dish",
      data() {
        return {
          input23: '',
          categories: [],
          products: [],
          currentDate: new Date()
        }
      },
      mounted() {
        this.getCategories()
        this.getProducts()
      },
      methods: {
        search() {
          console.log('search')
        },
        getCategories() {
          var params = {}
          axios.get('/categories/list', {
            params: params
          }).then((response) => {
            var res = response.data
            if (res.status === '0') {
              this.categories = res.result.list[0].categories
            } else {
              this.categories = []
            }
          })
        },
        getProducts() {
          var params = {}
          axios.get('/products/list', {
            params: params
          }).then((response) => {
            var res = response.data
            if (res.status === '0') {
              console.log(res.result.list)
              this.products = res.result.list
            } else {
              this.products = []
            }
          })
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        getIndex(index) {
          return String(index)
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

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
