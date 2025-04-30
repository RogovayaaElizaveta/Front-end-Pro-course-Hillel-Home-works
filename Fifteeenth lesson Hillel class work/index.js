function Human (name ,age){
    this.name=name;
    this.age=age;
    this.getName = function(){
        console.log(name);
    }
     this.getInfo = function(){
        console.log(`Human ${this.name} has ${this.age}  years`);
     };
}
// в якись створюємо параметри вони потім створяться в обєктах 
// два екземпляри класу 
let  human =new Human('Liza',);
