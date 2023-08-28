export function animateFinally(gsap, trigger) {
  let posTop;
  const tlRender = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__finally",
      start: "top top",
      toggleActions: "play none none reverse",
      onUpdate: (self) => {
        if (self.animation.scrollTrigger.isActive) {
          tlRender.resume();
        }
      },
    },
  });
  tlRender.fromTo(".section__finally-img", {
    x: '150%'
  }, {
    x: "-60%", duration: 2.2, scrollTrigger: {
      trigger: ".section__finally",
      toggleActions: "play none none reverse",
    }, onStart: () => {
      tlRender.pause();
    }
  })
  tlRender.fromTo(".section__finally-text", {
    opacity: 0,
    x: '100%',
  }, {
    scrollTrigger: {
      trigger: ".section__finally",
      toggleActions: "play none none reverse",
    },
    opacity: 1, x: 0, duration: 0.8, onComplete: () => {
      tlRender.pause();
    }
  }, "+=1.5")
  tlRender.to(".section__finally-img", {
    scrollTrigger: {
      trigger: ".section__finally",
      toggleActions: "play none none reverse",
    },
    scale: 1.9,
    xPercent: -39,
    yPercent: 21,
    duration: 0.5
  }, ">")
  tlRender.to(".text__first", {
    scrollTrigger: {
      trigger: ".section__finally",
      toggleActions: "play none none reverse",
    },
    yPercent: -200,
    opacity: 0,
    duration: 0.5
  }, "<")
  tlRender.to(".text__second", {
    scrollTrigger: {
      trigger: ".section__finally",
      toggleActions: "play none none reverse",
      onComplete: () => {
        tlRender.pause();
      }
    },
    y: 0,
    top: 0,
    opacity: 1,
    duration: 0.5,
  }, "<")
  // tlRenderTwo.fromTo(".section__angle", {
  //   x: "-200%",
  //   y: "100%"
  // }, { x: "-200%", y: "0" }, "+=0.5")
}