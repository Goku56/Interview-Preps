//custom map polyfill
Array.prototype.customMap = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this))
    }
    return res;
}

const arr = [2, 3, 4, 5, 6];

const myMapArr = arr.customMap((item, i) => item * 5);
console.log('myMapArr', myMapArr);