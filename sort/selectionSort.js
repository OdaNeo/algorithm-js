Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length; i++) {
        let indexMin = i;
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [this[i], this[indexMin]] = [this[indexMin], this[i]]
        }
    }
}

const arr = [5, 4, 3, 2, 1]
arr.selectionSort()
