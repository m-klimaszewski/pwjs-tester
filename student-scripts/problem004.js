function getTotalNumberOfNewYaersEveSundays(a, b) {
    let Sundays = 0;
    for ( a; a <=b; a++){
        let  age = a % 100 === 0 ? a/100 -1 : Math.floor(a/100)
        Sundays  += (1+ 1+  a + age) % 7 === 1 ? 1 :0
    }
    return Sundays;
}