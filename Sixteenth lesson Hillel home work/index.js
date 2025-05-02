function Student(StudentName, LastName, BirthData, Marks) {
  this.StudentName = StudentName;
  this.LastName = LastName;
  this.BirthData = BirthData;
  this.Marks = Marks;
  this.lessons = [];
  this.getAge = () => 2025 - this.BirthData;

  this.getAverageGrade = () =>
    this.Marks.reduce((sum, mark) => sum + mark, 0) / this.Marks.length;
  this.markAttendance = (isPresent) => {
    if (this.lessons.length < 25) {
      this.lessons.push(isPresent);
    }
  };

  this.summary = () => {
    let attended = this.lessons.filter((lesson) => lesson === true).length;
    let total = this.lessons.length;
    let averageVisit = total > 0 ? attended / total : 0;
    let averageGrade = this.getAverageGrade();

    if (averageGrade > 90 && averageVisit > 0.9) return "Молодець!";
    if (averageGrade > 90 || averageVisit > 0.9)
      return "Добре, але можна краще";
    return "Редиска!";
  };
}

let student1 = new Student("Вітя", "Філоненко", 2005, [100, 95, 92]);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);

console.log("Ім'я:", student1.StudentName);
console.log("Прізвище:", student1.LastName);
console.log("Вік:", student1.getAge());
console.log("Середній бал:", student1.getAverageGrade());
console.log("Оцінка:", student1.summary());
