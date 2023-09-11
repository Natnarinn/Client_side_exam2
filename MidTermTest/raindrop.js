function rainDrop(max) {
  if (max % 3 === 0 && max % 5 === 0 && max % 7 === 0) {max = "PlingPlangPlong"}
  else if (max % 3 === 0 && max % 5 === 0 ) {max = "PlingPlang"}
  else if (max % 3 === 0 && max % 7 === 0) {max = "PlingPlong"}
  else if (max % 5 === 0 && max % 7 === 0) {max = "PlangPlong"}
  else if (max % 3 === 0 ) {max = "Pling"}
  else if ( max % 5 === 0 ) {max = "Plang"}
  else if ( max % 7 === 0) {max = "Plong"}
  else { return max}
  return max
}

console.log(rainDrop(30))
