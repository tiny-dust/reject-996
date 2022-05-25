<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from './store';

const gs = useGlobalStore();
const { theme } = storeToRefs(gs);

</script>

<template>
  <n-config-provider :theme="theme ? darkTheme : lightTheme">
    <n-global-style />
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style>
@import './styles/common.less';
</style>
