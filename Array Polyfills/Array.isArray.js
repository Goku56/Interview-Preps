//Custom isArray Polyfill
Array.prototype.customIsArray = function () {
    return Object.prototype.toString.call(this) == '[object Array]';
}

const arr = [];
// console.log(Array.customIsArray())
console.log(arr.customIsArray())

const obj = {};
// console.log(Array.customIsArray());
// console.log(obj.customIsArray());