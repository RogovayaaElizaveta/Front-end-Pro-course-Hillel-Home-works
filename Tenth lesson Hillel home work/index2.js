//Exercise 3
const contactBook = {
  contactsPersons: [
    {
      namePerson: "Liza Rogovaya",
      phonePerson: "+0987777777",
      emailPerson: "lizaaa@example.com",
      genderPerson: "female"
    },
    {
      namePerson: "Sergey Petrovich",
      phonePerson: "+66555555555",
      emailPerson: "sergiyyyy@example.com",
      genderPerson: "male"
    }
  ],

  addContactToBook: function (contactsPersons) {
    contactsPersons.push(contactsPersons);
  },

  findContact: function (namePerson) {
    return contacts.find(
      (contact) => contact.namePerson.toLowerCase() === namePerson.toLowerCase()
    );
  }
};

let foundContact = contactBook.findContact("Nadia Kovalenko");
console.log(foundContact);

contactBook.addContact({
  name: "Nadia Kovalenko",
  phone: "+380743333333",
  email: "nadia@example.com",
  genderPerson: "male"
});
