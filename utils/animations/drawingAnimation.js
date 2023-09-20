export function animateDrawing(gsap, tl) {
  const tlDrawing = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__drawing",
      start: "top+=1px top",
      scrub: 2,
      // end: "+=3000",
      // pin: true,
    },
  });
  tl.fromTo(".section__drawing-images", {
    opacity: 0, scale: 2
  }, {
    scale: 1,
    opacity: 1,
    duration: 24,
  });
  tl.fromTo(
    ".section__drawing-text",
    {
      opacity: 0, xPercent: 100
    },
    {
      xPercent: 0,
      opacity: 1,
      duration: 24,
    },"<");
  tl.to(
    ".section__drawing-text", {
    yPercent: -200,
    opacity: 0,
    duration: 24,
  },
    "+=15"
  );
  tl.to(".section__drawing", {
    top: "-100%",
    duration: 40,
  }, "+=1.5");
  tl.to(".section__modeling", {
    top: '0%',
    duration: 40,
  }, "<");

  return tlDrawing
}

// export function animateDrawing(gsap, tl) {
//   let posTop;
//   const tlDrawing = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".section__drawing",
//       start: "top top",
//       toggleActions: "play none none reverse",
//       markers: true,
//       onUpdate: (self) => {
//         if (self.animation.scrollTrigger.isActive) {
//           tlDrawing.resume();
//         }
//       },
//     },
//   });
//   tlDrawing.fromTo(".section__drawing-images", {
//     opacity: 0, scale: 0
//   }, {
//     scrollTrigger: {
//       trigger: ".section__drawing",
//       toggleActions: "play none none reverse",
//     },
//     scale: 1,
//     opacity: 1, onComplete: () => {
//       posTop = window.scrollY;
//       tlDrawing.pause();
//     }
//   });
//   tlDrawing.fromTo(
//     ".section__drawing-text",
//     {
//       opacity: 0, xPercent: 100
//     },
//     {
//       scrollTrigger: {
//         trigger: ".section__drawing",
//         toggleActions: "play none none reverse",
//       },
//       xPercent: 0,
//       opacity: 1, onComplete: () => {
//         posTop = window.scrollY;
//         tlDrawing.pause();
//       }
//     });
//   tlDrawing.fromTo(
//     ".section__drawing-text",
//     {
//       yPercent: 0,
//       opacity: 1,
//     },
//     {
//       scrollTrigger: {
//         trigger: ".section__drawing",
//         toggleActions: "play none none reverse",
//       },
//       yPercent: -200,
//       opacity: 0,
//       duration: 1,
//     },
//     "+=0.5"
//   );
//   tlDrawing.to(".section__drawing", {
//     y: "-100%",
//     duration: 1
//   }, "+=1.5");
//   tlDrawing.to(".section__modeling", {
//     y: 0,
//     duration: 1
//   }, "-=1.3");
// }