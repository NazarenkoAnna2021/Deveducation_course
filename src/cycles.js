//1
let sum_of_even = (first_value, last_value) => {
    if (isNaN(first_value) || isNaN(last_value) || +first_value >= +last_value) {
        console.log('invalid input')
        return null;
    }

    let count = 0;
    let sum = 0;

    for (let i = first_value; i <= last_value; i++) {
        if (i % 2 === 0) {
            count++;
            sum += i;
        }
    }
    console.log(`sum of even numbers in range [${first_value}, ${last_value}]: ${sum}\ncount of even numbers in range: ${count}`);
}

console.log('Task 1');
sum_of_even(1, 99);

//2
let isPrime = (number) => {
    switch (true) {
        case isNaN(number): {
            console.log('invalid input')
            return null;
        }
        case (+number === 1 || +number <= 0): return false;
        case +number === 2: return true;
        default:
            for (let i = 2; i < number; i++)
                if (+number % i === 0) return false;
                else return true;
    }
}

console.log('Task 2');
console.log(isPrime(23));

//3
let sqr_selection = (number) => {
    if (isNaN(number) || +number <= 0) {
        console.log('invalid input')
        return null;
    }
    let i = 1;
    while (true) {
        if (+number === (i * i))
            return i;
        if (+number < (i * i))
            return i - 1;
        i++;
    }
}

let sqr_binary_search = (number) => {
    if (isNaN(number) || +number <= 0) {
        console.log('invalid input')
        return null;
    }
    let min = 1;
    let max = number;
    let saved = 0;
    while (true) {
        let mid = Math.floor((min + max) / 2);
        switch (true) {
            case +saved === +mid: return mid;
            case +number == +mid * +mid: return mid;
            case +number < +mid * +mid: max = mid;
                break;
            default: {
                min = mid;
                saved = mid;
            }
        }
    }
}

console.log('Task 3');
console.log(sqr_selection(27));
console.log(sqr_binary_search(9));

//4
let factorial = (number) => {
    if (isNaN(number)) {
        console.log('invalid input')
        return null;
    }
    let result = 1;
    for (let i = 2; i <= number; i++)
        result *= i;
    return result;
}

console.log('Task 4');
console.log(factorial(8));

//5
let sum_elements_of_num = (number) => {
    if (isNaN(number)) {
        console.log('invalid input')
        return null;
    }
    else
        if (+number < 0)
            number *= -1;
    let sum = 0;
    let parts_of_num = Array.from(String(number), Number);
    for (let value of parts_of_num)
        sum += value;
    return sum;
}

console.log('Task 5');
console.log(sum_elements_of_num(2346));

//6
let inversion_num = (number) => {
    if (isNaN(number)) {
        console.log('invalid input')
        return null;
    }
    let less_then_0 = false
    if(+number < 0){
        less_then_0 = true;
        number *= -1
    }

    let parts_of_num = Array.from(String(number));
    let inversed_num = [];
    for (let i = parts_of_num.length - 1, j = 0; i >= 0; i--, j++)
        inversed_num[j] = parts_of_num[i];
    return less_then_0 ? Number(String(inversed_num).replace(/[\s.,%]/g, ''))* -1:
                         Number(String(inversed_num).replace(/[\s.,%]/g, ''));
}

console.log('Task 6');
console.log(inversion_num(123456789));