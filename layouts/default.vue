<template>
  <div :class="$style.Container">
    <LayoutTheNavigationMenu />
    <div :class="$style.mainContent">
      <TheHeader />
      <div :class="$style.pageContainer">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue';
</script>

<style lang="scss" module>
.Container {
  display: flex;
}

.mainContent {
  width: 100%;
}

.pageContainer {
  width: 100%;
  padding: 3rem;
}
</style>
