{

    let obj: {[index: string]: string;} = {
        'hoge': "ほげ",
        'foo': "ふぅ",
        'bar': "ばぁ"
    };

    console.log(obj.hoge);

    let e = {
        'hoge': "ほげ",
        'foo': "ふぅ",
        'bar': "ばぁ",
        1: 1
    }

    console.log(e.hoge);
    console.log(e[1]);
        

}