[![Interactive Header Sequence](/bunny-jumper/images/demo-bunny.gif)]()
# Bunny Jumper Animation | GSAP3 | [Live Demo]()

A dynamic web animation showcasing a bunny jumping in and out of a hole, built using **GSAP (GreenSock Animation Platform)**. This project is a demonstration of core animation techniques and sequencing, aimed at mastering web motion for frontend development.

## Features
* Utilizes `gsap.timeline()` to create a fluid, looped, and sequenced animation with precise control over element timing.

* Advanced use of CSS properties like `transform` for movement (y), scaling (`scaleY`, `scaleX`), and setting the rotation/scale pivot point (`transformOrigin`).

* Implements different easing functions (`ease: "power1.in"`) to simulate acceleration and deceleration, adding weight and realism to the bunny's jump.

* Coordinates the movement of the bunny, the hole's appearance, and the shadow's fading/scaling using relative position parameters (`>` and absolute timings) within the timeline.

## Technologies Used
* HTML5: Structure and content.

* CSS3: Styling and layout, including complex `box-shadow` for the board effect.

* GSAP: All animation logic and control.

    * `gsap.timeline()`

    * `.from()`, `.to()`, `.fromTo()`

    * `Ease` and `transformOrigin` properties.

    * Looping control (`repeat: -1`, `yoyo: true`).


## 🛠️ Getting Started (Local Setup)
This project runs entirely in the browser. Dependencies: `GSAP v3.13.0` (loaded via CDN).

1.  **Clone the repository:**
    
    `git clone` [`https://github.com/kolonatalie/gsap-threejs-experiments.git`](https://github.com/kolonatalie/gsap-threejs-experiments.git)
    
2.  **Navigate to the project folder:**
    ```bash
    cd gsap-threejs-experiments/bunny-jumper
    ```
3.  **Run the code:**
    Open the `index.html` file in your browser (Live Server recommended).


---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*