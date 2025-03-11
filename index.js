//Exercise 1
const a =prompt('Введіть ваше імя') ;
    alert(`Hello , ${a} How are you?`);




//Exercise 2

let number =prompt('введіть трьох значне число');
if(number.length===3){
    number.split('');
 let [a,b,c] =number;
      //Чи правда, що всі цифри однакові?
    if(a===b&&b===c&&c===a){
        console.log(true,'Так це правда ');
     }else{
            console.log(false,'Неправда ,не має');
     //Чи є серед цифр цифри однакові?
     }if( a === b || b === c || a === c){
        console.log(true,'Є однакові числа' );
     }else{
        console.log(false,'Немає однакових чисел ');
     }

        }else{
    console.error(404,'Введіть трьохзначне число');
   }






//Exercise 3
//Main Exercise 
const DatBirthd =prompt('Введіть рік народження ');
alert(`'Рік народження ', ${DatBirthd}`);
const PlaceOfLive =prompt();
if(PlaceOfLive==='Київ'){
    alert(`"Ти живеш у столиці України",${PlaceOfLive}  `);
}if(PlaceOfLive==='Вашингтон'){
    alert(`"Ти живеш у столиці Америки",${PlaceOfLive}  `);
}if(PlaceOfLive==='Лондон'){
    alert(`"Ти живеш у столиці Британії ",${PlaceOfLive}  `);
}else{
    alert(`ти живеш у місті${PlaceOfLive}`);
}





const FavorSport ="Вид спорту";

const NameFirstChempion ="Дарина Білодід";
const NameSecondChempion ="Яна Клочкова";
const NameThirdChempion ="Харлан Ольга";
let Person =prompt('Введіть вид спорту');

if(Person==="Дзюдо"){
    alert(`'Круто! Хочеш стати як '${NameFirstChempion}?`);
}if(Person==="Фехтування"){
    alert(`'Круто! Хочеш стати як '${NameThirdChempion}?`);
}if(Person==="Плавання"){
    alert(`'Круто! Хочеш стати як '${NameSecondChempion}?`);
}else{
    alert(`'Шкода, що Ви не захотіли ввести свій улюблений  '${FavorSport}`);

}


//Exercise 4
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

