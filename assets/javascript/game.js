var theGame = {
  wins: 0,
  losses: 0,
  guesses: 0,
  cityToGuess: '',
  wordProgress: '',
  gussedLetters: [],
  bonusCity: '',
  cities: [
    { city: "Tokyo", country: "Japan", picture: "" },
    { city: "Jakarta", country: "Indonesia", picture: "" },
    { city: "Delhi", country: "India", picture: "" },
    { city: "Seoul–Incheon", country: "South Korea", picture: "" },
    { city: "Manila", country: "Philippines", picture: "" },
    { city: "Mumbai", country: "India", picture: "" },
    { city: "Karachi", country: "Pakistan", picture: "" },
    { city: "Shanghai", country: "China", picture: "" },
    { city: "New York", country: "United States", picture: "" },
    { city: "Sao Paolo", country: "Brazil", picture: "" },
    { city: "Beijing", country: "China", picture: "" },
    { city: "Mexico City", country: "Mexico", picture: "" },
    { city: "Guangzhou-Foshan", country: "china", picture: "" },
    { city: "Osaka-Kobe-Kyoto", country: "Japan", picture: "" },
    { city: "Moscow", country: "Russia", picture: "" },
    { city: "Shaka", country: "Bangladesh", picture: "" },
    { city: "Cairo", country: "Egypt", picture: "" },
    { city: "Bangkok", country: "Thailand", picture: "" },
    { city: "Los Angeles", country: "United States", picture: "" },
    { city: "Kolkata", country: "India", picture: "" },
    { city: "Buenos Aires", country: "Argentina", picture: "" },
    { city: "Tehran", country: "Iran", picture: "" },
    { city: "Istanbul", country: "Turkey", picture: "" },
    { city: "Lagos", country: "Nigeria", picture: "" },
    { city: "Shenzhen", country: "China", picture: "" },
    { city: "Rio De Janeiro", country: "Brazil", picture: "" },
    { city: "Kinshasa", country: "Congo", picture: "" },
    { city: "Tianjin", country: "China", picture: "" },
    { city: "Lima", country: "Peru", picture: "" },
    { city: "Paris", country: "france", picture: "" },
    { city: "Chengdu", country: "China", picture: "" },
    { city: "Lahore", country: "pakistan", picture: "" },
    { city: "London", country: "United Kingdom", picture: "" },
    { city: "Bangalore", country: "India", picture: "" },
    { city: "Ho Chi Minh City", country: "Viet Nam", picture: "" },
    { city: "Nagoya", country: "Japan", picture: "" },
    { city: "Chennai", country: "India", picture: "" },
    { city: "Bogota", country: "Colombia", picture: "" },
    { city: "Chicago", country: "United States", picture: "" },
    { city: "Johannesburg-East", country: "South Africa", picture: "" },
    { city: "Taipei", country: "China: Taiwan", picture: "" },
    { city: "Dongguan", country: "China", picture: "" },
    { city: "Hyderabad", country: "India", picture: "" },
    { city: "Wuhan", country: "China", picture: "" },
    { city: "Hangzhou", country: "China", picture: "" },
    { city: "Hanoi", country: "Viet Nam", picture: "" },
    { city: "Chongqing", country: "China", picture: "" },
    { city: "Onitsha", country: "Nigeria", picture: "" },
    { city: "Ahmadabad", country: "India", picture: "" },
    { city: "Kuala Lumpur", country: "Malaysia" }
  ],
}
function getACity() {
  var randIndex = Math.floor(Math.random() * 50);
  theGame.wordProgress = '';
  theGame.cityToGuess = theGame.cities[randIndex].city;
  theGame.bonusCity = theGame.cities[randIndex].country;
  theGame.guesses = 7;
  $("#numWins").text(theGame.wins);
  $("#numLosses").text(theGame.losses);
  theGame.cityToGuess.split('').forEach(letter => {
    if (letter === " ") {
      theGame.wordProgress = theGame.wordProgress + " ";
    } else {
      theGame.wordProgress = theGame.wordProgress + "_"
    }
  })
  return theGame.wordProgress;
}

function guessALetter(letter) {
  var misGuess = true;
  theGame.cityToGuess.split('')
    .forEach((goodLetter, index) => {
      if (goodLetter.toUpperCase() === letter.toUpperCase()) {
        var temp = theGame.wordProgress.split('');
        temp[index] = letter.toUpperCase();
        theGame.wordProgress = temp.join('');
        misGuess = false;
      }
    })
  if (misGuess) {
    theGame.guesses--;
  }
  theGame.gussedLetters.push(letter.toUpperCase());
  if (theGame.wordProgress === theGame.cityToGuess) {
    theGame.wins++;
    console.log("You win" + theGame.wins)
    theGame.cityToGuess = '';
    $("#numWins").text(theGame.wins);
  } else if (theGame.guesses === 0) {
    theGame.losses++;
    $("#numLosses").text(theGame.losses);
    $("#wordToGuess").text('');
  }
  return theGame.wordProgress;
}

document.onkeyup = function (event) {
  var key = event.key;

  if (theGame.guesses === 0 || theGame.cityToGuess === '') {
    $("#wordToGuess").text(getACity());
  } else if (theGame.gussedLetters.join('').includes(key)) {
    // Don't do anything they already guessed it.
  } else {
    $("#wordToGuess").text(guessALetter(key));
    $("#guesses").text(theGame.gussedLetters.join(','));
  }

}
