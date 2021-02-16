window.addEventListener('scroll', () => {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
