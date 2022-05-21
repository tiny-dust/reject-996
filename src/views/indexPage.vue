<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :bordered="false"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import api from '../api/request';

const columns = [
  {
    key: 'index',
    title: '序号',
    width: '80',
  },
  {
    key: 'name',
    title: '公司名',
  },
  {
    key: 'memo',
    title: '评价',
  },
  {
    key: 'address',
    title: '得分',
    width: '80',
  },
];

const data = ref([]);
async function getAllCompany() {
  const res = await api.getCompanies();
  data.value = res.data.data.map((item:any, index: number) => ({
    index: index + 1,
    ...item,
  }));
}
getAllCompany();
</script>
