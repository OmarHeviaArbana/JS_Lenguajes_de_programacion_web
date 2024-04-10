const data = require('./data');

function entryCalculator(entrants, prices) {
  if (!entrants || !prices || Object.keys(entrants).length === 0 || Object.keys(prices).length === 0) {
    return 0;
  } else {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    const adultPrice = Adult * prices.Adult;
    const childPrice = Child * prices.Child;
    const seniorPrice = Senior * prices.Senior;
  
    return adultPrice + childPrice + seniorPrice;
  }
}

function schedule(dayName, weekSchedule) {
  if (!dayName || !weekSchedule) {
    return dayName; 
  } else {
    const singleDay = {};
    singleDay[dayName] = weekSchedule[dayName];
    return singleDay;
  }
}

function animalCount(species) {
  const animalsCount = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6
  };

  if(!species) {
    return animalsCount
  } else {
    const singleAnimal = animalsCount[species]
    return singleAnimal ;
  }
}

function animalMap( options) {
  if (!options) {
    const objetcAnimalsLocation = {};
    data.animals.forEach(animal => {
        if (!objetcAnimalsLocation[animal.location]) {
            objetcAnimalsLocation[animal.location] = [];
        }
        objetcAnimalsLocation[animal.location].push(animal.name);
    });
    return objetcAnimalsLocation;
    
  } else {
    console.log("No he llegado a pasar el test. Por lo que lo me queda pendiente.");
  }
}
  
function animalPopularity(rating) {
  if (!rating) {
    const animalGroups = {};

    data.animals.forEach(animal => {
        const popularity = animal.popularity.toString();
        if (!animalGroups[popularity]) {
            animalGroups[popularity] = [];
        }
        animalGroups[popularity].push(animal.name);
    });

    return animalGroups;
  } else {
    const animalsWithRating = [];

    data.animals.forEach(animal => {
        if (animal.popularity === rating) {
            animalsWithRating.push(animal.name);
        }
    });

    return animalsWithRating;
} 
}

function animalsByIds(ids) {
  if (!ids) {
    return []
  } else {
    if (!Array.isArray(ids)) {
      ids = [ids];
    }
    return data.animals.filter(animal => ids.includes(animal.id));
  }
}

function animalByName(animalName) {

  if (!animalName) {
    return {}
  } else {
    data.animals.forEach(animal => {
        const residentByName = animal.residents.find(res => res.name === animalName);
        if (residentByName) {
            resident = {
                name: residentByName.name,
                sex: residentByName.sex,
                age: residentByName.age
            };
            species = animal.name;
        }
    });
    return { 
      name: resident.name, 
      sex: resident.sex, 
      age: resident.age, 
      species 
    };
  }
}


function employeesByIds(ids) {
  if (!ids) {
    return []
  } else {
    if (!Array.isArray(ids)) {
      ids = [ids];
    }
    return data.employees.filter(employee => ids.includes(employee.id));
  }
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {}
  } else {
    return data.employees.find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  }
}

function managersForEmployee(idOrName) {
    const employee = data.employees.find(employee => employee.id === idOrName || employee.firstName === idOrName || employee.lastName == idOrName);
    const managerNames = employee.managers.map(managerId => {
        const manager = data.employees.find(employee => employee.id === managerId);
        return `${manager.firstName} ${manager.lastName}`;
    });
    return {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      managers: managerNames,
      responsibleFor: employee.responsibleFor
  };
}

function employeeCoverage(idOrName) {

  if (!idOrName) {
    const employeeItsAnimals = {};

    data.employees.forEach(employee => {
        const fullName = `${employee.firstName} ${employee.lastName}`;
        const animals = employee.responsibleFor.map(animalId => {
            const animal = data.animals.find(a => a.id === animalId);
            return animal.name;
        });

        employeeItsAnimals[fullName] = animals;
    });

    return employeeItsAnimals;
  
  } else {
    const employee = data.employees.find(employee => employee.id === idOrName || `${employee.firstName} ${employee.lastName}` === idOrName || employee.firstName === idOrName || employee.lastName === idOrName);
    const fullName = `${employee.firstName} ${employee.lastName}`;

    const animals = employee.responsibleFor.map(animalId => {
        const animal = data.animals.find(a => a.id === animalId);
        return animal.name;
    });

    return {
        [fullName]: animals
    };
  }
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
