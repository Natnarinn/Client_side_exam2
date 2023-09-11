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
  const pages = 1
  if (rowsPerPage < allItems.length) {
      console.log(pages)
  } else{    
    pages = Math.ceil(allItems.length / rowsPerPage)
    console.log(pages)
  }  
}



module.exports = getItemsOfCurrentPage
