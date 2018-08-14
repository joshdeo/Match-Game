var MatchGame = {};

/*Sets up a new game after HTML document has loaded. Renders a 4x4 board of cards.*/

/*Generates and returns an array of matching card values.*/

MatchGame.generateCardValues = function() {
  var values = []
  for (var loop = 1; loop <= 8; loop++) {
    console.log('Working' + loop);
    values.push(loop);
    values.push(loop);
  }
  var random = [];
  while (16 > random.length) {
    let num = Math.floor(Math.random() * values.length);
    var randNum = values.splice(num, 1);
    random.push(randNum);
  }
  return random;
}

/*Converts card values to jQuery card objects and adds them to the supplied game object.*/
$(document).ready(function() {
      MatchGame.renderCards = function(cardValues, $game) {
        var colors = {
          
        }
        $game.empty();


      }

      /*Flips over a given card and checks to see if two cards are flipped over. Updates styles on flipped cards depending whether they are a match or not.*/

      MatchGame.flipCard = function($card, $game) {

      };
    }
