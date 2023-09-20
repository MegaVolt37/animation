export function animateModeling(gsap, tl) {
  const tlModeling = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__modeling",
      start: "top top",
      scrub: 1,
      // pin: true
    },
  });
  tl.fromTo(".section__modeling-text", {
    opacity: 0, xPercent: -150
  }, {
    xPercent: 0,
    opacity: 1,
    duration: 24
  },"<-=24")
  tl.to(".section__modeling", {
    top: "-100%",
    duration: 40
  }, ">");
  tl.to(".section__render", {
    top: 0,
    duration: 40
  }, "<");

  return tlModeling
}

// export function animateModeling(gsap, tl) {
//   const tlModeling = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".section__modeling",
//       start: "top top",
//       toggleActions: "play none none reverse",
//       markers: true,
//     },
//   });
//   tlModeling.fromTo(".section__modeling-text", {
//     opacity: 0, xPercent: -150
//   }, {
//     scrollTrigger: {
//       trigger: ".section__modeling",
//       toggleActions: "play none none reverse",
//     },
//     xPercent: 0,
//     opacity: 1,
//     duration: 1
//   })
//   tlModeling.to(".section__modeling", {
//     y: "-100%",
//     duration: 1
//   }, "+=1.5");
//   tlModeling.to(".section__render", {
//     y: 0,
//     duration: 1
//   }, "-=1.4");
// }