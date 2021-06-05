let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some')
mySet.add({ a: 1, b: 2 })

for (let item of mySet.keys()) {
    console.log(item)
}