export function animateHeader(gsap, tl) {
  let posTop;
  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__header-wrapper",
      start: "top+=1px top",
      end: "+=300",
      // end: () => document.querySelector('.section__header-wrapper').clientHeight,
      toggleActions: "play none none reverse",
      // pin: true,
      onUpdate: (self) => {
        if (posTop < self.scroller.pageYOffset) tlHeader.resume();
      },
    },
  });
  tlHeader.fromTo(".section__header-img", {
    xPercent: -400
  }, {
    scrollTrigger: {
      trigger: ".section__header-wrapper",
      start: "-150 0",
      toggleActions: "play none none reverse",
    },
    xPercent: -10,
    duration: 1.5,
  })
  tlHeader.fromTo(".section__header-title", {
    color: "#000"
  }, {
    scrollTrigger: {
      trigger: ".section__header-wrapper",
      start: "-160 0",
      toggleActions: "play none none reverse",
    },
    color: "#fff",
    duration: 1.6,
    onComplete: () => {
      posTop = window.scrollY;
      tlHeader.pause();
    }
  })
  tlHeader.fromTo(
    ".section__header-img", {
    xPercent: -10,
    yPercent: 0
  },
    {
      scrollTrigger: {
        trigger: ".section__header-wrapper",
        start: "-50 0",
        toggleActions: "play none none reverse",
      }, xPercent: 6, yPercent: -13, duration: 1
    },
    "+=2.5"
  )
  tlHeader.fromTo(
    ".section__header-title",
    {
      top: "41%", yPercent: 0
    },
    {
      scrollTrigger: {
        trigger: ".section__header",
        start: "-50 0",
        toggleActions: "play none none reverse",
      }, top: "41%", yPercent: -41, duration: 1
    },
    "+=2.5"
  );
  tlHeader.fromTo(
    ".section__header-subtitle", {
    opacity: 0, yPercent: 100
  },
    {
      opacity: 1, yPercent: 0, duration: 1, onComplete: () => {
        posTop = window.scrollY;
        tlHeader.pause();
      }
    },
    "+=2.5"
  )
  tlHeader.fromTo(
    ".section__header-img", { scale: "1" },
    {
      scale: "2.5", duration: 3, yPercent: 0, onComplete: () => {
        console.log(tl)

      }
    }
  )
  tlHeader.fromTo(".section__header-title", { opacity: 1 }, {
    opacity: 0, duration: 3, scale: "2.5",
  }, "-=3");
}