{
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["MALE"] = 0] = "MALE";
        Gender[Gender["FEMALE"] = 1] = "FEMALE";
        Gender[Gender["UNKNOWN"] = 2] = "UNKNOWN";
    })(Gender || (Gender = {}));
    var m = Gender.MALE;
    console.log(m);
    console.log(Gender[m]);
}
