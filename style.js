var main = document.querySelector("#main");
var box = document.querySelector("#box");
var image = document.querySelector("#image");
var text = document.querySelector("#text").innerHTML;
var textAnim = document.querySelector("#textAnim");

main.addEventListener("mousemove", function (dets) {
  gsap.to(box, {
    duration: 2,
    x: dets.x,
    y: dets.y,
    ease: "elastic.out(1,0.75)",
  });
});

image.addEventListener("mouseenter", function (dets) {
  box.innerHTML = text;
  gsap.to(box, {
    scale: 6,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  });
});
image.addEventListener("mouseleave", function (dets) {
  box.innerHTML = "";
  gsap.to(box, {
    scale: 1,
  });
});
