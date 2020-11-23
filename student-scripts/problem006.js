function divisible(a) {
    for (arg of arguments) {
        if (a % arg !== 0) {
            return false;
        }
    }
    return true;
}