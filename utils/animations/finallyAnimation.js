export function animateFinally(gsap) {
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__finally",
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true,
    },
  },"-=2");
  tlRender.set(".section__finally-img", {
    x: '150%'
  })
  tlRender.to(".section__finally-img", {
    duration: 1,
    x: 0
  })
}