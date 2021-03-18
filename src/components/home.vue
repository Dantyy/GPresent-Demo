<template>
  <div>
    <!-- 全页布局 -->
    <el-container>
      <!-- 页头 -->
      <el-header>
        <!-- 顶端灰色导航 -->
        <el-row type="flex" justify="space-between" class="row1">
          <el-col :span="6" style="padding-left:100px">
            <ul>
              <li>
                <p>GPresent欢迎您!</p>
              </li>
              <li v-if="showLoginBtn">
                <el-button type="text" @click="loginDialogVisible = true" style="float: left">请登录</el-button>
                <el-button type="text" @click="signupDialogVisible = true" style="float: left" class="color: red">免费注册</el-button>
              </li>
              <li v-else>
                <el-button type="text" @click="logout">退出</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="7">
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
            <img src="../assets/logo.png" alt="" class="logo" />
          </el-col>
          <el-col :span="12">
            <!-- 搜索框 -->
            <el-input placeholder="请输入内容" style="margin: 15px;">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <!-- 愿望清单 -->
            <el-button @click="pushWishlist" type="danger" plain style="margin-top: 15px" round>
              <i class="el-icon-present" style=""></i>
              愿望清单
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <!-- 页面主体 -->
      <el-main>
        <div class="hero">
          <div class="hero-text">
            <h1>在GPresent给朋友一份礼物吧</h1>
            <ul>
              <li><i class="el-icon-present"></i>轻松添加项目，现金资金和体验</li>
              <li><i class="el-icon-refresh"></i>在一个地方同步，更新和共享注册表</li>
              <li><i class="el-icon-notebook-2"></i>跟踪客人的购买并保持井井有条</li>
              <li><i class="el-icon-money"></i>所有操作完全免费</li>
            </ul>
            <div class="hero-buttons">
              <el-button @click="signupDialogVisible = true" type="danger" style="margin-right: 20px">注册一个新账号</el-button>
              <el-button type="danger" plain>寻找朋友</el-button>
              <ul>
                <li style="margin-top: -20px">已经是我们网站的会员？ <el-button type="text" @click="loginDialogVisible = true" style="color: grey">登录</el-button></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="goods w" style="margin-bottom: 30px;">
          <div class="goods-header">
            <h2>
              猜你喜欢
              <el-button @click="pushGoodlist" type="text" style="font-size: 18px; color: #2b72bf">
                查看更多产品
                <i class="el-icon-right"></i>
              </el-button>
            </h2>
          </div>
          <el-row type="flex" justify="space-around">
            <el-col :span="1">
              <el-button round type="danger" plain style="margin-top: 138px; padding: 20px; border-radius: 30px;">
                <i class="el-icon-arrow-left"></i>
              </el-button>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="1">
              <el-button round type="danger" plain style="margin-top: 138px; padding: 20px; border-radius: 30px;">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </el-col>
          </el-row>
        </div>
        <div class="advice w" style="margin-bottom: 50px;">
          <div class="advice-header">
            <h2>
              需要注册建议吗？
              <a href="#" style="font-size: 18px; color: #2b72bf">
                阅读更多
                <i class="el-icon-right"></i>
              </a>
            </h2>
          </div>
          <el-row :gutter="20">
            <el-col :span="8">
              <a href="#">
                <img src="../assets/img/advice1.png" alt="" />
                每个价格范围的50个最佳婚礼注册创意
              </a>
            </el-col>
            <el-col :span="8">
              <a href="#">
                <img src="../assets/img/advice2.png" alt="" />
                最终注册表清单
              </a>
            </el-col>
            <el-col :span="8">
              <a href="#">
                <img src="../assets/img/advice3.png" alt="" />
                这是要求现金礼物的方法
              </a>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <!-- 页脚 -->
      <el-footer>
        <el-row style="background-color: #d83d2e;">
          <el-col :span="10" style="float: left; padding: 40px 0 0 100px;">
            <h2>心动不如行动，赶紧来</h2>
            <el-button @click="signupDialogVisible = true" type="danger" plain>开始你的注册表</el-button>
            <h3>
              已经是会员？
              <el-button @click="loginDialogVisible = true" type="text" style="text-decoration:underline;">登录</el-button>
            </h3>
          </el-col>
          <el-col :span="14" style="float: right;  height: 270px;">
            <img src="../assets/img/footer.png" alt="" style="width: 840px; height: 270px;" />
          </el-col>
        </el-row>
      </el-footer>
      <!-- dialog section -->
      <!-- login -->
      <el-dialog title="登录" :visible.sync="loginDialogVisible" width="30%">
        <!-- 登陆表单区域 -->
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="loginDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="login">登 录</el-button>
        </span>
      </el-dialog>
      <!-- sign up -->
      <el-dialog title="注册用户" :visible.sync="signupDialogVisible" width="50%">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="输入密码">
            <el-input type="password" v-model="form.psw"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="signupDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="signupDialogVisible = false">登 录</el-button>
        </span>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginDialogVisible: false,
      signupDialogVisible: false,
      // 获取到的token
      tokenStr: '',
      showLoginBtn: true,
      form: {
        name: '',
        psw: '',
        email: ''
      },
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        console.log(window.sessionStorage.token)
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        console.log(res)
        if (res.meta.status !== 200) return this.$message.error('登录失败！')
        this.$message.success('登录成功')
        // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
        //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
        window.sessionStorage.setItem('token', res.data.token)
        this.tokenStr = window.sessionStorage.token
        this.showLoginBtn = false
        this.loginDialogVisible = false
      })
    },
    logout() {
      this.tokenStr = ''
      this.showLoginBtn = true
    },
    pushWishlist() {
      if (this.tokenStr === '') {
        this.loginDialogVisible = true
        this.login()
        console.log(this.login.res)
      } else {
        this.$router.push('/wishlist')
      }
    },
    pushGoodlist() {
      if (this.tokenStr === '') {
        this.loginDialogVisible = true
      } else {
        this.$router.push('/goodlist')
      }
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
      float: left;
      color: rgb(102, 102, 102);
      font-size: 13px;
      margin-right: 10px;
      p {
        margin: 0;
      }
      .el-button {
        float: left;
        margin: 3px 2px;
        padding: 0;
      }
    }
  }
  .wishlistItem {
    margin-bottom: -15px !important;
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

.hero {
  margin-top: -20px;
  margin-bottom: 30px;
  height: 520px;
  width: 1440px;
  background: url(../assets/img/hero.png) no-repeat;
  .hero-text {
    padding-left: 100px;
    padding-top: 68px;
    ul {
      margin: 30px 0;
      li {
        font-size: 16px;
        line-height: 30px;
        i {
          margin: 0 15px 0 0;
          font-size: 20px;
        }
      }
    }
  }
}
.goods {
  .goods-img {
    width: 100%;
    height: 250px;
  }
}
.advice {
  img {
    width: 400px;
    height: 250px;
    border-radius: 5px;
  }
  a {
    color: rgb(6, 25, 41);
    font-size: 18px;
    margin-top: 10px;
  }
}
.el-footer {
  background-color: #d83d2e;
  h2,
  h3,
  a {
    color: #fff;
  }
  a {
    text-decoration: underline;
  }
}
</style>
