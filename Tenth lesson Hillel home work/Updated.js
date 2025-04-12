let person = {
    personName: "Liza",
    personAge: 20,
    personAddress: "Kharkiv",
    personGender: "female",
    personStudentStatus: true,
  
    getItems: function () {
      return this.personName + ", " + this.personAddress + ", " + this.personAge + ", " + this.personGender + ", " + this.personStudentStatus;
    },
  
    showItems: function () {
      alert(this.personName + ", " + this.personAddress + ", " + this.personGender + ", " + this.personStudentStatus + ", " + this.personAge);
    }
  };
  
  console.log(person.getItems());
  person.showItems();
  