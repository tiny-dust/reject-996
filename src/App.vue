<script setup lang="ts">
import { darkTheme, lightTheme, useOsTheme } from 'naive-ui';
import { computed } from 'vue';
// import { useGlobalStore } from './store';

// const gs = useGlobalStore();

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : lightTheme));

</script>

<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>

<style>
@import './styles/common.less';
</style>
