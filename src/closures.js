//1
const cashbox = {
    25: 0,
    50: 0,
    100: 0,
    cash: 0,
    LastProceeds: 0,
    sellTickets: function (persons, queueNumber) {
        let ans = 'Yes';
        switch (persons[queueNumber]) {
            case 25: {
                this[25] += 1;
                if (++queueNumber === persons.length) return ans;
                return this.sellTickets(persons, queueNumber);
            }
            case 50: {
                this[25] === 0 ? ans = 'No' : (this[25] -= 1, this[50] += 1);
                if (++queueNumber === persons.length || ans === 'No') return ans;
                return this.sellTickets(persons, queueNumber);
            }
            case 100: {
                this[25] === 0 ? ans = 'No' : (this[50] === 0 && this[25] >= 3) ? (this[25] = this[25] - 3, this[100] += 1) :
                    (this[100] += 1, this[25] -= 1, this[50] -= 1);
                if (++queueNumber === persons.length || ans === 'No') return ans;
                return this.sellTickets(persons, queueNumber);
            }
            default: return null;
        }
    },
    calCash: function () {
        return this.cash = (25 * this[25]) + (50 * this[50]) + (100 * this[100]);
    },
    collection: function () {
        this.LastProceeds = this.cash;
        this.cash = 0;
        return this.LastProceeds;
    }
}
//  console.log(cashbox.sellTickets([25, 25, 25, 100], 0));
//  cashbox.calCash();
//  console.log(cashbox.cash);
// cashbox.collection();
// console.log(cashbox.cash);
// console.log(cashbox.LastProceeds);


//2
function getSum(number1 = '', number2 = '') {
    const numArr1 = Array.from(number1);
    const numArr2 = Array.from(number2);
    const dif = numArr1.length - numArr2.length;
    if (dif < 0)
        for (let i = 0; i < Math.abs(dif); i++)
            numArr1.unshift(0);
    else
        for (let i = 0; i < dif; i++)
            numArr2.unshift(0);
    let ans = [];
    for (let index in numArr1)
        ans[index] = Number(numArr1[index]) + Number(numArr2[index]);
    return sumDischarges(ans);
}

function sumDischarges(num = []) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] > 9 && i != 0)
            (num[i - 1] += 1, num[i] -= 10)
    }
    return num.toString().replace(/[\s.,%]/g, '');
}

// console.log(getSum('9999', '999'));

//4
  function makeCaching(getSum) {
    var cache = {};
    return function(number1, number2) {
      if (!(number1 in cache) && !(number2 in cache)) {
        cache[number1, number2] = getSum.call(this, number1, number2);
      }
      return cache[number1, number2];
    };
  }
  
  getSum = makeCaching(getSum);
  
  let a = getSum('1', '2');
  let b = getSum('1', '2');
  console.log( a == b );
  b = getSum('2', '3');
  console.log( a == b );