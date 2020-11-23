function deepCopy(a) {
    const copied = JSON.parse(JSON.stringify(a))
    return copied
}