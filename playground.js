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

var a = 10
var obj = {
    a: 20,
    say: function () {
        console.log(this.a)
    }
}
obj.say() // 10