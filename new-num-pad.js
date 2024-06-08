const main = () => {
  let displayContent = "";
  const displayElement = document.querySelector("#display");
  const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
  };

  const operators = {
    sum: " + ",
    subtract: " - ",
    multiply: " * ",
    divide: " / "
  };

  const createNumbersEvent = (numbers) => {
    const displayElement = document.querySelector("#display");
    Object.entries(numbers).forEach(([number, value]) => {
      const numberElement = document.querySelector(`#${number}`);
      numberElement.onclick = () => {
        displayContent += value;
        displayElement.innerText = displayContent;
      };
    });
  };

  const createOperatorsEvent = (operators) => {
    Object.entries(operators).forEach(([operator, symbol]) => {
      const numberElement = document.querySelector(`#${operator}`);
      numberElement.onclick = () => {
        if (displayContent.slice(-1) !== " ") {
          displayContent += symbol;
          displayElement.innerText = displayContent;
        };
      };
    });
  }

  createNumbersEvent(numbers);
  createOperatorsEvent(operators)

  const clear = document.querySelector("#clear");
  clear.onclick = () => {
    displayContent = "";
    displayElement.innerText = displayContent;
  };

  const enter = document.querySelector("#enter");
  enter.onclick = () => {
    const result = eval(displayContent);
    displayContent = result.toString();
    displayElement.innerText = displayContent;
  };

  const del = document.querySelector("#delete");
  del.onclick = () => {
    displayContent = displayContent.slice(0, -1);
    displayElement.innerText = displayContent;
  };

};

window.onload = main;