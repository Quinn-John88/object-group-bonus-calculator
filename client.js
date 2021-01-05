const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


for (let i = 0; i < employees.length; i++) {
  // pull out one employee
  let employee = employees[i];
  // pass it into a bonus calculator function
  let employeeBonus = bonusCalc(employee);
  console.log(employeeBonus);
}

function bonusCalc(employee) {
  let bonusObject = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }
  if(employee.reviewRating <= 2) {
    bonusObject.bonusPercentage = 0;
  } else if (employee.reviewRating === 3){
    bonusObject.bonusPercentage = 0.04;
  }  // TODO: Rating of 4 and 5

  // TODO: if 4-digits, add 5%
  // TODO: if > 65k, subtract 1%
  // TODO: make sure no greater than 13%, no less than 0%
  
  // TODO: Figure out what the bonusPercentage, totalCompenation, and totalBonus should be
  bonusObject.totalBonus = Number(employee.annualSalary * bonusObject.bonusPercentage);
  bonusObject.totalCompensation = Number(employee.annualSalary) + Number(bonusObject.totalBonus);
  return bonusObject;
}







// const obj = Object.fromEntries(employees);

// console.log(obj);


//let result = employees.map(({reviewRating}) => reviewRating )


//console.log(result);





// employeeLoop(employees[1])







// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

