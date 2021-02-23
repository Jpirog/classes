const validSoFar = (perm, n) => {
    for (let i=0; i < n; i++){
        
    }
    return true;
}



const extend = (perm, n) => {
    if (perm.length === n){
        console.log (`Solution found: ${perm}`)
        return true
    }

    for (let i=0; i < n; i++){
        perm.push (1)
        if (validSoFar(perm,perm.length)){
            extend (perm, perm.length)
        } else{
            perm.pop();
            perm.push (2);
            if (validSoFar(perm, perm.length)){
                extend (perm, perm.length);
            } else {
                perm.pop();
                perm.push(0);
                if (validSoFar(perm, perm.length)){
                    extend (permm,perm.length);
                } else{
                    perm.pop()
                }
            }
        }
    }


}

console.log(extend([],5))

