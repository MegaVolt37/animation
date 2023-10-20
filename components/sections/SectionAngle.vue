<template>
  <section class="section__angle bg__gray section">
    <div class="section__angle-content">
      <div class="section__angle-block__images">
        <img
          class="angle__image-first section__angle-img"
          src="@/assets/images/Etiketka.png"
          alt="bottle"
        />
        <img
          class="angle__image-second section__angle-img"
          src="@/assets/images/Etiketka22.png"
          alt="bottle"
        />
        <img
          class="angle__image-third section__angle-img"
          src="@/assets/images/Etiketka24.png"
          alt="bottle"
        />
      </div>

      <div class="section__angle-text">
        <h1 class="section__title section__angle-title text__black">
          7 разных ракурсов
        </h1>
        <p class="section__subtitle section__angle-subtitle text__light-gray">
          добавить еще тройку строк текста про визуализацию для чего и каких
          целей она реализована, возможно рассказать про этикетку.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section__angle {
  margin-bottom: vw(78);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $light-gray;

  &-content {
    // max-width: vw(835);
    width: 100%;
    height: 100%;
    align-self: center;
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    // background-color: $light-light-gray;
    padding: vw(50) 0;
    overflow: hidden;
    padding-right: vw(40);
  }
  &-block__images {
    width: vw(400);
    margin-right: auto;
    height: 100%;
    max-height: vw(515);
    display: flex;
    justify-content: center;
    position: relative;
  }
  &-img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .angle__image-first,
  .angle__image-second,
  .angle__image-third {
    position: absolute;
    top: 300%;
    bottom: 0;
  }
  .angle__image-first {
    top: 0;
  }
  &-text {
    margin: auto;
  }
  &-title {
    max-width: vw(320);
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
</style>
