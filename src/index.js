module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');
  let arr2 = [];
  let arr3 = [];
  for(let i = 0; i<arr.length; i++){
    bracketsConfig.forEach(element => {
      if(arr[i] === element[0]){
          if (arr[i] === element[1]){
              arr3 = arr2.slice(-1);
              arr3.push(arr[i]);
              if(bracketsConfig.some(element=>{
                  return (arr3[0] === element[0] & arr3[1] === element[1])
                  })){
                  arr2.pop();
                  } else arr2.push(arr[i])  
          } else arr2.push(arr[i]) 
      } else if (arr[i] === element[1]){
              arr3 = arr2.slice(-1);
              arr3.push(arr[i]);
              if(bracketsConfig.some(element=>{
                  return (arr3[0] === element[0] & arr3[1] === element[1])
                  })){
                  arr2.pop();
              } else arr2.push(arr[i])
            }
      });
  }
  let result;
  (arr2.length === 0)?result = true:result = false;
  return result;

}
