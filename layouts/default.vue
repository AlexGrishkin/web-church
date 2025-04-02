<template>
  <div :class="$style.Container">
    <div :class="$style.mainContent">
      <div :class="$style.pageContainer">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
