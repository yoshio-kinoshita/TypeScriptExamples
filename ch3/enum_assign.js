{
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["MALE"] = 1] = "MALE";
        Gender[Gender["FEMALE"] = 2] = "FEMALE";
        Gender[Gender["UNKNOWN"] = 3] = "UNKNOWN";
    })(Gender || (Gender = {}));
    var m = Gender.MALE;
    console.log(m);
    console.log(Gender[m]);
    console.log(Gender[m]);
}
