function isPrime (num) {
    for (var n = 2; n <= Math.floor(Math.sqrt(num)); n++) {
        if (num % n == 0) {
            return false;
        }
    }

    return true;
}

exports.primes = function (max) {
    var primes = [];

    for (var i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}