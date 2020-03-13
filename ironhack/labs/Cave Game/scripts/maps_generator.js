const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

//Maps (Defined and Default)

var table = [
  ['1', '1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0', '0'],
  ['0', '0', '1', '1', '0', '0'],
  ['0', '0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1', '1']
];

var table = [
  ['1', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '1', '1', '1', '1', '0', '0'],
  ['1', '1', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['1', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['1', '0', '0', '0', '1', '0', '0', '1', '0', '0'],
  ['1', '1', '1', '1', '1', '0', '0', '1', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '1', '1', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '1', '1', '1', '1']
];

var tableDefault = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
];

function randomBlackWhite() {
  var bW = Math.floor(Math.random() * 10);
  //console.log(bW)
  if (bW < 5) {
    return 'w';
  } else {
    return 'b';
  }
}

function randomTable(array) {
  for (let i = 0; i < array.length; i++) {
    var firstArray = [];
    for (let x = 0; x < array[i].length; x++) {
      if (array[i][x] === '1') {
        array[i][x] = 'x';
      } else {
        array[i][x] = randomBlackWhite();
      }

      //console.log(array[i][x])
    }
    //console.log(i)
  }
}

var tileWidth = context.canvas.width / table[0].length;
var tileHeight = context.canvas.height / table.length;
var tile = {
  width: tileWidth,
  height: tileHeight
};
console.log(tileWidth);
console.log(tileHeight);

randomTable(table);
console.log(table[0][4]);
console.log(table);

var tableSize = table.length;
// console.log(tableSize)

function paint(table) {
  for (let y = 0; y < tableSize; y++) {
    for (let x = 0; x < tableSize; x++) {
      console.log('x = ' + x + '   y = ' + y + ' ===> ' + table[y][x]);
      if (table[y][x] == 'b') {
        context.fillStyle = 'black';
      } else {
        context.fillStyle = 'white';
      }
      context.fillRect(x * tileWidth, y * tile.height, tile.width, tile.height);

      // console.log('x'+x)
      // console.log('i'+i)
      // context.fillStyle = 'Black'
      // context.fillRect(i * tile.width[x], i * tile.height[x], (i+1)*tile.width[x], (x+1)*tile.height[x]);
    }
  }
  context.fillStyle = 'black';
  context.fillRect(0, 0, 3, context.canvas.height);
  context.fillRect(0, 0, context.canvas.width, 3);
  context.fillRect(context.canvas.width - 3, 0, context.canvas.width, context.canvas.height);
  context.fillRect(0, context.canvas.height - 3, context.canvas.width, 3);
}
paint(table);

function paintEverything() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
