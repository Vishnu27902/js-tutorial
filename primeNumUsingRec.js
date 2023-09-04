function isPrimeNumber(i, n) {
    if (i == n) {
        return true
    }
    if (!(n % i)) {
        return false;
    }
    return isPrimeNumber(++i, n)
}
console.log(isPrimeNumber(2, 6))