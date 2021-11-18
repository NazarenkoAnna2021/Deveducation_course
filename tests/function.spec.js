describe('week_day', () => {
    it('should write Sunday from number 0', () =>
        expect(week_day(0)).to.equal('Sunday'));
    it('should write Monday from number 1', () =>
        expect(week_day(1)).to.equal('Monday'));
    it('should write Tuesday from number 2', () =>
        expect(week_day(2)).to.equal('Tuesday'));
    it('should write Wednesday from number 3', () =>
        expect(week_day(3)).to.equal('Wednesday'));
    it('should write Thursday from number 4', () =>
        expect(week_day(4)).to.equal('Thursday'));
    it('should write Friday from number 5', () =>
        expect(week_day(5)).to.equal('Friday'));
    it('should write Saturday from number 6', () =>
        expect(week_day(6)).to.equal('Saturday'));
    it('Invalid input', () => {
        expect(week_day('a')).to.equal(null);
        expect(week_day(-10)).to.equal(null);
    });
});

describe('isDot', () => {
    it('point', () =>
        expect(isDot([1, 2])).to.equal(true));
    it('not a pointt', () => {
        expect(isDot('a')).to.equal(false);
        expect(isDot(2)).to.equal(false);
        expect(isDot([1, 2, 3])).to.equal(false);
        expect(isDot([1, 'a'])).to.equal(false);
    });
});

describe('points_distance', () => {
    it('should calculate points distance', () =>
        expect(points_distance([1, 2], [2, 1])).to.equal(1.41));
    it('Invalid input', () => {
        expect(points_distance([1, 0], [1, 'a'])).to.equal(null);
        expect(points_distance(1, [1, 2])).to.equal(null);
    });
});

describe('prescription', () => {
    it('should turn \"1\" to  \"one\"', () =>
        expect(prescription(1)).to.equal('one'));
    it('should turn \"12\" to  \"twelve\"', () =>
        expect(prescription(12)).to.equal('twelve'));
    it('should turn \"20\" to  \"twenty\"', () =>
        expect(prescription(20)).to.equal('twenty'));
    it('should turn \"35\" to  \"thirty five\"', () =>
        expect(prescription(35)).to.equal('thirty five'));
    it('should turn \"999\" to  \"nine hundred ninety nine\"', () =>
        expect(prescription(999)).to.equal('nine hundred ninety nine'));
    it('should turn \"909\" to  \"nine hundred nine\"', () =>
        expect(prescription(909)).to.equal('nine hundred nine'));
        it('should turn \"919\" to  \"nine hundred nineteen\"', () =>
            expect(prescription(919)).to.equal('nine hundred nineteen'));
    it('Invalid input', () => {
        expect(prescription('a')).to.equal(null);
    });
});

describe('word_to_num', () => {
    it('should turn \"one\" to  \"1\"', () =>
        expect(word_to_num('one')).to.equal(1));
    it('should turn \"twelve\" to  \"12\"', () =>
        expect(word_to_num('twelve')).to.equal(12));
    it('should turn \"twenty\" to  \"20\"', () =>
        expect(word_to_num('twenty')).to.equal(20));
    it('should turn \"thirty five\" to  \"35\"', () =>
        expect(word_to_num('thirty five')).to.equal(35));
    it('should turn \"nine hundred ninety nine\" to  \"999\"', () =>
        expect(word_to_num('nine hundred ninety nine')).to.equal(999));
    it('should turn \"nine hundred nine\" to  \"909\"', () =>
        expect(word_to_num('nine hundred nine')).to.equal(909));
        it('should turn \"nine hundred nineteen\" to  \"919\"', () =>
            expect(word_to_num('nine hundred nineteen')).to.equal(919));
    it('Invalid input', () => {
        expect(word_to_num('a')).to.equal(null);
    });
});