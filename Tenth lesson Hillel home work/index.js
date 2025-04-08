//Exercise 1

let Person = {
  PersonName: "Liza",
  PersonAge: 20,
  PersonAddress: "Kharkiv",
  PersonGender: "female",
  PersonStudentStatus: true,
  getItems: function () {
    return PersonName.PersonAddress.PersonAge.PersonGender.PersonStudentStatus;
  },
  ShowItems: function () {
    alert(PersonName.PersonAddress.PersonGender.PersonStudentStatus.PersonAge);
  }
};
console.log(Person.getItems);
console.log(Person.ShowItems);

//Exercise 2

const FirstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SecondArray = FirstArray.filter(number => number % 2 === 0);

console.log(SecondArray); 









