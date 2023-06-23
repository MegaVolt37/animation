export function animateHeader(gsap) {
  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__header",
      start: "top top",
      end: "+=7000",
      scrub: 1,
      pin: true,
    },
  });

  tlHeader.set(".section__header-subtitle", { opacity: 0, yPercent: 100 });
  tlHeader.set(".section__header-title", { color: "#000000" });
  tlHeader.set(".section__header-img", { xPercent: -400 });
  tlHeader.to(".section__header-img", {
    duration: 1,
    xPercent: -10,
    duration: 1,
  });
  tlHeader.to(
    ".section__header-title",
    { color: "#fff", duration: 1 },
    "-=0.5"
  );
  tlHeader.to(
    ".section__header-img",
    { xPercent: 6, yPercent: -13, duration: 1 },
    "+=0.5"
  );
  tlHeader.to(
    ".section__header-title",
    { top: "41%",yPercent: -41,  duration: 1 },
    "-=1"
  );
  tlHeader.to(
    ".section__header-subtitle",
    { opacity: 1, yPercent: 0 },
    "-=0.5"
  );
  tlHeader.to(
    ".section__header-img",
    { yPercent: 80, duration: 1,scaleY: "1.3" },
    "+=0.5"
  );
  tlHeader.to(".section__header-title", { color: "#000" }, "-=0.7");
}