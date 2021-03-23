<template>
  <div>
    <!-- 页面布局 -->
    <el-container>
      <!-- 页头 -->
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
        <!-- logo、搜索、购物车、愿望清单 -->
        <el-row type="flex" justify="space-between" class="w">
          <el-col :span="4">
            <h1>GPresent</h1>
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
            <!-- 愿望清单 & 邀请页面 -->
            <el-button @click="pushWishlist" type="danger" plain style="margin-top: 15px;">
              <i class="el-icon-present" style="margin-right: 5px;"></i>
              愿望清单
              <i class="el-icon-arrow-right"></i>
            </el-button>
            <el-button @click="pushGV" type="danger" plain style="margin-top: 15px;">
              邀请页面
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!-- 导航栏 -->
        <div class="nav w">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!-- 一级菜单 -->
            <el-menu-item :index="item.cat_id + ''" v-for="item in catelist" :key="item.cat_id">
              <template>
                <!-- 文本 -->
                <span>{{ item.cat_name }}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 产品展示 -->
        <div class="goods w">
          <el-row :gutter="20">
            <div :index="item.goods_id + ''" v-for="item in cat_goodlist" :key="item.goods_id">
              <el-col :span="4" style="margin-top: 20px">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img :src="item.goods_pics" class="image" />
                  <div style="padding: 14px;">
                    <div class="goods-name" v-if="item.goods_name !== undefined && item.goods_name.length > 17">{{ item.goods_name.substr(0, 17) }}...</div>
                    <div class="goods-name" v-else>{{ item.goods_name }}</div>
                    <div style="text-align:right; margin-bottom: 5px">¥ {{ item.goods_price }}</div>
                    <el-button v-if="item.goods_state == 1" @click="removeFromWishlist(item)" size="mini" type="danger" style="float: right; margin-bottom: 14px">
                      - 移出清单
                    </el-button>
                    <el-button v-else @click="addToWishlist(item)" size="mini" type="danger" plain style="float: right; margin-bottom: 14px">
                      + 愿望清单
                    </el-button>
                  </div>
                </el-card>
              </el-col>
            </div>
          </el-row>
        </div>
        <!-- 分页区域 -->
        <!-- <el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" background layout="prev, pager, next" :total="total" style="text-align: center; margin-bottom: 30px;"> </el-pagination> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
import _data from '../components/datalist.js'
export default {
  data() {
    return {
      // // 类别的查询参数对象
      // cateQueryInfo: {
      //   type: 1,
      //   pagenum: 1,
      //   pagesize: 15
      // },
      // 产品的查询参数对象
      goodQueryInfo: {
        pagenum: 1,
        pagesize: 18
      },
      // 商品分类的数据列表
      catelist: _data.catelist,
      // 商品的数据列表
      goodlist: _data.goodlist,
      // 愿望清单的数据列表
      wishlist: _data.wishlist,
      // 对应类别的goodlist
      cat_goodlist: [],
      activeIndex: '1',
      total: 0
    }
  },
  created() {
    this.startPage()
    // this.getMenuList()
    // this.getGoodList()
    // this.handleSelect(Number(this.activeIndex))
  },
  methods: {
    startPage() {
      for (var item in this.goodlist) {
        if (String(this.goodlist[item].cat_id) === '1') {
          this.cat_goodlist.push(this.goodlist[item])
        }
      }
      // console.log(this.cat_goodlist)
    },
    handleSelect(key) {
      // 先清空产品列表
      this.cat_goodlist = []
      // 使用for循环把当前分类id的goodlist set进cat_goodlist里面
      for (var item in this.goodlist) {
        if (String(this.goodlist[item].cat_id) === key) {
          this.cat_goodlist.push(this.goodlist[item])
        }
      }
      console.log(this.cat_goodlist)
    },
    pushWishlist() {
      this.$router.push('/wishlist')
    },
    pushGV() {
      this.$router.push('/gv')
    },
    // 加入愿望清单
    async addToWishlist(item) {
      item.goods_state = 1
      this.wishlist.push(item)
      this.$message.success('添加成功')
    },
    // 移出愿望清单
    async removeFromWishlist(item) {
      item.goods_state = 0
      this.wishlist.pop(item)
      this.$message.success('移出成功')
    },
    logout() {
      this.$router.push('/home')
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
.goods {
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 250px;
  }
  .goods-name {
    height: 44px;
    width: 150px;
    margin-bottom: 10px;
  }
}
</style>
