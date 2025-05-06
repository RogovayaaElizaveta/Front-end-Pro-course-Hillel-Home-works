class SimpleCalculator {
    addNumber(a, b) {
      return a + b;
    }
  
    subtractNumber(a, b) {
      return a - b;
    }

    divideNumber(a, b) {
        return a / b;
      }


    multiplyNumber(a, b) {
      return a * b;
    }
  
  
  }
  
  const calculate = new SimpleCalculator();
  console.log(calculate.addNumber(10, 20));     
  console.log(calculate.subtractNumber(10, 5)); 
  console.log(calculate.multiplyNumber(8, 4)); 
  console.log(calculate.divideNumber(14, 2));   
  
  