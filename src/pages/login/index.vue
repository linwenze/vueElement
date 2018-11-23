<template>
    <div id="login">
      <div class="login-form-box">
        <el-form ref="form" :model="form">
          <el-form-item>
            <span>用户登录</span>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.account" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item class="password-item">
            <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group class="remember" v-model="form.check">
              <el-checkbox label="记住密码" name="check"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        account: 'admin',
        password: 'admin',
        check: ['记住密码']
      }
    }
  },
  methods: {
    login () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form-box {
  height: 280px;
  width: 400px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 0 6px 5px #DCDCDC;
  border-radius: 4px;
  position: absolute;
  left: 45%;
  top: 40%;
  margin-left: -200px;
  margin-top: -140px;

  span {
    font-family: Arial;
    font-weight: bold;
  }
}

.password-item {
  margin-bottom: 5px;
}

.remember {
  float: left;
}

</style>
