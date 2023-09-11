const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if(word===null || word===undefined){
    return undefined
  } if(word.startsWith(startWord)){
    return word
  }else{
    return startWord+word
  }
}
module.exports = fillStartWord
