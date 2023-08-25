export function animateFinally(gsap, trigger) {
  let posTop;
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__finally",
      start: "top top",
      toggleActions: "play none none reverse",
    },
  });
  tlRender.set(".section__finally-img", {
    x: '150%'
  })
  tlRender.set(".section__finally-text", {
    opacity: 0,
    x: '100%',
  })
  tlRender.to(".section__finally-img", {
    x: "-60%", ease: "power1.in", scrollTrigger: {
      trigger: ".section__finally",
      start: "top top",
    }, duration: 2.2, onComplete: () => {
      // tlRender.pause();
      // tlRender.scrollTrigger.disable(false);
      // tlRenderTwo.scrollTrigger.enable();
    }
  })
  // const tlRenderTwo = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".section__finally",
  //     start: "top top",
  //     end: "+=800",
  //     toggleActions: "play none none reverse",
  //     onUpdate: (self) => {
  //       console.log(tlRenderTwo.scrollTrigger, tlRender.scrollTrigger)
  //       if (posTop < self.scroller.pageYOffset) tlRenderTwo.play();
  //     },
  //   }
  // }, "+=1.5");

  tlRender.to(".section__finally-text", {
    opacity: 1, x: 0, onComplete: () => {
      // tlRenderTwo.pause();
    }
  }, "+=3.5")
  // tlRenderTwo.to(".section__finally-img", {
  //   scale: 1.9,
  //   xPercent: -39,
  //   yPercent: 21
  // })
  // tlRenderTwo.to(".text__first", {
  //   yPercent: -200,
  //   opacity: 0,
  //   duration: 0.5
  // }, "-=0.5")
  // tlRenderTwo.to(".text__second", {
  //   y: 0,
  //   top: 0,
  //   opacity: 1,
  //   duration: 0.5,
  // }, "-=0.5")
  // tlRenderTwo.fromTo(".section__angle", {
  //   x: "-200%",
  //   y: "100%"
  // }, { x: "-200%", y: "0" }, "+=0.5")
}