//Exercise1

for(let i=20;i<=30;i+=0.5){
    console.log(i++);
}
    
//Exercise 2
const OneDollars = 26; 

for (let valuta = 10; valuta <= 100; valuta += 10) {
    console.log(`${valuta}  ${valuta * OneDollars}`);
}


//Exercise 3 
const N = parseInt(prompt("Input num = N:")); 

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    } else {
        console.log("Input int numbers") ;
    }
}





//Exercise 4 
const num = parseInt(prompt("Input number:")); 
let SimpleNum = num > 1; 

for (let i = 2; i * i <= num; i++) { 
    if (num % i === 0) {
        SimpleNum = false; 
       console.error(404);
    }
    if (SimpleNum) {
        console.log( " Simple number" + num );
    } else {
        console.log( "  isn't simple" + num );
    }
    
}




