const simpleSum = (a, b) => a + b

function sum(n) {
	console.log(n)
	return function (a) {
		return sum(a + n)
	}
}

sum(1)(2)(3)

console.log('simpleSum : ' + simpleSum(5, 6))
