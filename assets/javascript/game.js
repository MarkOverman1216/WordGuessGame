var theGame = {
  wins: 0,
  losses: 0,
  guesses: 0,
  cityToGuess: '',
  wordProgress: '',
  gussedLetters: [],
  bonusCity: '',
  cities: [
    { city: "TOKYO", country: "JAPAN", picture: "" },
    { city: "JAKARTA", country: "INDONESIA", picture: "" },
    { city: "DELHI", country: "INDIA", picture: "" },
    { city: "SEOUL–INCHEON", country: "SOUTH KOREA", picture: "" },
    { city: "MANILA", country: "PHILIPPINES", picture: "" },
    { city: "MUMBAI", country: "INDIA", picture: "" },
    { city: "KARACHI", country: "PAKISTAN", picture: "" },
    { city: "SHANGHAI", country: "CHINA", picture: "" },
    { city: "NEW YORK", country: "UNITED STATES", picture: "" },
    { city: "SAO PAOLO", country: "BRAZIL", picture: "" },
    { city: "BEIJING", country: "CHINA", picture: "" },
    { city: "MEXICO CITY", country: "MEXICO", picture: "" },
    { city: "GUANGZHOU-FOSHAN", country: "CHINA", picture: "" },
    { city: "OSAKA-KOBE-KYOTO", country: "JAPAN", picture: "" },
    { city: "MOSCOW", country: "RUSSIA", picture: "" },
    { city: "SHAKA", country: "BANGLADESH", picture: "" },
    { city: "CAIRO", country: "EGYPT", picture: "" },
    { city: "BANGKOK", country: "THAILAND", picture: "" },
    { city: "LOS ANGELES", country: "UNITED STATES", picture: "" },
    { city: "KOLKATA", country: "INDIA", picture: "" },
    { city: "BUENOS AIRES", country: "ARGENTINA", picture: "" },
    { city: "TEHRAN", country: "IRAN", picture: "" },
    { city: "ISTANBUL", country: "TURKEY", picture: "" },
    { city: "LAGOS", country: "NIGERIA", picture: "" },
    { city: "SHENZHEN", country: "CHINA", picture: "" },
    { city: "RIO DE JANEIRO", country: "BRAZIL", picture: "" },
    { city: "KINSHASA", country: "CONGO", picture: "" },
    { city: "TIANJIN", country: "CHINA", picture: "" },
    { city: "LIMA", country: "PERU", picture: "" },
    { city: "PARIS", country: "FRANCE", picture: "" },
    { city: "CHENGDU", country: "CHINA", picture: "" },
    { city: "LAHORE", country: "PAKISTAN", picture: "" },
    { city: "LONDON", country: "UNITED KINGDOM", picture: "" },
    { city: "BANGALORE", country: "INDIA", picture: "" },
    { city: "HO CHI MINH CITY", country: "VIET NAM", picture: "" },
    { city: "NAGOYA", country: "JAPAN", picture: "" },
    { city: "CHENNAI", country: "INDIA", picture: "" },
    { city: "BOGOTA", country: "COLOMBIA", picture: "" },
    { city: "CHICAGO", country: "UNITED STATES", picture: "" },
    { city: "JOHANNESBURG-EAST", country: "SOUTH AFRICA", picture: "" },
    { city: "TAIPEI", country: "CHINA: TAIWAN", picture: "" },
    { city: "DONGGUAN", country: "CHINA", picture: "" },
    { city: "HYDERABAD", country: "INDIA", picture: "" },
    { city: "WUHAN", country: "CHINA", picture: "" },
    { city: "HANGZHOU", country: "CHINA", picture: "" },
    { city: "HANOI", country: "VIET NAM", picture: "" },
    { city: "CHONGQING", country: "CHINA", picture: "" },
    { city: "ONITSHA", country: "NIGERIA", picture: "" },
    { city: "AHMADABAD", country: "INDIA", picture: "" },
    { city: "KUALA LUMPUR", country: "MALAYSIA" }
  ],
}
function getACity() {
  var randIndex = Math.floor(Math.random() * 50);
  theGame.wordProgress = '';
  theGame.gussedLetters = [];
  theGame.cityToGuess = theGame.cities[randIndex].city;
  theGame.bonusCity = theGame.cities[randIndex].country;
  theGame.guesses = 7;
  $("#numWins").text(theGame.wins);
  $("#numLosses").text(theGame.losses);
  $("#guesses").text(theGame.gussedLetters.join(','));
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
      if (goodLetter === letter) {
        var temp = theGame.wordProgress.split('');
        temp[index] = letter;
        theGame.wordProgress = temp.join('');
        misGuess = false;
      }
    })
  if (misGuess) {
    theGame.guesses--;
  }
  theGame.gussedLetters.push(letter);
  console.log(theGame.wordProgress + " " + theGame.cityToGuess);
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
  var key = event.key.toUpperCase();

  if (theGame.guesses === 0 || theGame.cityToGuess === '') {
    $("#wordToGuess").text(getACity());
  } else if (theGame.gussedLetters.join('').includes(key)) {
    // Don't do anything they already guessed it.
  } else {
    $("#wordToGuess").text(guessALetter(key));
    $("#guesses").text(theGame.gussedLetters.join(','));
  }

}
