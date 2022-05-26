if (window.matchMedia("(min-width: 768px)").matches) {
  const hamburger = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector(".hamburger-Menu");
  const closeIcon = document.querySelector(".close-Icon");
  hamburger.addEventListener("click", () => {
    hamburgerMenu.style.height = "100vh";
  });
  closeIcon.addEventListener("click", () => {
    hamburgerMenu.style.height = "0";
  });

  let section = [...document.querySelectorAll(".section")];
  let container = document.querySelector(".container");
  let firstSection = document.querySelector(".first-Section");
  let outerContainer = document.querySelector(".outerContainer");
  let page13 = document.querySelector("#page13");
  let containerWidth;
  let current = 0,
    target = 0,
    ease = 0.05;
  window.addEventListener("resize", init());
  window.addEventListener("resize", animate());
  window.addEventListener("resize", console.log(window.innerWidth));
  let x = window.innerWidth;
  window.addEventListener("resize", () => {
    if (x != window.innerWidth) {
      location.reload();
      x = window.innerWidth;
    }
  });
  function init() {
    containerWidth = container.offsetWidth;
    outerContainer.style.height = `${containerWidth - (window.innerWidth - window.innerHeight)
      }px`;
  }
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }
  function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(container, `translateX(-${current}px)`);
    requestAnimationFrame(animate);
  }
  function setTransform(el, transform) {
    el.style.transform = transform;
  }
  init();
  animate();
}

if (window.matchMedia("(max-width: 768px)").matches) {
  const closeIcon2 = document.querySelector(".close-Icon2");
  const closeIcon = document.querySelector(".close-Icon");
  const otherBurger = document.querySelector(".hamburger");
  const otherMenu = document.querySelector(".hamburger-Menu");

  otherBurger.addEventListener("click", () => {
    otherMenu.style.left = "0vw";
  });
  closeIcon.addEventListener("click", () => {
    otherMenu.style.left = "-100vw";
  });

  let z = window.innerWidth;
  window.addEventListener("resize", () => {
    if (z != window.innerWidth) {
      location.reload();
      z = window.innerWidth;
    }
  });
}
