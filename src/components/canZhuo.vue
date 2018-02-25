<template>
  <div>
    <h1>餐桌管理页面</h1>
      <br>
      <!--dialog start-->
      <el-button class="button" round @click="dialogVisible = true">+新增餐桌</el-button>
      <el-dialog
        title="新增餐桌"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-input v-model="tableName" placeholder="请输入餐桌名称"></el-input>
        <el-input v-model="tableNumber" placeholder="请输入餐桌编号"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false,addtable">确 定</el-button>
        </span>
      </el-dialog>
      <!--dialog end-->
      <br>
      <div>
        <hr>
        <el-button class="button" round type="info">{{tableName}}</el-button>
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    addtable() {
      alert("test button");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  data() {
    return {
      tableName:'',
      tableNumber:0,
      dialogVisible: false,

    };
  }
};
</script>

