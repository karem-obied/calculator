let themer = document.querySelector("button");
let toggler = document.querySelector("button span");
let counter = 1;
themer.onclick = () => {
  if (counter === 1) {
    counter++;
    document.body.className = `theme-${counter}`;
    toggler.style.cssText = "left:50%;top:50%;transform:translate(-50%,-50%);";
  } else if (counter === 2) {
    counter++;
    document.body.className = `theme-${counter}`;
    toggler.style.cssText =
      "left:100%;top:50%;transform:translate(calc(-100% - 5px),-50%);";
  } else {
    counter = 1;
    document.body.className = `theme-${counter}`;
    toggler.style.cssText = "left:5px;top:50%;transform:translate(0,-50%);";
  }
};

let spans = document.querySelectorAll(".bottom span");
let div = document.querySelector(".middle");
/* spans.forEach((e) => {
  e.onclick = () => {
    if (e.innerHTML === "DEL") {
      div.innerHTML = div.innerHTML.slice(0, -1);
    } else if (e.innerHTML === "Reset") {
      div.innerHTML = "";
    } else if (e.innerHTML === "=") {
      div.innerHTML
    } else div.innerHTML = div.innerHTML + e.innerHTML;
  };
});
 */
