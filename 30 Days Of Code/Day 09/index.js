function processData(input) {

    function factorial(N) {
        if (N == 1) return 1;
        return N * factorial(N-1);
    }

    console.log(Number(factorial(input)));

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
