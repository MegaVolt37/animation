export function animateAngle(gsap, tl) {
  const tlAngle = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__angle",
      start: "top top",
      // end: "+=3000",
      scrub: 2,
      // pin: true,
    },
  });
  tl.fromTo(".angle__image-first", {
    top: 0
  }, {
    top: "-250%",
    duration: 24
  }, "+=10")
  tl.fromTo(".angle__image-second", {
    top: "250%",
  }, {
    top: 0,
    duration: 40,
  }, "<")
  tl.to(".angle__image-second", {
    top: "-250%",
    duration: 40
  }, ">")
  tl.to(".section__cup", {
    top: 0,
    duration: 40,
  }, "<");
  tl.fromTo(".angle__image-third", {
    top: "250%",
  }, {
    top: 0,
    duration: 40
  }, "<")
  // tl.to(".section__angle", {
  //   top: "-100%",
  //   duration: 40,
  // }, "+=1.5");
  tl.to(".section__angle", {
    opacity: 0.5,
    duration: 40,
  }, "+=1.5");
  tl.to(".section__cup", {
    zIndex: 3,
    opacity: 1,
    // top: 0,
    duration: 24,
  }, "<");

  return tlAngle
}