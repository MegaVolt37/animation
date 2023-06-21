export function animateDrawing(gsap) {
  const tlDrawing = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__drawing",
      start: "top top",
      end: "+=7000",
      scrub: 1,
      pin: true,
    },
  });
  tlDrawing.set(".section__drawing-images", {
    yPercent: 100,
  });
  tlDrawing.set(".section__drawing-img", {
  });
  tlDrawing.set(".section__drawing-img__color", {
    opacity: 0,
  });
  tlDrawing.set(".section__drawing-text", { opacity: 0, xPercent: 100 });
  tlDrawing.to(".section__drawing-images", {
    yPercent: 0,
    duration: 1,
  });
  tlDrawing.to(".section__drawing-img", {
  }, "-=0.5");
  tlDrawing.to(".section__drawing-img", { opacity: 0 }, "+=0.5");
  tlDrawing.to(
    ".section__drawing-img__color",
    {
      opacity: 1,
    },
    "-=0.5"
  );
  tlDrawing.to(
    ".section__drawing-text",
    {
      xPercent: 0,
      opacity: 1,
    },
    "+=0.5"
  );
  tlDrawing.to(
    ".section__drawing-images",
    {
      yPercent: -100,
      duration: 1
    },
    "+=0.5"
  );
  tlDrawing.to(
    ".section__drawing-text",
    {
      yPercent: -300,
      duration: 1
    },
    "-=0.8"
  );
}