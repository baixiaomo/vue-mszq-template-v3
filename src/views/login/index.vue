<!--登陆页面-->
<template>
  <div>
    <el-container>
      <el-main class="main">
        <div class="login-container">
          <div class="login-right">
            <el-tabs v-model="activeName">
              <el-tab-pane name="loginForm">
                <span slot="label" style="font-weight: bold"><i slot="prefix" class="fas fa-dragon" />&nbsp;用户名登录</span>
                <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" label-position="left">
                  <el-form-item prop="username">
                    <el-input v-model.trim="loginForm.username" :placeholder="$t('login.username')" name="username" type="text" autocomplete="off">
                      <i slot="prefix" class="fas fa-user" />
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model="loginForm.password" :placeholder="$t('login.password')" name="password" type="password">
                      <i slot="prefix" class="fas fa-lock" />
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-col :span="12" style="overflow:hidden">
                      <el-form-item prop="captcha">
                        <el-input v-model="loginForm.code" type="test" auto-complete="off" placeholder="验证码, 单击图片刷新" style="width: 100%;" @keyup.enter.native="handleLogin" />
                      </el-form-item>
                    </el-col>
                    <el-col class="line" :span="1">&nbsp;</el-col>
                    <el-col :span="11">
                      <el-form-item>
                        <img style="width: 85%;height: 35px;float: right;" class="pointer" :src="src" alt="" @click="refreshCaptcha">
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                  <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">登陆</el-button>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import QS from 'qs'
import axios from 'axios'
export default {
  name: 'Login',
  data: function () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        code: '',
        token: '',
        t: '',
        height: 100
      },
      src: '',
      loginRules: {
        username: [{ required: true, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined,
      activeName: 'loginForm',
      isDisabled: false,
      codeLoading: false
    }
  },
  created () {
    this.refreshCaptcha()
    this.height = window.innerHeight
  },
  mounted () {
    document.body.className = 'theme-dark-gold22'
  },
  methods: {
    // 用户名 密码登录
    handleLogin: function () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // 密码加密
          this.loginForm.password = this.$md5(this.loginForm.password)
          const data = QS.stringify(this.loginForm)
          axios.post('/bcms/login', data).then(res => {
            if (res.data.code === 200) {
              this.$store.commit('SET_TOKEN', res.data.code)
              this.loading = false
              this.$router.push({ path: this.redirect || '/' })
            } else {
              this.$message({
                message: res.data.msg,
                type: 'warning'
              })
              this.loading = false
            }
          }).catch(() => {
            this.loading = false
            this.refreshCaptcha()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    refreshCaptcha: function () {
      this.loginForm.code = ''
      this.loginForm.t = new Date().getTime()
      this.src = process.env.BASE_API + '/captcha.jpg?t=' + this.loginForm.t
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .main{
    height: 100vh;
  }
  .login-container {
    width: 550px;
    border-radius: 5px;
    overflow: hidden;
    @include themify() {
      background: themed('card-bg');
      border-color: themed('card-border');
    }
    box-shadow: 0 0 25px #cac6c6;
    margin: 14% auto;
    padding: 10px 0;
    .login-right {
      width: 75%;
      margin: 10px auto;
      padding: 15px;
      .title {
        margin: 0 auto 30px auto;
        text-align: center;
        color: #505458;
      }
      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #454545;
      }
    }

  }
</style>
