<template>
  <section class="section__modeling bg__black section">
    <img
      class="section__modeling-img"
      src="@/assets/images/bottle__modeling.png"
      alt="bottle"
    />

    <div class="section__modeling-text">
      <h1 class="section__title section__modeling-title text__white">
        Моделинг
      </h1>
      <p class="section__subtitle section__modeling-subtitle text__gray">
        следующий этап, который позволяет создать трёхмерный объект,
        приближенный к финальному результату
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
