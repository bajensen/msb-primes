var t = require('exectimer');
var fs = require('fs');

var mthd_n = require('./primes_n.js');
var mthd_half = require('./primes_half.js');
var mthd_sqrt = require('./primes_sqrt.js');
var mthd_sqrt_odds = require('./primes_sqrt_odds.js');
var mthd_sieve = require('./primes_sieve.js');

var results = [];

function testPrimes (max, times, func, name) {
    var timerName = "timer_" + max + "_" + name;

    for (var i = 0; i < times; i++) {
        tick = new t.Tick(timerName);

        tick.start();

        var cnt = func.primes(max).length;

        tick.stop();
    }

    var result = t.timers[timerName];

    return {
        duration: result.duration(),
        min: result.min(),
        max: result.max(),
        mean: result.mean(),
        median: result.median()
    }
}

for (var i = 1000; i <= 1000000; i *= 2) {
    console.log("Testing primes up to " + i);

    var res = {
        n: i,
        mthd_n: testPrimes(i, 4, mthd_n, "mthd_n"),
        mthd_half: testPrimes(i, 4, mthd_half, "mthd_half"),
        mthd_sqrt: testPrimes(i, 4, mthd_sqrt, "mthd_sqrt"),
        mthd_sqrt_odds: testPrimes(i, 4, mthd_sqrt_odds, "mthd_sqrt_odds"),
        mthd_sieve: testPrimes(i, 4, mthd_sieve, "mthd_sieve")
    };

    console.log(res);
    results.push(res);
}

// console.log(results);

fs.writeFile("results.json", JSON.stringify(results), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});