<template>
  <div>
    <!-- 页面布局 -->
    <el-container>
      <el-header>
        <!-- 顶端灰色导航 -->
        <el-row type="flex" justify="space-between" class="row1">
          <el-col :span="6" style="padding-left:100px">
            <ul>
              <li>GPresent欢迎您!</li>
              <li>
                <a href="#">请登录</a>
                <a href="#" class="color: red">免费注册</a>
              </li>
            </ul>
          </el-col>
          <el-col :span="8">
            <ul>
              <li><a href="#">我的订单</a></li>
              <li><a href="#">GP会员</a></li>
              <li><a href="#">企业采购</a></li>
              <li>
                <a href="#"> 客户服务<i class="el-icon-arrow-down"></i> </a>
              </li>
              <li>
                <a href="#"> 网站导航<i class="el-icon-arrow-down"></i> </a>
              </li>
            </ul>
          </el-col>
        </el-row>
        <!-- logo、搜索、意向清单 -->
        <el-row type="flex" justify="space-between" class="w">
          <el-col :span="4">
            <h1>购物车</h1>
            <!-- 页面logo -->
            <img src="../assets/logo.png" alt="" class="logo" />
          </el-col>
          <el-col :span="12">
            <!-- 搜索框 -->
            <el-input placeholder="请输入内容" style="margin: 15px;">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <!-- 意向清单 -->
            <el-button type="danger" plain style="margin-top: 15px;" round>
              <i class="el-icon-present" style="margin-right: 5px;"></i>
              意向清单
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="w">
        <el-table :data="Data" style="width: 100%">
          <el-table-column prop="goods_name" label="商品名称" width="520"> </el-table-column>
          <el-table-column prop="goods_price" label="价格" width="180"> </el-table-column>
          <el-table-column prop="goods_num" label="数量" width="180"> </el-table-column>
          <el-table-column prop="goods_name" label="总价" width="180"> </el-table-column>
          <el-table-column label="操作" width="180"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  height: 100px !important;
  h1 {
    display: inline-block;
    margin: 20px 6px 10px 6px;
    color: rgb(228, 133, 148);
  }
  img {
    float: left;
  }
  ul {
    padding: 0px;
    li {
      display: inline-block;
      color: rgb(102, 102, 102);
      font-size: 13px;
      margin-right: 10px;
      a {
        margin-left: 2px;
        padding: 0;
      }
    }
  }
}
.row1 {
  background-color: #f1f1f1;
  height: 30px;
  padding-top: 5px;
}
.logo {
  display: block;
  float: right;
  margin: 10px auto;
  height: 50px;
  width: 50px;
}
</style>
