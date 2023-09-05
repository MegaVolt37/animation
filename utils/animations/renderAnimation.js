export function animateRender(gsap, tl) {
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__render",
      start: "top+=1px top",
      // end: "+=3000",
      scrub: 2,
      // pin: true
    },
  });
  tl.fromTo(
    ".section__render-text",
    { opacity: 0, xPercent: -200 },
    {
      xPercent: 0,
      opacity: 1,
      duration: 24,
    });
  tl.fromTo(".section__render-text", {
    xPercent: 0,
  }, {
    xPercent: -200,
    duration: 24,
  }, "+=3.5")
  tl.fromTo(".section__render-img", {
    yPercent: 0,
  }, {
    yPercent: -200,
    duration: 24,
  }, "<")
  tl.to(".section__render", {
    top: "-100%",
    duration: 40
  }, "+=3.5")
  tl.to(".section__finally", {
    top: 0,
    duration: 40
  }, "<")

  return tlRender
}