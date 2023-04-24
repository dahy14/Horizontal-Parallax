const cont = document.querySelector(".cont");
const layers = document.querySelectorAll(".layer");

cont.onscroll = function () {
  let x = cont.scrollTop;
  let w = window.screen.width;
  let r = x / w;

  if (r < 1 && r > 0) {
    layers[0].style.left = r * 1000 + "px";
  }

  for (let i = 1; i < layers.length; i++) {
    if (r < i + 1 && r > i) {
      layers[i].style.left = (r / i - 1) * i * 1000 + "px";
    }
  }
};
