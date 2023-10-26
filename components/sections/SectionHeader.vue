<template>
  <div class="section__header-wrapper section">
    <section class="section__header bg__white">
      <div class="section__header-image">
        <img class="section__header-img" src="@/assets/images/bottle.svg" alt="bottle" />
      </div>
      <h1 class="section__title section__header-title text__white">
        3d визуализация бутылки
      </h1>
      <p class="section__subtitle section__header-subtitle text__black">
        с&nbsp;помощью 3D&nbsp;визуализации создали реалистичную модель упаковки
        подсолнечного масла
      </p>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.section__header-wrapper {
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: 1;
}
.section__header {
  height: 100%;
  display: grid;
  position: relative;
  // padding-top: 78vh;
  &-image {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-img {
    width: 140%;
    width: vw(1530);
    height: vw(387);
  }
  &-title {
    color: orange;
    max-width: vw(575);
    line-height: 1.15;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

    background: linear-gradient(to right, #fff, #fff 50%, #000 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;

    background-position: 100%;
  }
  &-subtitle {
    max-width: vw(295);
    width: 100%;
    margin-right: 13%;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: 3%;
  }
}
</style>
