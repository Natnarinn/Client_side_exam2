const { template } = require("@babel/core")

//64130500107 Piyakorn Panichwong
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  //code here
  if (allItems === null || allItems === undefined) {
    return undefined
  }
  if (allItems.length === 0) {
    return []
  }
  if (rowsPerPage <= 0) {
    return allItems
  }
  if (currentPage <= 0) {
    return allItems
  }
  if (rowsPerPage < allItems.length) {

  }  
    const page = 1
    page = Math.ceil(allItems / rowsPerPage)
  }
  
}



module.exports = getItemsOfCurrentPage
