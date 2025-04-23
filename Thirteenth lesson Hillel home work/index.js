document
  .getElementsByClassName("simple_form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); 
// тут еще можно использовать метод trim ,
    let isValid = true;
    let Name = document.getElementsByClassName("full_name")[0].value.replace(/^\s+|\s+$/g, '')  ;
    let Message = document.getElementsByClassName("Message")[0] .value.replace(/^\s+|\s+$/g, '') ;
    let Phone = document.getElementsByClassName("Phone")[0].value.replace(/^\s+|\s+$/g, '') ;
    let Email = document.getElementsByClassName("Email")[0].value.replace(/^\s+|\s+$/g, '') ;

    // Очистка попередніх помилок
    document.getElementsByClassName(".error").forEach((el) => (el.textContent = ""));

    // Валідація
    if (!Name) {
      document.getElementsByClassName("nameError").textContent = "Name is empty";
      isValid = false;
    }

    if (Message.length < 5) {
      document.getElementsByClassName("Message_error").textContent =
        "Message must be  5 symbol";
      isValid = false;
    }

    if (!/^\+380\d{9}$/.test(Phone)) {
      document.getElementsByClassName("Phone_error").textContent =
        "Phone  start +380 ";
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      document.getElementsByClassName("Email_error").textContent = "error with  email";
      isValid = false;
    }

    if (isValid) {
      console.log({ Name, Message, Phone, Email });
      alert(" successfully  register your personal information");
    }
  });
