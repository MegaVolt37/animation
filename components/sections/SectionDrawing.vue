<template>
  <section class="section__drawing bg__black section">
    <div
      ref="drawingImages"
      class="section__drawing-images"
      :class="{ is_hover: readHoverDrawing }"
    >
      <div class="section__drawing-images__container">
        <img
          class="section__drawing-img"
          src="@/assets/images/bottle__drawing-white.png"
          alt="bottle"
        />
        <img
          class="section__drawing-img__color"
          src="@/assets/images/bottle__drawing-color.png"
          alt="bottle"
        />
      </div>
      <!-- <img
        class="section__drawing-img"
        src="@/assets/images/bottle__drawing.svg"
        alt="bottle"
      />
      <img
        class="section__drawing-img__color"
        src="@/assets/images/bottle__drawing-color.svg"
        alt="bottle"
      /> -->
    </div>

    <div class="section__drawing-text">
      <h1 class="section__title section__drawing-title text__white">Чертёж</h1>
      <p class="section__subtitle section__drawing-subtitle text__gray">
        был предоставлен клиентом, он позволил спроектировать и смоделировать объект с
        учётом всех размеров, форм и других характеристик.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
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
    object-position: center;
    position: absolute;
    right: 0;
    top: auto;
    bottom: 0;
    width: vw(1675);
    transition: all 0.2s ease-in-out;
    background-image: url("@/assets/images/drawing.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  &-img {
    // position: absolute;
    // height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &-img__color {
    width: 100%;
    object-fit: cover;
    display: none;
  }
  // &-img {
  //   position: absolute;
  //   right: 0;
  //   top: auto;
  //   bottom: 0;
  //   width: vw(1675);
  //   object-fit: cover;
  //   object-position: center;
  //   transition: all 0.2s ease-in-out;
  // }
  // &-img__color {
  //   opacity: 0;
  //   z-index: -1;
  //   position: absolute;
  //   right: 0;
  //   top: auto;
  //   bottom: 0;
  //   width: vw(1675);
  //   object-fit: cover;
  //   object-position: center;
  //   transition: all 0.2s ease-in-out;
  // }
  &-images__container:hover .section__drawing-img__color {
    // opacity: 1;
    display: block;
    // z-index: 1;
  }
  &-images__container:hover .section__drawing-img {
    // opacity: 0;
    display: none;
    // z-index: -1;
  }
  // &-images:hover .section__drawing-img__color {
  //   opacity: 1;
  //   // z-index: 1;
  // }
  // &-images:hover:hover .section__drawing-img {
  //   opacity: 0;
  //   // z-index: -1;
  // }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
</style>
