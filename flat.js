function flat(arr) {
  if (!Array.isArray(arr)) return [arr]

  return arr.reduce((acc, item) => acc.concat(flat(item)), [])
}

const result = []

function flat(arr){
    if(!Array.isArray(arr)){
        result.push(arr)
        return
    }
    arr.forEach(item=>flat(item))
}