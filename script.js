const container = document.createElement('div');

document.body.appendChild(container);

container.classList.add('container');


const textArea = document.createElement('textarea');
document.body.appendChild(textArea);
textArea.classList.add('text__area');


const buttonData = [
  { text: '~', class: 'esc' },
  { text: '1', class: 'one' },
  { text: '2', class: 'two' },
  { text: '3', class: 'three' },
  { text: '4', class: 'four' },
  { text: '5', class: 'five' },
  { text: '6', class: 'six' },
  { text: '7', class: 'seven' },
  { text: '8', class: 'eight' },
  { text: '9', class: 'nine' },
  { text: '0', class: '0' },
  { text: '-', class: 'dash' },
  { text: '=', class: 'equal' },
  { text: '<--', class: 'backspace' },
  { text: 'Tab', class: 'tab' },
  { text: 'Q', class: 'q' },
  { text: 'W', class: 'w' },
  { text: 'E', class: 'e' },
  { text: 'R', class: 'r' },
  { text: 'T', class: 't' },
  { text: 'Y', class: 'y' },
  { text: 'U', class: 'u' },
  { text: 'I', class: 'i' },
  { text: 'O', class: 'o' },
  { text: 'P', class: 'p' },
  { text: '[', class: 'bracket-l' },
  { text: ']', class: 'bracket-r' },
  { text: '\\', class: 'dash' },
  { text: 'DEL', class: 'del' },

  { text: 'CAPS LOCK', class: 'caps' },
  { text: 'A', class: 'a' },
  { text: 'S', class: 's' },
  { text: 'D', class: 'd' },
  { text: 'F', class: 'f' },
  { text: 'G', class: 'g' },
  { text: 'H', class: 'h' },
  { text: 'J', class: 'j' },
  { text: 'K', class: 'k' },
  { text: 'L', class: 'l' },
  { text: ';', class: 'doubleDot' },
  { text: '\'', class: 'apost-l' },
  { text: 'ENTER', class: 'enter' },

  { text: 'SHIFT', class: 'shift' },
  { text: '\\', class: 'dash' },
  { text: 'Z', class: 'z' },
  { text: 'X', class: 'x' },
  { text: 'C', class: 'c' },
  { text: 'V', class: 'v' },
  { text: 'B', class: 'b' },
  { text: 'N', class: 'n' },
  { text: 'M', class: 'm' },
  { text: '.', class: 'dot' },
  { text: ',', class: 'comma' },
  { text: '/', class: 'dash-r' },
  { text: '▲', class: 'arr-up' },
  { text: 'Shift', class: 'shift-r' },

  { text: 'Ctrl', class: 'ctrl' },
  { text: 'Win', class: 'win' },
  { text: 'Alt', class: 'alt' },
  { text: ' ', class: 'space' },
  { text: 'Alt', class: 'alt' },
  { text: 'Ctrl', class: 'ctrl-r' },
  { text: '◄', class: 'left-arr' },
  { text: '▼', class: 'down-arr' },
  { text: '►', class: 'right-arr' },

];

buttonData.forEach((button) => {
  const newButton = document.createElement('button');
  newButton.innerText = button.text;
  newButton.classList.add('btn', button.class);
  container.appendChild(newButton);
});



