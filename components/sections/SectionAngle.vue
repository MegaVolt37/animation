<template>
  <section class="section__angle bg__gray section">
    <div class="section__angle-content">
      <div class="section__angle-block__images">
        <img
          class="angle__image-first section__angle-img"
          src="@/assets/images/angle_bottles/1.png"
          alt="bottle"
        />
        <img
          class="angle__image-second section__angle-img"
          src="@/assets/images/angle_bottles/2.png"
          alt="bottle"
        />
        <img
          class="angle__image-third section__angle-img"
          src="@/assets/images/angle_bottles/3.png"
          alt="bottle"
        />
        <img
          class="angle__image-fourth section__angle-img"
          src="@/assets/images/angle_bottles/4.png"
          alt="bottle"
        />
        <img
          class="angle__image-firth section__angle-img"
          src="@/assets/images/angle_bottles/5.png"
          alt="bottle"
        />
        <img
          class="angle__image-sixth section__angle-img"
          src="@/assets/images/angle_bottles/6.png"
          alt="bottle"
        />
        <img
          class="angle__image-seventh section__angle-img"
          src="@/assets/images/angle_bottles/7.png"
          alt="bottle"
        />
      </div>
      <div class="section__angle-cup">
        <div class="section__angle-cup__wrapper">
          <img
            class="section__angle-cup__image"
            v-for="image in arr"
            :key="image"
            :src="'images/cup/' + image"
            alt="Image"
            width="470"
          />
          <!-- <NuxtImg
            class="section__angle-cup__image"
            v-for="image in arr"
            :key="image"
            :src="'images/cup/' + image"
            width="470"
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
        <h1 class="section__title section__angle-title text__black">7&nbsp;разных ракурсов</h1>
        <p class="section__subtitle section__angle-subtitle text__light-gray">
          добавить еще тройку строк текста про визуализацию для чего и каких целей она
          реализована, возможно рассказать про этикетку.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const arr = [
  "!Render_00000.png",
  "!Render_00001.png",
  "!Render_00002.png",
  "!Render_00003.png",
  "!Render_00004.png",
  "!Render_00005.png",
  "!Render_00006.png",
  "!Render_00007.png",
  "!Render_00008.png",
  "!Render_00009.png",
  "!Render_00010.png",
  "!Render_00011.png",
  "!Render_00012.png",
  "!Render_00013.png",
  "!Render_00014.png",
  "!Render_00015.png",
  "!Render_00016.png",
  "!Render_00017.png",
  "!Render_00018.png",
  "!Render_00019.png",
  "!Render_00020.png",
  "!Render_00021.png",
  "!Render_00022.png",
  "!Render_00023.png",
  "!Render_00024.png",
  "!Render_00025.png",
  "!Render_00026.png",
  "!Render_00027.png",
  "!Render_00028.png",
  "!Render_00029.png",
  "!Render_00030.png",
  "!Render_00031.png",
  "!Render_00032.png",
  "!Render_00033.png",
  "!Render_00034.png",
  "!Render_00035.png",
  "!Render_00036.png",
  "!Render_00037.png",
  "!Render_00038.png",
  "!Render_00039.png",
  "!Render_00040.png",
  "!Render_00041.png",
  "!Render_00042.png",
  "!Render_00043.png",
  "!Render_00044.png",
  "!Render_00045.png",
  "!Render_00046.png",
  "!Render_00047.png",
  "!Render_00048.png",
  "!Render_00049.png",
  "!Render_00050.png",
  "!Render_00051.png",
  "!Render_00052.png",
  "!Render_00053.png",
  "!Render_00054.png",
  "!Render_00055.png",
  "!Render_00056.png",
  "!Render_00057.png",
];
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
    position: relative;
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
  &-cup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
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
  }
  &-cup__wrapper {
    position: relative;
    width: 35vw;
    aspect-ratio: 1/1;
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
  }
  .section__angle-img {
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
