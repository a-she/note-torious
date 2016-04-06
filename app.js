// Use localStorage for scaffolding. Set up server later
var usrIO = $('#usrIO');
var usrIn = $('#usrIn');
var charName = $('#charName');

function connectServer() {
}

function initGame() {
}

function initPlayer() {
  if ('undefined' != typeof localStorage.usr) {
    charName.html('Welcome back, ' + localStorage.usr + '!');
console.log('A');
  }
  else {
    usrIn.show();
    usrIn.on('input', function() { localStorage.usr = usrIn.val(); })
console.log('B');
  }
}

function init() {
  connectServer();
  initGame();
  initPlayer();
}

init();