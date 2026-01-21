
let someNumbers = [3, 6, 20, 400, 1, 4]

someNumbers.sort((elem1, elem2) => {

  // -1 or any neg value (elem1 goes first)
  // 0 (they are the same, don't change order)
  // 1 or any pos value (elem2 goes first)

  // if (elem1 > elem2) {
  //   return -1
  // } else if (elem2 > elem1) {
  //   return 1 // (6 - 3 => 3)
  // } else {
  //   return 0
  // }

  return elem2 - elem1


})

console.log(someNumbers)


let someNames = ["asier", "àna", "Ernesto", "bob"]

someNames.sort((e1, e2) => {
  // default sort condition. Applies even if left without a callback function
  if (e1 > e2) {
    return 1
  } else if (e2 > e1) {
    return -1
  } else {
    return 0
  }
})

console.log(someNames) // ['ana', 'asier', 'bob', 'ernesto']
                       // ['Ernesto', 'asier', 'bob', 'àna']

// localeCompare()
console.log(someNames[0].localeCompare(someNames[1]))

someNames.sort((name1, name2) => {
  return name1.localeCompare(name2) // 0, -1 or 1
})

console.log(someNames)