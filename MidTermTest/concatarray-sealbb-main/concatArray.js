const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if((!array1&&!array2)){
    return undefined
  }else if(array1===[]&&array2===[]){
    return []
  }else if(!array1){
    return array2
  }else if(!array2){
    return array1
  }else{
    let array3 = array1.concat(array2);
    return array3
  }
}
module.exports = concatArray