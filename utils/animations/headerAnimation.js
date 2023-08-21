export function animateHeader(gsap, tl, scrollToSection) {
  let posTop;
  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__header-wrapper",
      start: "top+=1px top",
      toggleActions: "play none none reverse",
      pin: true,
      onUpdate: (self) => {
        // if (tlHeader.paused() || tlHeader.progress() !== 1) tlHeader.resume();

        if (self.animation.scrollTrigger.isActive) {
          // Разрешаем скролл после завершения анимации
          tlHeader.resume();
        }
      },
      // onToggle: (self) => {
      //   console.log(self.animation.scrollTrigger.isActive)
      //   if (self.animation.scrollTrigger.isActive) {
      //     // Разрешаем скролл после завершения анимации
      //     tlHeader.resume();
      //   } else {
      //     tlHeader.pause();
      //   }
      // },
    },
  });
  tlHeader.fromTo(".section__header-img", {
    xPercent: -400
  }, {
    scrollTrigger: {
      trigger: ".section__header-wrapper",
      start: "top-=1px top",
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
      start: "top-=1px top",
      toggleActions: "play none none reverse",
    },
    color: "#fff",
    duration: 1.6,
    onComplete: () => {
      // posTop = window.scrollY;
      // tl.scrollTrigger.disable()
      tlHeader.pause();
      // const body = document.body;
      // body.style.overflow = "hidden";
    },
  })
  tlHeader.fromTo(
    ".section__header-img", {
    xPercent: -10,
    yPercent: 0
  },
    {
      scrollTrigger: {
        trigger: ".section__header-wrapper",
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
      scale: "2.5", duration: 3, yPercent: 0,
      onComplete: () => {
        tl.scrollTrigger.enable()
        scrollToSection('section__drawing')
      }
    }
  )
  tlHeader.fromTo(".section__header-title", { opacity: 1 }, {
    opacity: 0, duration: 3, scale: "2.5",
  }, "-=3");
}