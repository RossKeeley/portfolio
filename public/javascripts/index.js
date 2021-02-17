// window.addEventListener('scroll', () => {
//   var header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

window.addEventListener("resize", () => {
  var width = screen.width;
  var x = document.getElementById("item");
  if (width < 670) {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  };
});

function myFunction() {
  var x = document.getElementById("item");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
