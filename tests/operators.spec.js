describe('chose_operator', () => {
    it('should sum two numbers', () =>
        expect(chose_operator(3, 2)).to.equal(5));
    it('should multiply two numbers', () =>
        expect(chose_operator(6, 2)).to.equal(12));
    it('should define invalid input', () =>
        expect(chose_operator('aa', 32)).to.equal('invalid input'));
});

describe('find_quater', () => {
    it('should find first quate', () =>
        expect(find_quater(3, 2)).to.equal('first quarter'));
    it('should find second quate', () =>
        expect(find_quater(-3, 2)).to.equal('second quarter'));
    it('should find third quate', () =>
        expect(find_quater(-3, -2)).to.equal('third quarter'));
    it('should find fourth quate', () =>
        expect(find_quater(3, -2)).to.equal('fourth quarter'));
    it('should find invalid input', () =>
        expect(find_quater('www', 2)).to.equal('invalid input'))

});

describe('sum_of_positive', () => {
    it('should find sum of positive', () =>
        expect(sum_of_positive(3, 2, -1)).to.equal(5));
    it('should confirm absence of positive', () =>
        expect(sum_of_positive(-3, -2, -1)).to.equal('No positive numbers'));
    it('should find number of NaN', () =>
        expect(sum_of_positive(3, 'u', -1)).to.equal('2 element is not a number'));
});

describe('calculate', () => {
    it('should sum and add 3', () =>
        expect(calculate(1, 1, 1)).to.equal(6));
    it('should multiply and add 3', () =>
        expect(calculate(2, 2, 2)).to.equal(11));
    it('should find Incorrect input', () =>
        expect(calculate(3, 'u', -1)).to.equal('Incorrect input'))
});

describe('rating_to_mark', () => {
    it('should converse rating 0-19 to mark F', () =>
        expect(rating_to_mark(19)).to.equal('F'));
    it('should converse rating 20-39 to mark E', () =>
        expect(rating_to_mark(30)).to.equal('E'));
    it('should converse rating 40-59 to mark D', () =>
        expect(rating_to_mark(45)).to.equal('D'));
    it('should converse rating 60-74 to mark C', () =>
        expect(rating_to_mark(60)).to.equal('C'));
    it('should converse rating 75-89 to mark B', () =>
        expect(rating_to_mark(75)).to.equal('B'));
    it('should converse rating 90-100 to mark A', () =>
        expect(rating_to_mark(100)).to.equal('A'));
});