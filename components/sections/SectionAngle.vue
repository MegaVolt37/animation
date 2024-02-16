<template>
  <section class="section__angle bg__gray section">
    <div class="section__angle-content">
      <div class="section__angle-block__images">
        <img
          v-for="(image, index) in imagesAngle"
          :key="index"
          class="section__angle-img"
          :src="`/images/angle_bottles/` + image"
          alt="bottle"
          width="510"
          height="510"
        />
      </div>
      <div class="section__angle-cup">
        <div class="section__angle-cup__wrapper">
          <img
            class="section__angle-cup__image"
            v-for="image in cups"
            :key="image"
            :src="'images/cup3/' + image"
            alt="Image"
            width="470"
            height="470"
            sizes="100vw sm:50vw md:470px"
          />
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
const imagesAngle = computed(() => {
  const arr = [];
  for (let i = 0; i < 7; i++) {
    const filename = "Масло Владовское " + (i + 1) + " RGB-min" + ".png";
    arr.push(filename);
  }
  return arr;
});
const cups = computed(() => {
  const arr = [];
  for (let i = 0; i < 58; i++) {
    const filename = "!Render_" + String(i).padStart(5, "0") + ".webp";
    arr.push(filename);
  }
  return arr;
});
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
  @include md-max {
    height: auto;
    position: relative;
    top: 0;
    z-index: -1;
    min-height: 100vh;
  }
  &-content {
    padding-top: 65%;
    width: 100%;
    height: 100%;
    align-self: center;
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    padding: vw(50) 0;
    overflow: hidden;
    padding-right: vw(40);
    position: relative;
    @include md-max {
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
    align-self: center;
    @include md-max {
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
    @include md-max {
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
    @include md-max {
      margin-right: -110px;
    }
  }
  &-cup__wrapper {
    position: relative;
    width: 35vw;
    aspect-ratio: 1/1;
    @include md-max {
      width: 100vw;
    }
  }
  .dot-wrapper {
    display: flex;
    align-items: flex-end;
    background-color: $light-gray;
    width: 130px;
    position: relative;
  }
  &-cup__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    max-width: 35vw;
    @include md-max {
      max-width: 100vw;
      aspect-ratio: 1/1;
    }
  }
  .section__angle-img {
    position: absolute;
    top: 300%;
    bottom: 0;
    @include md-max {
      top: 0;
      left: 300%;
    }
  }
  .angle__image-first {
    top: 0;
  }
  &-text {
    margin: auto;
    @include md-max {
      margin: 0 auto;
    }
  }
  &-title {
    max-width: vw(320);
    margin-bottom: vw(60);
    @include md-max {
      max-width: vmin(240);
    }
  }
  &-subtitle {
    max-width: vw(295);
    @include md-max {
      max-width: vmin(240);
    }
  }
}
</style>
