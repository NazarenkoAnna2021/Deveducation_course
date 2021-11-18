
//1
function week_day(day_num) {
    if (day_num < 0 || day_num > 6 || isNaN(day_num)) return null;
    const day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];
    return day_name[day_num];
}

// console.log(week_day(4));

//2
let isDot = (input = []) => {
    if (!Array.isArray(input))
        return false;
    for (let value of input)
        if (isNaN(value))
            return false;
    if (input.length != 2) return false;
    return true;
}

let points_distance = (point_A = [], point_B = []) => {
    if (!isDot(point_A) || !isDot(point_B)) return null;

    return Number(Math.sqrt(Math.pow((+point_B[0] - point_A[0]), 2) + Math.pow((point_B[1] - point_A[1]), 2)).toFixed(2));
}

//  console.log(points_distance([1, 2], [2, 1]));

//3
let hundred = (names, number, name_handred) => {
    if (number[1] === 0)
        if (number[2] === 0)
            return names[name_handred].concat(' hundred');
        else
            return names[name_handred].concat(' hundred ', names[number[2]]);
    else
        if (+number[1] === 1)
            switch (number[2]) {
                case 0: return names[name_handred].concat(' hundred ', names[10]);
                case 1: return names[name_handred].concat(' hundred ', names[11]);
                case 2: return names[name_handred].concat(' hundred ', names[12]);
                case 3: return names[name_handred].concat(' hundred ', names[13]);
                case 5: return names[name_handred].concat(' hundred ', names[18]);
                default: if (+number[2] != 8)
                    return names[name_handred].concat(' hundred ', names[number[2]], 'teen');
                else
                    return names[name_handred].concat(' hundred ', names[number[2]], 'een');
            }
        else
            switch (number[1]) {
                case 2: {
                    if (+number[2] == 0)
                        return names[name_handred].concat(' hundred ', names[14]);
                    else
                        return names[name_handred].concat(' hundred ', names[14], ' ', names[number[2]]);
                }
                case 3: {
                    if (+number[2] == 0)
                        return names[name_handred].concat(' hundred ', names[15]);
                    else
                        return names[name_handred].concat(' hundred ', names[15], ' ', names[number[2]]);
                }
                case 4: {
                    if (+number[2] == 0)
                        return names[name_handred].concat(' hundred ', names[16]);
                    else
                        return names[name_handred].concat(' hundred ', names[16], ' ', names[number[2]]);
                }
                case 5: {
                    if (+number[2] == 0)
                        return names[name_handred].concat(' hundred ', names[17]);
                    else
                        return names[name_handred].concat(' hundred ', names[17], ' ', names[number[2]]);
                }
                case 6: {
                    if (+number[2] == 0)
                        return names[name_handred].concat(' hundred ', names[6], 'ty ')
                    else
                        return names[name_handred].concat(' hundred ', names[number[1]], 'ty ', names[number[2]]);
                }
                case 7: {
                    if (+number[2] == 0)
                        return names[name_handred].concat(' hundred ', names[7], 'ty ')
                    else
                        return names[name_handred].concat(' hundred ', names[number[1]], 'ty ', names[number[2]]);
                }
                case 8: {
                    if (+number[2] == 0)
                        return names[name_handred].concat(' hundred ', names[8], 'y ')
                    else
                        return names[name_handred].concat(' hundred ', names[number[1]], 'y ', names[number[2]]);
                }
                case 9: if (+number[2] == 0) return names[name_handred].concat(' hundred ', names[9], 'ty ')
                else return names[name_handred].concat(' hundred ', names[number[1]], 'ty ', names[number[2]]);

            }
}

let prescription = (number) => {
    if (isNaN(number)) return null;
    const names = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'twenty',
        'thirty',
        'fourty',
        'fifty',
        'fifteen'];
    if (+number >= 0 && +number < 14)
        return names[number];
    else
        switch (number) {
            case 14: return names[4].concat('teen');
            case 15: return names[18];
            case 16: return names[6].concat('teen');
            case 17: return names[7].concat('teen');
            case 18: return names[8].concat('een');
            case 19: return names[9].concat('teen');
            case 20: return names[14];
            case 30: return names[15];
            case 40: return names[16];
            case 50: return names[17];
            case 60: return names[6].concat('ty');
            case 70: return names[7].concat('ty');
            case 80: return names[8].concat('y');
            case 90: return names[9].concat('ty');
            default: {
                const parts = Array.from(String(number), Number);
                if (parts.length < 3)
                    switch (parts[0]) {
                        case 2: return names[14].concat(' ', names[parts[1]]);
                        case 3: return names[15].concat(' ', names[parts[1]]);
                        case 4: return names[16].concat(' ', names[parts[1]]);
                        case 5: return names[17].concat(' ', names[parts[1]]);
                        case 6: return names[6].concat('ty ', names[parts[1]]);
                        case 7: return names[7].concat('ty ', names[parts[1]]);
                        case 8: return names[8].concat('y ', names[parts[1]]);
                        case 9: return names[9].concat('ty ', names[parts[1]]);
                    }
                else return hundred(names, parts, parts[0]);

            }
        }
}

console.log(prescription('a'));

//4
let find_concurrence = (word) => {
    const names = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteet',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'thirty',
        'fourty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
        'handred'];

    let number = -1;
    for (let i = 0; i < names.length; i++)
        if (names[i] === word) {
            number = i;
            break;
        }
    if (number >= 0 && number <= 20) return +number;

    switch (number) {
        case 21: return 30;
        case 22: return 40;
        case 23: return 50;
        case 24: return 60;
        case 25: return 70;
        case 26: return 80;
        case 27: return 90;
        case 28: return 100;
        default: return null;
    }
}

let calc_dozens = (dozen, units) => {
    return String.prototype.concat((find_concurrence(dozen) / 10), find_concurrence(units));
}
let calc_handreds = (handred, dozen, units) => {

    return String.prototype.concat((find_concurrence(handred)), calc_dozens(dozen, units));
}
let calc_handreds_1 = (handred, units) => {
    if (+find_concurrence(units) <= 9)
        return String.prototype.concat((find_concurrence(handred)), '0', find_concurrence(units));
    else
        return String.prototype.concat((find_concurrence(handred)), find_concurrence(units));
}

let word_to_num = (words = '') => {
    const parts = words.split(' ');
    switch (parts.length) {
        case 1: return find_concurrence(parts[0]);
        case 2: return Number(calc_dozens(parts[0], parts[1]));
        case 3: return Number(calc_handreds_1(parts[0], parts[2]));
        case 4: return Number(calc_handreds(parts[0], parts[2], parts[3]));
        default: return null;
    }

}

// console.log(word_to_num('one handred sixty one'));