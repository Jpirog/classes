let size=12
let totSolutions=0
  
const isSolution = (perm) =>{ // columns the queens are in
  // step 1 - put a 1 in those columns
  for (let row=0; row < size; row++){  
    let col=perm[row]    // i is the row; nbr is the col
    // check remaining entries
    for (let nextRow=row+1; nextRow < size; nextRow++){ 
      let nextCol = perm[nextRow]
      if (Math.abs(row-nextRow) === Math.abs(col-nextCol)) {
        return false;
      }
    }
  }
  return true
}  

const gen_perms = (perm, n) => {
  if (perm.length === n){
    if (isSolution(perm)){
        totSolutions += 1;
        console.log(perm, "works")}
    return
  }
  
  for (let i=0; i < n; i++){
    if (!perm.includes(i)){
      perm.push(i)
      gen_perms(perm,n)
      perm.pop()
    }
  }
}

gen_perms([],size)
console.log("For size ",size,"there are",totSolutions,"solutions")


