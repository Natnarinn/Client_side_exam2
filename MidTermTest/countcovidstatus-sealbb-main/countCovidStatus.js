const { template } = require('@babel/core')

//64130500013 Chonticha Li
function countCovidStatus(covidStatusArray) {
  //code here
  let countNL = 0
  let countNH = 0
  let positive = 0
  if(!covidStatusArray){
    return undefined
  }else if(covidStatusArray.length===0){
    return {}
  }else if(!(covidStatusArray.includes('negative and low risk' || 'negative and high risk' || 'positive'))){
    return {}
  }else if(covidStatusArray.length !== 0){
    for(i=0;i<covidStatusArray.length;i++){
      if(covidStatusArray[i].includes('negative and low risk')){
        countNL= ++countNL
      }
    }
    for(i=0;i<covidStatusArray.length;i++){
      if(covidStatusArray[i].includes('negative and high risk')){
        countNH= ++countNH
      }
    }
    for(i=0;i<covidStatusArray.length;i++){
      if(covidStatusArray[i].includes('positive')){
        positive= ++positive
      }
    }
  }
  if(countNL===0){
    return {'positive': positive,'negative and high risk': countNH}
  }else if(positive===0){
    return {'negative and low risk' : countNL,'negative and high risk' : countNH}
  }else if(countNH===0){
    return {'negative and low risk' : countNL,'positive' : positive}
  }else if(countNL===0 && countNH===0){
    return {'positive' : positive}
  }else if(countNL===0 && positive===0){
    return {'negative and high risk' : countNH}
  }else if(countNL===0 && positive===0){
    return {'negative and low risk' : countNL}
  }else{
    return {'negative and low risk' : countNL,'positive' : positive,'negative and high risk' : countNH}
  }
}
module.exports = countCovidStatus
