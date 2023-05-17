{

    class Person {
        age: number;
        name: string;

    }

    function process(value: Person| string): Person {

        if(value instanceof Person) {
                return new Person();
        } else {
            let p = new Person();
            p.name = 'test';

            return p;
        }


    }
}