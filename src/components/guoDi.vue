<template>
  <div id="guoDi">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <br>
          锅子
          <br>
          汤底
          <br>
          <br>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div>
            <!--guodi info start-->
            <el-row :gutter="10">
              <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../static/guoDi/guodi01.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <el-button class="button" round>上架</el-button>
                    <div class="bottom clearfix">
                      <div class="time">$xxxx</div>
                      <el-button class="button" round><i class="el-icon-edit"></i></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../static/guoDi/guodi02.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <el-button class="button" round>上架</el-button>
                    <div class="bottom clearfix">
                      <div class="time">$xxxx</div>
                      <el-button class="button" round><i class="el-icon-edit"></i></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../static/guoDi/guodi03.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <el-button class="button" round>上架</el-button>
                    <div class="bottom clearfix">
                      <div class="time">$xxxx</div>
                      <el-button class="button" round><i class="el-icon-edit"></i></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>  
            <!--guodi info end-->
          </div>
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "guoDi"
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
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
  .time {
    font-size: 13px;
    color: #999;
  }
</style>