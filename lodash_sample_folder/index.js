const _ = require("lodash")

const array = [
	{
		_id: 1,
		name: "Vasya",
		age: 2,
		money: 100,
	},
	{
		_id: 2,
		name: "Elena",
		age: 22,
		money: 1070,
	},
	{
		_id: 3,
		name: "Antonio",
		age: 19,
		money: 872,
	},
]

const array2 = {
	_id: 1,
	name: "Vasya",
	age: 2,
	money: 100,
}

const arr = [1, 1, 1, 1, 4435, 6, 234, 6, 624, 2, 56, 5]
const person = _.find(array, { age: 19, money: 872 }) // nice feature!:)))
const func = _.debounce(() => console.log(1 + 2), 1000) //delay execution of a function im mlseconds
const filteredArray = _.filter(array, { name: "Valentin" })
const slicedAndMappedProperties = _.pick(array2, ["name", "age"]) //useful only for one item - takes tagged elements to new object
const slicedAndMappedProperties3 = _.omit(array2, ["name", "age"]) //useful only for one item - on te contrary: excludes tagged elements to new object

console.log(_.isEmpty(array)) //is array empty inside
console.log(_.sortedUniq(arr)) //outputs uniqe numbers in array
console.log(_.sortedUniqBy(array, "age")) //outputs sorted only by numbers
console.log(_.sortedUniq(_.sortBy(arr)))
console.log(person)
console.log(_.random(4, 56))
console.log(filteredArray)
console.log(slicedAndMappedProperties)
console.log(slicedAndMappedProperties3)
func()
