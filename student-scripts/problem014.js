let Vectors = {
    sum: (a,b) =>{
        if (a.length !== b.length){
        return  false
        }else {
            return  a.map((v, key) => v + b[key])
        }
    },
    mulByScalar: (a, b) => {
        if (Array.isArray(b) || isNaN(b) || b === ""){
            return false
        }
        else{
            return a.map(value => value * b)
        }
    }
};


