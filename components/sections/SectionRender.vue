<template>
  <section class="section__render bg__gray section">
    <div class="section__render-image">
      <img
        class="section__render-img"
        src="@/assets/images/bottle__render_new.png"
        loading="lazy"
        alt="bottle"
      />
    </div>

    <div class="section__render-text">
      <h1 class="section__title section__render-title text__black">Рендер</h1>
      <p class="section__subtitle section__render-subtitle text__gray">
        точная настройка параметров материала и&nbsp;его взаимодействия с&nbsp;освещением
        позволила добиться высокой реалистичности
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section__render {
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
    margin-bottom: auto;
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
</style>
