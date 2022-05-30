<template>
  <n-space justify="space-between">
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
    <n-button
      type="info"
      @click="addFrom = true,isCompany = 1"
    >
      新增公司
    </n-button>
  </n-space>
  <n-data-table
    :columns="columns"
    :data="tableData"
    striped
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
  <n-modal
    v-model:show="addFrom"
  >
    <n-card
      style="width: 600px"
      :title=" isCompany === 1 ? '添加公司' : '添加评论'"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <Component
        :is="isCompany === 1 ? CompanyForm : CommentForm"
        :company="company.name"
        :company-id="company.id"
        @complete="isComplete"
      />
    </n-card>
  </n-modal>
  <n-modal
    v-model:show="showModal"
  >
    <n-card
      style="width: 1400px;height:600px"
      title="评价详情"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button
          type="info"
          @click="addFrom = true,isCompany = 0"
        >
          添加评论
        </n-button>
      </template>
      <n-data-table
        class="modal-table"
        :columns="detailCol"
        :data="detail"
        striped
        :bordered="false"
        :max-height="480"
        :min-height="480"
      />
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { DataTableSortState, NButton, useMessage } from 'naive-ui';
import { h, reactive, ref } from 'vue';
import api, { Company, CompanyDetail } from '../api/request';
import CompanyForm from '../components/CompanyForm.vue';
import CommentForm from '../components/CommentForm.vue';

const message = useMessage();
const tableData = ref<Company[]>([]);
const keyword = ref('');
const total = ref(0);
const pageCount = ref(0);
const loading = ref(false);
const showModal = ref(false);
const detail = ref<CompanyDetail[]>([]);
const addFrom = ref(false);
const company = ref({
  id: '',
  name: '',
});
let sortType = 1;
const isCompany = ref(0);

async function getCompanyDetail(id: string) {
  const p = {
    id,
  };
  const res = await api.getCompanyDetail(p);
  detail.value = res.data.map((item:any, index: number) => ({
    index: index + 1,
    ...item,
  }));
  showModal.value = true;
}

async function getAllCompany(page = 1, pageSize = 15) {
  loading.value = true;
  const p = {
    search: keyword.value,
    page,
    pageSize,
    sortType,
  };
  const res = await api.getCompanies(p);
  if (res.code === 200) {
    total.value = res.total;
    pageCount.value = Math.ceil(total.value / pageSize);
    tableData.value = res.data.map((item:any, index: number) => ({
      index: index + 1,
      ...item,
    }));
  } else {
    message.error(res.message);
  }

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

function isComplete(bool: number) {
  if (bool === 1) {
    addFrom.value = false;
    if (isCompany === 1) {
      getAllCompany(pagination.page, pagination.pageSize);
    } else {
      getCompanyDetail(company.value.id);
    }
  }
}

const columns = [
  {
    key: 'index',
    title: '序号',
    width: '80',
  },
  {
    key: 'name',
    title: '公司名',
    width: '200',
  },
  {
    key: 'score',
    title: '得分',
    width: '80',
    sorter: true,
  },
  {
    key: 'comment',
    title: '评价',
    render: (rowData: {id: string, comment:string, name:string}) => h(
      NButton,
      {
        text: true,
        type: 'info',
        onClick: () => {
          company.value = {
            id: rowData.id,
            name: rowData.name,
          };
          getCompanyDetail(rowData.id);
        },
      },
      {
        default: () => rowData.comment,
      },
    ),
  },

];

const detailCol = [
  {
    key: 'index',
    title: '',
    width: '80',
  },
  {
    key: 'comment',
    title: '',
  },
  {
    key: 'score',
    title: '',
    width: '80',
  },
];

getAllCompany();
</script>
<style>
@import './index.less';
</style>
