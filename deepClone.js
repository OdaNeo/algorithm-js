function deepClone(obj) {
    if (typeof obj !== "object") {
        return
    }
    let newObj = obj instanceof Array ? [] : {}
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObj
}