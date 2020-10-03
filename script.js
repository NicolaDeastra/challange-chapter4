function getComputerChoose() {
  const comp = Math.random();

  if (comp < 0.34) return 'batu';
  if (comp >= 0.34 && comp < 0.67) return 'gunting';
  return 'kertas';
}

function getResult(comp, player) {
  if (player === comp) return 'Draw!!';
  if (player == 'batu') return comp == 'gunting' ? 'Win!!' : 'Lose!!';
  if (player == 'gunting') return comp == 'batu' ? 'Lose!!' : 'Win!!';
  if (player == 'kertas') return comp == 'gunting' ? 'Lose!!' : 'Win!!';
}

function randomize() {
  const imgComputer = document.querySelector('.img-computer');
  const image = ['batu', 'gunting', 'kertas'];
  const startTime = new Date().getTime();
  let i = 0;

  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }

    imgComputer.setAttribute('src', 'img/' + image[i++] + '.png');

    if (i == image.length) i = 0;
  }, 100);
}

const chooses = document.querySelectorAll('li img');

chooses.forEach(function (choose) {
  choose.addEventListener('click', function () {
    const computerChoose = getComputerChoose();
    const playerChoose = choose.className;
    const result = getResult(computerChoose, playerChoose);

    randomize();

    setTimeout(() => {
      const imgComputer = document.querySelector('.img-computer');
      imgComputer.setAttribute('src', 'img/' + computerChoose + '.png');

      const text = document.querySelector('.text');
      text.style.visibility = 'hidden';

      const info = document.querySelector('.info');
      info.innerHTML = result;
      info.style.visibility = 'visible';
    }, 1000);
  });
});
