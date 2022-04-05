




































function htmInput() {
  let inputArray = document.getElementById("input").value;

  inputChecking(inputArray);
}

function inputChecking(inputArray) {

  let checkArr = inputArray.split('');

  let checkForSpacesOnly = checkArr.every(el => el === ' ');

  let checkForStrings = false;

  checkArr.forEach(el => isNaN(el) === true ? checkForStrings = true : false);

  if (checkForSpacesOnly || checkForStrings) {

    return alert(`You must enter integer numbers separated by space!`);

  } else {

    arrayClearing(inputArray);

  }

}

function arrayClearing(inputArray) {

  inputArray = inputArray.split(" ").map(Number);

  inputArray = inputArray.filter(el => el !== 0);

  arrayChecking(inputArray);

}

function arrayChecking(inputArray) {

  if (inputArray.length === 1) {

    return alert(`There must be more than ONE cables! A space must be added between cables!`);

  } else {

    trimming(inputArray);

  }

}

function trimming(inputArray) {

  let counter = 0;

  while (inputArray.length > 0) {

      inputArray.sort((a, b) => b - a);

      inputArray = inputArray.map(num => num - inputArray[inputArray.length - 1]);

      inputArray.forEach(el => counter++);

      inputArray = inputArray.filter(el => el > 0);

  }

  displayOutput(counter);

}

function displayOutput(counter) {

  let outputElement = document.getElementById('output');

  outputElement.innerHTML = `We have performed ${counter} trims`;

  outputElement.style.display = 'inline-block';

}

let submitElement = document.getElementById('submit');

submitElement.addEventListener('click', e => {

  e.preventDefault();

  htmInput();

  document.getElementById("cables").reset();

});


