function playSpeech() {
  try {
    const audio = new Audio('assets/sounds/speech.wav');
    audio.play();
  } catch(e) {
    alert('Ошибка воспроизведения аудио: ' + e);
  }
}

function raiseFlag() {
  const flag = document.querySelector('#flag');
  flag.setAttribute('visible', true);
  const drums = new Audio('assets/sounds/drums.wav');
  drums.play();
  // simple animation: bob the flag cloth
  const cloth = document.querySelector('#flag-cloth');
  let t = 0;
  if (cloth) {
    const id = setInterval(() => {
      t += 0.1;
      const s = 0.02 * Math.sin(t);
      cloth.setAttribute('position', { x: 0 + s, y: 0, z: 0 });
      if (t > 6.28 * 2) clearInterval(id);
    }, 60);
  }
}

function startPuzzle() {
  const piece = document.querySelector('#puzzlePiece');
  piece.setAttribute('visible', true);
  // simple pulse animation
  let s = 1;
  let dir = -0.02;
  const id = setInterval(() => {
    s += dir;
    if (s < 0.8 || s > 1.1) dir = -dir;
    piece.setAttribute('scale', { x: s, y: s, z: s });
  }, 80);
  setTimeout(() => {
    clearInterval(id);
    piece.setAttribute('visible', false);
    alert('Поздравляем! Вы собрали бастион. Награда: виртуальный паспорт Петербурга (1703).');
  }, 8000);
}
