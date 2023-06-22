export function animateModeling(gsap) {
  const tlModeling = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__modeling",
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true,
    },
  });
}