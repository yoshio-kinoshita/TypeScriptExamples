{
    function square(value: number): number| boolean {
        if(value < 0) {
            return false;
        } else {
            return Math.sqrt(value);
        }
    }

    console.log(square(3));
    console.log(square(-9));
}