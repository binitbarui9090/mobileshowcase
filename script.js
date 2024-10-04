const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
Shery.mouseFollower();

Shery.makeMagnet("nav a, .char, .r-circle", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".play, .muted", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

let playbtn = document.querySelector(".play");
let mutebtn = document.querySelector(".muted");

let vid = document.querySelector(".page3 video");

playbtn.addEventListener("click", function () {
  if (vid.paused) {
    vid.play();
    playbtn.textContent = "Pause";
  } else {
    vid.pause();
    playbtn.textContent = "Play";
  }
});


mutebtn.addEventListener("click", function () {
  if (vid.muted) {
    vid.muted = false;
    mutebtn.textContent = "Mute";
  } else {
    vid.muted = true;
    mutebtn.textContent = "Unmute";
  }
});

vid.addEventListener("volumechange", function () {
  if (vid.muted) {
    mutebtn.textContent = "Unmute";
  } else {
    mutebtn.textContent = "Mute";
  }
});

Shery.hoverWithMediaCircle(".cir", {
  images: [
    "assets/sec1.jpg",
    "assets/sec2.jpg",
    "assets/sec3.jpg",
    "assets/sec4.jpg",
    "assets/sec5.png",
    "assets/sec6.png",
    "assets/sec7.png",
    "assets/sec8.png",
  ] /*OR*/,
});

let shopbtn = document.querySelector(".shop");
let cart = document.querySelector(".cart");

shopbtn.addEventListener("click", function () {
  let ctl = gsap.timeline();
  ctl.to(".cart", {
    top: 75,
  });
  ctl.to(".phone1", {
    delay: 1,
    rotate: 0,
    top: -160,
    scale: 0.1,
    duration: 2,
  });
  ctl.to(".cart, .phone1", {
    y: -200,
  });
  ctl.to(".thanks", {
    x: 600,
  });
});

Shery.imageEffect(".boy", {
  style: 2,
});
