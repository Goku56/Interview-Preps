Array.prototype.customFilter = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
}

const arr = [1, 2, 3, 4, 5];
const result = arr.customFilter((item) => item > 2)
console.log(result);