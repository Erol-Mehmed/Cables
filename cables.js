function htmInput() {
  // This function takes the user input.

  let inputArray = document.getElementById("input").value;

  inputChecking(inputArray);
}

function inputChecking(inputArray) {
  // This function checks if the user input is valid or not.

  let checkArr = inputArray.split("");

  let countOfNumbers = inputArray.split(" ").length;

  let checkForSpacesOnly = checkArr.every((el) => el === " ");

  let checkForStrings = false;

  checkArr.forEach((el) =>
    isNaN(el) === true ? (checkForStrings = true) : false
  );

  if (checkForSpacesOnly || checkForStrings) {
    return alert(`You must enter integer numbers separated by space!`);
  } else if (countOfNumbers === 1) {
    return alert(
      `There must be more than ONE cables! A space must be added between cables!`
    );
  } else {
    displayInput(inputArray);
  }
}

function displayInput(inputArray) {
  // This function displays the input numbers.

  let inputElement = document.getElementById("inputNumbers");

  inputElement.innerHTML = `You entered: ${inputArray}`;

  inputElement.style.display = "inline-block";

  arrayClearing(inputArray);
}

function arrayClearing(inputArray) {
  // This function clears the input array from all spaces and zeros so only the numbers bigger than zero are left.

  inputArray = inputArray.split(" ").map(Number);

  inputArray = inputArray.filter((el) => el !== 0);

  trimming(inputArray);
}

function trimming(inputArray) {
  // This function makes the trimming of the cables.

  let counter = 0;

  while (inputArray.length > 0) {
    inputArray.sort((a, b) => b - a);

    inputArray = inputArray.map(
      (num) => num - inputArray[inputArray.length - 1]
    );

    inputArray.forEach((el) => counter++);

    inputArray = inputArray.filter((el) => el > 0);
  }

  displayOutput(counter);
}

function displayOutput(counter) {
  // This function displays the output.

  let outputElement = document.getElementById("output");

  outputElement.innerHTML = `We have performed ${counter} trims`;

  outputElement.style.display = "inline-block";
}

// The code below takes the submit button element and attach event listener to it.

let submitElement = document.getElementById("submit");

submitElement.addEventListener("click", (e) => {
  e.preventDefault();

  htmInput();

  document.getElementById("cables").reset();
});
