<template>
  <Banner />
  <div :class="$style.mainContentWrapper">
    <h1>Главная страница</h1>
    <h1>Главная страница</h1>
    <h1>Главная страница</h1>
    <h1>Главная страница</h1>
    <h1>Главная страница</h1>
    <h1>Главная страница</h1>
    <h1>Главная страница</h1>
    <h1>Главная страница</h1>
  </div>
</template>

<script setup lang="ts">
import Banner from '~/components/Main/Banner.vue';
</script>
<style module lang="scss">
.mainContentWrapper {
  @include layoutHorizontal;
}
h1 {
  padding-top: 3rem;
  color: $primary;
}
</style>
