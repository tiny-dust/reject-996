<template>
  <div class="login-page glass-bg">
    <n-form
      ref="formRef"
      class="glass-card"
      size="large"
      :rules="rules"
      :model="form"
      label-placement="left"
    >
      <n-form-item
        path="email"
        label=""
      >
        <n-input
          v-model:value="form.email"
          type="email"
          placeholder="请输入注册的邮箱"
        />
      </n-form-item>
      <n-form-item
        path="password"
        label=""
      >
        <n-input
          v-model:value="form.password"
          type="password"
          show-password-on="click"
          autocomplete="new-password"
          placeholder="请输入密码"
        />
      </n-form-item>
      <n-button
        round
        @click="toLogin"
      >
        登录
      </n-button>
    </n-form>
  </div>
</template>
<script setup lang="ts">
import { FormInst, FormItemRule, FormRules } from 'naive-ui';
import { ref } from 'vue';
import api from '../../api/request';
import { message } from '../../utils/message';

const regCN = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
interface ModelType {
  email: string
  password: string
}

const formRef = ref<FormInst | null>(null);
const rules:FormRules = {
  email: [
    {
      required: true,
      validator(rule:FormItemRule, value: string) {
        return regCN.test(value);
      },
      message: '请输入注册邮箱',
      trigger: ['blur'],
    },
  ],
  password: [
    { required: true, message: '请输入密码' },
  ],
};

const form = ref<ModelType>({
  email: '',
  password: '',
});

function toLogin() {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const res = await api.toLogin(form.value);
      console.log('res: ', res);
    } else {
      console.log(errors);
      message.error('验证失败');
    }
  });
}
</script>
<style lang="less">
.login-page{
  display: flex;
  justify-content: center;
  align-items: center;
  .n-form {
    padding: 40px 60px;
    .n-button {
      width: 100%;
    }
  }
  input {
    background-clip: content-box;
    height: 0 !important;
    padding: 20px 0 !important;
  }
}
</style>
