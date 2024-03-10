"use strict";
//! 1
let user;
user = ['Danil', 16];
//! 2
const arr = [
    { prop: 'Danil' },
    { prop: 'Vlad' },
    { prop: 'Sergio' },
    { prop: 'Danil' },
    { prop: 'Vlad' },
    { prop: 'Roman' },
    { prop: 'Danil' },
    { prop: 'Vlad' },
    { prop: 'Sergio' },
    { prop: 'Gosha' },
    { prop: 'Roman' },
    { prop: 'Danil' },
    { prop: 'Vlad' },
    { prop: 'Sergio' },
    { prop: 'Danil' },
    { prop: 'Vlad' },
    { prop: 'Sergio' },
    { prop: 'Gosha' },
    { prop: 'Roman' },
];
const filterArray = (array, searchProp) => {
    return array.filter(obj => obj.prop === searchProp);
};
const newArr = filterArray(arr, 'Danil');
console.log(newArr);
//! 3
const filterArray2 = (array, searchProp) => {
    return array.find(obj => obj.prop === searchProp);
};
const newArr2 = filterArray2(arr, 'Danil');
console.log(newArr2);
//!4
const arr2 = [
    { prop: 2 },
    { prop: 3 },
    { prop: 6 },
    { prop: 0 },
    { prop: 8 },
    { prop: 3 },
    { prop: 8 },
    { prop: 2 },
    { prop: 8 },
    { prop: 1 },
    { prop: 5 },
    { prop: 2 },
    { prop: 9 },
];
const getAverageValue = (array) => {
    const allNum = array.reduce((a, b) => a + b.prop, 0);
    return Math.round(allNum / array.length);
};
console.log(getAverageValue(arr2));
