const hole = document.querySelector(".hole")
const bunny = document.querySelector(".bunny")
const shadow = document.querySelector(".shadow")
const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.5 })

tl.from(hole, { scale: 0, repeat: 1, yoyo: true })
  .fromTo(bunny, { y: 320, scaleY: 2, transformOrigin: "100% 50%", }, { y: -160, scaleY: 1 }, 0.2)
  .to(bunny, { y: -4, ease: "power1.in" }, ">")
  .to(bunny, { scaleY: 0.85, scaleX: 1.2, duration: 0.2, transformOrigin: "50% 100%", repeat: 1, yoyo: true })
  .to(shadow, { opacity: 1, duration: 0.2 }, 0.7)
  .to(shadow, { scaleX: 0.6, ease: "power1.in" }, ">")




 //GSDevTools.create({})
