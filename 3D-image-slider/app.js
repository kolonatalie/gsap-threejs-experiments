import { gsap } from 'https://cdn.skypack.dev/gsap';

const slider = document.querySelector('[data-slider]');

const animation = gsap.to(slider, {
  rotateY: 360,
  duration: 20,
  ease: "none",
  repeat: -1
});

let isPaused = false;

slider.addEventListener('click', () => {
  if (!isPaused) {
    gsap.to(animation, {
      timeScale: 0,
      duration: 0.6,
      ease: "power2.inOut"
    });
    isPaused = true;
  } else {
    gsap.to(animation, {
      timeScale: 1,
      duration: 1.2,
      ease: "back.out(1.7)"
    });
    isPaused = false;
  }
});