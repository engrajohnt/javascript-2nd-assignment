// Array1 = [15,30,45,60]
// Array2 = [5,6,3,10]
//Q. Write afunction that divides Array1 by Array2 and return a new array as result.
// your fucntion should check and make sure both array have thesame lenght before carrying outthe division
//also make sure that your function is reuseable to divide any other set of arrays.


   function divideArrays(array1,array2){
    if (array1.length !== array2.length){
        return null; 
    }

  
 var resultArray = [];

 for (var i = 0;i < array1.length; i++){
    var divisionResult = array1[i]/array2[i];
    resultArray.push(divisionResult);
 }
 
         return resultArray;
  }

 
 
  var array1 = [15,30,45,60];
  var array2 = [5,6,3,10];

 var result = divideArrays(array1,array2);
 console.log(result);

