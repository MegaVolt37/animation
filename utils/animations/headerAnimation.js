export function animateHeader(gsap, tl) {
  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__header-wrapper",
      start: "top top",
      // end: "+=3000",
      scrub: 2,
      // pin: true,
    },
  });
  tl.fromTo(".section__header-img", {
    xPercent: -400
  }, {
    xPercent: -10,
    duration: 40,
  })
  tl.fromTo(".section__header-title", {
    color: "#000"
  }, {
    color: "#fff",
    duration: 10,
  })
  tl.to(
    ".section__header-img", {
    xPercent: 6, yPercent: -13, duration: 24,
  },
    "+=2.5"
  )
  tl.fromTo(
    ".section__header-title",
    {
      top: "50%", yPercent: -50
    },
    {
      scrollTrigger: {
        trigger: ".section__header",
        toggleActions: "play none none reverse",
      }, top: "38%", yPercent: -38, duration: 24,
    },
    "<"
  );
  tl.fromTo(
    ".section__header-subtitle", {
    opacity: 0, yPercent: 100
  },
    {
      opacity: 1, yPercent: 0, duration: 24,
    },
    "<"
  )
  tl.fromTo(
    ".section__header-img", { scale: "1" },
    {
      scale: "2.5", duration: 24, yPercent: 0,
    }, ">"
  )
  tl.fromTo(".section__header-title", { opacity: 1 }, {
    opacity: 0, duration: 7,
  }, "<");
  tl.to(".section__header-title", {
    duration: 24, scale: "2.5",
  }, "<");
  tl.to(".section__header-wrapper", {
    top: "-100%", duration: 40
  }, "+=1.5");
  tl.to(".section__drawing", { top: 0, duration: 40 }, "<");

  return tlHeader
}

// export function animateHeader(gsap, tl, scrollToSection) {
//   let posTop;
//   const main = document.querySelector(".wrapper");
//   const tlHeader = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".section__header-wrapper",
//       start: "top+=1px top",
//       toggleActions: "play none none reverse",
//       onUpdate: (self) => {
//         if (self.animation.scrollTrigger.isActive) {
//           tlHeader.resume();
//         }
//       },
//     },
//   });
//   tlHeader.fromTo(".section__header-img", {
//     xPercent: -400
//   }, {
//     scrollTrigger: {
//       trigger: ".section__header-wrapper",
//       start: "top-=1px top",
//       toggleActions: "play none none reverse",
//     },
//     xPercent: -10,
//     duration: 1.5,
//     onStart: () => {
//       tlHeader.pause();
//     },
//     onComplete: () => {
//     }
//   })
//   tlHeader.fromTo(".section__header-title", {
//     color: "#000"
//   }, {
//     scrollTrigger: {
//       trigger: ".section__header-wrapper",
//       start: "top-=1px top",
//       toggleActions: "play none none reverse",
//       markers: true,
//     },
//     color: "#fff",
//     duration: 1.6,
//     onComplete: () => {
//       posTop = window.scrollY;
//       tlHeader.pause();
//     }
//   })
//   tlHeader.fromTo(
//     ".section__header-img", {
//     xPercent: -10,
//     yPercent: 0
//   },
//     {
//       scrollTrigger: {
//         trigger: ".section__header-wrapper",
//         toggleActions: "play none none reverse",
//       }, xPercent: 6, yPercent: -13, duration: 1
//     },
//     "+=2.5"
//   )
//   tlHeader.fromTo(
//     ".section__header-title",
//     {
//       top: "41%", yPercent: 0
//     },
//     {
//       scrollTrigger: {
//         trigger: ".section__header",
//         toggleActions: "play none none reverse",
//       }, top: "41%", yPercent: -41, duration: 1
//     },
//     "+=2.5"
//   );
//   tlHeader.fromTo(
//     ".section__header-subtitle", {
//     opacity: 0, yPercent: 100
//   },
//     {
//       opacity: 1, yPercent: 0, duration: 1,
//       onComplete: () => {
//         tlHeader.pause();
//       }
//     },
//     "+=2.5"
//   )
//   tlHeader.fromTo(
//     ".section__header-img", { scale: "1" },
//     {
//       scale: "2.5", duration: 3, yPercent: 0,
//     }
//   )
//   tlHeader.fromTo(".section__header-title", { opacity: 1 }, {
//     opacity: 0, duration: 3, scale: "2.5",
//   }, "-=3");
//   tlHeader.to(".section__header-wrapper", {
//     y: "-100%", onComplete: () => {
//       document.querySelector(".section__header-wrapper").style.display = "none";
//     },
//   });
//   tlHeader.to(".section__drawing", { y: 0 }, "<");
// }