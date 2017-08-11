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

    primes.push(2);

    for (var i = 3; i <= max; i += 2) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}