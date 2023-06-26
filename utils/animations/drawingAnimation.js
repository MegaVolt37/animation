export function animateDrawing(gsap) {
  const tlDrawing = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__drawing",
      start: "top top",
      end: "+=5000",
      scrub: 1,
      pin: true,
      markers: true,
    },
  });
  tlDrawing.set(".section__drawing-images", {
    yPercent: 100,
  });
  tlDrawing.set(".section__drawing-img", {
  });
  tlDrawing.set(".section__drawing-text", { opacity: 0, xPercent: 100 });
  tlDrawing.to(".section__drawing-images", {
    yPercent: 0,
    duration: 0.5,
  });
  tlDrawing.to(".section__drawing-img", {
  }, "-=0.5");
  tlDrawing.to(
    ".section__drawing-text",
    {
      xPercent: 0,
      opacity: 1,
    });
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
      yPercent: -200,
      duration: 1
    },
    "-=1"
  );
}