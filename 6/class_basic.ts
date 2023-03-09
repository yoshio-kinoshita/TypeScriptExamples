
{
    class Person {

        private name: string;
        private age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        show(): string {
            return `${this.name}は${this.age}です。`;
        }

    }

    let p = new Person("喜雄", 41);
    console.log(p.show());
}