![3D Interactive Carousel | GSAP & CSS Variables](./images/demo.gif)
# 3D Interactive Carousel | GSAP & CSS Variables

This project focuses on fluid motion, mathematical precision in CSS, and interactive state management using GSAP.

## Technical Highlights
The rotation is controlled via GSAP's `timeScale` property.

```javascript
// Example of smooth interaction logic
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
```

## Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: 3D Transforms, CSS Variables, Fluid Design (Clamp).
- **JavaScript**: GSAP 3.



## Getting Started (Local Setup)
This project runs entirely in the browser. Dependencies: `GSAP v3.13.0` (loaded via CDN).

1.  **Clone the repository:**
    
    `git clone` [`https://github.com/kolonatalie/gsap-threejs-experiments.git`](https://github.com/kolonatalie/gsap-threejs-experiments.git)
    
2.  **Navigate to the project folder:**
    ```bash
    cd gsap-threejs-experiments/3D-image-slider
    ```
3.  **Run the code:**
    Open the `index.html` file in your browser (Live Server recommended).


---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*