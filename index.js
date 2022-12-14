
// Bài 1:
const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1) What is the average income of all the people in the array?
let sumSalary = 0, countSalary = 0
people.forEach(element => {
    sumSalary = + element.salary
    countSalary = +1;
})
console.log(sumSalary / countSalary)
// 2) Who are the people that are currently older than 30?
let countAge = 0
people.forEach(element => {
    if( 2022 - element.DOB.slice(6) > 30) countAge++; 
})
console.log(countAge)

// 3) Get a list of the people's full name (firstName and lastName).
people.forEach(element => {
    console.log(element.firstName + " " + element.lastName)
})
// 4) Get a list of people in the array ordered from youngest to oldest.
people.sort(function(a, b) {
    if(a.DOB.slice(6) < b.DOB.slice(6)) {
        return -1;
    } 
    if(a.DOB.slice(6) > b.DOB.slice(6)) {
        return 1;
    }
    else {
        if(a.DOB.slice(0,2) < b.DOB.slice(0, 2)) {
            return -1;
        } 
        if(a.DOB.slice(0, 2) > b.DOB.slice(0, 2)) {
            return 1;
        }
        else {
            if(a.DOB.slice(3,5) < b.DOB.slice(3, 5)) {
                return -1;
            } 
            if(a.DOB.slice(3, 5) > b.DOB.slice(3, 5)) {
                return 1;
            }
            else return 0;
        }
    }
})
console.log(people)


// 5) How many people are there in each department?
let countDev = 0, countSale = 0, countMark = 0, countOffMan = 0
people.forEach(element => {
    switch (element.department) {
        case 'Development':
            countDev += 1;
        case 'Marketing':
            countMark += 1;
        case 'Sales':
            countSale += 1;
        case 'Office Management':
            countOffMan += 1;
    }
})
console.log('Development', countDev)
console.log('Sales', countSale)
console.log('Marketing', countMark)
console.log('Office Management', countOffMan)
// Bài 2: Sử dụng vòng lặp để xóa phần tử trùng lặp trong mảng.
input=[ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16 ]
// output: [ 25, 50, 43, 36, 31, 26, 24, 19, 28,  4, 18, 16, 48, 47, 49, 42, 15,  3 ]


let output = input.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element)
    }
    return accumulator
  }, [])
  
console.log(output)