export function animateRender(gsap) {
  let posTop;
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__render",
      // start: "top top",
      start: "top-=1px top",
      end: "+=800",
      // scrub: 1.5,
      toggleActions: "play none none reverse",
      // pin: true,
      onUpdate: (self) => {
        if (posTop < self.scroller.pageYOffset) tlRender.play();
      },
    },
  });
  tlRender.set(".section__render-text", { opacity: 0, xPercent: -200 })
  tlRender.to(
    ".section__render-text",
    {
      xPercent: 0,
      opacity: 1, onComplete: () => {
        posTop = window.scrollY;
        tlRender.pause();
      }
    }, "+=0.5");
  tlRender.to(".section__render-img", {
    yPercent: -200,
    duration: 1
  }, "+=0.5")
  tlRender.to(".section__render-text", {
    xPercent: -200,
    duration: 1
  }, "-=0.8")
  tlRender.to(".section__render-img", {
    yPercent: -200,
    duration: 1
  })
}