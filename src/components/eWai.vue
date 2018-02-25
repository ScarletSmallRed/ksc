<template>
    <div>
        <h1>额外费用管理页面</h1>
        <!--dialog start-->
        <el-button class="button" round @click="dialogVisible = true">+额外收费项目</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
            <el-input v-model="tableName" placeholder="请输入名称"></el-input>
            <el-input v-model="tableName" placeholder="请输入规格"></el-input>
            <el-input v-model="tableName" placeholder="请输入价格"></el-input>
            <el-radio v-model="radio" label="1">上架</el-radio>
            <el-radio v-model="radio" label="2">下架</el-radio>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!--dialog end-->
        <!--table start-->
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="otherName"
                label="名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="otherDetail"
                label="规格"
                width="180">
            </el-table-column>
            <el-table-column
                prop="otherPrice"
                label="价格">
            </el-table-column>
            <el-table-column
                prop="otherAvailable"
                label="是否上架">
            </el-table-column>
        </el-table>
        <!--table end-->
    </div>
</template>
<script>
    export default {
      data() {
        return {
          tableData: [{
            otherName: '餐盘',
            otherDetail: '3X4',
            otherPrice:10,
            otherAvailable:'已上架'
          }, {
            otherName: '餐桌',
            otherDetail: '3X4',
            otherPrice:10,
            otherAvailable:'已上架'
          }, {
            otherName: '服务费',
            otherDetail: '3X4',
            otherPrice:10,
            otherAvailable:'已上架'
          }, {
            otherName: '小费',
            otherDetail: '3X4',
            otherPrice:10,
            otherAvailable:'已上架'
          }],
          dialogVisible:false,
          radio: '1'
        }
      },
       methods: {
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
    }
  </script>
