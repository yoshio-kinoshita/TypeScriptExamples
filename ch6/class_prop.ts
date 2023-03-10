{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    let p = new Person("鈴木", 41);
    p.age = 50;

}
