function objectsDiff(a, b) {
    let tab_keys1 = Object.getOwnPropertyNames(a)
    let tab_keys2 = Object.getOwnPropertyNames(b)
    let result = []
    let indicator=0;
    for (let  item of tab_keys1){

        for(let item2 of tab_keys2){
            if(item===item2){
                indicator++
            }
        }
        if (indicator===0){
            result.push(item)
        }
        indicator = 0;
    }

    for (let  item of tab_keys2){

        for(let item2 of tab_keys1){
            if(item===item2){
                indicator++
            }
        }
        if (indicator===0){
            result.push(item)
        }
        indicator = 0;
    }
    return result;

}