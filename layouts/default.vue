<template>
  <Header />
  <div :class="$style.pageContainer">
    <nuxt-page />
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/Header.vue';
</script>

<style lang="scss" module>
.pageContainer {
  width: 100%;
}
</style>
