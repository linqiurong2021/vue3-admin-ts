<template>
 <div class="account">
    <div class="form-wrap">
      <a-form :form="form">
        <a-form-item>
          <label class="color-white">用户名</label>
          <a-input type="text" autocomplete="off"/>
        </a-form-item>
        <a-form-item>
          <label class="color-white">密码</label>
          <a-input type="password" autocomplete="off"/>
        </a-form-item>
        <a-form-item>
          <captcha />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="check">登录</a-button>
        </a-form-item>
      </a-form>
      <div class="text-center font-size-12">
        <a href="#" class="color-white">忘记密码</a> | <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref,ref } from 'vue';
import Captcha from '@/components/Captcha/index.vue'
export default defineComponent({
  name: 'Login',
  components: {
    Captcha
  },
  setup() {
    //
    const count = ref<number>(10)
    console.error(count.value)
  }
});
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

