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
  animateHeaderMobile,
  animateDrawingMobile,
} from "@/utils/animations";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const { y } = useWindowScroll();
const { width } = useWindowSize();

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

    if (width.value > 768) {
      tl.add(animateHeader(gsap, tl));
      tl.add(animateDrawing(gsap, tl));
      tl.add(animateModeling(gsap, tl));
      tl.add(animateRender(gsap, tl));
      tl.add(animateFinally(gsap, tl));
      tl.add(animateAngle(gsap, tl));
    } else {
      tl.add(animateHeaderMobile(gsap, tl));
      tl.add(animateDrawingMobile(gsap, tl));
    }
    console.log(width);
  }
});
</script>

<style lang="scss">
.content {
  height: 100vh;
  position: relative;
}
</style>
