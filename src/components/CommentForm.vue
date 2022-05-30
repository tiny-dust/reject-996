<template>
  <n-form
    ref="formRef"
    class="form-wrapper"
    size="large"
    :rules="rules"
    :model="form"
    label-width="80px"
    label-placement="left"
  >
    <n-form-item
      path="name"
      label="公司名"
    >
      <n-input
        v-model:value="form.name"
        disabled
        placeholder="亲输入要补充的公司"
      />
    </n-form-item>
    <n-form-item
      path="score"
      label="评分"
    >
      <n-input
        v-model:value="form.score"
        placeholder="请输入评分"
      />
    </n-form-item>
    <n-form-item
      path="comment"
      label="评价"
    >
      <n-input
        v-model:value="form.comment"
        type="textarea"
        placeholder="请输入评价"
      />
    </n-form-item>
    <n-form-item
      path="pay"
      label="薪酬"
    >
      <n-input
        v-model:value="form.pay"
        placeholder="请输入您的薪酬"
      />
    </n-form-item>
    <n-form-item class="submit-btn">
      <n-button
        round
        @click="submit"
      >
        提交
      </n-button>
    </n-form-item>
  </n-form>
</template>
<script setup lang="ts">
import { FormInst, useMessage } from 'naive-ui';
import { ref } from 'vue';
import api from '../api/request';

const props = defineProps({
  company: {
    type: String,
    default: '',
  },
  companyId: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['complete']);
const message = useMessage();
const formRef = ref<FormInst>();
const form = ref({
  companyId: props.companyId,
  name: props.company,
  score: '0',
  comment: '',
  pay: '12000',
});

const rules = {
  name: [
    { required: true, message: '请输入公司名' },
  ],
  score: [
    { required: true, message: '请输入分数' },
  ],
  comment: [
    { required: true, message: '请输入评价' },
  ],
  pay: [
    { required: true, message: '请输入您当时的大概薪酬' },
  ],
};

function submit() {
  formRef.value?.validate(async (valid) => {
    if (!valid) {
      const res = await api.addComment(form.value);
      if (res.code === 200) {
        message.success('提交成功');
        emit('complete', 1);
      } else {
        message.error(res.message);
        emit('complete', 0);
      }
    }
  });
}
</script>
<style lang="less" scoped>
.form-wrapper{
  padding: 20px 40px 20px 20px;
  background: #fff;
  .submit-btn {
    display: flex;
    justify-content: center;
    .n-form-item-blank {
      width: 100%;
    }
  }
}
</style>;
