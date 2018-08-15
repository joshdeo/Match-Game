var MatchGame = {};

/*Sets up a new game after HTML document has loaded. Renders a 4x4 board of cards.*/

/*Generates and returns an array of matching card values.*/

$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});

MatchGame.generateCardValues = function() {
  var values = []
  for (var loop = 1; loop <= 8; loop++) {
    console.log('Working' + loop);
    values.push(loop);
    values.push(loop);
  }

  var random = [];

  while (values.length > 0) {
    let num = Math.floor(Math.random() * values.length);
    var randNum = values.splice(num, 1)[0];
    random.push(randNum);
  }
  return random;
}

/*Converts card values to jQuery card objects and adds them to the supplied game object.*/
MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)',
  ];

  $game.empty();
  $game.data('flippedCards', []);


  for (var object = 0; object < cardValues.length; object++) {
    var value = cardValues[object];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    }
    var $cardElement = $('<div class="col-xs-12 card">')
    $cardElement.data();

    $game.append($cardElement);
  }
};

/*Flips over a given card and checks to see if two cards are flipped over. Updates styles on flipped cards depending whether they are a match or not.*/

MatchGame.flipCard = function($card, $game) {

};
