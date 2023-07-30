const global = "I'm At Global Scope"

function func1() {
    let s1 = 12;
    let s2 = 13;
    var s3 = 21;
    // console.log(this, "Finish 1")
}

const func2 = function () {
    let s1 = 15;
    let s2 = 16;
    var s3 = 20;
    // console.log(this, "Finish 2")
}

func1()
func2()