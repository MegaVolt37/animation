export function animateModeling(gsap) {
  const tlModeling = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__modeling",
      start: "top top",
      end: "+=3000",
      scrub: 1.5,
      pin: true,
    },
  });
  tlModeling.set(".section__modeling-text", { opacity: 0, xPercent: -150 })
  tlModeling.to(
    ".section__modeling-text",
    {
      xPercent: 0,
      opacity: 1,
    },"+=0.5");
}