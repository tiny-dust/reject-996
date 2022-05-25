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
          :input-props="{ type: 'email'}"
          placeholder="请输入注册的邮箱"
        />
      </n-form-item>
      <n-form-item
        path="code"
        label=""
      >
        <n-input
          v-model:value="form.code"
          placeholder="邮箱验证码"
          :input-props="{ autoComplete: 'off' }"
        />
        <n-button
          style="width:120px;margin-left: 8px;"
          :disabled="disable !== 0"
          @click="getCode"
        >
          {{ disable === 0 ?'获取验证码': disable+'s' }}
        </n-button>
      </n-form-item>
      <n-form-item
        path="password"
        label=""
      >
        <n-input
          v-model:value="form.password"
          type="password"
          show-password-on="click"
          :input-props="{ autoComplete: 'new-password' }"
          placeholder="请输入密码"
        />
      </n-form-item>
      <n-button
        round
        @click="toRegister"
      >
        注册
      </n-button>
    </n-form>
  </div>
</template>
<script setup lang="ts">import {
  FormInst, FormRules, FormItemRule, useMessage,
} from 'naive-ui';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../../api/request';

const router = useRouter();

// eslint-disable-next-line no-useless-escape
const regCN = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
interface ModelType {
  email: string
  code: string
  password: string
}

const message = useMessage();
const formRef = ref<FormInst | null>(null);
const rules:FormRules = {
  email: [
    {
      key: 'email',
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
  code: '',
  password: '',
});

const disable = ref(0);

async function toRegister() {
  formRef.value?.validate(async (err) => {
    if (!err) {
      const res = await api.toRegister(form.value);
      if (res.code === 200) {
        message.success('注册成功');
        setTimeout(() => {
          router.push('/login');
        }, 500);
      }
    }
  });
}

function checkRule(time = 60) {
  disable.value = time;
  setTimeout(() => {
    if (disable.value > 0) {
      checkRule(time - 1);
    }
  }, 1000);
}

function getCode() {
  formRef.value?.validate(
    async (err) => {
      if (!err) {
        const p = {
          email: form.value.email,
        };
        const res = await api.registerEmailCode(p);
        if (res.code === 200) {
          message.success('请去前往邮箱查看验证码');
          checkRule();
        } else {
          message.error(res.message);
        }
      }
    },
    (rule) => rule.key === 'email',
  );
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
