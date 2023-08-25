export function animateDrawing(gsap, tl) {
  let posTop;
  const tlDrawing = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__drawing",
      start: "top top",
      toggleActions: "play none none reverse",
      markers: true,
      onUpdate: (self) => {
        if (self.animation.scrollTrigger.isActive) {
          tlDrawing.resume();
        }
      },
    },
  });
  // tlDrawing.set(".section__drawing-text", { opacity: 0, xPercent: 100 });
  // tlDrawing.set(".section__drawing-images", { opacity: 0, scale: 0 });
  tlDrawing.fromTo(".section__drawing-images", {
    opacity: 0, scale: 0
  }, {
    scrollTrigger: {
      trigger: ".section__drawing",
      toggleActions: "play none none reverse",
    },
    scale: 1,
    opacity: 1, onComplete: () => {
      posTop = window.scrollY;
      // tlDrawing.pause();
    }
  });
  tlDrawing.fromTo(
    ".section__drawing-text",
    {
      opacity: 0, xPercent: 100
    },
    {
      scrollTrigger: {
        trigger: ".section__drawing",
        toggleActions: "play none none reverse",
      },
      xPercent: 0,
      opacity: 1, onComplete: () => {
        posTop = window.scrollY;
        tlDrawing.pause();
      }
    });
  tlDrawing.fromTo(
    ".section__drawing-text",
    {
      yPercent: 0,
    },
    {
      scrollTrigger: {
        trigger: ".section__drawing",
        toggleActions: "play none none reverse",
      },
      yPercent: -200,
      duration: 1,
      onComplete: () => {
        tl.to(".section__drawing", { y: "-100%" });
        tl.to(".section__modeling", { y: 0 }, "<");
      }
    },
    "+=0.5"
  );
}