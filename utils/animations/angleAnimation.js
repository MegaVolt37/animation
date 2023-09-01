export function animateAngle(gsap, tl) {
  const tlAngle = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__angle",
      start: "top top",
      // end: "+=3000",
      scrub: 2,
      // pin: true,
      markers: true
    },
  });
  tlAngle.fromTo(".angle__image-first", {
    top: 0
  }, {
    top: "-250%",
    duration: 24
  }, "+=10")
  tlAngle.fromTo(".angle__image-second", {
    top: "250%",
  }, {
    top: 0,
    duration: 24,
  }, "<")
  tlAngle.to(".angle__image-second", {
    top: "-250%",
    duration: 24
  }, ">")
  tlAngle.fromTo(".angle__image-third", {
    top: "250%",
  }, {
    top: 0,
    duration: 24
  }, "<")

  return tlAngle
}