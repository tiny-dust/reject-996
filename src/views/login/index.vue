<template>
  <div class="login-root">
    <LoginAnime />
    <div class="login-page-wrap">
      <div
        class="anime"
        :class="loginAnime?'logo-big':'logo-small'"
      />
      <n-button
        :class="loginAnime ? 'show':'hide'"
        type="warning"
        round
        class="anime-btn loginBtn"
        @click="loginCallback"
      >
        开始吧
      </n-button>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '../../store';

const gs = useGlobalStore();
const router = useRouter();
const { loginAnime } = storeToRefs(gs);

function loginCallback() {
  router.replace('/login');
}
</script>
<style lang="less">

.login-root{
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.login-page-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;
  .logo-small{
    position: absolute;
    left: calc(50% - 30px);
    top: calc(50% - 60px);
    background:url('../../assets/logo.png')  no-repeat center;
    background-size: 100%;
    width: 60px;
    height: 120px;
  }
  .logo-big{
    position: absolute;
    left: calc(50% - 30px);
    top: calc(28% - 60px);
    background:url('../../assets/logo.png')  no-repeat center;
    background-size: 100%;
    width: 120px;
    height: 240px;
  }
}

.loginBtn {
  position: absolute;
  left: calc(50% - 60px);
  width: 180px;
  height: 60px;
  top: 386px;
  pointer-events: all;
  font-size: 28px;
}

.progress-bar {
  background-color: #1a1a1a;
  position: absolute;
  left: 50%;
  top: 80%;
  height: 5px;
  width: 300px;
  margin: 0 -150px;
  border-radius: 10px;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: 10px;
  transition: width 0.4s ease-in-out;
  background-color: #3dc5de;
}

.show{
  transform: translateY(50px);
  opacity: 1;
}

.hide{
  transform: translateY(-50px);
  opacity: 0;
}

.anime{
  transition: all 0.8s;
}
.anime-btn{
  transition: all 0.5s;
}

</style>
