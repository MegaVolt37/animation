<template>
  <div>
    <div class="wrapper">
      <div class="content">
        <section class="section__header bg__white" data-speed="0.6">
          <div class="section__header-image">
            <img
              class="section__header-img"
              src="@/assets/images/bottle.svg"
              alt="bottle"
            />
          </div>

          <h1 class="section__title section__header-title text__white">
            3d визуализация бутылки
          </h1>
          <p class="section__subtitle section__header-subtitle text__black">
            с помощью 3D визуализации создали реалистичную модель упаковки
            подсолнечного масла
          </p>
        </section>
        <section class="section__drawing bg__black">
          <div class="section__drawing-images">
            <img
              class="section__drawing-img"
              src="@/assets/images/bottle__drawing.svg"
              alt="bottle"
            />
            <img
              class="section__drawing-img__color"
              src="@/assets/images/bottle__drawing-color.svg"
              alt="bottle"
            />
          </div>

          <div class="section__drawing-text">
            <h1 class="section__title section__drawing-title text__white">
              Чертёж
            </h1>
            <p class="section__subtitle section__drawing-subtitle text__gray">
              был предоставлен клиентом, он позволил спроектировать
              и смоделировать объект с учётом всех размеров, форм и других
              характеристик.
            </p>
          </div>
        </section>
        <section class="section__modeling bg__black">
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
        <div class="section__wrapper">
          <section class="section__render bg__white">
            <img
              class="section__render-img"
              src="@/assets/images/bottle__render.png"
              alt="bottle"
            />

            <div class="section__render-text">
              <h1 class="section__title section__render-title text__black">
                Рендер
              </h1>
              <p
                class="section__subtitle section__render-subtitle text__light-gray"
              >
                <span class="text__black">конечный процесс создания</span>
                реального объекта из подготовленной сцены.
              </p>
            </div>
          </section>
          <section class="section__finally bg__white">
            <div class="section__finally__block-img">
              <img
                class="section__finally-img"
                src="@/assets/images/bottle__finally.png"
                alt="bottle"
              />
            </div>

            <div class="section__finally-text">
              <div class="text__first">
                <h1 class="section__title section__finally-title text__black">
                  Финал
                </h1>
                <p
                  class="section__subtitle section__finally-subtitle text__light-gray"
                >
                  <span class="text__black"
                    >добавить еще тройку строк текста про визуализацию</span
                  >
                  для чего и каких целей она реализована, возможно рассказать
                  про этикетку.
                </p>
              </div>
              <div class="text__second">
                <p
                  class="section__subtitle section__finally-end-subtitle text__light-gray"
                >
                  <span class="text__black">высокая детализация</span> 10K —
                  обозначение разрешающей способности в цифровом кинематографе и
                  компьютерной графике, приблизительно соответствующее 10000
                  пикселей по горизонтали.
                </p>
                <div class="text__gradient-block">
                  <span
                    class="text__gradient text__black text__gradient-first section__finally-end-text__gradient"
                    >44 236 800 пикселей</span
                  >
                  <span
                    class="text__gradient text__gradient-second section__finally-end-text__gradient"
                    >44 236 800 пикселей</span
                  >
                </div>

                <p
                  class="section__subtitle section__finally-end-subtitle text__light-gray"
                >
                  10K UHD (10240 × 4320)
                </p>
              </div>
            </div>
          </section>
          <section class="section__angle bg__white">
            <div class="section__angle-content">
              <div class="section__angle-block__images">
                <img
                  class="angle__image-first section__angle-img"
                  src="@/assets/images/Etiketka.png"
                  alt="bottle"
                />
                <img
                  class="angle__image-second section__angle-img"
                  src="@/assets/images/Etiketka22.png"
                  alt="bottle"
                />
                <img
                  class="angle__image-third section__angle-img"
                  src="@/assets/images/Etiketka24.png"
                  alt="bottle"
                />
              </div>

              <div class="section__angle-text">
                <h1 class="section__title section__angle-title text__black">
                  7 разных ракурсов
                </h1>
                <p
                  class="section__subtitle section__angle-subtitle text__light-gray"
                >
                  добавить еще тройку строк текста про визуализацию для чего и
                  каких целей она реализована, возможно рассказать про этикетку.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  animateHeader,
  animateDrawing,
  animateModeling,
  animateRender,
  animateFinally,
  animateContainer,
} from "@/utils/animations/index";
import "@/assets/styles/main.scss";
const nuxtApp = useNuxtApp();
gsap.registerPlugin(ScrollTrigger);

if (process.client) {
  await nextTick();
  animateHeader(gsap);
  animateDrawing(gsap);
  animateModeling(gsap);
  animateRender(gsap);
  animateContainer(gsap);
}
</script>
<style lang="scss">
.section__wrapper {
  width: 300vw;
  display: flex;
  height: 100vh;
}
.section__header {
  display: grid;
  position: relative;
  padding-top: 78vh;
  &-image {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-img {
    width: 140%;
    width: vw(1530);
    height: vw(387);
  }
  &-title {
    max-width: vw(575);
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  &-subtitle {
    max-width: vw(295);
    width: 100%;
    margin-right: 13%;
    margin-left: auto;
    margin-top: 0;
    margin-bottom: auto;
  }
}
.section__drawing {
  height: auto;
  display: flex;
  align-items: center; // удалить и попробовать еще раз
  gap: vw(70);
  height: 100vh;
  &-images {
    // width: vw(1675);
    // height: vw(731);
    // margin-left: vw(-1056);
    position: relative;
    height: 100%;
    max-height: 100vh;
    width: 50%;
    // padding-bottom: 75%;
  }
  &-img {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    // width: 100%;
    // height: 100%;
    width: vw(1675);
    // margin-top: -19%;
    height: 100%;
    max-height: 100vh;
    object-fit: contain;
    object-position: center;
  }
  &-img__color {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    // margin-top: -19%;
    width: vw(1675);
    height: 100%;
    max-height: 100vh;
    object-fit: contain;
    object-position: center;
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
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
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
.section__render {
  background-color: #f7f7f9;
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
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
.section__finally {
  background-color: #f7f7f9;
  display: flex;
  &-text {
    height: fit-content;
    margin: auto;
    margin-left: 0;
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
  }
  .text__gradient-second {
    position: absolute;
    top: 0;
    opacity: 0;
  }
  &-text__gradient {
    display: block;
    max-width: vw(200);
    margin-bottom: vw(25);
  }
  &__block-img {
    display: contents;
    width: vw(1740);
    margin-left: vw(-1042);
    height: vw(664);
    height: vw(810);
    overflow: hidden;
    margin-top: -30%;
  }
  &-img {
    width: vw(1740);
    margin-left: vw(-1042);
    mix-blend-mode: darken;
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
  }
}
.section__finally-end {
  background-color: #f7f7f9;
  height: auto;
  display: flex;
  &-text {
    height: fit-content;
    margin: auto;
    margin-left: 0;
  }
  &-text__gradient {
    display: block;
    max-width: vw(200);
    margin-bottom: vw(25);
  }
  &__block-img {
    width: vw(1740);
    margin-left: vw(-1042);
    height: vw(664);
    height: vw(810);
    overflow: hidden;
    margin-top: -30%;
  }
  &-img {
    width: vw(3064);
    object-fit: contain;
    height: vw(1254);
    margin-left: vw(-1290);
    mix-blend-mode: darken;
  }
  &-title {
    margin-bottom: vw(60);
  }
  &-subtitle {
    max-width: vw(295);
    margin-bottom: vw(60);
  }
}
.section__angle {
  padding: vw(78) 0;
  margin-bottom: vw(78);
  display: flex;
  align-items: center;
  justify-content: center;
  &-content {
    max-width: vw(835);
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    background-color: #f3f3f4;
    padding: vw(36) 0;
    overflow: hidden;
    padding-right: vw(40);
  }
  &-block__images {
    width: vw(318);
    height: vw(400);
    display: flex;
    justify-content: center;
    position: relative;
  }
  &-img {
    margin: auto;
  }
  .angle__image-first,
  .angle__image-second,
  .angle__image-third {
    position: absolute;
    top: 250%;
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
