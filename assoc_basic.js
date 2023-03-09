{
    var obj = {
        'hoge': "ほげ",
        'foo': "ふぅ",
        'bar': "ばぁ"
    };
    console.log(obj.hoge);
    var e = {
        'hoge': "ほげ",
        'foo': "ふぅ",
        'bar': "ばぁ",
        1: 1
    };
    console.log(e.hoge);
    console.log(e[1]);
}
