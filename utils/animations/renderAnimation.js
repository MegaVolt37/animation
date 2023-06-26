export function animateRender(gsap) {
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__render",
      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: true,
    },
  });
  tlRender.to(".section__render-img", {
    yPercent: -200,
    duration: 1
  },"+=0.5")
  tlRender.to(".section__render-text", {
    xPercent: -200,
    duration: 1
  },"-=0.8")
}