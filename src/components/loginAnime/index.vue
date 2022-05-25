<template>
  <div
    id="gameRoot"
    className="game1"
    style="display: none;"
  >
    <canvas
      id="GameCanvas"
      :tabIndex="0"
    />
    <div id="splash">
      <div className="progress-bar stripes">
        <span style="width: 0;" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useGlobalStore } from '../../store';
import { game } from '../../utils/game';

const gs = useGlobalStore();

onMounted(() => {
  game('hello');
  document.addEventListener('completeFromGame', (data: any) => {
    if (data.detail.status === 1) {
      gs.loginAnime = false;
    } else {
      gs.loginAnime = true;
    }
  });
});

onUnmounted(() => {
  document.getElementById('gameRoot')!.style.display = 'none';
});
</script>
<style lang="less">
#gameRoot{
  width: 100%;
  height: 100%;
}
</style>
