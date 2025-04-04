<template>
  <div :class="$style.headerWrapper">
    <nuxt-link :class="$style.logoWrapper" to="/">
      <nuxt-img v-if="data.logo" :class="$style.logoImg" :src="data.logo" />
      <p :class="$style.organisationName">{{ organisationName }}</p>
    </nuxt-link>

    <div :class="$style.navigationWrapper">
      <nuxt-link
        v-for="link in NAVIGATION_CONFIG"
        :key="link.id"
        :class="$style.navigationLink"
        :to="link.to"
        data-allow-mismatch
      >
        {{ link.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  logo: '/logo.png',
  name: 'Свято-Никольский храм на Красной слободе',
};

const NAVIGATION_CONFIG = [
  {
    to: '/about',
    title: 'О храме',
    id: '1',
  },
  {
    to: '/events',
    title: 'Расписание богослужений',
    id: '2',
  },
  {
    to: '/news',
    title: 'Новости',
    id: '3',
  },
];

const organisationName = computed(() => {
  return data.name && data.name.length ? data.name : 'Свято-Никольский храм на Красной слободе';
});
</script>

<style module scoped lang="scss">
.headerWrapper {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: $white;
  top: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid $grey;
  @include layoutHorizontal();
}

.logoWrapper {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 1.6rem;

  .logoImg {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
}

.organisationName {
  max-width: 22.8rem;
  color: $darkRed;
  @include textMediumBigBold;
}

.navigationWrapper {
  display: flex;
  gap: 8.5rem;

  .navigationLink {
    color: $black-blue;
    @include textMediumBigSemiBold;

    &:hover {
      color: $darkRed;
    }
  }
}
</style>
