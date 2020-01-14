var humanScore = 0;
var computerScore = 0;

document.getElementById('stone').onclick = playStone;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

function playStone() {
  play("stone");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";
  
  if(humanPlay == 'stone') {
    if(computerPlay == 'stone') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'stone') {
      document.getElementById('status').innerHTML += alert;
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    }  
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'stone') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }  
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

function getComputerPlay() {
  var plays = ['stone', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}