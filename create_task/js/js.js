var game = document.getElementById('game');
var name = "";

function welcomeOnwards() {
  name = String(document.getElementById('name').value);
  var explain = "<p>"+name+", you are a child of the royal family, loved by all. However, the better a person is in this world, the worse their counterpart down below. Unbeknownst to you, your evil twin plots in the Land Below. One horrible day, you wake to find yourself not in your own bed, warm and comfortable, but in the dark underworld. Your evil counterpart has somehow found a way into the Land Above and replaced you. Ahead of you is a long and arduous journey to make it back to the top.</p><button onclick='onwards(one)'>Onwards!</button>";
  document.body.style.backgroundColor = "black";
  game.style.backgroundColor = "black";
  game.style.color = "white";
  onwards(explain);
}

function onwards(page){
  game.innerHTML = page + restart;
  if (page == welcome){
    game.innerHTML = page;
    document.body.style.backgroundColor = "white";
    game.style.backgroundColor = "white";
    game.style.color = "black";
  }
}

var explain = "<p>"+name+", you are a child of the royal family, loved by all. However, the the better a person is in this world, the worse their counterpart down below. Unbeknownst to you, your evil twin plots in the Land Below. One horrible day, you wake to find yourself not in your own bed, warm and comfortable, but in the dark underworld. Your evil counterpart has somehow found a way into the Land Above and replaced you. Ahead of you is a long and arduous journey to make it back to the top.</p><button onclick='onwards(one)'>Onwards!</button>";
var one = "<p>You trudge along, alone and hungry. You see you're in a forest, so perhaps you can find some berries, nuts, or roots, whatever those are. Story in progress.</p><button onclick='onwards(one1)'>Option 1</button><button onclick='onwards(one2)'>Option 2</button>"
var one1 = "<p>Story in progress</p>";
var one2 = "<p>Story in progress</p>";

var restart = "<button onclick='onwards(welcome)'>Restart</button>"
var welcome = "<h1>Welcome!</h1><p>Welcome, player! First, before we begin your adventure, please enter your name:</p><input type='text' id='name' value='Karen'><button onclick='welcomeOnwards()'>Onwards!</button>"
