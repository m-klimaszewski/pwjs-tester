function deepFindAndCount(a, b) {
    function flattenDeep(a) {
        return a.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), [])
    }
    let counter=0;
    let flatArray = flattenDeep(a)
    for (let  item of flatArray){
        if (item === b){
            counter++
        }
    }
    return counter
}
