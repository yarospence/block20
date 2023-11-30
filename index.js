//create a array that can in take numbers
//create a way to determine if a number is even
//if the number is divisible by 2 without a % = even
//if the number is has a %, the result should be odd.

const numBank = [];
const odds = [];
const evens = [];

const form = document.querySelector("form");
const input = document.querySelector("input");
const numberBank = document.getElementById("numBankOutput");
const oddsOutput = document.getElementById("odds");
const evensOutput = document.getElementById("evens");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");

//change, click, submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value !== "") {
    numBank.push(parseInt(input.value)); //"5" => 5
    numberBank.textContent = numBank;
    console.log(numBank);
  }
});

sortOne.addEventListener("click", () => {
  const numb = numBank.shift();
  if (numb % 2 === 1) {
    odds.push(numb);
  } else {
    evens.push(numb);
  }
  numberBank.textContent = numBank;
  oddsOutput.textContent = odds;
  evensOutput.textContent = evens;
  console.log({ odds, evens });
});

sortAll.addEventListener("click", () => {
  for (let i = 0; i < numBank.length;  i++) {
      const numb = numBank.shift();
      if (numb % 2 === 1) {
        odds.push(numb);
      } else {
        evens.push(numb);
      }
  }

  numberBank.textContent = numBank;
  oddsOutput.textContent = odds;
  evensOutput.textContent = evens;
  console.log({ odds, evens });
});