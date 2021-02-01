



function reverseDigitsNumber(num){
    let strNum = String(num);
    let newStrNum = "";
    for (let i = 0; i < strNum.length; i++){
        newStrNum = strNum[i] + newStrNum;
    }
    return Number(newStrNum);
}

console.log(reverseDigitsNumber(5789));







function getNewMatrix(arr) {
    let newArr = []
    for (let key of arr) {
        let subArr = [];
        for (let items of key) {
            if (items % 7 != 0) {
                subArr.push(items);
            } else {
                break;
            }
        }
        if (key.length === subArr.length) {
            newArr.push(subArr);
        }
    }

    return (newArr);
}

console.log(getNewMatrix([
    [1, 2, 8, 9],
    [1, 21, 8, 49],
    [1, 14, 8, 0],
    [1, 8, 9, -20],
    [0, 0],

]))





function getSubArr(arr) {
    maxItemMultiple = 0;
    let multipleArr = [];
    let subArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newArr = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % arr[i] === 0) {
                newArr.push(arr[j]);
            }
        }
        if (newArr.length >= maxItemMultiple && !subArr.includes(arr[i])) {
            maxItemMultiple = newArr.length;
            multipleArr.push(newArr);
            subArr.push(arr[i]);
        }
    }

    console.log(subArr);
    return (multipleArr);
}

console.log(getSubArr([2, 4, 6, 7, 3, 9, 2, 2,3,15,30,90]));