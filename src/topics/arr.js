var _ = require('lodash')

const array = [
	{ name: 'name1', id: 1, summ: 100 },
	{ name: 'name2', id: 2, summ: 200 },
	{ name: 'sname3', id: 3, summ: 300 },
	{ name: 'sname4', id: 4, summ: 200 },
	{ name: 'sname5', id: 5, summ: 100 },
	{ name: 'sname6', id: 6, summ: 400 },
	{ name: 'mname7', id: 7, summ: 900 },
	{ name: 'nname8', id: 8, summ: 400 },
]

// console.log(array)

const filterArray = _.filter(array, { summ: 100 })

//console.log(filterArray)

const filterArraySumm = _.filter(array, function (item) {
	return item.summ <= 200
})
//console.log(filterArraySumm)

// _.find(users, function(o) { return o.age < 40; });

const findArrayName = _.find(array, function (item) {
	return (item.name = 'name')
})
//console.log(findArrayName)

// const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];
// const startsWithN = countries.filter((country) => country.startsWith("N"));

const filterArrayName = _.filter(array, function (item) {
	return item.name.startsWith(''.toLowerCase())
})
console.log(filterArrayName)
