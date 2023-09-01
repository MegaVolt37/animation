export function animateFinally(gsap, trigger) {
  let posTop;
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__finally",
      start: "top top",
      // end: "+=3000",
      scrub: 2,
      // pin: true
    },
  });
  tlRender.fromTo(".section__finally-img", {
    x: '150%'
  }, {
    x: "-60%", duration: 80,
  })
  tlRender.fromTo(".section__finally-text", {
    opacity: 0,
    x: '100%',
  }, {
    opacity: 1, x: 0, duration: 24,
  }, "+=1.5")
  tlRender.to(".section__finally-img", {
    scale: 1.9,
    xPercent: -39,
    yPercent: 21,
    duration: 24,
  }, "+=2")
  tlRender.to(".text__first", {
    yPercent: -200,
    opacity: 0,
    duration: 24,
  }, "<")
  tlRender.to(".text__second", {
    y: 0,
    top: 0,
    opacity: 1,
    duration: 24,
  }, "<")
  tlRender.fromTo(".section__finally", {
    y: 0,
  }, {
    y: "-100%",
    duration: 40,
  }, ">");
  tlRender.to(".section__angle", {
    y: 0,
    duration: 40,
  }, "<");
}