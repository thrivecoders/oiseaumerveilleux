if (window.matchMedia("(min-width: 768px)").matches) {
  // JavaScript Code for legal terms popup on site load
  const legal = sessionStorage.getItem("legal");
  const exit = document.querySelector(".close");
  const accept = document.querySelector(".accept");
  const popUp = document.querySelector(".popUpOuter");
  if (legal == "accept") {
    popUp.style.display = "none";
  }
  else {
    popUp.style.display = "flex";
    exit.addEventListener("click", () => {
      window.close();
    })
    accept.addEventListener("click", () => {
      popUp.style.display = "none";
      sessionStorage.setItem("legal", "accept");
    })
  }



  // Landing Page Animation
  const titleImageContainer = document.querySelector(".title-Image-Container");
  const birdImageContainer = document.querySelector(".bird-Image-Container");
  const rightContainer = document.querySelector(".right-Container");
  const presentsImageContainer = document.querySelector(
    ".presents-Image-Container"
  );
  setTimeout(() => {
    titleImageContainer.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    birdImageContainer.style.opacity = "1";
  }, 2000);
  setTimeout(() => {
    rightContainer.style.opacity = "1";
  }, 3000);
  setTimeout(() => {
    presentsImageContainer.style.opacity = "1";
  }, 3000);



  // JavaScript Code for Recipes Gallery Images on the main Carousel
  let container = document.querySelector(".container");
  let createdDiv;
  for (let i = 2; i < 38; i++) {
    createdDiv = document.createElement("div");
    createdDiv.className = "addedDiv";
    createdDiv.id = `addedDiv${i + 1}`;
    createdDiv.innerHTML = ` <img src="/assets/new/${i + 1}.png" class="addedDivImg" id="addedDiv${i + 1}Img">`
    container.appendChild(createdDiv);
  }

  // Viewport is less or equal to 700 pixels wide


  // Javascript Code for Horizontal Smooth Scroll
  let section = [...document.querySelectorAll(".section")];
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



  // JavaScript Code for Scroll Animation on 3rd and 4th page on the main carousel 
  const page21 = document.querySelector("#page21");
  const page3 = document.querySelector("#page3");
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    page21.style.transform = `translateY(${scrollPosition * 0.07}px)`;
    page3.style.transform = `translateX(${scrollPosition * -0.2}px)`;
  });





  const closeIcon2 = document.querySelector(".close-Icon2")
  const closeIcon = document.querySelector(".close-Icon")
  const otherBurger = document.querySelector(".otherBurger");
  const otherMenu = document.querySelector(".otherMenu")

  otherBurger.addEventListener("click", () => {
    otherMenu.style.top = "0vh";
  })
  closeIcon.addEventListener("click", () => {
    otherMenu.style.top = "-100vh";
  })






}















if (window.matchMedia("(max-width: 768px)").matches) {
  // JavaScript Code for legal terms popup on site load
  const legal = sessionStorage.getItem("legal");
  const exit = document.querySelector(".close");
  const accept = document.querySelector(".accept");
  const popUp = document.querySelector(".popUpOuter");
  if (legal == "accept") {
    popUp.style.display = "none";
  }
  else {
    popUp.style.display = "flex";
    exit.addEventListener("click", () => {
      window.close();
    })
    accept.addEventListener("click", () => {
      popUp.style.display = "none";
      sessionStorage.setItem("legal", "accept");
    })
  }


  let z = window.innerWidth;
  window.addEventListener("resize", () => {
    if (z != window.innerWidth) {
      location.reload();
      z = window.innerWidth;
    }
  });




  // Landing Page Animation
  const titleImageContainer = document.querySelector(".title-Image-Container");
  const birdImageContainer = document.querySelector(".bird-Image-Container");
  const navIcons = document.querySelector(".navIcons");
  const rightContainer = document.querySelector(".right-Container");
  const presentsImageContainer = document.querySelector(
    ".presents-Image-Container"
  );
  setTimeout(() => {
    titleImageContainer.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    birdImageContainer.style.opacity = "1";
  }, 2000);
  setTimeout(() => {
    rightContainer.style.opacity = "1";
  }, 3000);
  setTimeout(() => {
    presentsImageContainer.style.opacity = "1";
  }, 3000);
  setTimeout(() => {
    navIcons.style.opacity = "1";
  }, 4000);



  // JavaScript Code for Recipes Gallery Images on the main Carousel
  let container = document.querySelector(".container");
  let createdDiv;
  for (let i = 2; i < 38; i++) {
    createdDiv = document.createElement("div");
    createdDiv.className = "addedDiv";
    createdDiv.id = `addedDiv${i + 1}`;
    createdDiv.innerHTML = ` <img src="/assets/new/${i + 1}.png" class="addedDivImg" id="addedDiv${i + 1}Img">`
    container.appendChild(createdDiv);
  }



  const closeIcon2 = document.querySelector(".close-Icon2")
  const closeIcon = document.querySelector(".close-Icon")
  const otherBurger = document.querySelector(".otherBurger");
  const otherMenu = document.querySelector(".otherMenu")

  otherBurger.addEventListener("click", () => {
    otherMenu.style.left = "0vw";
  })
  closeIcon.addEventListener("click", () => {
    otherMenu.style.left = "-100vw";
  })

} 
