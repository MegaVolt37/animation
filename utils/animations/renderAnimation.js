export function animateRender(gsap, tl) {
  let posTop;
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__render",
      start: "top top",
      toggleActions: "play none none reverse",
      markers: true,
      onUpdate: (self) => {
        if (posTop < self.scroller.pageYOffset) tlRender.play();
      },
    },
  });
  tlRender.fromTo(
    ".section__render-text",
    { opacity: 0, xPercent: -200 },
    {
      scrollTrigger: {
        trigger: ".section__render",
        toggleActions: "play none none reverse",
      },
      xPercent: 0,
      opacity: 1,
      onComplete: () => {
        posTop = window.scrollY;
        tlRender.pause();
      }
    });
  tlRender.fromTo(".section__render-text", {
    xPercent: 0,
  }, {
    scrollTrigger: {
      trigger: ".section__render",
      toggleActions: "play none none reverse",
    },
    xPercent: -200,
    duration: 1
  }, ">")
  tlRender.fromTo(".section__render-img", {
    yPercent: 0,
  }, {
    scrollTrigger: {
      trigger: ".section__render",
      toggleActions: "play none none reverse",
    },
    yPercent: -200,
    duration: 1
  }, "<")
  tlRender.to(".section__render", {
    y: "-100%",
    duration: 1
  }, "+=1.5")
  tlRender.to(".section__finally", {
    y: 0,
    duration: 1
  }, "-=1.4")
}