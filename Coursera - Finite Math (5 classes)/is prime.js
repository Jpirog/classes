// @ts-check

const isPrime = (nbr) =>{
  if (nbr %2 === 0) return false;
  let x=Math.floor(Math.sqrt(nbr));
  for (let i=2; i <= x; i++) {
    if (nbr % i === 0)
      return false
  }
  return true
}

for (let i=2; i < 1000; i++){
    if (!isPrime(i**2 + i + 41)){
        console.log (i,'is not prime')
    }
}
let x="aaa"
x=x+9

let hello="xx"


