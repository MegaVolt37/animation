<template>
  <div class="section__header-wrapper section">
    <section class="section__header bg__white">
      <div class="section__header-image">
        <img class="section__header-img" src="/images/bottle_new.svg" alt="bottle" />
      </div>
      <div class="section__header-title__wrapper">
        <h1 class="section__title section__header-title text__white">
          {{
            width > 768
              ? "3d-моделирование упаковки продукта"
              : "3d-моделинг упаковки продукта"
          }}
        </h1>
        <div class="section__header-subtitle__wrapper">
          <p class="section__subtitle section__header-subtitle text__gray">
            с&nbsp;помощью 3D&nbsp;визуализации создали реалистичную модель упаковки
            подсолнечного масла
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  width: Number || String,
});
</script>

<style lang="scss" scoped>
.section__header-wrapper {
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: 1;
  @include md-max {
    position: relative;
    top: 0;
  }
}
.section__header {
  height: 100%;
  display: grid;
  position: relative;
  @include md-max {
    position: relative;
    top: 0;
  }
  &-image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: vmin(356);
    height: vmin(1295);
    @include md-min {
      display: block;
      top: 50%;
      right: 0;
      width: vw(1530);
      height: vw(387);
    }
  }
  .section__header-title__wrapper {
    position: absolute;
    top: 50%;
    right: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @include md-min {
      height: vw(387);
    }
  }
  &-img {
    width: 100%;
    @include md-max {
      width: vmin(1295);
      min-height: vmin(350);
      transform: rotateZ(-90deg);
    }
  }
  &-title {
    color: orange;
    max-width: vmin(250);
    line-height: 1.15;
    width: 100%;
    background: linear-gradient(to bottom, $white, $white 50%, $black 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100% 200%;
    background-position: 100%;
    @include md-min {
      max-width: vw(710);
      background: linear-gradient(to right, $white, $white 50%, $black 50%);
      background-size: 200% 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-position: 100%;
    }
  }
  .section__header-subtitle__wrapper {
    position: absolute;
    max-width: 100vw;
    width: 100vw;
    display: flex;
    right: 0;
    top: 100%;
    @include md-max {
      left: auto;
      right: auto;
      max-width: vmin(250);
      width: 100%;
    }
  }
  &-subtitle {
    max-width: vw(295);
    width: 100%;
    margin-right: 13%;
    margin-left: auto;
    margin-top: auto;
    @include md-max {
      margin-right: auto;
      margin-left: 0;
      max-width: 100%;
      margin-top: vmin(20);
    }
  }
}
</style>
