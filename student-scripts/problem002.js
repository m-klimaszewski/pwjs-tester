function stringRotate(a, b) {
    let text = a;

    if (b>=0 && Number.isInteger(b) ) {
        let cut = text.slice(0, b)
        let cut_out = text.slice(b, text.length)
        return cut_out + cut;
    } else {
        return ''
    }
}