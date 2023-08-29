export function animateAngle(gsap, tl) {
  const tlAngle = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__angle",
      start: "top top",
      toggleActions: "play none none reverse",
      markers: true,
      onUpdate: (self) => {
        if (self.animation.scrollTrigger.isActive) {
          tlAngle.resume();
        }
      },
    },
  });
  tlAngle.fromTo(".angle__image-first", {
    top: 0
  }, {
    top: "-250%",
    duration: 1
  })
  tlAngle.fromTo(".angle__image-second", {
    top: "250%",
  }, {
    scrollTrigger: {
      trigger: ".section__angle",
      toggleActions: "play none none reverse",
    },
    top: 0,
    duration: 1,
    onComplete: () => {
      tlAngle.pause();
    }
  }, "<")
  tlAngle.fromTo(".angle__image-second", {
    top: 0,
  }, {
    scrollTrigger: {
      trigger: ".section__angle",
      toggleActions: "play none none reverse",
    },
    top: "-250%",
    duration: 1
  }, ">")
  tlAngle.fromTo(".angle__image-third", {
    top: "250%",
  }, {
    scrollTrigger: {
      trigger: ".section__angle",
      toggleActions: "play none none reverse",
    },
    top: 0,
    duration: 1
  }, "<")
}