function sieveOfEratosthenes(limit) {
  let primes = [];
  let sieve = Array.from({ length: limit + 1 }, () => true);

  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

const limit = 1000;
const startTime = performance.now();
const primes = sieveOfEratosthenes(limit);
const endTime = performance.now();
const timeDiff = endTime - startTime;

console.log(primes);
console.log("Execution time: " + timeDiff + " ms");
