<template>
  <n-layout
    has-sider
    class="base-layout_wrapper"
  >
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      :inverted="inverted"
      content-style="padding:24px 0"
    >
      <n-space justify="center">
        <n-avatar
          round
          :size="48"
        >
          小卷村
        </n-avatar>
      </n-space>
      <n-menu
        :value="active"
        :inverted="inverted"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-header
        bordered
        style="height:60px"
      >
        <n-space
          justify="end"
          align="center"
        >
          <n-switch
            :on-update:value="changeTheme"
            rubber-band
            size="large"
          >
            <template #unchecked-icon>
              🌞
            </template>
            <template #checked-icon>
              🌚
            </template>
          </n-switch>
        </n-space>
      </n-layout-header>
      <n-layout-content
        embedded
        content-style="padding: 12px;"
      >
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">
import {
  Component,
  computed,
  onMounted, ref, watch,
} from 'vue';
import { useRoute } from 'vue-router';
import { useGlobalStore } from '../store';
import { label } from '../utils/menuLabel';
import { renderIcon } from '../utils/renderIcon';
import { routes } from '../router';

const gs = useGlobalStore();
const route = useRoute();

const active = ref('');
const inverted = ref(false);
const menuOptions = computed(() => {
  const list = routes.filter((item) => item.children)[0];
  return list.children && list.children.map((item) => ({
    label: () => label(`${list.path}/${item.path}`, (item.meta?.title as string)),
    key: `${list.path}/${item.path}`,
    icon: renderIcon((item.meta?.icon as Component)),
  }));
});

// const menuOptions: MenuOption[] = [
//   {
//     label: () => label('/company/list', '内卷之王'),
//     key: '/company/list',
//     icon: renderIcon(Fitness),
//   },
// ];

function changeTheme(bool: boolean) {
  gs.theme = bool;
}

onMounted(() => {
  active.value = route.path;
});

watch(() => route.path, (v) => {
  active.value = v;
});

</script>
<style>
@import './index.less';
</style>
