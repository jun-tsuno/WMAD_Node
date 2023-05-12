const { mySum } = require('./mysum');

const myArr = [1, 2, 3, 4, 5];
const result = mySum(...myArr);
console.log(result);

const mySecondArr = myArr.map((val) => val * 2);
console.log(mySecondArr);

const average =
	mySecondArr.reduce((acc, curr) => {
		return acc + curr;
	}, 0) / mySecondArr.length;

const overAve = mySecondArr.filter((val) => {
	if (val > average) {
		return true;
	}
});

console.log(overAve);

setTimeout(() => console.log('Goodbye'), 3000);

const employee = {
	name: 'hoge',
	email: 'hoge@hoge.com',
	department: 'HR',
	startDate: '2023-05-11',
};

const { name, email } = employee;
const person = { name, email };

console.log(person);
