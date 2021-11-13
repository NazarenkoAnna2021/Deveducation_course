describe('sum_of_even', () => {
    it('should sum even numbers in range', () =>
        expect(sum_of_even(1, 99)).to.equal(2450));
    it('Invalid input', () => {
        expect(sum_of_even(99, 1)).to.equal(null);
        expect(sum_of_even(99, 'a')).to.equal(null);
        expect(sum_of_even('a', 1)).to.equal(null);
    });
});

describe('isPrime', () => {
    it('should define prime number', () =>
        expect(isPrime(23)).to.equal(true));
    it('should define not prime number', () =>
        expect(isPrime(25)).to.equal(false));
    it('2 is prime', () =>
        expect(isPrime(2)).to.equal(true));
    it('Do\'nt prime numbers: 1 and numbers <= 0', () => {
        expect(isPrime(-23)).to.equal(false);
        expect(isPrime(1)).to.equal(false);
    });
    it('Invalid input', () => {
        expect(isPrime('a')).to.equal(null);
    });
});

describe('sqr_selection', () => {
    it('should define nearest less square root', () => {
        expect(sqr_selection(16)).to.equal(4);
        expect(sqr_selection(18)).to.equal(4);
    });
    it('Invalid input', () => {
        expect(sqr_selection('a')).to.equal(null);
        expect(sqr_selection(-1)).to.equal(null);
    });
});

describe('sqr_binary_search', () => {
    it('should define nearest less square root', () => {
        expect(sqr_binary_search(16)).to.equal(4);
        expect(sqr_selection(18)).to.equal(4);
    });
    it('Invalid input', () => {
        expect(sqr_binary_search('a')).to.equal(null);
        expect(sqr_binary_search(-1)).to.equal(null);
    });
});

describe('factorial', () => {
    it('should define factorial', () => 
        expect(factorial(8)).to.equal(40320));
    it('Invalid input', () => {
        expect(factorial('a')).to.equal(null);
    });
});

describe('sum_elements_of_num', () => {
    it('should define sum elements of num', () => 
        expect(sum_elements_of_num(123)).to.equal(6));
    it('Invalid input', () => {
        expect(sum_elements_of_num('a')).to.equal(null);
    });
});

describe('inversion_num', () => {
    it('should invers num', () => {
        expect(inversion_num(123)).to.equal(321);
        expect(inversion_num(-123)).to.equal(-321);
    });
    it('Invalid input', () => {
        expect(sum_elements_of_num('a')).to.equal(null);
    });
});