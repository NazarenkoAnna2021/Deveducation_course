describe('isArrayOfNum', () => {
    it('Find array of numbers', () =>
        expect(isArrayOfNum([1, 2, 3, 4])).to.equal(true));
    it('Not array', () =>
        expect(isArrayOfNum(2)).to.equal(false));
    it('Find array with NaN', () =>
        expect(isArrayOfNum([1, 2, 'e', 4])).to.equal(false));
});

describe('min_value', () => {
    it('should find min value', () =>
        expect(min_value([1, 2, 3, 4])).to.equal(1));
    it('Invalid input', () => {
        expect(min_value({ a: 1 })).to.equal(null);
        expect(min_value([3, 'u', -1])).to.equal(null)
    });
});

describe('max_value', () => {
    it('should find max value', () =>
        expect(min_value([1, 2, 3, 4])).to.equal(1));
    it('Invalid input', () => {
        expect(min_value({ a: 1 })).to.equal(null);
        expect(min_value([3, 'u', -1])).to.equal(null)
    });
});

describe('min_location', () => {
    it('should find location of one min value', () =>
        expect(min_location([5, 2, 3, -10, 55, 0])).to.equal(4));
    it('should find location of more then one min value', () =>
        expect(min_location([-10, 2, 9, -10, 55, 0])).to.eql([1, 4]));
    it('Invalid input', () => {
        expect(min_location(2)).to.equal(null);
        expect(min_location([3, 'u', -1])).to.equal(null)
    });
});

describe('max_location', () => {
    it('should find location of one max value', () =>
        expect(max_location([5, 2, 3, -10, 55, 0])).to.equal(5));
    it('should find location of more then one max value', () =>
        expect(max_location([55, 2, 9, -10, 55, 0])).to.eql([1, 5]));
    it('Invalid input', () => {
        expect(max_location(2)).to.equal(null);
        expect(max_location([3, 'u', -1])).to.equal(null)
    });
});

describe('sum_of_odd_index', () => {
    it('should find sum of elements with odd index', () =>
        expect(sum_of_odd_index([1, 2, 3, 4, 5])).to.equal(7));
    it('Invalid input', () => {
        expect(sum_of_odd_index(2)).to.equal(null);
        expect(sum_of_odd_index([3, 'u', -1])).to.equal(null)
    });
});

describe('reverse_array', () => {
    it('should reverse array', () =>
        expect(reverse_array([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]));
    it('Invalid input', () => {
        expect(reverse_array(2)).to.equal(null);
    });
});

describe('amount_odd', () => {
    it('should find amount of odd elements', () =>
        expect(amount_odd([1, 2, 3, 4, 5])).to.equal(3));
    it('Invalid input', () => {
        expect(amount_odd(2)).to.equal(null);
        expect(amount_odd([3, 'u', -1])).to.equal(null)
    });
});

describe('exchange', () => {
    it('should exchange parts of array', () =>
        expect(exchange([1, 2, 3, 4])).to.eql([3, 4, 1, 2]));
    it('Invalid input', () => {
        expect(exchange(2)).to.equal(null);
    });
});

describe('bubble_sort', () => {
    it('should sort array', () =>
        expect(bubble_sort([5, 1, 8, 2, 9, 4])).to.eql([1, 2, 4, 5, 8, 9]));
    it('Invalid input', () => {
        expect(bubble_sort(2)).to.equal(null);
    });
});

describe('selection_sort', () => {
    it('should sort array', () =>
        expect(selection_sort([5, 1, 8, 2, 9, 4])).to.eql([1, 2, 4, 5, 8, 9]));
    it('Invalid input', () => {
        expect(selection_sort(2)).to.equal(null);
    });
});

describe('insert_sort', () => {
    it('should sort array', () =>
        expect(insert_sort([5, 1, 8, 2, 9, 4])).to.eql([1, 2, 4, 5, 8, 9]));
    it('Invalid input', () => {
        expect(insert_sort(2)).to.equal(null);
    });
});

describe('partition', () => {
    it('should divide array on two parts: elements more then pivot to right part and elements less -- left; and return index of pivot', () => {
        const input = [10, 11, 12, 4, 2, 1, 7];
        expect(partition(input, 0, input.length - 1)).to.equal(3);
        expect(input).to.eql([4, 2, 1, 7, 11, 12, 10]);
    });
});

describe('quick_sort', () => {
    it('should sort array', () =>
        expect(quick_sort([5, 1, 8, 2, 9, 4], 0, 5)).to.eql([1, 2, 4, 5, 8, 9]));
    it('Invalid input', () => {
        expect(quick_sort(2)).to.equal(null);
    });
});