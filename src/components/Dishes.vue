<template>
  <el-container id="dishes">

    <el-header>
      <div>
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

      </div>
    </el-header>

    <el-row :gutter="40" style="width: 85%">

          <el-col :span="6">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="-1"
                            @click="setCategoriesFilter('all')">
                <i class="el-icon-menu"></i> 全部菜品
              </el-menu-item>
              <el-menu-item v-for="(item, index, key) in categories"
                            :index="getIndex(index)"
                            :key="key"
                            @click="setCategoriesFilter(item.name)">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu>
            <el-button type="primary">
              <i class="el-icon-edit"></i> 编辑
            </el-button>

          </el-col>


          <el-col :span="18">
            <el-row>
              单价排序
              <el-button :type="isPriceUp==-1?'primary':''"
                         size="mini"
                         @click="sortProducts"><i class="el-icon-arrow-down"></i></el-button>
              <el-button size="mini"
                         :type="isPriceUp==1?'primary':''"
                         @click="sortProducts"><i class="el-icon-arrow-up"></i></el-button>
            </el-row>
						<el-row :gutter="20">
							<el-col :md="8" :lg="8" :xl="6"
											v-for="(item) in products"
											:key="item.name"
											style="margin-bottom: 10px">
								<el-card :body-style="{ padding: '10px' }">
									<img :src="getImgUrl(item.name)" class="image">
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
</template>

<script>
  import axios from 'axios'
  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
    export default {
      components: {
        ElHeader,
        ElContainer},
      name: "dish",
      data() {
        return {
          input23: '',
          categories: [],
          products: [],
          currentDate: new Date(),
          categoryChecked: 'all',
          isPriceUp: 1
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
          var params = {
            category: this.categoryChecked,
            isPriceUp: this.isPriceUp
          }
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
        },
        getImgUrl(name) {
          return 'static/1比1/' + name + '.jpg'
        },
        setCategoriesFilter(categories) {
          this.categoryChecked = categories
          this.getProducts()
        },
        sortProducts() {
          this.isPriceUp = (this.isPriceUp === 1) ? -1 : 1
          this.getProducts()
        }
      }
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-header {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 85%;
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
