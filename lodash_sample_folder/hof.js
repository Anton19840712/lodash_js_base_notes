//Higher-order functions
const _ = require("lodash") // here we plug lodash library

//imperative approach: we chain our functions.
//-------------------
function multiple(a, b) {
	return a * b
}

function devide(a, b) {
	return a / b
}

function double(num) {
	return multiple(num, 2)
}

// declarative approach:
const half1 = _.partial(double, 2)
const half2 = _.partial(devide, 2)
const half3 = _.partial(devide, _, 2)
console.log(half1(4))
console.log(half2(4))
