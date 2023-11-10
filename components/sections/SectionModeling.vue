<template>
  <section class="section__modeling bg__black section">
    <img
      class="section__modeling-img"
      src="@/assets/images/bottle__modeling_new.png"
      loading="lazy"
      alt="bottle"
    />

    <div class="section__modeling-text">
      <h1 class="section__title section__modeling-title text__white">Моделинг</h1>
      <p class="section__subtitle section__modeling-subtitle text__gray">
        на&nbsp;этом этапе по&nbsp;двухмерному четрежу был воссоздан трёхмерный
        объект&nbsp;&mdash; основа для финального рендера
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section__modeling {
  display: flex;
  flex-direction: row-reverse;
  &-text {
    height: fit-content;
    margin: auto;
    margin-left: vw(143);
  }
  &-img {
    margin-right: vw(136);
    width: vw(331);
    height: vw(571);
    margin-top: auto;
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
</style>
