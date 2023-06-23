import { ScrollTrigger } from "gsap/ScrollTrigger";
export function animateContainer(gsap) {
  const tl = gsap.timeline();
  tl.from(".section__render", {
    x: 0,
    y: 0
  })

  tl.fromTo(".section__finally", {
    x: '100%',
  }, { x: "-100%", duration: 1 }, "+=0.5")
  tl.to(".section__finally-img", {
    x: "-60%",
    duration: 1,
  })

  tl.fromTo(".section__finally-text", {
    opacity: 0,
    x: '100%',
  }, { opacity: 1, x: 0 })
  tl.to(".section__finally-img", {
    scale: 1.9,
    xPercent: -39,
    yPercent: 21
  })
  tl.to(".text__first", {
    yPercent: -200,
    opacity: 0,
    duration: 0.5
  }, "-=0.5")
  tl.to(".text__second", {
    y: 0,
    top: 0,
    opacity: 1,
    duration: 0.5,
  }, "-=0.5")
  tl.to(".text__gradient-second", {
    duration: 1,
    opacity: 1,
  })
  tl.to(".text__gradient-first", {
    duration: 1,
    opacity: 0,
  }, "-=0.5")
  tl.fromTo(".section__angle", {
    x: "100%"
  }, { x: "-200%" })
  tl.to(".section__finally", {
    x: "-200%"
  }, "-=0.5")
  tl.to(".angle__image-first", {
    top: "-250%"
  }, "+=0.5")
  tl.to(".angle__image-second", {
    top: "0"
  }, "-=0.4")
  tl.to(".angle__image-second", {
    top: "-250%"
  }, "+=0.5")
  tl.to(".angle__image-third", {
    top: "0"
  }, "-=0.4")


  ScrollTrigger.create({
    animation: tl,
    trigger: ".section__wrapper",
    start: "top top",
    end: "+=12000",
    scrub: true,
    pin: true,
  })
}