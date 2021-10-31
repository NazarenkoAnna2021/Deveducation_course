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
let min_value = (input) => {
    if (!isArrayOfNum(input)) return null;
    let min = input[0];
    for (let value of input)
        if (+min > +value)
            min = value;
    return min;
}

console.log('1 task');
console.log(min_value([1, -1, 10, 4, 5, 1, 9, 6]));

//2
let max_value = (input) => {
    if (!isArrayOfNum(input)) return null;

    let max = input[0];
    for (let value of input)
        if (+max < +value)
            max = value;
    return max;
}

console.log('2 task');
console.log(max_value([5, 2, 3, -10, 10, -10, 18, 55, 0]));

//3
let min_location = (input) => {
    if (!isArrayOfNum(input)) return null;
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

console.log('3 task');
min_location([5, 2, 3, -10, 10, 10, 18, 55, 0]);

//4
let max_location = (input) => {
    if (!isArrayOfNum(input)) return null;

    let plase_in_array = [];
    let counter_max = -1;
    const max = max_value(input);
    if (max === null) return;
    for (let i = 0; i < input.length; i++)
        if (+max === +input[i]) {
            counter_max++;
            plase_in_array[counter_max] = i + 1;
        }
    if (counter_max === 0)
        console.log(`maximum element of array ${max}, it's number ${plase_in_array[0]}.`);
    else console.log(`maximum element of array ${max}, this value takes several elements, their numbers: ${plase_in_array}.`);
}

console.log('4 task');
max_location([200, 200, 3, -10, 10, -10, 18, 0]);

//5
let sum_of_odd_index = (input) => {
    if (!isArrayOfNum(input)) return null;

    let sum = 0;

    for (let i = 0; i < input.length; i++)
        if ((i % 2) || i === 0)
            sum += input[i];
    return sum;
}

console.log('5 task');
console.log(sum_of_odd_index([0, 1, 2, 3, 4, 5]));

//6
let reverse_array = (input) => {
    if (!isArrayOfNum(input)) return null;

    let reversed_input = [];
    for (let i = (input.length - 1), j = 0; i >= 0; i--, j++) {
        reversed_input[j] = input[i];
    }
    return reversed_input;
}

console.log('6 task');
console.log(reverse_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

//7
let amount_odd = (input) => {
    if (!isArrayOfNum(input)) return null;

    let count = 0;
    for (let value of input)
        if (value % 2)
            count++;
    return count;

}

console.log('7 task');
console.log(amount_odd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//8
let exchange = (input) => {
    if (!isArrayOfNum(input)) return null;

    let mid = Math.floor(input.length / 2);

    for (let i = 0, j = mid; i < mid; i++, j++)
        [input[i], input[j]] = [input[j], input[i]];

    if (input.length % 2 !== 0)
        for (let i = input.length - 1; i > mid; i--)
            [input[i], input[i - 1]] = [input[i - 1], input[i]];

    return input;
}

console.log('8 task');
console.log(exchange([1, 2, 3, 4, 5]));

//9
let bubble_sort = (input) => {
    if (!isArrayOfNum(input)) return null;

    let is_done = true;

    do {
        is_done = true;
        for (let i = 0; i < input.length - 1; i++)
            if (input[i] > input[i + 1]) {
                [input[i], input[i + 1]] = [input[i + 1], input[i]];
                is_done = false;
            }
    }
    while (!is_done)
}

console.log('9 task');
let sample = [3, 5, 1, 8, 2, 9, 4, 6, 7];
bubble_sort(sample);
console.log(sample);

let selection_sort = (input) => {
    if (!isArrayOfNum(input)) return null;

    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++)
            if (input[j] < input[i])
                [input[j], input[i]] = [input[i], input[j]];
    }

}

sample = [3, 5, 1, 8, 2, 9, 4, 6, 7];
selection_sort(sample);
console.log(sample);

let insert_sort = (input) => {
    for (let i = 0; i < input.length; i++)
        for (let j = i + 1; j < input.length; j++)
            if (input[i] > input[j])
                for (let y = j; y > i; y--)
                    [input[y], input[y - 1]] = [input[y - 1], input[y]];
}

sample = [3, 5, 1, 8, 2, 9, 4, 6, 7, 6];
insert_sort(sample);
console.log(sample);

//10
let partition = (input, firstIndex, lastIndex) => {
    const pivot = input[lastIndex];
    let index = firstIndex;
    for (let i = firstIndex; i < lastIndex; i++)
        if (input[i] < pivot) {
            [input[i], input[index]] = [input[index], input[i]];
            index++;
        }
    [input[index], input[lastIndex]] = [input[lastIndex], input[index]];
    return index;
}

let quick_sort = (input, firstIndex, lastIndex) => {
    if ((lastIndex - firstIndex) < 1) return;

    const index = partition(input, firstIndex, lastIndex);
    quick_sort(input, firstIndex, index - 1);
    quick_sort(input, index + 1, lastIndex);
}

console.log('10 task');
sample = ['c', 'b', 'a', 'c', 'h', 'e', 'd', 'g', 'f'];
quick_sort(sample, 0, sample.length - 1);
console.log(sample);
