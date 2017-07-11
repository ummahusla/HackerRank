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
  var counts = {};

  ar.forEach(function(x) {
      counts[x] = (counts[x] || 0) + 1;
  });

  var toAr = Object.keys(counts).map(function(key){ return counts[key]; });
  var result = Math.max.apply(Math, toAr);

  return result;
}

function main() {
  var n = parseInt(readLine());
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = birthdayCakeCandles(n, ar);
  process.stdout.write("" + result + "\n");

}
