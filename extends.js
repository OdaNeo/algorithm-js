function Animal(name) {
    this.name = name
}

Animal.prototype.getName = function () {
    return this.name
}

function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}

// Dog.prototype.__proto__ = Animal.prototype
// Dog.prototype = new Animal()
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog