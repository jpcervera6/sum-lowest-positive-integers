function sumLowestIntegers(array){
    if(array.length >= 4){
      let key1 = true;
      for(i = 0; i < array.length; i++){
        if(array[i] >= 0 && array[i]%1 === 0){
          key1 = true;
      } else{
          key1 = false;
          console.log('Numbers not valid, try again!');
          break;
      }
    }
      if(key1 === true){
        let small1 = array[0];
        let small2 = array[1];
        for(i = 2; i < array.length; i++){
          if(array[i] < small1){
            if(small1 < small2){
              small2 = array[i];
            }else{
            small1 = array[i];
            }
          } else{
            if(array[i] < small2){
              small2 = array[i];
            } else{
              continue;
            }
          }
        } 
         result = small1 + small2;
         console.log(`The sum of the two smallest digits is: ${result}!`);
    
      }
    } else{
      console.log('Not enough numbers, try again!');
    
    }
    }
    
 sumLowestIntegers();
    