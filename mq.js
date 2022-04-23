// var foo = {
//   value: 1,
// };
// function bar() {
//   console.log(this.value);
// }
// bar();
// bar.call(foo);
// var foo = {
//   value: 1,
//   bar: () => {
//     console.log(this);
//   },
// };
// foo.bar();
// var foo = {
//   value: 1,
//   bar: function () {
//     console.log(this.value);
//   },
// };
// Function.prototype.call2 = function (ctx) {
//   ctx.fn = this;
//   ctx.fn();
//   delete ctx.fn;
// };
// var foo = {
//   value: 1,
// };
// function bar() {
//   console.log(this.value);
// }
// bar.call(foo);
// Function.prototype.call2 = function (ctx) {
//   ctx.fn = this;
//   const [, ...args] = arguments;
//   const result = ctx.fn(...args);
//   delete ctx.fn;
//   return result;
// };
// var foo = {
//   value: 1,
// };

// function bar(name, age) {
//   console.log(this.value);
//   console.log(name);
//   console.log(age);
// }

// // bar.call2(foo, "kevin", 18);
// Function.prototype.bind2 = function (ctx) {
//   var self = this;
//   const [, ...args] = arguments;
//   return function (...args2) {
//     return self.apply(ctx, [...args, ...args2]);
//   };
// };

// var bindFoo = bar.bind2(foo, "daisy");
// bindFoo("18");
function Otaku(name, age) {
  this.name = name;
  this.age = age;
}
Otaku.prototype.stes = "60";
Otaku.prototype.getName = function () {
  console.log(this.name);
};

// var person = new Otaku("1312", "2");
// person.getName();
function objectFac() {
  var obj = new Object();
  const [cons, ...res] = arguments;
  obj.__proto__ = cons.prototype;
  cons.apply(obj, res);

  return obj;
}

const person = objectFac(Otaku, "123", "123");
person.getName();
