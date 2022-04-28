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

// // var person = new Otaku("1312", "2");
// // person.getName();
// function objectFac() {
//   var obj = new Object();
//   const [cons, ...res] = arguments;
//   obj.__proto__ = cons.prototype;
//   cons.apply(obj, res);

//   return obj;
// }

// const person = objectFac(Otaku, "123", "123");
// person.getName();

// function Person(name) {
//   this.name = name;
//   // this.getName = function () {
//   //   console.log(this.nam);
//   // };
// }
// Person.test='13213'
// Person.prototype.getName=function(){
//   console.log(this.name)
// }

// const person =new Person('123')
// const person2=new Person('34534')
// console.log(person.__proto__.constructor)
// // Person.prototype.constructor=Person
// person.getName()
// person2.getName()
// console.log(person.test)

// function Parent () {
//   this.names = ['kevin', 'daisy'];
// }
// Parent.prototype.getName=function(){
//   console.log(this.names)
// }
// function Child () {
//   Parent.call(this);
// }
// // const F=function(){}
// // F.prototype=Parent.prototype
// // Child.prototype=new F()
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// var child1 = new Child();
// var child2 = new Child();
// // console.log(child1.names===child2.names);
// // console.log(child2.names);
// child1.getName()
// console.log(Child.prototype.constructor)

// function Parent() {
//   this.name = [123, "231"];
// }
// function Child() {
//   Parent.call(this);
// }
// const Fn = function () {};
// Fn.prototype = new Parent();
// Child.prototype = new Fn();
// Child.prototype.constructor=Child
// function createFunc() {
//   const obj = new Object();
//   const [constructor, ...rest] = arguments;
//   obj.__proto__ = constructor.prototype;
//   constructor.apply(obj, rest);
//   return obj;
// }
// const person = createFunc(Otaku, "123", "13523");
// person.getName();

class Promise2 {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.resolveCb = [];
    this.rejectCb = [];
    let resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.resolveCb.forEach(
          setTimeout((fn) => {
            fn();
          }, 0)
        );
      }
    };
    let reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.rejectCb.forEach(
          setTimeout((fn) => {
            fn();
          }, 0)
        );
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onReject) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    }
    if (this.status === "rejected") {
      onReject(this.reason);
    }
    if (this.status === "pending") {
      this.resolveCb.push(() => {
        onFulfilled(this.value);
      });
      this.rejectCb.push(() => {
        onReject(this.reason);
      });
    }
  }
}

function createFunc(constructor, ...args) {
  const obj = new Object();
  obj.__proto__ = constructor.prototype;
  constructor.apply(obj, args);
  return obj;
}

function Person() {
  this.name = [12, 12321, "123"];
}
function Child() {
  Person.call(this);
}
const Fn = () => {};
Fn.prototype = new Person();
Child.prototype = new Fn();
Child.prototype.constructor = Child;