<template>
  <section class="section__angle bg__gray section">
    <div class="section__angle-content">
      <div class="section__angle-block__images">
        <img
          class="angle__image-first section__angle-img"
          src="/images/angle_bottles/test/Масло Владовское 1 RGB-min.png"
          alt="bottle"
          width="510"
          height="510"
        />
        <img
          class="angle__image-second section__angle-img"
          src="/images/angle_bottles/test/Масло Владовское 2 RGB-min.png"
          alt="bottle"
          width="510"
          height="510"
        />
        <img
          class="angle__image-third section__angle-img"
          src="/images/angle_bottles/test/Масло Владовское 3 RGB-min.png"
          alt="bottle"
          width="510"
          height="510"
        />
        <img
          class="angle__image-fourth section__angle-img"
          src="/images/angle_bottles/test/Масло Владовское 4 RGB-min.png"
          alt="bottle"
          width="510"
          height="510"
        />
        <img
          class="angle__image-firth section__angle-img"
          src="/images/angle_bottles/test/Масло Владовское 5 RGB-min.png"
          alt="bottle"
          width="510"
          height="510"
        />
        <img
          class="angle__image-sixth section__angle-img"
          src="/images/angle_bottles/test/Масло Владовское 6 RGB-min.png"
          alt="bottle"
          width="510"
          height="510"
        />
        <img
          class="angle__image-seventh section__angle-img"
          src="/images/angle_bottles/test/Масло Владовское 7 RGB-min.png"
          alt="bottle"
          width="510"
          height="510"
        />
      </div>
      <div class="section__angle-cup">
        <div class="section__angle-cup__wrapper">
          <img
            class="section__angle-cup__image"
            v-for="image in arr"
            :key="image"
            :src="'images/cup3/' + image"
            alt="Image"
            width="470"
            height="470"
            sizes="100vw sm:50vw md:470px"
          />
          <!-- <NuxtImg
            class="section__angle-cup__image"
            v-for="image in arr"
            :key="image"
            :src="'/images/cup/' + image"
            sizes="100vw sm:50vw md:470px"
          /> -->
        </div>
      </div>
      <div class="section__angle-cup__finally">
        <div class="section__angle-cup__finally-wrapper">
          <DivIcon />
          <div class="dot-wrapper">
            <div class="dot"></div>
          </div>
        </div>
      </div>
      <div class="section__angle-text">
        <h1 class="section__title section__angle-title text__black">7&nbsp;ракурсов</h1>
        <p class="section__subtitle section__angle-subtitle text__light-gray">
          чтобы сделать практическое применение 3d-модели продукта еще более
          универсальным, была создана целая серия изображений
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const arr = [
  "!Render_00000.webp",
  "!Render_00001.webp",
  "!Render_00002.webp",
  "!Render_00003.webp",
  "!Render_00004.webp",
  "!Render_00005.webp",
  "!Render_00006.webp",
  "!Render_00007.webp",
  "!Render_00008.webp",
  "!Render_00009.webp",
  "!Render_00010.webp",
  "!Render_00011.webp",
  "!Render_00012.webp",
  "!Render_00013.webp",
  "!Render_00014.webp",
  "!Render_00015.webp",
  "!Render_00016.webp",
  "!Render_00017.webp",
  "!Render_00018.webp",
  "!Render_00019.webp",
  "!Render_00020.webp",
  "!Render_00021.webp",
  "!Render_00022.webp",
  "!Render_00023.webp",
  "!Render_00024.webp",
  "!Render_00025.webp",
  "!Render_00026.webp",
  "!Render_00027.webp",
  "!Render_00028.webp",
  "!Render_00029.webp",
  "!Render_00030.webp",
  "!Render_00031.webp",
  "!Render_00032.webp",
  "!Render_00033.webp",
  "!Render_00034.webp",
  "!Render_00035.webp",
  "!Render_00036.webp",
  "!Render_00037.webp",
  "!Render_00038.webp",
  "!Render_00039.webp",
  "!Render_00040.webp",
  "!Render_00041.webp",
  "!Render_00042.webp",
  "!Render_00043.webp",
  "!Render_00044.webp",
  "!Render_00045.webp",
  "!Render_00046.webp",
  "!Render_00047.webp",
  "!Render_00048.webp",
  "!Render_00049.webp",
  "!Render_00050.webp",
  "!Render_00051.webp",
  "!Render_00052.webp",
  "!Render_00053.webp",
  "!Render_00054.webp",
  "!Render_00055.webp",
  "!Render_00056.webp",
  "!Render_00057.webp",
];
const img = useImage();
</script>

<style lang="scss" scoped>
.dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #3300ff;
}
.section__angle {
  margin-bottom: vw(78);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $light-gray;
  @media screen and (max-width: 768px) {
    // padding-bottom: vmin(25);
    height: auto;
    position: relative;
    top: 0;
    z-index: -1;
    min-height: 100vh;
  }
  &-content {
    padding-top: 65%;
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
    position: relative;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 0;
      gap: vmin(40);
      width: 100vw;
    }
  }
  &-block__images {
    width: vw(400);
    margin-right: auto;
    height: 100%;
    max-height: vw(515);
    display: flex;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 80%;
      max-height: vmin(360);
      margin: 0 auto;
      aspect-ratio: 1/1;
    }
  }
  &-img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &-cup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    @media screen and (max-width: 768px) {
    }
  }
  &-cup__finally {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  &-cup__finally-wrapper {
    display: grid;
    grid-template-columns: 0px 1fr;
    overflow: hidden;
    margin-right: -130px;
    @media screen and (max-width: 768px) {
      margin-right: -110px;
    }
  }
  &-cup__wrapper {
    position: relative;
    width: 35vw;
    aspect-ratio: 1/1;
    @media screen and (max-width: 768px) {
      width: 100vw;
    }
  }
  .dot-wrapper {
    // height: auto;
    // height: 100%;
    display: flex;
    align-items: flex-end;
    background-color: #f7f7f9;
    width: 130px;
    position: relative;
  }
  &-cup__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    max-width: 35vw;
    @media screen and (max-width: 768px) {
      max-width: 100vw;
      aspect-ratio: 1/1;
    }
  }
  .section__angle-img {
    position: absolute;
    top: 300%;
    bottom: 0;
    @media screen and (max-width: 768px) {
      top: 0;
      left: 300%;
    }
  }
  .angle__image-first {
    top: 0;
  }
  &-text {
    margin: auto;
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
  }
  &-title {
    max-width: vw(320);
    margin-bottom: vw(60);
    @media screen and (max-width: 768px) {
      max-width: vmin(240);
    }
  }
  &-subtitle {
    max-width: vw(295);
    @media screen and (max-width: 768px) {
      max-width: vmin(240);
    }
  }
}
</style>
