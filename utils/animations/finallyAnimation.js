export function animateFinally(gsap, tl) {
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
  tl.fromTo(".section__finally-img", {
    x: '150%'
  }, {
    x: "-60%", duration: 80,
  })
  tl.fromTo(".section__finally-text", {
    opacity: 0,
    x: '100%',
  }, {
    opacity: 1, x: 0, duration: 24,
  }, "+=1.5")
  tl.to(".section__finally-img", {
    scale: 1.9,
    xPercent: -39,
    yPercent: 21,
    duration: 24,
  }, "+=2")
  tl.to(".text__first", {
    yPercent: -200,
    opacity: 0,
    duration: 24,
  }, "<")
  tl.to(".text__second", {
    y: 0,
    top: 0,
    opacity: 1,
    duration: 24,
  }, "<")
  tl.fromTo(".section__finally", {
    y: 0,
  }, {
    top: "-100%",
    duration: 40,
  }, ">");
  tl.to(".section__angle", {
    top: 0,
    duration: 40,
  }, "<");

  return tlRender
}