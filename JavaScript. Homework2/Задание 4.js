function EverySecond (num1, num2) {
    let progressNum = num1;

    let IntervalId = setInterval(function() {
        if (progressNum <= num2) {
            console.log(progressNum);
            progressNum++;
        }
        else clearInterval(IntervalId);
    }, 1000);
}

EverySecond(5,15);