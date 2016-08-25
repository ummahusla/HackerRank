function processData(input) {

    input = input.split('\n');
    var N = parseInt(input[0]);
    var phoneBook = [];

    for (var k = 0; k< N; k++) {
        var line = input[k+1];
        line = line.split(' ');
        phoneBook[line[0]] = line[1];

    }

    for (var k = N+1; k < input.length; k++ ) {

        var num = (phoneBook[input[k]]);

        if (num !== undefined) {
            console.log(input[k]+'='+num);
        } else {
            console.log('Not found');
        }

    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
