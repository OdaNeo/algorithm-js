function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const left = []
    const mid = arr[0]
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), mid, ...quickSort(right)]
}

const arr = [5, 4, 3, 3, 6, 2, 1]
// console.log(quickSort(arr))

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor((arr.length) / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    const res = []
    while (sortedLeft.length || sortedRight.length) {
        if (sortedLeft.length && sortedRight.length) {
            res.push(sortedLeft[0] > sortedRight[0] ? sortedRight.shift() : sortedLeft.shift())
        } else if (sortedLeft.length) {
            res.push(sortedLeft.shift())
        } else if (sortedRight.length) {
            res.push(sortedRight.shift())
        }
    }
    return res
}

// console.log(mergeSort(arr))
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

// console.log(bubbleSort(arr))

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }

    return arr
}
// console.log(selectionSort(arr))
function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const tmp = arr[i]
        let j = i
        while (j > 0) {
            if (arr[j - 1] > tmp) {
                arr[j] = arr[j - 1]
            } else {
                break
            }
            j--
        }
        arr[j] = tmp
    }
    return arr
}

// console.log(insertSort(arr))
const str1 = 'appleaapple'
const str2 = 'appleaapple'

function convert(str1, str2) {
    const arr1 = str1.split("")
    const arr2 = str2.split("")
    const slice = function (arr1, arr2) {
        const maxLength = Math.max(str1.length, str2.length)
        for (let i = 0; i < maxLength; i++) {
            if (arr1[0] === arr2[0]) {
                arr1.shift()
                arr2.shift()
            } else {
                break
            }
        }
        return [arr1, arr2]
    }
    const [a1, a2] = slice(arr1, arr2)
    const [b1, b2] = slice(a1.reverse(), a2.reverse())
    if (b1.length < 2 && b2.length < 2) {
        console.log(1)
    } else {
        console.log(0)
    }
}
// convert(str1, str2)
const box = [0.4, 0.6]
const num = 2
// const dp = new Array(num + 1)

