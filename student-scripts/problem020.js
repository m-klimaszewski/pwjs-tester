function Square(a) {
    this.a = a;
}
Square.prototype.getArea = function () {
    const bok = this.a
    return bok * bok
}
Square.prototype.getPerimeter = function () {
    const bok = this.a
    return bok * 4
}