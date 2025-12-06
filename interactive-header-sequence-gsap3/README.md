[![Interactive Header Sequence](/interactive-header-sequence-gsap3/images/interactive-header-demo.gif)](https://codepen.io/kolonatalie/pen/RNWxMBw)
# 🌿 Interactive Header Sequence | GSAP3 | [Live Demo]()

This project focused on mastering the fundamentals of the **GreenSock Animation Platform (GSAP)** for high-performance web animations.

The goal was to create a fluid, sequenced entry animation for a hypothetical product header (Hero Section), blending static CSS styling with dynamic JavaScript animation.

## Skills & Technologies
* **GSAP Timeline (`gsap.timeline`).** Used to sequence multiple elements (H1, H2, P, Button, Images) precisely, ensuring elements enter the viewport in a cohesive, storytelling flow.
* **GSAP's optimized `transform`.** All motion uses x, y, rotation, and scaleY properties, which are GPU-accelerated (avoiding expensive layout reflows) for consistent 60fps performance.
* **GSAP Stagger (`stagger: 0.2`).** Applied to the multiple .leaves images to create a natural, cascading effect of elements entering the scene.
* **Clean HTML5/CSS3.** Structured the header and image sections using semantic HTML and maintained a high level of CSS styling for aesthetics (e.g., backdrop-filter, radial-gradient).
* **`window.addEventListener("load", init)`.** Ensuring the animation script runs only after all visual assets (images) are fully loaded, preventing jank or broken sequencing.

## Lessons Learned

* Understanding `defaults`: Efficiently setting shared properties (`opacity: 0`, `ease: "back"`) once for the entire timeline instead of repeating them for every element.

* Controlling Overlap (`-=`): Using relative position parameters (e.g., `"-=0.2"`) to slightly overlap the animation start times of the text elements, creating a smoother, less blocky transition.

* Transform Origin: The use of `transformOrigin:"100% 100%"` combined with `scaleY:0` and `rotation:90` on the `.leaves` for a realistic "unfurling" effect from the bottom corner.

## Getting Started (Local Setup)

This project runs entirely in the browser. Dependencies: `GSAP v3.13.0` (loaded via CDN).

1.  Navigate into the project directory:
    ```bash
    cd interactive-header-sequence-gsap3
    ```
2.  **Open `index.html`** in your web browser.

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*