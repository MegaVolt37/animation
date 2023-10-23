export function animateCup(gsap, tl) {
  const objSequenceImage = {
    activeIndexImg: 0,
  };
  const images = gsap.utils.toArray(".section__cup-image");
  const tlCup = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__cup",
      start: "top+=1px top",
      scrub: 2,
    },
  });
  gsap.set(images, {
    opacity: 0,
  });

  tl.to(
    objSequenceImage,
    {
      activeIndexImg: 57,
      ease: "steps(57)",
      duration: 80,
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
