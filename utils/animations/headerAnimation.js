export function animateHeader(gsap) {
  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__header",
      start: "top top",
      end: "+=5000",
      scrub: 1,
      pin: true,
      markers: true,
    },
  });

  tlHeader.set(".section__header-subtitle", { opacity: 0, yPercent: 100 });
  tlHeader.set(".section__header-title", { color: "#000" });
  tlHeader.set(".section__header-img", { xPercent: -400 });
  tlHeader.to(".section__header-img", {
    xPercent: -10,
    duration: 0.5,
  });
  tlHeader.to(
    ".section__header-title",
    { color: "#fff", duration: 0.5, },
    "-=0.2"
  );
  tlHeader.to(
    ".section__header-img",
    { xPercent: 6, yPercent: -13, duration: 1 },
    "+=0.5"
  );
  tlHeader.to(
    ".section__header-title",
    { top: "41%", yPercent: -41, duration: 1 },
    "-=1"
  );
  tlHeader.to(
    ".section__header-subtitle",
    { opacity: 1, yPercent: 0 },
    "-=0.5"
  );
  tlHeader.to(
    ".section__header",
    { scale: "10", duration: 1 },
    "+=0.5"
  );
  tlHeader.to(".section__header-title", { opacity: 0, duration: 0.1 }, "-=0.7");
}