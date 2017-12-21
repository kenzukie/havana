const keys = document.querySelectorAll('.key');
//const key = document.querySelector('.key');
keys.forEach(key => key.addEventListener('click', playSound));

function playSound() {
  const audio = document.querySelector('audio[data-sound="'+ this.dataset.sound +'"]');
  //var sounds = document.getElementsByTagName('audio');
  audio.currentTime = 0;
  audio.play();
};

