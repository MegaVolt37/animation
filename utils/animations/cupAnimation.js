export function animateCup(gsap, tl) {
  let animateEl = 0;
  const images = gsap.utils.toArray(".section__cup-image")
  const tlCup = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__cup",
      start: "top+=1px top",
      // end: "+=3000",
      scrub: 2,
      // pin: true
    },
  });
  images.forEach((el,index) => {
    tl.from(el, {opacity:0, duration: 1,onUpdate: () => {
      
      console.log(animateEl,index )
    }, onComplete: () =>  { console.log(animateEl,index)},onStart: () =>  {
      images.forEach((el2, index2) => {
        if (index2 !== index) {
          el2.style.opacity = 0
          // tl.set(el2, { opacity: 0 });
        }
      });
      // animateEl = index
    }})
  });
  // tl.from(".section__cup-image", {opacity:0, stagger: {
  //   yoyo: true,
  //   each: 1,},onUpdate: () => {console.log(342)}})
  // tl.to(".section__cup-image:not(:last-of-type)", {opacity:0, stagger:1}, 0.5)
  // const images = document.querySelectorAll('.section__cup-image');

  return tlCup
}