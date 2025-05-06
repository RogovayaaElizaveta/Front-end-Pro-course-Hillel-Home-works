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
  console.log(calculate.addNumber(5, 3));     
  console.log(calculate.subtractNumber(10, 4)); 
  console.log(calculate.multiplyNumber(3, 6)); 
  console.log(calculate.divideNumber(8, 2));   
  
  