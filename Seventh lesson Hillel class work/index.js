function createStudent(name){
    let score =0;
    function increase(){
    score++;
    }
    function decrease(){
    score--;
    }
   return {
    increase:function(){
        score++;
    },
        decrease:function(){
            score--;
        }
    }
   }
