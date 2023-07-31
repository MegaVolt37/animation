export function animateRender(gsap) {
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__render",
      start: "top top",
      end: "+=5000",
      scrub: 1.5,
      pin: true,
    },
  });
  tlRender.set(".section__render-text", { opacity: 0, xPercent: -200 })
  tlRender.to(
    ".section__render-text",
    {
      xPercent: 0,
      opacity: 1,
    }, "+=0.5");
  tlRender.to(".section__render-img", {
    yPercent: -200,
    duration: 1
  }, "+=0.5")
  tlRender.to(".section__render-text", {
    xPercent: -200,
    duration: 1
  }, "-=0.8")
}