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

// $(document).ready(readyNow);
// function readyNow() {
//     console.log('jQuerry & js linked');

 
//   $('#run').on('click', onClick);
// }
// function onClick(){
// //  bonusObject.append($('#list'))
// let newObject = bonusObject;
// //  let el = $("#list")
// //  el.append(`<li>` + bonusObject + `</li>`)


//function onClick(){

for (let i = 0; i < employees.length; i++) {
  // pull out one employee{}
  console.log(employees[i]);
  let employee = employees[i];
  // pass it into a bonus calculator function
  let employeeBonus = bonusCalc(employee);
  console.log(employeeBonus);
}

  //let el = $("#list");
  //el.append(`<li>` + `${bonusObject1.name}` + `</li>`);

//${bonusObject.whateverPropertyYouWantToDisplay} and probably a label.

//let bonusObject1 = 0
function bonusCalc(employee) {
  let bonusObject = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }
  //bonusObject1 = bonusObject;
  if(employee.reviewRating <= 2) {
    bonusObject.bonusPercentage = 0;
  } else if (employee.reviewRating === 3){
    bonusObject.bonusPercentage = 0.04;
  } else if (employee.reviewRating === 4){
    bonusObject.bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5){
    bonusObject.bonusPercentage = 0.1;
  }

  if (employee.annualSalary > 65000){
    bonusObject.bonusPercentage -= 0.01;
  }

  if(employee.employeeNumber.length === 4){
    bonusObject.bonusPercentage += 0.05;
  }
  
  if(bonusObject.bonusPercentage > 0.13){
    bonusObject.bonusPercentage = 0.13;
  } else if (bonusObject.bonusPercentage < 0){
    bonusObject.bonusPercentage = .00;
  }
  bonusObject.totalBonus = Number(employee.annualSalary * bonusObject.bonusPercentage);
  bonusObject.totalCompensation = Number(employee.annualSalary) + Number(bonusObject.totalBonus);
  
  return bonusObject;
}

//console.log(bonusObject1);





// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//$(`#tileList`).append