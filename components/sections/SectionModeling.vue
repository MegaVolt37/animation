<template>
  <section class="section__modeling bg__black section">
    <img
      class="section__modeling-img"
      src="/images/bottle__modeling_new.png"
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
  @include md-max {
    flex-direction: column-reverse;
    gap: vmin(65);
    align-items: center;
    position: relative;
    height: auto;
    top: 0;
    padding-top: vmin(100);
    // margin-top: vmin(100);
  }
  &-text {
    height: fit-content;
    margin: auto;
    margin-left: vw(143);
    @include md-max {
      margin: 0;
    }
  }
  &-img {
    margin-right: vw(136);
    width: vw(331);
    height: vw(571);
    margin-top: auto;
    @include md-max {
      margin: 0;
      width: vmin(245);
      height: auto;
    }
  }
  &-title {
    margin-bottom: vw(60);
    @include md-max {
      max-width: vmin(240);
      margin: 0 auto;
      margin-bottom: vmin(20);
    }
  }
  &-subtitle {
    max-width: vw(295);
    @include md-max {
      max-width: vmin(240);
      margin: 0 auto;
    }
  }
}
</style>
