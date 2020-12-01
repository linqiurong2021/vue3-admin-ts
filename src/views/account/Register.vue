<template>
  <div class="account">
    <div class="form-wrap">
      <a-form :model="form" @finish="register" :rules="rules">
        <a-form-item name="username">
          <label class="color-white">用户名</label>
          <a-input type="text" v-model:value="form.username" autocomplete="off"/>
        </a-form-item>
        <a-form-item name="password">
          <label class="color-white">密码</label>
          <a-input type="password" v-model:value="form.password" autocomplete="off"/>
        </a-form-item>
       <a-form-item name="confirm">
          <label class="color-white">确认密码</label>
          <a-input type="password" v-model:value="form.confirm" autocomplete="off"/>
        </a-form-item>
        <a-form-item name="code">
          <label class="color-white">校验码</label>
         <a-row :gutter="8">
          <a-col :span="14"><a-input  v-model:value="form.code" type="password" autocomplete="off"/></a-col>
          <a-col :span="10"><a-button type="primary" block @click="getCode" :loading="btnLoading" :disabled="btnDisabled" >{{btnText}}</a-button></a-col>
        </a-row>
        </a-form-item>
        <a-form-item>
          <!-- <Captcha /> -->
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :span="12" >注册</a-button>
        </a-form-item>
      </a-form>
      <div class="text-center font-size-12">
        <a href="#" class="color-white">忘记密码</a> | <router-link to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue'
// import Captcha from '@/components/Captcha'
import { checkPhone, checkConfirm, checkPassword,checkCode } from '@/validators/register'
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: "Login",
  components: {
    // Captcha
  },
  setup() {
    const formConfig = reactive({
      // 表单字段
      form: {
        username: "",
        password: "",
        confirm: "",
        code: ""
      },
      // 表单校验规则
      rules: {
        username: [{ validator: checkPhone, trigger: 'change' }],
        password: [{ validator: checkPassword, trigger: 'change' }],
        confirm: [{ validator: checkConfirm, trigger: 'change' }],
        code: [{ validator: checkCode, trigger: 'change' }]
      }
    })
    const form = toRefs(formConfig)
    const checkCodeData = reactive({
      btnText: '获取验证码',
      btnLoading: false,
      btnDisabled: false,
      countDown: 60,
      timer: -1
    })
    const data = toRefs(checkCodeData)
    // 注册
    const register = () => {
      console.log('register')
    }
    // 获取校验码
    const getCode = () => {

      if(!formConfig.form.username){
        message.error("用户名不能为空")
        return
      }
      checkCodeData.timer!=-1 && clearInterval(checkCodeData.timer)
      checkCodeData.timer  =  setInterval(()=>{
        let second = checkCodeData.countDown--
        checkCodeData.btnText = `${second} 秒`
        if (second <= 0) {
          clearInterval(checkCodeData.timer)
          checkCodeData.btnText = '重新获取'
        }
      }, 1000)
      console.log('getCode')
    }
    return {
      ...form,
      ...data,
      register,
      getCode
    }
  }
});
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
