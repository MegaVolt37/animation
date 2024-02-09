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
          <!-- <SectionCup /> -->
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<script setup>
// const { y } = useWindowScroll();
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
  animateFinallyMobile,
  // animateModelingMobile,
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
        // const tl = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: ".content",
        //     start: "top top",
        //     end: `+=10000`,
        //     scrub: 1,
        //     pin: true,
        //   },
        // });
        nextTick(() => {
          // const tl = $gsap.timeline({
          // 	scrollTrigger: {
          // 		trigger: '.content',
          // 		start: 'top top',
          // 		// pin: true,
          // 		scrub: 1,
          // 		end: `+=3000`,
          // 	},
          // })
          // tl.to(".test-p", {
          //   x: "100%",
          // });
          animateHeaderMobile($gsap);
          animateDrawingMobile($gsap);
          animateRenderMobile($gsap);
          // animateFinallyMobile($gsap);

          // tl.add(animateHeaderMobile($gsap, tl))
          // tl.add(animateDrawingMobile($gsap, tl))
          // tl.add(animateRenderMobile($gsap, tl))
          // tl.add(animateFinallyMobile($gsap, tl));
          // animateFinallyMobile($gsap, tl)
          // const tlRender = $gsap?.timeline({
          //   scrollTrigger: {
          //     trigger: ".test-wrapper",
          //     start: "top+=1px top",
          //     scrub: 1,
          //     end: "+=3000",
          //     // pin: '.section__finally',
          //     markers: true,
          //     // pinType: 'static',
          //     pin: true,
          //   },
          // });
          // tl.set(".section__modeling", { y: "200%" });
          // animateFinallyMobile(gsap, tl);
          // tl.add(animateDrawingMobile(gsap, tl));
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
  @media screen and (max-width: 768px) {
    // overflow-x: hidden;
    // position: static;
    height: auto;
  }
}
</style>
