<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    RouterView
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <Router-view></Router-view>
</template>

<style lang="scss">
@use'./styles/general.scss';
</style>
