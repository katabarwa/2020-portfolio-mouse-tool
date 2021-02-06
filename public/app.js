let body = document.querySelector("body");

body.addEventListener("mousemove", draw);
body.addEventListener("click", clear);
let beenScrolled = false;
let scrolledMoreThanOnce = false;

function Scrolled() {
  let scrollYDistance = window.scrollY;
  if (scrollYDistance > 0) {
    beenScrolled = true;
    console.log("beenScrolled", beenScrolled);
  } else {
    beenScrolled = false;
    console.log("beenScrolled2", beenScrolled);
  }
}

function translateOnlyOnFirstScroll() {
  if (beenScrolled === false) {
    body.onscroll = function scrolling() {
      let scrollYDistance = window.scrollY;
      console.log("scroll", scrollYDistance);
      let elements = document.getElementsByClassName("frame");
      let elementsArray = [...elements];
      {
        elementsArray.forEach(element => {
          element.style.transform = `translate(0px,${scrollYDistance}px)`;
        });
      }
    };
  }
  return (beenScrolled = true);
}

function draw(e) {
  let scrollYDistance = window.scrollY;
  let x = e.clientX;
  let y = e.clientY;
  let frame = document.createElement("div");
  frame.setAttribute("class", "frame");
  document.body.appendChild(frame);
  let elements = document.getElementsByClassName("frame");
  let randomNumber = Math.floor(Math.random() * 2);

  if (beenScrolled === true) {
    if (randomNumber === 0) {
      for (let i = 0; i < elements.length; i++) {
        if (i === 0) {
          elements[elements.length - 1].style.position = "absolute";

          elements[elements.length - 1].style.backgroundColor = "black";
          let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          elements[elements.length - 1].style.width = `${randomWidth}px`;
          elements[elements.length - 1].style.height = `${randomHeight}px`;
          elements[elements.length - 1].style.left = `${x -
            randomWidth / 2 -
            30}px`;
          elements[elements.length - 1].style.top = `${y -
            randomHeight / 2 -
            30 +
            scrollYDistance}px`;
          elements[elements.length - 1].style.margin = "1px";
          elements[elements.length - 1].style.borderRadius = "200px";
          elements[elements.length - 1].style.boxShadow =
            "0px 0px 5px 1px #FFFFFF";
          return;
        }
        if (i > 0) {
          elements[i].style.position = "absolute";
          let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          elements[elements.length - i].style.left = `${x -
            randomWidth / 2 -
            30}px`;
          elements[elements.length - i].style.top = `${y -
            randomHeight / 2 -
            30 +
            scrollYDistance}px`;
          elements[elements.length - i].style.backgroundColor = "black";
          elements[elements.length - i].style.width = `${randomWidth}px`;
          elements[elements.length - i].style.height = `${randomHeight}px`;
          elements[elements.length - i].style.margin = "1px";
          elements[elements.length - i].style.borderRadius = "200px";
          elements[elements.length - i].style.boxShadow =
            "0px 0px 5px 1px #FFFFFF";
          return;
        }
      }
    }
    if (randomNumber === 1) {
      {
        for (let i = 0; i < elements.length; i++) {
          if (i === 0) {
            elements[elements.length - 1].style.position = "absolute";

            elements[elements.length - 1].style.backgroundColor = "white";
            let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            elements[elements.length - 1].style.width = `${randomWidth}px`;
            elements[elements.length - 1].style.height = `${randomHeight}px`;
            elements[elements.length - 1].style.left = `${x -
              randomWidth / 2 -
              30}px`;
            elements[elements.length - 1].style.top = `${y -
              randomHeight / 2 -
              30 +
              scrollYDistance}px`;
            elements[elements.length - 1].style.margin = "1px";
            elements[elements.length - 1].style.borderRadius = "200px";
            elements[elements.length - 1].style.boxShadow =
              "0px 0px 5px 1px #FFFFFF";
            return;
          }
          if (i > 0) {
            elements[i].style.position = "absolute";
            let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            elements[elements.length - i].style.left = `${x -
              randomWidth / 2 -
              30}px`;
            elements[elements.length - i].style.top = `${y -
              randomHeight / 2 -
              30 +
              scrollYDistance}px`;
            elements[elements.length - i].style.backgroundColor = "white";
            elements[elements.length - i].style.width = `${randomWidth}px`;
            elements[elements.length - i].style.height = `${randomHeight}px`;
            elements[elements.length - i].style.margin = "1px";
            elements[elements.length - i].style.borderRadius = "200px";
            elements[elements.length - i].style.boxShadow =
              "0px 0px 5px 1px #FFFFFF";
            return;
          }
        }
      }
    }
    return (isItScrolling = false);
  } else {
    if (randomNumber === 0) {
      for (let i = 0; i < elements.length; i++) {
        if (i === 0) {
          elements[elements.length - 1].style.position = "absolute";

          elements[elements.length - 1].style.backgroundColor = "black";
          let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          elements[elements.length - 1].style.width = `${randomWidth}px`;
          elements[elements.length - 1].style.height = `${randomHeight}px`;
          elements[elements.length - 1].style.left = `${x -
            randomWidth / 2 -
            30}px`;
          elements[elements.length - 1].style.top = `${y -
            randomHeight / 2 -
            30}px`;
          elements[elements.length - 1].style.margin = "1px";
          elements[elements.length - 1].style.borderRadius = "200px";
          elements[elements.length - 1].style.boxShadow =
            "0px 0px 5px 1px #FFFFFF";
          return;
        }
        if (i > 0) {
          elements[i].style.position = "absolute";
          let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
          elements[elements.length - i].style.left = `${x -
            randomWidth / 2 -
            30}px`;
          elements[elements.length - i].style.top = `${y -
            randomHeight / 2 -
            30}px`;
          elements[elements.length - i].style.backgroundColor = "black";
          elements[elements.length - i].style.width = `${randomWidth}px`;
          elements[elements.length - i].style.height = `${randomHeight}px`;
          elements[elements.length - i].style.margin = "1px";
          elements[elements.length - i].style.borderRadius = "200px";
          elements[elements.length - i].style.boxShadow =
            "0px 0px 5px 1px #FFFFFF";
          return;
        }
      }
    }
    if (randomNumber === 1) {
      {
        for (let i = 0; i < elements.length; i++) {
          if (i === 0) {
            elements[elements.length - 1].style.position = "absolute";

            elements[elements.length - 1].style.backgroundColor = "white";
            let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            elements[elements.length - 1].style.width = `${randomWidth}px`;
            elements[elements.length - 1].style.height = `${randomHeight}px`;
            elements[elements.length - 1].style.left = `${x -
              randomWidth / 2 -
              30}px`;
            elements[elements.length - 1].style.top = `${y -
              randomHeight / 2 -
              30}px`;
            elements[elements.length - 1].style.margin = "1px";
            elements[elements.length - 1].style.borderRadius = "200px";
            elements[elements.length - 1].style.boxShadow =
              "0px 0px 5px 1px #FFFFFF";
            return;
          }
          if (i > 0) {
            elements[i].style.position = "absolute";
            let randomHeight = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            let randomWidth = Math.floor(Math.random() * (50 - 12.5)) + 12.5;
            elements[elements.length - i].style.left = `${x -
              randomWidth / 2 -
              30}px`;
            elements[elements.length - i].style.top = `${y -
              randomHeight / 2 -
              30}px`;
            elements[elements.length - i].style.backgroundColor = "white";
            elements[elements.length - i].style.width = `${randomWidth}px`;
            elements[elements.length - i].style.height = `${randomHeight}px`;
            elements[elements.length - i].style.margin = "1px";
            elements[elements.length - i].style.borderRadius = "200px";
            elements[elements.length - i].style.boxShadow =
              "0px 0px 5px 1px #FFFFFF";
            return;
          }
        }
      }
    }
  }
}

function clear() {
  let elements = document.getElementsByClassName("frame");
  console.log("elements in clear", [...elements]);
  elementsArray = [...elements];
  elementsArray.forEach(element => {
    element.remove();
  });
}

setInterval(() => {
  Scrolled();
}, 40);
