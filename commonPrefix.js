function commonPrefix(stringArray) {
    if (stringArray.length == 0) {
        return ""
    }
    let res = ""
    for (let i = 0; i < stringArray[0].length; i++) {
        for (let s of stringArray) {
            if (s.length == i || stringArray[0][i] != s[i]) {
                return res
            }
        }
        res += stringArray[0][i]
    }
    return res
}

console.log(commonPrefix(["flower", "flow"]))