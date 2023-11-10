<template>
  <section class="section__drawing bg__black section">
    <div
      ref="drawingImages"
      class="section__drawing-images"
      :class="{ is_hover: readHoverDrawing }"
    >
      <DrawingBottleIcon />
    </div>

    <div class="section__drawing-text">
      <h1 class="section__title section__drawing-title text__white">Чертёж</h1>
      <p class="section__subtitle section__drawing-subtitle text__gray">
        предоставленный клиентом чертёж стал основой проектаи позволил смоделировать
        объект с&nbsp;высокой точностью
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.section__drawing {
  display: flex;
  align-items: center;
  gap: vw(70);
  &-images {
    position: relative;
    height: 100%;
    max-height: 100vh;
    width: 50%;
  }
  &-images__container {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &-img {
    width: 100%;
    object-fit: cover;
  }
  &-img__color {
    width: 100%;
    object-fit: cover;
    display: none;
  }
  &-images__container:hover .section__drawing-img__color {
    display: block;
  }
  &-images__container:hover .section__drawing-img {
    display: none;
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
</style>
