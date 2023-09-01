export function animateRender(gsap, tl) {
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__render",
      start: "top+=1px top",
      // end: "+=3000",
      scrub: 2,
      // pin: true
      markers: true
    },
  });
  tlRender.fromTo(
    ".section__render-text",
    { opacity: 0, xPercent: -200 },
    {
      xPercent: 0,
      opacity: 1,
      duration: 24,
    });
  tlRender.fromTo(".section__render-text", {
    xPercent: 0,
  }, {
    xPercent: -200,
    duration: 24,
  }, "+=1")
  tlRender.fromTo(".section__render-img", {
    yPercent: 0,
  }, {
    yPercent: -200,
    duration: 24,
  }, "<")
  tlRender.to(".section__render", {
    y: "-100%",
    duration: 40
  }, ">")
  tlRender.to(".section__finally", {
    y: 0,
    duration: 40
  }, "<")
}