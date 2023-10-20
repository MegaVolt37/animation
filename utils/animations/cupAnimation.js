export function animateCup(gsap, tl) {
  let animateEl = 0;
  const images = gsap.utils.toArray(".section__cup-image");
  const tlCup = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__cup",
      start: "top+=1px top",
      scrub: 2,
    },
  });
  // tl.from(".section__cup-image", {
  //   opacity: 0,
  //   duration: 1,
  //   stagger: 1,
  //   repeat: 0,
  //   yoyo: true,
  //   // onComplete: () => {
  //   //   // tl.to(images, { opacity: 0, duration: 1 },"<");
  //   //   // el.style.opacity = 0;
  //   //   tl.to(".section__cup-image", {
  //   //     opacity: 0,
  //   //     duration: 1,
  //   //     stagger: 0.5,
  //   //     // onUpdate: () => {
  //   //     //   // tl.to(images, { opacity: 0, duration: 1 },"<");
  //   //     //   // el.style.opacity = 0;
  //   //     // },
  //   //   });
  //   // },
  // });
  // tl.to(".section__cup-image", {
  //   opacity: 0,
  //   duration: 1,
  //   stagger: 0.5,
  //   // onUpdate: () => {
  //   //   // tl.to(images, { opacity: 0, duration: 1 },"<");
  //   //   // el.style.opacity = 0;
  //   // },
  // },">");
  // images.forEach((el, index) => {
  //   tl.from(el, {
  //     opacity: 0,
  //     duration: 1,
  //     // onUpdate: () => {
  //     //   gsap.to(images, { opacity: 0, duration: 0 },"<")
  //     //   // tl.to(images, { opacity: 0, duration: 1 },"<");
  //     //   // el.style.opacity = 0;
  //     // },
  //     // onComplete: () => {
  //     //   gsap.to(images, { opacity: 0, duration: 0 },"<")
  //     // }
  //     onStart: () => {
  //       gsap.to(images, { opacity: 0, duration: 1 }, "<");
  //     },
  //   });
  //   // tl.from(el, {
  //   //   opacity: 1,
  //   // },"<")
  // });
  gsap.set(images, {
    opacity: 0,
  });
  // gsap.set(images[0], {
  //   opacity: 1,
  // });

  const objSequenceImage = {
    activeIndexImg: 0,
  };

  tl.to(
    objSequenceImage,
    {
      activeIndexImg: 57,
      ease: "steps(57)",
      duration: 40,
      // repeat: -1,
      onUpdate: () => {
        gsap.set(images, {
          opacity: 0,
        });
        gsap.set(images[objSequenceImage.activeIndexImg], {
          opacity: 1,
        });
      },
    },
    "-=16"
  );
  return tlCup;
}
