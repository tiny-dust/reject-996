<template>
  <div v-html="gs.intro" />
</template>
<script setup lang="ts">
import api from '../api/request';
import { useGlobalStore } from '../store';

const gs = useGlobalStore();

function getIntro() {
  if (gs.intro) {
    return;
  }
  api.getIntro().then((res) => {
    gs.saveIntro(res.data);
  });
}

getIntro();
</script>
