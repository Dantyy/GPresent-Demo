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
                <el-button type="text" @click="logout" style="padding: 0;">退出</el-button>
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
        <!-- logo、搜索、愿望清单 -->
        <el-row type="flex" justify="space-between" class="w">
          <el-col :span="4">
            <h1>愿望清单</h1>
            <!-- 页面logo -->
            <img src="../assets/img/logo.png" alt="" class="logo" />
          </el-col>
          <el-col :span="12">
            <!-- 搜索框 -->
            <el-input placeholder="请输入内容" style="margin: 15px;">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <!-- 返回商品页 & 邀请页面 -->
            <el-button @click="pushGoodlist" type="danger" plain style="margin-top: 15px;">
              返回商品页
            </el-button>
            <el-button @click="pushGV" type="danger" plain style="margin-top: 15px;">
              邀请页面
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="w">
        <!-- 购物车表单区域 -->
        <el-table :data="wishlist" stripe style="width: 100%;">
          <el-table-column prop="goods_name" label="商品名称" width="700"> </el-table-column>
          <el-table-column prop="goods_price" label="价格（元）" width="250"> </el-table-column>
          <el-table-column label="操作" width="250">
            <template slot-scope="scoped">
              <el-button @click="delWishlist(scoped)" size="mini" type="danger" round plain style="text-align: center;"> 删除 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import _data from './datalist.js'
export default {
  data() {
    return {
      // 产品的查询参数对象
      goodQueryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 24
      },
      wishlistQueryInfo: {
        query: '',
        pagenum: 10,
        pagesize: 100
      },
      goodlist: _data.goodlist,
      wishlist: _data.wishlist,
      total: 1,
      // 商品数量
      num: 0
    }
  },
  created() {
    // this.getGoodList()
    // this.getWishlist()
  },
  methods: {
    // getWishlist() {
    //   console.log(this.wishlist)
    // },
    logout() {
      this.$router.push('/home')
    },
    pushGoodlist() {
      this.$router.push('/goodlist')
    },
    pushGV() {
      this.$router.push('/gv')
    },
    delWishlist(item) {
      // console.log(item.$index)
      item.row.good_state = 0
      this.wishlist.splice(item.$index, 1)
      // console.log(this.wishlist)
    }
  }
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
.cell {
  text-align: center !important;
}
</style>
