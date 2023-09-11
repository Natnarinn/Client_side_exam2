function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems === null || arrayItems === undefined) console.log(undefined)
  if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0) console.log('1')
    let pages = 1;
    if(arrayItems.length < rowsPerPage) {
        console.log(pages)
    } else {
        pages = Math.ceil(arrayItems.length / rowsPerPage)
        console.log(pages)
    }

}

totalPages([1, 2, 3], 2);
