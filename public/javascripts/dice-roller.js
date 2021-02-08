var dice = document.querySelector('.dice');
var allDots = Array.from(document.getElementsByClassName('dot'));

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  allDots.forEach(dot => dot.classList.remove('dot'));
  if (randomNumber === 1) {
      allDots[4].classList.add('dot');
  } else if (randomNumber === 2) {
      allDots[0].classList.add('dot');
      allDots[8].classList.add('dot');
  } else if (randomNumber === 3) {
      allDots[0].classList.add('dot');
      allDots[4].classList.add('dot');
      allDots[8].classList.add('dot');
  } else if (randomNumber === 4) {
      allDots[0].classList.add('dot');
      allDots[2].classList.add('dot');
      allDots[6].classList.add('dot');
      allDots[8].classList.add('dot');
  } else if (randomNumber === 5) {
      allDots[0].classList.add('dot');
      allDots[2].classList.add('dot');
      allDots[4].classList.add('dot');
      allDots[6].classList.add('dot');
      allDots[8].classList.add('dot');
  } else if (randomNumber === 6) {
      allDots[0].classList.add('dot');
      allDots[2].classList.add('dot');
      allDots[3].classList.add('dot');
      allDots[5].classList.add('dot');
      allDots[6].classList.add('dot');
      allDots[8].classList.add('dot');
  };
};
dice.addEventListener('click', rollDice);
