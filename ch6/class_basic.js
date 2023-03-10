{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.show = function () {
            return "".concat(this.name, "\u306F").concat(this.age, "\u3067\u3059\u3002");
        };
        return Person;
    }());
    var p = new Person("喜雄", 41);
    console.log(p.show());
}
