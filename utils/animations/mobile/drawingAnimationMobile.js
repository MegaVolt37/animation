export function animateDrawingMobile(gsap, tl) {
  const lEase = gsap.parseEase("linear");
  const tlDrawing = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__drawing",
      start: "top+=1px top",
      scrub: 2,
      // end: "+=3000",
      // pin: true,
    },
  });
  tl.fromTo(
    ".section__drawing-content",
    {
      top: '100%',
    },
    {
      top: '0',
      duration: 24,
    },"<"
  );
  // tl.fromTo(
  //   ".section__drawing-images",
  //   {
  //     opacity: 0,
  //     scale: 2,
  //   },
  //   {
  //     scale: 1,
  //     opacity: 1,
  //     duration: 24,
  //   }
  // );
  // tl.to(
  //   ".section__header-img",
  //   {
  //     opacity: 0,
  //   },
  //   "<"
  // );
  // tl.fromTo(
  //   ".section__drawing-text",
  //   {
  //     opacity: 0,
  //     xPercent: 100,
  //   },
  //   {
  //     xPercent: 0,
  //     opacity: 1,
  //     duration: 24,
  //   },
  //   "<"
  // );
  tl.to(
    ".section__drawing",
    {
      top: "-100%",
      duration: 40,
      ease: "none",
      onUpdate: () => {
        document.body.style = "background-color: #000;";
      },
    },
    "+=1.5"
  );
  tl.to(
    ".section__modeling",
    {
      top: "0%",
      duration: 40,
      ease: "none",
      // onStart: () => {
      //   gsap.set(".section__modeling", {
      //     marginTop: "-0.25vh",
      //   });
      // },
      // onComplete: () => {
      //   gsap.set(".section__modeling", {
      //     marginTop: "0px",
      //   });
      // },
    },
    "<"
  );

  return tlDrawing;
}
