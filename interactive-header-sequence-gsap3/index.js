const tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});

function init() {
    tl.from("#demo", {ease:"linear", autoAlpha:0})
    .from("h1", {x:80})
    .from("h2", {x:-80})
    .from("p", {y:30}, "-=0.2")
    .from("button", {y:50}, "-=0.4") 
    .from(".leaves", {yPercent: 100, scaleY:0, rotation:90, transformOrigin:"100% 100%", stagger:0.2, duration:1.5}, "-=1")
}

window.addEventListener("load", function(event) { 
  init();
});