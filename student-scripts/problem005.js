function strangeSum(a, b) {
    if ( Number.isInteger(b) && Number.isInteger(a) ){
        if (a == b){
            return (a+b)*3
        } else {
            return a+b
        }
    } else {
        return null;
    }
}