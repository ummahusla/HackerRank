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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var totalNum = 0, positiveNum = 0, negativeNum = 0, zeroNum = 0;

    totalNum = arr.length;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positiveNum++;
        }  else if(arr[i] < 0) {
            negativeNum++;
        } else if (arr[i] == 0) {
            zeroNum++;
        }
    }

    positiveNumFrac = positiveNum / totalNum;
    negativeNumFrac = negativeNum / totalNum;
    zeroNumFrac = zeroNum / totalNum;

    console.log(positiveNumFrac.toFixed(6));
    console.log(negativeNumFrac.toFixed(6));
    console.log(zeroNumFrac.toFixed(6));
}
