function processData(input) {

    var inputArray = input.split("\n"),
        times = inputArray[0],
        word1 = inputArray[1],
        word2 = inputArray[2];

    function wordLoop(word) {
        var arrEven = [],
            arrOdd = [];

        for(var i= 0; i < word.length; i++) {
            if(i % 2 == 0) {
                arrEven.push(word[i]);
            } else {
                arrOdd.push(word[i]);
            }
        }

        var arrEvenStr = arrEven.toString().replace(/,/g, "");
        var arrOddStr = arrOdd.toString().replace(/,/g, "");
        console.log(arrEvenStr +  " " + arrOddStr);
    }

   for(var j = 1; j < inputArray.length; j++) {
      wordLoop(inputArray[j]);
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
