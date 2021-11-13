//1
let chose_operator = (operand_1, operand_2) => {
    if (isNaN(operand_1 + operand_2))
        return 'invalid input';
    else
    return (operand_1 % 2 ? operand_1 + operand_2 : operand_1 * operand_2);
}

//2
function find_quater(point_x, point_y) {
    switch (true) {
        case isNaN(point_x + point_y): return 'invalid input';
            break;
        case point_x > 0: return point_y > 0 ? 'first quarter' : 'fourth quarter';
            break;
        default: return point_y > 0 ? 'second quarter' : 'third quarter';
    }
}

//3
let sum_of_positive = (first_num, second_num, third_num) => {
    const numbers = [first_num, second_num, third_num];
    let sum_of_positive = null;
    for (let i = 0; i < numbers.length; i++)
        if (isNaN(numbers[i])) {
            return `${i + 1} element is not a number`;
        }
        else
            if (+numbers[i] > 0)
                sum_of_positive += numbers[i];

    if (sum_of_positive !== null) return sum_of_positive;
    else {
        return 'No positive numbers';
    }
}

//4
let calculate = (first_num, second_num, third_num) => {
    switch (true) {
        case isNaN(first_num + second_num + third_num):
            return 'Incorrect input';
        case (+first_num + +second_num + +third_num) > (first_num * second_num * third_num): 
             return (+first_num + +second_num + +third_num) + 3;
        default: return  (first_num * second_num * third_num) +3;
    }
}

//5
let rating_to_mark = (student_rating) => {
    switch (true) {
        case isNaN(student_rating): {
            console.log('incorrect input: not a number')
            return null;
        }
        case (student_rating >= 0 && student_rating <= 19): return 'F';
        case (student_rating >= 20 && student_rating <= 39): return 'E';
        case (student_rating >= 40 && student_rating <= 59): return 'D';
        case (student_rating >= 60 && student_rating <= 74): return 'C';
        case (student_rating >= 75 && student_rating <= 89): return 'B';
        case (student_rating >= 90 && student_rating <= 100): return 'A';
        default: {
            console.log('invalid input: does not match rating values');
            return null;
        }
    }
}

// console.log('Task 1');
// chose_operator(4, 10);
// console.log('Task 2');
// find_quater(2, -3);
// console.log('Task 3');
// console.log(sum_of_positive(10, -1, -1));
// console.log('Task 4');
// console.log(calculate(5, 5, 5));
// console.log('Task 5');
// /*0-19 F
// 20-39 E
// 40-59 D
// 60-74 C
// 75-89 B
// 90-100 A*/
// console.log(rating_to_mark(19));
