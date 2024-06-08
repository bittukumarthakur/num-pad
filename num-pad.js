const main = () => {
  let displayContent = "";
  const displayElement = document.querySelector("#display");

  const one = document.querySelector("#one");
  one.onclick = () => {
    displayContent += 1;
    displayElement.innerText = displayContent;
  };

  const two = document.querySelector("#two");
  two.onclick = () => {
    displayContent += 2;
    displayElement.innerText = displayContent;
  };

  const three = document.querySelector("#three");
  three.onclick = () => {
    displayContent += 3;
    displayElement.innerText = displayContent;
  };

  const four = document.querySelector("#four");
  four.onclick = () => {
    displayContent += 4;
    displayElement.innerText = displayContent;
  };

  const five = document.querySelector("#five");
  five.onclick = () => {
    displayContent += 5;
    displayElement.innerText = displayContent;
  };

  const six = document.querySelector("#six");
  six.onclick = () => {
    displayContent += 6;
    displayElement.innerText = displayContent;
  };

  const seven = document.querySelector("#seven");
  seven.onclick = () => {
    displayContent += 7;
    displayElement.innerText = displayContent;
  };

  const eight = document.querySelector("#eight");
  eight.onclick = () => {
    displayContent += 8;
    displayElement.innerText = displayContent;
  };

  const nine = document.querySelector("#nine");
  nine.onclick = () => {
    displayContent += 9;
    displayElement.innerText = displayContent;
  };

  const zero = document.querySelector("#zero");
  zero.onclick = () => {
    displayContent += 0;
    displayElement.innerText = displayContent;
  };

  const del = document.querySelector("#delete");
  del.onclick = () => {
    displayContent = displayContent.slice(0, -1);

    displayElement.innerText = displayContent;
  };

  const divide = document.querySelector("#divide");
  divide.onclick = () => {
    if (displayContent.slice(-1) !== " ") {
      displayContent += " / "
      displayElement.innerText = displayContent;
    };
  };

  const sum = document.querySelector("#sum");
  sum.onclick = () => {
    if (displayContent.slice(-1) !== " ") {
      displayContent += " + "
      displayElement.innerText = displayContent;
    };
  };

  const subtract = document.querySelector("#subtract");
  subtract.onclick = () => {
    if (displayContent.slice(-1) !== " ") {
      displayContent += " - "
      displayElement.innerText = displayContent;
    };
  };

  const multiply = document.querySelector("#multiply");
  multiply.onclick = () => {
    if (displayContent.slice(-1) !== " ") {
      displayContent += " * "
      displayElement.innerText = displayContent;
    };
  };

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

};

window.onload = main;