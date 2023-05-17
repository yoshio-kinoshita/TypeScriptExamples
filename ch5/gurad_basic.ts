{
    function process(value: string | number): string | number {

        if (typeof value === 'string') {
            return value.toUpperCase();
        } else {
            return value.toFixed(1);
        }
    }

    console.log(process(555));
    console.log(process('555'));
}

