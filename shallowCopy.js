function shallowCopy(obj) {
    if (typeof obj !== "object") {
        return
    }
    let newObj = obj instanceof Array ? [] : {}
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}