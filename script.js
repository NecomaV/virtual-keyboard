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

const container = document.createElement('div');
const textArea = document.createElement('textarea');

document.body.appendChild(container);
document.body.appendChild(textArea);

textArea.classList.add('text__area');
container.classList.add('container');

textArea.setAttribute('id', 'input');

buttonData.forEach((button) => {
  const newButton = document.createElement('button');
  newButton.innerText = button.text;
  newButton.classList.add('btn', button.class);
  container.appendChild(newButton);
});

function handle(e) {
  e.preventDefault();

  const { key } = e;
  const { keyCode } = e;

  if (keyCode === 8) {
    const currentValue = textArea.value;
    textArea.value = currentValue.slice(0, -1);
  } else if (keyCode === 9) {
    textArea.value += '\t';
  } else if (keyCode === 16 || keyCode === 20 || keyCode === 13 || keyCode === 18 || keyCode === 91 || keyCode === 17) {
    currentValue = textArea.value;
    textArea.value = currentValue;
  } else if (e.ctrlKey && (e.key === 'x' || e.key === 'c' || e.key === 'z' || e.key === 'v')) {
    switch (e.key) {
      case 'x':
        document.execCommand('cut');
        break;
      case 'c':
        document.execCommand('copy');
        break;
      case 'z':
        document.execCommand('undo');
        break;
    }
  } else {
    textArea.value += key;
  }
}


textArea.onkeydown = handle;
