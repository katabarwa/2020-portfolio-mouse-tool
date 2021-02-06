let body = document.querySelector("body");
// body.style.backgroundColor = "black";
// let divCanvas = document.getElementById("canvas");
// body.style.backgroundColor = "rgba(255,0,0,0.5)"; //
// body.style.height = "900px";
// divCanvas.style.width = "width";
// body.style.zIndex = 10;
// divCanvas.style.top = "0";
// // body.style.display = "flex";
// // body.style.flexWrap = "wrap";
// console.log(divCanvas);

body.addEventListener("mousemove", draw);
body.addEventListener("click", clear);
let hasBeenScrolled = false;
body.onscroll = function scrolling() {
  let scrollYDistance = window.scrollY;

  // let y = e.clientY;
  // console.log("befo", y);
  console.log("scroll", scrollYDistance);
  let elements = document.getElementsByClassName("frame");
  let elementsArray = [...elements];
  // console.log("elementsarray", elementsArray);
  elementsArray.forEach(element => {
    // console.log(element);

    element.style.transform = `translate(0px,${scrollYDistance}px)`;
    // console.log(y);
  });
  console.log("hasbeenscrolled1", hasBeenScrolled);

  return (hasBeenScrolled = true);
  console.log("hasbeenscrolled", hasBeenScrolled);

  // if (window.scrollY) {
  //   window.scroll(0, 0); // reset the scroll position to the top left of the document.
  // }
};
// body.addEventListener("scroll", scrolling);
// document.getElementById("canvas").addEventListener("onmouseup", clickBody);

function draw(e) {
  let scrollYDistance = window.scrollY;
  let x = e.clientX;
  let y = e.clientY;
  let frame = document.createElement("div");
  frame.setAttribute("class", "frame");
  document.body.appendChild(frame);
  let elements = document.getElementsByClassName("frame");
  // console.log("elements-array", elements);
  // console.log("elements lenght", elements.length);

  let randomNumber = Math.floor(Math.random() * 2);
  console.log("hasbeenscrolled2", hasBeenScrolled);

  if (hasBeenScrolled === true) {
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
          console.log("hasbeenscrolled3", hasBeenScrolled);
        }
      }
      return (hasBeenScrolled = false);
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
  // let elements = document.getElementsByClassName("frame");
  // console.log("elements in clear", elements);
  // elements.forEach(elements.element, element => console.log(element));
  let elements = document.getElementsByClassName("frame");
  console.log("elements in clear", [...elements]);
  elementsArray = [...elements];
  elementsArray.forEach(element => {
    element.remove();
  });

  // for (let i = 0; i < elements.length; i++) {
  // elements[0].remove();
  // console.log("element i", i, elements[i]);
  // }
}
// console.log("elements in clear", elements);
// elements.forEach(element => {
//   console.log("element", element);
//
// }
// var divs = document.getElementsByTagName('div');
// for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', capture, true);
//     divs[i].addEventListener('click', bubble, false);
// }

// function draw(e) {
//   console.log(e);

//   console.log("elements", elements);

//   let randomNumber = Math.floor(Math.random() * 2);
//   console.log(randomNumber);

//   if (randomNumber === 0) {
//     let x = e.clientX;
//     let y = e.clientY;
//     elements[i].style.position = "absolute";
//     elements[i].style.left = `${x}px`;
//     elements[i].style.top = `${y}px`;
//     elements[i].style.backgroundColor = "black";
//     elements[i].style.width = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.height = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.margin = "1px";
//     elements[i].style.borderRadius = "200px";
//     elements[i].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
//   }
//   if (randomNumber === 1) {
//     let x = e.clientX;
//     let y = e.clientY;
//     elements[i].style.position = "absolute";
//     elements[i].style.left = `${x}px`;
//     elements[i].style.top = `${y}px`;
//     elements[i].style.backgroundColor = "white";
//     elements[i].style.width = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.height = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.borderRadius = "200px";
//     elements[i].style.margin = "1px";
//     elements[i].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
//   }
// }

// setInterval(() => {
//   draw();
// }, 400);

// setTimeout(() => {
//   draw();
// }, 400);
