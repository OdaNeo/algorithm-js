function unique(arr){
    var res = arr.filter((item, index, array)=>{
        return array.indexOf(item)===index
    })
    return res
}