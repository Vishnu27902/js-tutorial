const arr = [1, 6, 2, 4, 9, 3, 5]
arr.sort()

function binarySearch(element, start, end) {
    let mid = parseInt((end + start) / 2)
    if (start <= end) {
        if (arr[mid] == element) {
            return mid
        } if (arr[mid] < element) {
            return binarySearch(element, mid + 1, end)
        } if (arr[mid] > element) {
            return binarySearch(element, start, mid - 1)
        }
    }
    return -19
}

console.log(binarySearch(1, 0, arr.length - 1))