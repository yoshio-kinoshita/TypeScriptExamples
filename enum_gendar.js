{
    var Gendar = void 0;
    (function (Gendar) {
        Gendar[Gendar["MALE"] = 0] = "MALE";
        Gendar[Gendar["FEMALE"] = 1] = "FEMALE";
        Gendar[Gendar["UNKNOWN"] = 2] = "UNKNOWN";
    })(Gendar || (Gendar = {}));
    console.log(Gendar.FEMALE);
    console.log(Gendar[0]);
    var s = "string test";
    console.log(s);
    var data = ['hoge', 10.355, false];
    console.log(data[0]);
}
