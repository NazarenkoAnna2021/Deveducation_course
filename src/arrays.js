let isArrayOfNum = (input) => {
    if (typeof (input) !== 'object') {
        console.log('invalid input');
        return false;
    }
    else
        for (let value of input)
            if (isNaN(value)) {
                console.log('invalid input');
                return false;
            }
    return true;
}

//1
let min_value = (input = []) => {
       if(!isArrayOfNum(input)) return null;
    let min = input[0];
    for (let value of input)
        if (+min > +value)
            min = value;
    return min;
}

// console.log('1 task');
// console.log(min_value([1, 1, 10, 4, 5, 1, 9, 6]));

//10
let partition = (numbers, first_index, last_index) => {
    const pivot = numbers[last_index];
    let location = first_index;
    let templete;
    for (let i = first_index; i < last_index; i++) {
        if (numbers[i] < pivot) {
            templete = numbers[i];
            numbers[i] = numbers[location];
            numbers[location] = templete;
            location++;
        }
    }
    templete = numbers[last_index];
    numbers[last_index] = numbers[location];
    numbers[location] = templete;
    return location;
};

let quickSort = (numbers, first_index, last_index) => {
    if (first_index >= last_index) {
        return;
    }
    let index = partition(numbers, first_index, last_index);
    quickSort(numbers, first_index, index - 1);
    quickSort(numbers, index + 1, last_index);
}

//2
let max_value = (input) => {
    if(!isArrayOfNum(input)) return null;
    quickSort(input, 0, input.length - 1);
    return input[input.length - 1];
}

// console.log('2 task');
// console.log(max_value([7, -2, 4, 1, 6, 15, 0, -4, 2]));

//3
let min_location = (input = []) => {
    let plase_in_array = [];
    let counter_min = -1;
    const min = min_value(input);
    if (min === null) return;
    for (let i = 0; i < input.length; i++)
        if (+min === +input[i]) {
            counter_min++;
            plase_in_array[counter_min] = i + 1;
        }
    if (counter_min === 0)
        console.log(`minimum element of array ${min}, it's number ${plase_in_array[0]}.`);
    else console.log(`minimum element of array ${min}, this value takes several elements, their numbers: ${plase_in_array}.`);
}

// console.log('3 task');
//min_location([5, 2, 3, -10, 10, -10, 18, 55, 0]);

//4
let max_location = (input) => {
    let plase_in_array = [];
    let counter_min = -1;
    const max = max_value(input);
    if (max === null) return;
    for (let i = 0; i < input.length; i++)
        if (+min === +input[i]) {
            counter_min++;
            plase_in_array[counter_min] = i + 1;
        }
    if (counter_min === 0)
        console.log(`minimum element of array ${min}, it's number ${plase_in_array[0]}.`);
    else console.log(`minimum element of array ${min}, this value takes several elements, their numbers: ${plase_in_array}.`);
}

// console.log('4 task');
// min_location([2, 2, 3, -10, 10, -10, 18, 55, 0]);