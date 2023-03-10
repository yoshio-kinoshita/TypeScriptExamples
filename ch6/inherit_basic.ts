{
    class Person {
        protected name: string;
        protected age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        show(): string {
            return `${this.name}は${this.age}です。`;
        }
    }

    class BusinessPerson extends Person {
        work(): string {
            return `${this.name}はテキパキ。`;
        }
    }

    let p = new BusinessPerson("アンジェラ", 28);

    console.log(p.show());
    console.log(p.work());
}