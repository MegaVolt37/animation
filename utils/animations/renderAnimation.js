export function animateRender(gsap) {
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__render",
      start: "top top",
      end: "bottom",
      scrub: 1,
      pin: true,
    },
  });
  tlRender.to(".section__render-img", {
    yPercent: -100,
    duration: 1
  })
  tlRender.to(".section__render-text", {
    xPercent: -200,
    duration: 1
  })
}