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
let a = document.querySelector(".attribution");
html = a.innerHTML;
if (window.innerWidth <= 768) {
  a.innerHTML = "INFO";
  a.onclick = () => {
    a.innerHTML = html;
  };
  a.onmouseleave = () => {
    a.innerHTML = "INFO";
  };
} else {
  a.innerHTML = html;
}
