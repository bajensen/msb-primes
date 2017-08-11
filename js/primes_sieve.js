exports.primes = function (max) {
    var numbers = [];

    for (var i = 0; i <= max; i++) {
        numbers.push(true);
    }

    numbers[0] = false;
    numbers[1] = false;

    for (var i = 2; i <= max; i++) {
        if (numbers[i] == true) {
            for (var j = i + i; j <= max; j += i) {
                numbers[j] = false;
            }
        }
    }

    var primes = [];

    for (var i = 0; i <= max; i++) {
        if (numbers[i] == true) {
            primes.push(i);
        }
    }

    return primes;
}