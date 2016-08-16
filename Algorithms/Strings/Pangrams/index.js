function isPangram(string) {
    string = string.toLowerCase();
    var regex = /([a-z])(?!.*\1)/g;
    return (string.match(regex) || []).length === 26;
}

function processData(input) {
    if(isPangram(input)) {
        console.log("pangram");
    } else {
        console.log("not pangram");
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
