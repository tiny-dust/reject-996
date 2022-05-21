<template>
  <n-space style="margin-bottom: 8px;">
    <n-input
      v-model:value="keyword"
      placeholder="请输入公司名称"
    />
    <n-button @click="getAllCompany()">
      搜索
    </n-button>
    <n-button @click="reset">
      重置
    </n-button>
  </n-space>
  <n-data-table
    :columns="columns"
    :data="data"
    :bordered="false"
    :max-height="712"
    :min-height="712"
    :loading="loading"
    remote
    :on-update:sorter="sortCompanyScore"
    :pagination="{
      ...pagination,
      itemCount: total,
      pageCount,
      onChange: pageChange,
      onUpdatePageSize:pageSizeChange,
    }"
  />
</template>
<script setup lang="ts">
import { DataTableSortState } from 'naive-ui';
import { reactive, ref } from 'vue';
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
    key: 'comment',
    title: '评价',
  },
  {
    key: 'score',
    title: '得分',
    width: '80',
    sorter: true,
  },
];

const data = ref([]);
const keyword = ref('');
const total = ref(0);
const pageCount = ref(0);
const loading = ref(false);
let sortType = 1;

async function getAllCompany(page = 1, pageSize = 15) {
  loading.value = true;
  const p = {
    search: keyword.value,
    page,
    pageSize,
    sortType,
  };
  const res = await api.getCompanies(p);
  total.value = res.data.total;
  pageCount.value = Math.ceil(total.value / pageSize);
  data.value = res.data.data.map((item:any, index: number) => ({
    index: index + 1,
    ...item,
  }));
  loading.value = false;
}

const pagination = reactive({
  page: 1,
  pageSize: 15,
  showSizePicker: true,
  pageSizes: [15, 20, 30, 50],
});

function pageChange(page: number) {
  keyword.value = '';
  pagination.page = page;
  getAllCompany(pagination.page, pagination.pageSize);
}

function pageSizeChange(pageSize:number) {
  keyword.value = '';
  pagination.pageSize = pageSize;
  pagination.page = 1;
  getAllCompany(pagination.page, pagination.pageSize);
}

function reset() {
  keyword.value = '';
  pagination.page = 1;
  pagination.pageSize = 15;
  getAllCompany(pagination.page, pagination.pageSize);
}

function sortCompanyScore(options:DataTableSortState) {
  sortType = options.order === 'descend' ? 1 : 0;
  reset();
}

getAllCompany();
</script>
