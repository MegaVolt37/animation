export function animateDrawing(gsap) {
  let posTop;
  const tlDrawing = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__drawing",
      start: "top top",
      toggleActions: "play none none reverse",
      pin: true,
      onUpdate: (self) => {
        console.log(tlDrawing)
        if (tlDrawing.paused() || tlDrawing.progress() !== 1) tlDrawing.resume();
        // if (posTop < self.scroller.pageYOffset) tlDrawing.resume();
      },
    },
  });
  tlDrawing.set(".section__drawing-text", { opacity: 0, xPercent: 100 });
  tlDrawing.set(".section__drawing-images", { opacity: 0, scale: 0 });
  tlDrawing.to(".section__drawing-images", {
    // scrollTrigger: {
    //   trigger: ".section__drawing",
    //   // scrub: 1,

    //   toggleActions: "play none none reverse",
    // },
    scale: 1,
    opacity: 1, onComplete: () => {
      posTop = window.scrollY;
      tlDrawing.pause();
    }
  });
  // tlDrawing.fromTo(
  //   ".section__drawing-text",
  //   {
  //     opacity: 0, xPercent: 100
  //   },
  //   {
  //     scrollTrigger: {
  //       trigger: ".section__drawing",
  //       start: "top-=1px top",
  //       toggleActions: "play none none reverse",
  //     },
  //     xPercent: 0,
  //     opacity: 1, onComplete: () => {
  //       posTop = window.scrollY;
  //       tlDrawing.pause();
  //     }
  //   });
  // tlDrawing.fromTo(
  //   ".section__drawing-text",
  //   {
  //     yPercent: 0,
  //   },
  //   {
  //     scrollTrigger: {
  //       trigger: ".section__drawing",
  //       start: "top-=1px top",
  //       toggleActions: "play none none reverse",
  //     },
  //     yPercent: -200,
  //     duration: 1
  //   },
  //   "+=0.5"
  // );
}