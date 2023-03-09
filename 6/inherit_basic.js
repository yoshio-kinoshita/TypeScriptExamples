var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var BusinessPerson = /** @class */ (function (_super) {
        __extends(BusinessPerson, _super);
        function BusinessPerson() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BusinessPerson.prototype.work = function () {
            return "".concat(this.name, "\u306F\u30C6\u30AD\u30D1\u30AD\u3002");
        };
        return BusinessPerson;
    }(Person));
    var p = new BusinessPerson("アンジェラ", 28);
    console.log(p.show());
    console.log(p.work());
}
