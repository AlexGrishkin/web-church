<template>
  <div :class="$style.TheHeader">
    <!--    надо подумать как данные передать и генерить уникальный id-->
    <NavigationLogo :class="$style.headerLogo" />
    <NavLink
      :link-data="{ id: 6, link: '/notifications', imgSrc: '/Heart.svg' }"
      data-allow-mismatch
      border-color="greyBorder"
      size="small"
    />
    <div :class="$style.userInfoWrapper">
      <p :class="$style.text">Пользователь</p>
      <p :class="$style.userName">{{ userName }}</p>
    </div>
    <!--    надо бы картинку вынести в ui компоненты чтобы не писать по сто раз стили для них-->
    <NuxtImg src="/Alex.jpg" :class="$style.userImg" />
  </div>
</template>

<script setup>
import NavLink from '~/components/common/NavLink.vue';
import NavigationLogo from '~/components/common/NavigationLogo.vue';

defineOptions({
  name: 'TheHeader',
});
const userName = 'Алексей Гришкин';
</script>

<style lang="scss" module>
.TheHeader {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 7.6rem;
  padding: 1.1rem;
  border-bottom: 0.1rem solid $grey;
  background-color: $white;
  gap: 3rem;
}

.headerLogo {
  display: none;

  @include respond-to(tablet) {
    display: flex;
  }
}

.userInfoWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @include respond-to(mobile) {
    display: none;
  }

  .text {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .userName {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.6rem;
  }
}

.userImg {
  width: 5.6rem;
  height: 5.6rem;
  object-fit: cover;
  border-radius: 50%;
  background-position: center;
}
</style>
