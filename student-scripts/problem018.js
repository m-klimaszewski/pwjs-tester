function reverse(a){
    return function (){
      return a(...Array.from(arguments).reverse())
    }
}