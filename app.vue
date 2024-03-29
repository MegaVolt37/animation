<template>
  <div class="site">
    <ClientOnly>
      <div class="wrapper">
        <div class="content">
          <SectionHeader :width="width" />
          <SectionDrawing />
          <SectionModeling />
          <SectionRender />
          <SectionFinally />
          <SectionAngle />
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
  animateRenderMobile,
  animateModelingMobile,
  animateFinallyMobile,
  animateAngleMobile,
} from "@/utils/animations";

const { width } = useWindowSize();
const { $gsap } = useNuxtApp();
onMounted(async () => {
  await nextTick();
  watch(
    width,
    () => {
      if (width.value > 768) {
        nextTick(() => {
          const tl = $gsap.timeline({
            scrollTrigger: {
              trigger: ".content",
              start: "top top",
              end: `+=18000`,
              scrub: 1,
              pin: true,
            },
          });
          tl.add(animateHeader($gsap, tl));
          tl.add(animateDrawing($gsap, tl));
          tl.add(animateModeling($gsap, tl));
          tl.add(animateRender($gsap, tl));
          tl.add(animateFinally($gsap, tl));
          tl.add(animateAngle($gsap, tl));
        });
      } else {
        nextTick(() => {
          const tl = $gsap.timeline({});
          tl.add(animateHeaderMobile($gsap, tl));
          tl.add(animateDrawingMobile($gsap, tl));
          tl.add(animateRenderMobile($gsap, tl));
          tl.add(animateModelingMobile($gsap, tl));
          tl.add(animateFinallyMobile($gsap, tl));
          tl.add(animateAngleMobile($gsap, tl));
        });
      }
    },
    { immediate: true }
  );
});
</script>

<style lang="scss">
.wrapper {
  max-width: 100vw;
  overflow-x: hidden;
}
.content {
  height: 100vh;
  position: relative;
  @include md-max {
    height: fit-content;
  }
}
</style>
