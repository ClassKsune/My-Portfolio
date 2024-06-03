// SMOOTHSCROLLER - example from https://github.com/darkroomengineering/lenis
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// BACLGROIND STICK, project stick, canvas pin -- GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/src/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

//Pin projectu
gsap.to(".trigger", {
  scrollTrigger: {
    trigger: ".trigger",
    start: "40% 30%",
    end: "top -350%",
    pin: true,
    markers: false,
    scrub: 1
  }
})
//project zoom
const tlSize = gsap.timeline({
  scrollTrigger: {
    trigger: ".project--holder",
    start: "140% top",
    end: "220% top",
    markers: false,
    scrub: 1
  }
});
tlSize.to(".sticky--element", {rotate: 20, duration: 5, scale: 15})
//Project gone 
const tlGone = gsap.timeline({
  scrollTrigger: {
    trigger: ".project--list",
    start: "70% 30%",
    end: "70% 30%",
    markers: false,
    scrub: .1
  }
});
tlGone.to(".project--placeholder", {opacity: 0, duration: 5})
gsap.to(".project--placeholder", {
  scrollTrigger: {
    pin: false,
    markers: false
  }
})

const tlClick = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "-60% 30%",
    end: "100% 30%",
    markers: false,
    scrub: 0.5
  }
});
tlClick.to(".sticky--element", {display: "none", pointerEvents: "none",duration: 5})

const tlDarken = gsap.timeline({
  scrollTrigger: {
    trigger: ".sticky--containe",
    start: "10% 10%",
    end: "50% 00%",
    markers: false,
    scrub: 0
  }
});
tlDarken.to(".background", {backgroundColor: "#0e1212", duration: 5})

const tlModel = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "10% 10%",
    end: "150% 0%",
    markers: false,
    scrub: 5
  }
});
tlModel.to(".canvas", { left: "100%", top: "-100%", rotate: "0deg", duration: 50 })
tlModel.to("canvas", {  transform: "rotate(-70deg)", duration: 50 })
const tlContactPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "0% 10%",
    end: "50% 0%",
    markers: false,
    scrub: 1,
    pin: true
  }
});
tlContactPin.to(".contact", {  })

const tlbgrMove = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0% 00%",
    end: "300% 0%",
    markers: false,
    scrub: 1
  }
});
tlbgrMove.to(".home", { backgroundPosition: "50% 90%", duration: 5 })

gsap.to(".about", {
  scrollTrigger: {
    start: "60% 10%",
    end: "120% 10%",
    pin: true,
    markers: false
  }
})

const tlTextMove = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "20% 00%",
    end: "100% 0%",
    markers: false,
    scrub: 1.5
  }
});
tlTextMove.to(".move--fast", { paddingTop: "50", duration: 5 })
tlTextMove.to(".move--slow", { paddingTop: "50", duration: 10 })

