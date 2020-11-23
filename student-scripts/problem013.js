function parametricSort(a, b) {
    if(b==='asc'|| b==='desc'){
        if (b ==='asc'){
            a.sort(function (a, b){return a-b})
            return a
        } else {
            a.sort(function (a, b){return b-a})
            return a
        }
    } else {
        return false
    }
}
