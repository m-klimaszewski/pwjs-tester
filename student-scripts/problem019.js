function carry(a) {
    return function carried(...b) {
        if (b.length >= a.length) {
            return a(...b)
        } else {
            return function pass(...c) {
                return carried(...b.concat(c))
            }
        }
    }
}