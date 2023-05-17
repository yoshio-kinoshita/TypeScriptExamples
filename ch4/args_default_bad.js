{
    function showTime(time) {
        if (time == undefined) {
            return (new Date()).toLocaleString();
        }
        else {
            return time.toLocaleString();
        }
    }
    console.log(showTime());
}
