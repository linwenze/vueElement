<template>
  <div class="login-container">
    <div class="login-panel" :class="{'login-panel-lg': false}">
      <div class="text-center">
        <img class="logo" src="~@/assets/images/login/logo.png" alt=""/>
      </div>
        <h2 class="text-center">车商通4s.scrm登录</h2>
        <el-form :model="loginData" @keyup.enter.native='submitForm("loginForm")' :rules="rules" ref="loginForm" class="login-form">
          <el-form-item prop="username">
            <el-input type="text" v-model.trim="loginData.username" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model.trim="loginData.password" placeholder="密码"></el-input>
          </el-form-item>
          <!-- <el-form-item>
          <el-input type="text" class="checknum" v-model.trim="loginData.checkNum" placeholder="验证码"></el-input>
          <img class="checkImg" src=""/>
        </el-form-item> -->
          <el-form-item class="remenber">
            <input type="checkbox" v-model="rememberme" />记住用户名
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="form-btn" @click='submitForm("loginForm")' :loading="loading">登录</el-button>
          </el-form-item>
          <!-- <el-form-item class="margin-bottom-0">
          <el-button type="text" class="form-btn forgetPass">忘记密码?</el-button>
        </el-form-item> -->
          <el-form-item class="margin-bottom-35">
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
import * as Http from "@/services/api/login";
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: ['blur', 'change'] }],
        password: [{ required: true, message: '请输入密码', trigger: ['blur', 'change'] }],
      },
      loading: false,
      rememberme: false
    }
  },
  created() {
    this.initData();
  },
  methods: {
    ...mapMutations(['closeLoading','saveUser']),
    initData() {
      localStorage.removeItem('userInfo');
      if (localStorage.getItem('RememberMe')) {
        this.rememberme = true;
        const user = JSON.parse(localStorage.getItem('RememberMe'));
        this.loginData.username = user.username;
      }
    },
    submitForm(formName) {
      this.loading = true;
      let { username, password } = this.loginData;
      let params = {
        username: username,
        psd: password,
        clientVersion: '',
        mac: '',
        verifyCode: ''
      };
      this.$fetch.login.loginOld(params).then((res) => {
        let shareKey = res.shareKey;
        this.login(shareKey)
      }).catch((err) => {
        //旧系统登录失败
        console.log(err)
        this.login()
      })
    },
    login(shareKey) {
      let { username, password } = this.loginData;
      let params = { username, password, shareKey };
      this.$fetch.login.toLogin(params).then((res) => {
        this.closeLoading();
         localStorage.setItem('user_info', JSON.stringify(res.data));
         this.saveUser(res.data);//保存用户信息
        this.$router.push('/crownpin');
        this.loading = false;
      }).catch((err) => {
        this.closeLoading();
        this.loading = false;
      })
    },
    checkRemenberMe() {
      if (this.rememberme) {
        localStorage.setItem('RememberMe', JSON.stringify({
          username: this.loginData.username
        }));
      } else {
        localStorage.removeItem('RememberMe');
      }
    },
    loginFn() {
      this.loading = true;
      let { username, password } = this.loginData;
      let params = { username: username, password: password };
      // Http.login(params).then(res => {
      //   this.loading = false;
      //   this.$handleResponse(res, res=>{
      //     let { menus, identity } = res;
      //     localStorage.setItem('userInfo', JSON.stringify(identity));
      //     if(menus && menus.length){ // 跳到第一个菜单页面
      //       this.$router.push({path: "/" + menus[0].url});
      //     } else {
      //       this.$router.push('/index');
      //     }
      //   });
      // }).catch(res => {
      //   this.loading = false;
      // })
    }
  }
}

</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background: url('~@/assets/images/login/bg.png');
}

.login-panel {
  width: 560px;
  min-height: 400px;
  background: #f4f4f4;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  padding: 25px 140px;

  h2 {
    height: 55px;
    font-size: 21px;
  }

  .logo {
    margin: 15px 0 10px;
    width: 55px;
    height: 55px;
  }
}

.login-panel-lg {
  width: 580px;
}

.checknum {
  width: 65%;
}

.checkImg {
  width: 30%;
  height: 40px;
  vertical-align: middle;
}

.form-btn {
  width: 100%;
}

.remenber {
  /deep/ .el-form-item__content {
    line-height: 15px;
  }
}

.el-form-item {
  margin-bottom: 15px;

  /deep/ .el-form-item__error {
    top: 11px;
    right: -100px;
    left: 296px;
  }
}

.forgetPass {
  /deep/ span {
    color: #222;
  }
}

.margin-bottom-35 {
  margin-bottom: 35px;
}

</style>
