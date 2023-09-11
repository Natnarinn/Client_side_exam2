const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  // let min=Math.min(n1, n2, n3)
  // let med=[n1,n2,n3]
  // med.sort(function (a, b) {return a - b})
  // let max=Math.max(n1,n2,n3)
  // return {min: min , mid: med[1], max: max}
  let min = n1<n2&&n1<n3 ? n1 : n2<n1&&n2<n3 ? n2 : n3
  let med = n1>=n2&&n1<=n3 || n1>=n3&&n1<=n2 ? n1 : n2>=n1&&n2<=n3 || n2>=n3&&n2<=n1 ? n2 : n3
  let max = n1>n2&&n1>n3 ? n1 : n2>n1&&n2>n3 ? n2 : n3
  return {min: min , mid: med, max: max}
}
module.exports = minMedMax