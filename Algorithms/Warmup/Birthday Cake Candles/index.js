process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();    
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////



function birthdayCakeCandles(n, ar) {
  let largest = 0;
  let counts = {};
  for(let i=0; i< ar.length; i++) {
    let num = ar[i];
    if (num > largest) largest = num;
    counts[num] = (counts[num] || 0) + 1 
  }
  return counts[largest];
}

function main() {
  var n = parseInt(readLine());
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = birthdayCakeCandles(n, ar);
  process.stdout.write("" + result + "\n");
}
