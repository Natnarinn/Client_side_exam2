const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if(!arrayOfString){
     return undefined
  }
  let maxL=0
  for(let i=0;i<arrayOfString.length;i++){
    if(arrayOfString[i].length>maxL){
      maxL=arrayOfString[i].length
    }
  }
  return arrayOfString.filter(word => word.length===maxL)
}
module.exports = getMaxLengthString
