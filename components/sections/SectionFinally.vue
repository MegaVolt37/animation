<template>
  <section class="section__finally section bg__gray">
    <div class="section__finally__block-img">
      <img
        class="section__finally-img"
        src="@/assets/images/bottle__finally.png"
        alt="bottle"
      />
    </div>
    <div class="section__finally-text">
      <div class="text__first">
        <h1 class="section__title section__finally-title text__black">Финал</h1>
        <p class="section__subtitle section__finally-subtitle text__gray">
          добавить еще тройку строк текста про визуализацию для чего и каких целей она
          реализована, возможно рассказать про этикетку.
        </p>
      </div>
      <div class="text__second">
        <p class="section__subtitle section__finally-end-subtitle text__gray">
          высокая детализация<br />10K&nbsp;&mdash; обозначение разрешающей способности
          в&nbsp;цифровом кинематографе и&nbsp;компьютерной графике, приблизительно
          соответствующее 10000 пикселей по&nbsp;горизонтали.
        </p>
        <div class="text__gradient-block">
          <span
            class="text__gradient text__black text__gradient-first section__finally-end-text__gradient"
            >44&nbsp;236&nbsp;800 пикселей</span
          >
          <span
            class="text__gradient text__gradient-second section__finally-end-text__gradient"
            >44&nbsp;236&nbsp;800 пикселей</span
          >
        </div>

        <p class="section__subtitle section__finally-end-subtitle__end text__light-gray">
          10K UHD (10240 &times; 4320)
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section__finally {
  background-color: $light-gray;
  display: flex;
  overflow: hidden;
  &-text {
    height: fit-content;
    margin: auto;
    margin-left: 0;
  }
  &-end-subtitle {
    margin-bottom: vw(60);
  }
  &-end-subtitle__end {
    margin-top: vw(25);
  }
  .text__first {
    -webkit-text-fill-color: initial;
  }
  .text__second {
    height: fit-content;
    margin: auto;
    margin-left: 0;
    position: absolute;
    transform: translateY(200%);
  }
  .text__gradient-block {
    position: relative;
  }
  .text__gradient-first {
    background: none;
    -webkit-text-fill-color: initial;
    transition: all 0.3s ease-in-out;
  }
  .text__gradient-second {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  .text__gradient-block:hover .text__gradient-first {
    opacity: 0;
  }
  .text__gradient-block:hover .text__gradient-second {
    opacity: 1;
  }
  &-text__gradient {
    display: block;
    max-width: vw(200);
    margin-bottom: vw(25);
  }
  &__block-img {
    display: flex;
    align-items: center;
    max-height: 100vh;
    height: 100vh;
    width: 59%;
  }
  &-img {
    width: vw(1740);
    height: 100%;
    object-fit: cover;
    mix-blend-mode: darken;

    height: 116%;
    -o-object-fit: cover;
    object-fit: contain;
    object-position: center;
    mix-blend-mode: darken;
    margin-top: -9%;
    transform: translateX(-6%);
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
</style>
