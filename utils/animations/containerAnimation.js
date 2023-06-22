import { ScrollTrigger } from "gsap/ScrollTrigger";
export function animateContainer(gsap) {
  const tl = gsap.timeline();
  tl.from(".section__render", {
    x: 0,
    y: 0
  })

  tl.fromTo(".section__finally", {
    x: '100%',

  }, { x: "-100%" }, "-=0.4")

  tl.fromTo(".section__finally-img", {
    css: { 'margin-left': 0 }
  }, { css: { 'margin-left': '-95%', duration: 1 } })

  tl.fromTo(".section__finally-text", {
    opacity: 0,
    x: '100%',
  }, { opacity: 1, x: 0 })
  tl.to(".section__finally-img", {
    scale: 1.8,
    xPercent: -31,
    yPercent: 13
  })
  tl.to(".section__finally-text", {
    yPercent: -100,
    opacity: 0,
    duration: 0.3
  },"-=0.5")
  tl.to(".section__finally-text", {
    css: { display: "none" }
  },"-=0.5")
  tl.to(".section__finally-text__second", {
    css: { display: "block" },
    yPercent: 0
  },"-=0.5")
  // tl.to(".section__finally-img", {
  //   css: {
  //     width: '1740px',
  //     'margin-left': "-1042px",
  //     height: '664px',
  //     height: '810px',
  //     overflow: 'hidden',
  //     'margin-top': '-30%',
  //   }
  // })
  // tl.set(".section__finally-img", { css: { 'margin-left': '-95%' } })
  // tl.fromTo(".section__finally-img", {
  //   opacity: 0,
  //   x: '100%',
  // }, { opacity: 1, x: 0, duration: 3 }, "+=0.5")

  ScrollTrigger.create({
    animation: tl,
    trigger: ".section__wrapper",
    start: "top top",
    end: "+=7000",
    scrub: true,
    pin: true,
  })
}