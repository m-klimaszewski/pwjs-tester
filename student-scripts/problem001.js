function triangleArea(a, b, c) {
    const p = (a+b+c)/2;
    let triangle_result = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    if (a+b>c && b+c>a && a+c>b){
        return Math.round((triangle_result + Number.EPSILON) * 100) / 100
    } else{
        return -1;
    }


}