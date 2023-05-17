{
    let counter = function () {

        this.count = 0;

        setInterval(function () {
            this.count++;
            console.log(this.count);
        }, 1000);

    }
    counter();
}