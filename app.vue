<template>
  <div class="site">
    <ClientOnly>
      <div class="wrapper">
        <div class="content">
          <SectionHeader />
          <SectionDrawing />
          <SectionModeling />
          <SectionRender />
          <SectionFinally />
          <SectionAngle />
          <!-- <SectionCup /> -->
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<script setup>
import "@/assets/styles/main.scss";
import {
  animateAngle,
  animateDrawing,
  animateFinally,
  animateHeader,
  animateModeling,
  animateRender,
} from "@/utils/animations";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const { y } = useWindowScroll();

gsap.registerPlugin(ScrollTrigger, Observer);
ScrollTrigger.config({
  invalidateOnRefresh: true,
});
onMounted(async () => {
  await nextTick();
  if (process.client) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "+=18000",
        scrub: 1,
        pin: true,
      },
    });
    tl.add(animateHeader(gsap, tl));
    tl.add(animateDrawing(gsap, tl));
    tl.add(animateModeling(gsap, tl));
    tl.add(animateRender(gsap, tl));
    tl.add(animateFinally(gsap, tl));
    tl.add(animateAngle(gsap, tl));
    // tl.add(animateCup(gsap, tl, ScrollTrigger));
  }
});
</script>

<style lang="scss">
.content {
  height: 100vh;
  position: relative;
}

// .section__finally-end {
//   background-color: $light-gray;
//   height: auto;
//   display: flex;
//   &-text {
//     height: fit-content;
//     margin: auto;
//     margin-left: 0;
//   }
//   &-text__gradient {
//     display: block;
//     max-width: vw(200);
//     margin-bottom: vw(25);
//   }
//   &__block-img {
//     width: vw(1740);
//     margin-left: vw(-1042);
//     height: vw(664);
//     height: vw(810);
//     overflow: hidden;
//     margin-top: -30%;
//   }
//   &-img {
//     width: vw(3064);
//     object-fit: contain;
//     height: vw(1254);
//     margin-left: vw(-1290);
//     mix-blend-mode: darken;
//   }
//   &-title {
//     margin-bottom: vw(60);
//   }
//   &-subtitle {
//     max-width: vw(295);
//     margin-bottom: vw(60);
//   }
// }
</style>
