const { template } = require('@babel/core')
//64130500107 Piyakorn Panichwong
function getTotalPrice(productOrder) {
  let totalprice = 0
  productOrder.forEach(obj => {
    totalprice += obj.price * obj.quantity
  });
  // for (let i = 0; i < productOrder.length; i++) {
  //   totalprice += (productOrder.price[i] * productOrder.quantity[i])
  // } 
  if (productOrder.find(obj => obj.quantity <= 0) || productOrder.find(obj2 => obj2.price <= 0)) return -1 
  else return totalprice
  }
module.exports = getTotalPrice


