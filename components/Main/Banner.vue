<template>
  <div :class="$style.mainBanner">
    <div :class="$style.mainBannerText">
      <div :class="$style.organisationWrapper">
        <nuxt-img src="/cross3.svg" :class="$style.organisationIcon" />
        <p :class="$style.organisationName">{{ data.organisationName }}</p>
      </div>
      <p :class="$style.churchName">{{ data.churchName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  organisationName: 'Русская Православная Церковь',
  churchName: 'СВЯТО-НИКОЛЬСКИЙ ХРАМ НА КРАСНОЙ СЛОБОДЕ',
};
</script>

<style module scoped lang="scss">
.mainBanner {
  background-image: url('/mainPageBanner.png');
  width: 100%;
  height: 93.8rem;
  background-size: cover;
  background-position: 0 -13rem;

  .mainBannerText {
    padding: 17rem 10rem;
  }

  .organisationWrapper {
    display: flex;
    align-items: center;
    gap: 25px;

    .organisationIcon {
      height: 50px;
    }

    .organisationName {
      color: $darkRed;
      @include textSuperBigBold;
    }
  }

  .churchName {
    max-width: 40%;
    text-wrap: balance;
    @include textSuperBigXLSemiBold;
  }
}
</style>
