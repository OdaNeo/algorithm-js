// const F = (A, B) => {
//     let p = A;
//     while (p) {
//         if (p === B.prototype) {
//             return true
//         }
//         p = p.__proto__
//     }
//     return false
// }

// const a = { val: 'a' }
// const b = { val: 'b' }
// const c = { val: 'c' }

// a.next = b
// b.next = c

// var a = 10
// var obj = {
//     a: 20,
//     say: () => {
//         console.log(this.a)
//     }
// }
// obj.say() // 10

// for (var i = 0; i < 3; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i)
//         }, 100)
//     })(i)
// }

// const target = [1, 2, 3, 4, [5, 6, [7, 8]]]
// const res = []

// function flat(arr) {
//     if (!Array.isArray(arr)) {
//         return
//     }
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             flat(item)
//         } else {
//             res.push(item)
//         }
//     })
// }
// flat(target)
// console.log(res)

// let target = 'hello world'
// console.log(target.split('').filter(i => !!i.trim()).join(' '))

// function Parent(a, b) {
//     this.a = a
//     this.b = b
// }

// Parent.prototype.get = function () {
//     console.log(this.b)
// }

// function Child(a, b, c) {
//     Parent.call(this, a, b)
//     this.c = c
// }

// // var F = function () { }
// // F.prototype = Parent.prototype
// // Child.prototype = new F()
// Child.prototype = new Parent()
// Child.prototype.constructor = Child

// var t = new Child(1, 2, 3)
// console.log(Child.prototype.__proto__ === Parent.prototype)
// console.log(Child.__proto__ === Parent)

// function factory(constructor, ...args) {
//     const obj = new Object()
//     obj.__proto__ = constructor.prototype
//     constructor.call(obj, ...args)
//     return obj
// }

// function deepCopy(obj) {
//     if (typeof obj !== 'object') {
//         return
//     }
//     const newObj = Array.isArray(obj) ? [] : {}
//     for (let p in obj) {
//         if (obj.hasOwnProperty(p)) {
//             newObj[p] = typeof obj[p] === 'object' ? deepCopy(obj[p]) : obj[p]
//         }
//     }
//     return newObj
// }

// Function.prototype.call2 = function (ctx, ...args) {
//     const ctx = ctx || window
//     ctx.fn = this
//     const res = ctx.fn(args)
//     delete ctx.fn
//     return res
// }

// Function.prototype.bind2 = function (ctx, ...arg1) {
//     const self = this
//     return function (arg2) {
//         return self.call(ctx, ...arg1, ...arg2)
//     }
// }

// const foo = {
//     value: 1
// }
// function bar() {
//     console.log(this.value)
// }

// const PENDING = 'pending'
// const RESOLVED = 'resolved'
// const REJECTED = 'rejected'

// function MyPromise(fn) {
//     const that = this
//     that.status = PENDING
//     that.success = null
//     that.fail = null
//     that.resCbs = []
//     that.rejCbs = []

//     function resolve(success) {
//         if (that.status === PENDING) {
//             that.status = RESOLVED
//             that.success = success
//             that.resCbs.map(cb => cb(success))
//         }
//     }
//     function reject(fail) {
//         if (that.status === PENDING) {
//             that.status = REJECTED
//             that.fail = fail
//             that.rejCbs.map(cb => cb(fail))
//         }
//     }
//     try {
//         fn(resolve, reject)
//     } catch (e) {
//         reject(e)
//     }
// }

// MyPromise.prototype.then = function (onRes, onRej) {
//     const that = this
//     if (that.status === PENDING) {
//         that.resCbs.push(onRes)
//         that.rejCbs.push(onRej)
//     }
//     if (that.status === RESOLVED) {
//         onRes(that.success)
//     }
//     if (that.status === REJECTED) {
//         onRej(that.fail)
//     }
//     return that
// }

// const p = new MyPromise((resolved, reject) => {
//     // setTimeout(() => {
//     resolved(1000)
//     // }, 1000)
// })

// p.then((res) => {
//     console.log(res)
// })


// Promise.myAll = function (arr) {
//     return new Promise((resolve, rej) => {
//         const result = []
//         const total = arr.length
//         let cur = 0
//         for (let i = 0; i < total; i++) {
//             arr[i].then(res => {
//                 result[i] = res
//                 cur++
//                 if (cur === total) {
//                     resolve(result)
//                 }
//             })
//         }
//     })
// }

// const a = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(500)
//     }, 500)
// })
// const b = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(1000)
//     }, 1000)
// })

// Promise.myAll([a, b]).then((res) => {
//     console.log(res)
// })

// const seller = {}
// seller.buyerList = []
// seller.listen = (user, fn) => {
//     seller.buyerList.push(fn)
//     console.log(user)
// }

// seller.trigger = () => {
//     const List = seller.buyerList
//     for (let i in List) {
//         if (List.hasOwnProperty(i)) {
//             List[i].call(this)
//         }
//     }
// }

function updateView() {
    console.log(`updateView`)
}

const arrProto = Object.create(Array.prototype)
['push', 'pop'].forEach(item => {
    arrProto[item] = function (args) {
        updateView()
        Array.prototype[item].call(this, ...args)
    }
})

function defineReactive(target, key, value) {
    observer(value)
    Object.defineProperties(target, key, {
        get() {
            return value
        },
        set(newValue) {
            observer(newValue)
            value = newValue
            updateView()
        }
    })
}

function observer(date) {
    if (typeof data !== 'object') {
        return
    }
    for (let i in date) {
        defineReactive(data, i, data[i])
    }
}

const data = {
    key: 'value'
}

observer(data)