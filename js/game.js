let mysteryWord = "";
let words = [
  "DeadPool",
  "DeadPool2",
  "Buried",
  "Turbo",
  "Criminal",
  "Amityville",
  "Captives",
  "Foolproof",
  "Alarmiste",
  "Croods"
];
let wordProgression = "";
let wordContainer = document.querySelector("#js-word");
let feedback = document.querySelector("#js-feedback");
let txtTryCount = document.querySelector("#js-count");
let finalCount = document.querySelector("#js-final-count");
let nextLevel = document.querySelector("#btnNext");
let scoretxt = document.querySelector(".score");
let tryCount = 0;
let score = 0;
let GoodSound = new Audio();
let failSound = new Audio();
let finalSound = new Audio();
GoodSound.src = "sound/1-up.mp3";
failSound.src = "sound/Oof.mp3";
finalSound.src = "sound/WOW.mp3";
//------------------------//

function setMysteryWord() {
  mysteryWord = getRandomWord().toLowerCase();

  for (let i = 0; i < mysteryWord.length; i++) {
    wordContainer.textContent = wordContainer.textContent + "_";
  }
  wordProgression = wordContainer.textContent;
}

setMysteryWord();

//-----------------------------//

function getRandomWord() {
  let rndNumber = Math.floor(Math.random() * words.length);
  return words[rndNumber];
}

//-----------------------------//
let fieldLetter = document.querySelector("#js-field-word");
let formWord = document.querySelector("#js-form-word");

formWord.addEventListener("submit", checkLetter);

function checkLetter(evt) {
  evt.preventDefault();
  let prevWord = wordContainer.textContent;
  wordContainer.textContent = "";

  let currentLetter = fieldLetter.value;

  let isWordComplete = true;

  for (let i = 0; i < mysteryWord.length; i++) {
    if (wordProgression[i] == "_") {
      if (currentLetter == mysteryWord[i]) {
        wordContainer.textContent = wordContainer.textContent + currentLetter;
      } else {
        wordContainer.textContent = wordContainer.textContent + "_";
        isWordComplete = false;
      }
    } else {
      wordContainer.textContent =
        wordContainer.textContent + wordProgression[i];
    }
  }
  tryCount = tryCount + 1;
  txtTryCount.textContent = "Vous avez essayer " + tryCount + " fois";
  console.log(tryCount);
  if (prevWord == wordContainer.textContent) {
    failSound.play();
  } else {
    GoodSound.play();
  }
  wordProgression = wordContainer.textContent;
  fieldLetter.value = "";
  fieldLetter.focus();

  if (isWordComplete) {
    formWord.style.display = "none";
    setTimeout(setWordFound, 500);
    setTimeout(setNextLevel, 500);
    finalCount.textContent = "vous avez eu besoin de " + tryCount + " essaies";
    score = score + 1;
    scoretxt.textContent = "Votre score est de " + score + " points";
  }
}

//-----------------------------//

function setWordFound() {
  feedback.style.display = "block";
  finalSound.play();
}

function setNextLevel() {
  btnNext.style.display = "block";
}

nextLevel.addEventListener("click", niveauSuivant);

function niveauSuivant() {
  btnNext.style.display = "none";
  wordContainer.textContent = "";
  getRandomWord();
  console.log(mysteryWord);
  feedback.style.display = "none";
  mysteryWord = getRandomWord().toLowerCase();
  console.log(mysteryWord);
  for (let i = 0; i < mysteryWord.length; i++) {
    wordContainer.textContent = wordContainer.textContent + "_";
  }
  wordProgression = wordContainer.textContent;
  tryCount = 0;
  finalCount.textContent = "vous n'avez toujours pas essayer";

  formWord.style.display = "block";
  txtTryCount.textContent = "";
}
