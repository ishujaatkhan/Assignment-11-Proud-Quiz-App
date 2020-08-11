var Correct = document.getElementById("correct");
var getCorrect = sessionStorage.getItem("Correct");

Correct.innerHTML = getCorrect;

var pt = document.getElementById("Pt");
let getPoints = sessionStorage.getItem("score");

pt.innerHTML = getPoints;

var remark = document.getElementById("remarks");
if (getPoints >= 20) {
  remarks.innerHTML = "Congratulation";
} else {
  remarks.innerHTML = "Need More Practice";
}

var percentage = document.getElementById("per");
var per = (getPoints / 40) * 100;

percentage.innerHTML = per + "%";

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateX(${y}px)`;
  });
}
