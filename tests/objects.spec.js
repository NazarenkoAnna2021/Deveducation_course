describe('getCookingTime', () => {
    it('should get 0', () =>
        expect(getCookingTime(0)).to.equal(0));
    it('should get 5', () => {
        expect(getCookingTime(5)).to.equal(5);
    });
    it('should get 10', () =>
        expect(getCookingTime(9)).to.equal(10));
    it('Invalid input', () => {
        expect(getCookingTime('a')).to.equal(null);
    });
});

describe('getNumber', () => {
    it('should get 4', () =>
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal(4));
    it('should get 13', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.equal(13);
    });
    it('array does\'nt match the task', () =>
        expect(getNumber([1, 5, 7, 13, 9, 15, 19, 777, 13])).to.equal('array does\'nt match the task'));
});

describe('findTitle', () => {
    const arr = [
        { title: 'Some title1' },
        { title: 'I like JS' },
        { user: 'This obj doesn\’t have key title js' },
        { title: 'Js - is the best!' }
    ];
    const result = [
        { title: 'I like JS' },
        { user: 'This obj doesn\’t have key title js' },
        { title: 'Js - is the best!' }
    ];

    it('should get strings with \"js\"', () =>
        expect(findTitle(arr, 'js')).to.eql(result));
    it('should get []', () => {
        expect(findTitle(arr, 'cow')).to.eql([]);
    });
});

describe('countCharacters', () => {
    it('should create object from word "sparrow" vhere keys -- letters, values -- them number', () =>
        expect(countCharacters('sparrow')).to.eql({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}));
    it('should create object from word \"aabcddeffge\" vhere keys -- letters, values -- them number', () =>
        expect(countCharacters('aabcddeffge')).to.eql({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}));
    it('should create object from word \"a 2ab !d\" vhere keys -- letters, values -- them number', () =>
        expect(countCharacters('a 2ab !d')).to.eql({a: 2, b:1, d:1, 2:1}));
});

describe('getNextPalindrome', () => {
    it('should get 11', () =>
        expect(getNextPalindrome(7)).to.equal(11));
    it('should get 101', () => {
        expect(getNextPalindrome(99)).to.equal(101);
    });
    it('should get 141', () => {
        expect(getNextPalindrome(132)).to.equal(141);
    });
    it('should get 898', () => {
        expect(getNextPalindrome(888)).to.equal(898);
    });
    it('should get 1001', () => {
        expect(getNextPalindrome(999)).to.equal(1001);
    });
});

describe('set.add', () => {
    it('should add 1, 2, 3, 4', () =>{
        set.add([1, 2, 3, 4, 3]);
        expect(set.element).to.eql([1, 2, 3, 4])
    });
    it('should remove 4', () => {
        set.remove(4);
        expect(set.element).to.eql([1, 2, 3]);
    });
    it('should get false', () => {
        expect(set.has(4)).to.equal(false);
    });
});