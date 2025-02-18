const findTheOldest = function(people) {
  return people.reduce((acc, person) => {
    const currentYear = new Date().getFullYear()
    let age = (person.yearOfDeath || currentYear) - person.yearOfBirth
    let oldestAge = (acc.yearOfDeath || currentYear) - acc.yearOfBirth

    return age > oldestAge ? person : acc
  })

  /* const personsAndYears =  people.reduce((acc, person) => {
    const currenteYear = new Date().getFullYear()
    let yearsAlive = !person.yearOfDeath ? (currenteYear - person.yearOfBirth) : (person.yearOfDeath - person.yearOfBirth)
      personUpdate = {
        name: person.name,
        yearsAlive
      }
      acc.push(personUpdate)
      return acc
    }, [])

  const personMoreOld = personsAndYears.reduce((acc, person) => {
    return person.yearsAlive > acc.yearsAlive ? person : acc
  }, personsAndYears[0]) 

  return personMoreOld */
};

console.log(findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]))

// Do not edit below this line
module.exports = findTheOldest;
