export const quizData = [
  {
    id: 1,
    question: "নিচের কোডের আউটপুট কি হবে?",
    description:
      "নিচে একটি for loop এর ভিতর 0 ms ধরে পর console এ ভ্যালু লগ করা হয়েছে। আপনাকে বলতে হবে কোডের ফাইনাল আউটপুট কি হবে?",
    code: `for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}`,
    options: [
      { id: "a", text: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9" },
      { id: "b", text: "10, 10, 10, 10, 10, 10, 10, 10, 10, 10" },
      { id: "c", text: "9, 9, 9, 9, 9, 9, 9, 9, 9, 9" },
      { id: "d", text: "undefined, undefined, undefined, ..." },
    ],
    correctAnswer: "b",
    explanation:
      "var এর স্কোপ ফাংশন স্কোপ হওয়ায় এবং setTimeout এর কল-ব্যাক ফাংশন লুপ শেষ হওয়ার পর এক্সিকিউট হওয়ায় তখন i এর মান 10 হয়ে যায়।",
  },
  {
    id: 2,
    question: "JavaScript এ hoisting কি?",
    description: "নিচের কোড এক্সিকিউট করলে কি আউটপুট আসবে?",
    code: `console.log(x);
var x = 5;`,
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "undefined" },
      { id: "c", text: "ReferenceError" },
      { id: "d", text: "null" },
    ],
    correctAnswer: "b",
    explanation:
      "JavaScript এ ভ্যারিয়েবল ডিক্লারেশন উপরে উঠে যায় কিন্তু ইনিশিয়ালাইজেশন উপরে উঠে না।",
  },
  {
    id: 3,
    question: "Promise.all() এর ব্যবহার সম্পর্কে নিচের কোনটি সঠিক?",
    description: "Promise.all() মেথড কিভাবে কাজ করে?",
    code: `Promise.all([
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3)
]).then(console.log).catch(console.log);`,
    options: [
      { id: "a", text: "সব Promise resolve হলে array return করে" },
      { id: "b", text: "যেকোনো একটি Promise reject হলেই error throw করে" },
      { id: "c", text: "শুধু প্রথম Promise টি resolve করে" },
      { id: "d", text: "কোনো Promise reject হলে অন্যগুলো বাতিল করে না" },
    ],
    correctAnswer: "b",
    explanation:
      "Promise.all() যেকোনো একটি Promise reject হলেই error throw করে, সব Promise resolve না হওয়া পর্যন্ত অপেক্ষা করে না।",
  },
  {
    id: 4,
    question: "let এবং const এর মধ্যে পার্থক্য কি?",
    description: "নিচের কোডে কি এরর আসবে?",
    code: `let x = 1;
x = 2;
const y = 1;
y = 2;`,
    options: [
      { id: "a", text: "কোনো এরর আসবে না" },
      { id: "b", text: "y = 2 এ TypeError আসবে" },
      { id: "c", text: "x = 2 এ TypeError আসবে" },
      { id: "d", text: "উভয় অ্যাসাইনমেন্টে এরর আসবে" },
    ],
    correctAnswer: "b",
    explanation:
      "const দিয়ে ডিক্লেয়ার করা ভ্যারিয়েবল পরে চেঞ্জ করা যায় না, কিন্তু let দিয়ে ডিক্লেয়ার করা ভ্যারিয়েবল চেঞ্জ করা যায়।",
  },
  {
    id: 5,
    question: "Arrow ফাংশন সম্পর্কে কোনটি সঠিক?",
    description: "Arrow ফাংশনের this কীওয়ার্ড কিভাবে কাজ করে?",
    code: `const obj = {
  name: "Object",
  regularFn: function() {
    console.log(this.name);
  },
  arrowFn: () => {
    console.log(this.name);
  }
};
obj.regularFn();
obj.arrowFn();`,
    options: [
      { id: "a", text: "উভয় ফাংশনই 'Object' প্রিন্ট করবে" },
      {
        id: "b",
        text: "regularFn 'Object' এবং arrowFn undefined প্রিন্ট করবে",
      },
      { id: "c", text: "উভয় ফাংশনই undefined প্রিন্ট করবে" },
      { id: "d", text: "কোনো আউটপুট আসবে না" },
    ],
    correctAnswer: "b",
    explanation:
      "Arrow ফাংশনের নিজস্ব this নেই, এটি surrounding context থেকে this নেয়। Regular ফাংশনের নিজস্ব this থাকে।",
  },
  {
    id: 6,
    question: "async/await সম্পর্কে কোনটি সঠিক?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `async function example() {
  console.log('1');
  await Promise.resolve('2');
  console.log('3');
}
console.log('4');
example();
console.log('5');`,
    options: [
      { id: "a", text: "4, 1, 2, 3, 5" },
      { id: "b", text: "4, 1, 3, 5" },
      { id: "c", text: "4, 1, 5, 3" },
      { id: "d", text: "1, 2, 3, 4, 5" },
    ],
    correctAnswer: "c",
    explanation:
      "async ফাংশন এক্সিকিউট হওয়ার সময় await এর পরের কোড মাইক্রোটাস্ক কিউতে চলে যায়।",
  },
  {
    id: 7,
    question: "JavaScript এ closures কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());`,
    options: [
      { id: "a", text: "0, 1" },
      { id: "b", text: "1, 2" },
      { id: "c", text: "undefined, undefined" },
      { id: "d", text: "ReferenceError" },
    ],
    correctAnswer: "a",
    explanation:
      "Closures তৈরি হওয়ার ফলে makeCounter এর লেক্সিকাল স্কোপের ভ্যারিয়েবল count সংরক্ষিত থাকে।",
  },
  {
    id: 8,
    question: "Spread অপারেটর কিভাবে কাজ করে?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);`,
    options: [
      { id: "a", text: "[1, 2, 3, 4, 5]" },
      { id: "b", text: "[[1, 2, 3], 4, 5]" },
      { id: "c", text: "[4, 5, 1, 2, 3]" },
      { id: "d", text: "undefined" },
    ],
    correctAnswer: "a",
    explanation:
      "Spread অপারেটর একটি array এর ভ্যালুগুলোকে আলাদা করে অন্য array তে যোগ করে।",
  },
  {
    id: 9,
    question: "JavaScript এ destructuring assignment কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a, b);`,
    options: [
      { id: "a", text: "1 2" },
      { id: "b", text: "undefined undefined" },
      { id: "c", text: "ReferenceError" },
      { id: "d", text: "null null" },
    ],
    correctAnswer: "a",
    explanation:
      "Destructuring assignment দ্বারা একটি অবজেক্ট বা অ্যারের প্রপার্টি বা এলিমেন্ট সরাসরি ভ্যারিয়েবল এ অ্যাসাইন করা যায়।",
  },
  {
    id: 10,
    question: "JavaScript এর default parameters কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `function add(a, b = 10) {
  return a + b;
}
console.log(add(5));`,
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "NaN" },
      { id: "c", text: "undefined" },
      { id: "d", text: "5" },
    ],
    correctAnswer: "a",
    explanation:
      "Default parameters প্রদান করে, যদি ফাংশনের জন্য কোনো আর্গুমেন্ট না দেয়া হয় তখন ডিফল্ট মান ব্যবহার করা হয়।",
  },
  {
    id: 11,
    question: "Map এবং forEach এর মধ্যে পার্থক্য কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 3];
const mapResult = arr.map(x => x * 2);
const forEachResult = arr.forEach(x => x * 2);
console.log(mapResult, forEachResult);`,
    options: [
      { id: "a", text: "[2, 4, 6], [2, 4, 6]" },
      { id: "b", text: "[2, 4, 6], undefined" },
      { id: "c", text: "undefined, undefined" },
      { id: "d", text: "[1, 2, 3], [1, 2, 3]" },
    ],
    correctAnswer: "b",
    explanation:
      "map মেথড নতুন array রিটার্ন করে, কিন্তু forEach কোনো কিছু রিটার্ন করে না (undefined রিটার্ন করে)।",
  },
  {
    id: 12,
    question: "JavaScript এ event bubbling কি?",
    description: "নিচের কোডে ক্লিক করলে কি হবে?",
    code: `<div onclick="console.log('div')">
  <button onclick="console.log('button')">
    Click me
  </button>
</div>`,
    options: [
      { id: "a", text: "শুধু 'button' প্রিন্ট হবে" },
      { id: "b", text: "শুধু 'div' প্রিন্ট হবে" },
      { id: "c", text: "'button' তারপর 'div' প্রিন্ট হবে" },
      { id: "d", text: "'div' তারপর 'button' প্রিন্ট হবে" },
    ],
    correctAnswer: "c",
    explanation:
      "Event bubbling এ ইভেন্ট টার্গেট এলিমেন্ট থেকে উপরের দিকে প্রপাগেট হয়, তাই প্রথমে button এর ইভেন্ট, তারপর div এর ইভেন্ট ট্রিগার হয়।",
  },
  {
    id: 13,
    question: "JavaScript এ prototype inheritance কিভাবে কাজ করে?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
}
const cat = new Animal('Cat');
console.log(cat.speak());`,
    options: [
      { id: "a", text: "TypeError" },
      { id: "b", text: "undefined makes a sound" },
      { id: "c", text: "Cat makes a sound" },
      { id: "d", text: "[object Object]" },
    ],
    correctAnswer: "c",
    explanation:
      "Prototype inheritance এর মাধ্যমে অবজেক্টগুলো তাদের প্রোটোটাইপ চেইন থেকে মেথড এবং প্রপার্টি অ্যাক্সেস করতে পারে।",
  },
  {
    id: 14,
    question: "JavaScript এ generator ফাংশন কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);`,
    options: [
      { id: "a", text: "1, 2" },
      { id: "b", text: "undefined, undefined" },
      { id: "c", text: "1, 1" },
      { id: "d", text: "2, 3" },
    ],
    correctAnswer: "a",
    explanation:
      "Generator ফাংশন yield কীওয়ার্ড ব্যবহার করে ভ্যালু রিটার্ন করে এবং তার এক্সিকিউশন স্টেট মনে রাখে।",
  },
  {
    id: 15,
    question: "JavaScript এ Set অবজেক্ট কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = [...new Set(arr)];
console.log(uniqueNumbers);`,
    options: [
      { id: "a", text: "[1, 2, 2, 3, 3, 4]" },
      { id: "b", text: "[1, 2, 3, 4]" },
      { id: "c", text: "TypeError" },
      { id: "d", text: "undefined" },
    ],
    correctAnswer: "b",
    explanation:
      "Set অবজেক্ট শুধুমাত্র unique ভ্যালু রাখে, ডুপ্লিকেট ভ্যালু অটোমেটিক্যালি রিমুভ হয়ে যায়।",
  },
  {
    id: 16,
    question: "JavaScript এ Rest Parameter কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`,
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "24" },
      { id: "c", text: "NaN" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "Rest Parameter (...) অসীম সংখ্যক আর্গুমেন্টকে একটি array হিসেবে গ্রহণ করে, যা পরে প্রসেস করা যায়।",
  },
  {
    id: 17,
    question: "JavaScript এ null এবং undefined এর পার্থক্য কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);`,
    options: [
      { id: "a", text: "'object', 'undefined', false" },
      { id: "b", text: "'null', 'undefined', true" },
      { id: "c", text: "'object', 'undefined', true" },
      { id: "d", text: "'null', 'undefined', false" },
    ],
    correctAnswer: "a",
    explanation:
      "null একটি object টাইপ, undefined একটি primitive টাইপ। === অপারেটর টাইপ চেক করে বলে তারা সমান নয়।",
  },
  {
    id: 18,
    question: "JavaScript এ Promise.race() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `Promise.race([
  new Promise(r => setTimeout(() => r(1), 300)),
  new Promise(r => setTimeout(() => r(2), 200)),
  new Promise(r => setTimeout(() => r(3), 100))
]).then(console.log);`,
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "[1, 2, 3]" },
    ],
    correctAnswer: "c",
    explanation:
      "Promise.race() প্রথম যে Promise resolve বা reject হয় সেটার ভ্যালু রিটার্ন করে। এখানে 100ms এ 3 রিটার্ন করে।",
  },
  {
    id: 19,
    question: "JavaScript এ Symbol কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const sym1 = Symbol('desc');
const sym2 = Symbol('desc');
console.log(sym1 === sym2);
console.log(Symbol.for('desc') === Symbol.for('desc'));`,
    options: [
      { id: "a", text: "true, true" },
      { id: "b", text: "false, true" },
      { id: "c", text: "true, false" },
      { id: "d", text: "false, false" },
    ],
    correctAnswer: "b",
    explanation:
      "Symbol() প্রতিবার নতুন unique ভ্যালু তৈরি করে। Symbol.for() global registry ব্যবহার করে, তাই একই key এর জন্য একই Symbol রিটার্ন করে।",
  },
  {
    id: 20,
    question: "JavaScript এ WeakMap কি?",
    description: "WeakMap এর বৈশিষ্ট্য কি?",
    code: `let obj = { name: 'test' };
const wm = new WeakMap();
wm.set(obj, 'data');
obj = null;
// garbage collection happens`,
    options: [
      { id: "a", text: "obj এর ডাটা এখনও WeakMap এ থাকবে" },
      { id: "b", text: "obj এর ডাটা garbage collect হবে" },
      { id: "c", text: "TypeError আসবে" },
      { id: "d", text: "WeakMap খালি হয়ে যাবে" },
    ],
    correctAnswer: "b",
    explanation:
      "WeakMap শুধু object কে key হিসেবে রাখে এবং যখন object টি garbage collect হয়, WeakMap থেকেও ডাটা মুছে যায়।",
  },
  {
    id: 21,
    question: "JavaScript এ Proxy কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const handler = {
  get: (obj, prop) => prop in obj ? obj[prop] : 'not found'
};
const obj = new Proxy({x: 1}, handler);
console.log(obj.x, obj.y);`,
    options: [
      { id: "a", text: "1, undefined" },
      { id: "b", text: "1, 'not found'" },
      { id: "c", text: "undefined, undefined" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "b",
    explanation:
      "Proxy অবজেক্টের অ্যাক্সেস কন্ট্রোল করে। handler.get মেথড প্রপার্টি না পেলে custom ভ্যালু রিটার্ন করে।",
  },
  {
    id: 22,
    question: "JavaScript এ Array.prototype.reduce() কিভাবে কাজ করে?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 3, 4];
const result = arr.reduce((acc, curr) => {
  return acc * curr;
}, 1);
console.log(result);`,
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "24" },
      { id: "c", text: "9" },
      { id: "d", text: "undefined" },
    ],
    correctAnswer: "b",
    explanation:
      "reduce() মেথড array এর প্রতিটি এলিমেন্টের জন্য callback ফাংশন রান করে এবং একটি single ভ্যালুতে reduce করে। এখানে 1*1*2*3*4 = 24",
  },
  {
    id: 23,
    question: "JavaScript এ Object.freeze() এর ব্যবহার কি?",
    description: "নিচের কোডে কি হবে?",
    code: `const obj = Object.freeze({
  prop: 42
});
obj.prop = 33;
console.log(obj.prop);`,
    options: [
      { id: "a", text: "33" },
      { id: "b", text: "42" },
      { id: "c", text: "undefined" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "b",
    explanation:
      "Object.freeze() একটি অবজেক্টকে immutable করে তোলে। এর পর অবজেক্টের প্রপার্টি মডিফাই করা যায় না।",
  },
  {
    id: 24,
    question: "JavaScript এ try-catch-finally কিভাবে কাজ করে?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `try {
  throw new Error('error');
} catch (e) {
  console.log('caught');
} finally {
  console.log('finally');
}`,
    options: [
      { id: "a", text: "caught" },
      { id: "b", text: "finally" },
      { id: "c", text: "caught, finally" },
      { id: "d", text: "Error" },
    ],
    correctAnswer: "c",
    explanation:
      "try ব্লকে এরর থ্রো করলে catch ব্লক এটা হ্যান্ডেল করে। finally ব্লক সবসময় এক্সিকিউট হয়, এরর হোক বা না হোক।",
  },
  {
    id: 25,
    question: "JavaScript এ Temporal Dead Zone (TDZ) কি?",
    description: "নিচের কোডে কি হবে?",
    code: `console.log(x);
let x = 1;`,
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "undefined" },
      { id: "c", text: "ReferenceError" },
      { id: "d", text: "null" },
    ],
    correctAnswer: "c",
    explanation:
      "let দ্বারা ডিক্লেয়ার করা ভ্যারিয়েবল hoisting হলেও TDZ এ থাকে। ইনিশিয়ালাইজেশনের আগে অ্যাক্সেস করলে ReferenceError আসে।",
  },
  {
    id: 26,
    question: "JavaScript এ Event Loop এর কাজ কি?",
    description: "নিচের কোডের আউটপুট সিকুয়েন্স কি হবে?",
    code: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');`,
    options: [
      { id: "a", text: "1, 2, 3, 4" },
      { id: "b", text: "1, 4, 2, 3" },
      { id: "c", text: "1, 4, 3, 5" },
      { id: "d", text: "4, 3, 2, 1" },
    ],
    correctAnswer: "c",
    explanation:
      "Event Loop এ সিনক্রোনাস কোড (1, 4) আগে, তারপর microtasks (Promise - 3), সবশেষে macrotasks (setTimeout - 2) এক্সিকিউট হয়।",
  },
  {
    id: 27,
    question: "JavaScript এ Memoization কি?",
    description: "নিচের কোডে কি হবে?",
    code: `function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log('From cache');
      return cache[key];
    }
    console.log('Calculating');
    return (cache[key] = fn(...args));
  };
}
const add = memoize((a, b) => a + b);
console.log(add(1, 2));
console.log(add(1, 2));`,
    options: [
      { id: "a", text: "Calculating, 3, From cache, 3" },
      { id: "b", text: "Calculating, 3, Calculating, 3" },
      { id: "c", text: "3, 3" },
      { id: "d", text: "From cache, 3, From cache, 3" },
    ],
    correctAnswer: "a",
    explanation:
      "Memoization পূর্ববর্তী ক্যালকুলেশনের রেজাল্ট ক্যাশে রাখে। একই ইনপুটের জন্য পরবর্তীতে ক্যাশ থেকে রেজাল্ট রিটার্ন করে।",
  },
  {
    id: 28,
    question: "JavaScript এ Currying কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4));`,
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "24" },
      { id: "c", text: "14" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "b",
    explanation:
      "Currying একটি ফাংশনকে multiple nested ফাংশনে রূপান্তর করে, যেখানে প্রতিটি ফাংশন একটি করে প্যারামিটার নেয়।",
  },
  {
    id: 29,
    question: "JavaScript এ Web Workers কি?",
    description: "Web Worker সম্পর্কে কোনটি সঠিক নয়?",
    code: `const worker = new Worker('worker.js');
worker.postMessage('start');
worker.onmessage = e => console.log(e.data);`,
    options: [
      { id: "a", text: "DOM ম্যানিপুলেশন করতে পারে" },
      { id: "b", text: "Heavy computation করতে পারে" },
      { id: "c", text: "Parallel execution সম্ভব" },
      { id: "d", text: "Background এ রান করে" },
    ],
    correctAnswer: "a",
    explanation:
      "Web Workers DOM অ্যাক্সেস করতে পারে না। এটি শুধুমাত্র heavy computation এবং background tasks হ্যান্ডেল করতে ব্যবহৃত হয়।",
  },
  {
    id: 30,
    question: "JavaScript এ Object.seal() কি?",
    description: "নিচের কোডে কি হবে?",
    code: `const obj = Object.seal({
  prop: 42
});
obj.prop = 33;
obj.newProp = 123;
console.log(obj.prop, obj.newProp);`,
    options: [
      { id: "a", text: "42, 123" },
      { id: "b", text: "33, undefined" },
      { id: "c", text: "42, undefined" },
      { id: "d", text: "33, 123" },
    ],
    correctAnswer: "b",
    explanation:
      "Object.seal() নতুন প্রপার্টি যোগ করতে দেয় না, কিন্তু existing প্রপার্টি মডিফাই করা যায়।",
  },
  {
    id: 31,
    question: "JavaScript এ Tagged Template Literals কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `function tag(strings, ...values) {
  return strings[0] + values[0] + strings[1];
}
const value = 123;
console.log(tag\`Hello \${value} World\`);`,
    options: [
      { id: "a", text: "Hello 123 World" },
      { id: "b", text: "Hello World" },
      { id: "c", text: "TypeError" },
      { id: "d", text: "undefined" },
    ],
    correctAnswer: "a",
    explanation:
      "Tagged Template Literals টেমপ্লেট লিটারালকে প্রসেস করার জন্য ফাংশন ব্যবহার করে। strings এবং values আলাদা করে প্রসেস করা যায়।",
  },
  {
    id: 32,
    question: "JavaScript এ requestAnimationFrame কি?",
    description: "এটি কখন ব্যবহার করা উচিত?",
    code: `function animate() {
  // update animation
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`,
    options: [
      { id: "a", text: "সার্ভার রিকুয়েস্ট পাঠানোর জন্য" },
      { id: "b", text: "DOM ম্যানিপুলেশনের জন্য" },
      { id: "c", text: "স্মুথ অ্যানিমেশনের জন্য" },
      { id: "d", text: "ইভেন্ট হ্যান্ডলিং এর জন্য" },
    ],
    correctAnswer: "c",
    explanation:
      "requestAnimationFrame ব্রাউজারের রিফ্রেশ রেটের সাথে সিঙ্ক করে স্মুথ অ্যানিমেশন তৈরি করে।",
  },
  {
    id: 33,
    question: "JavaScript এ WeakRef কি?",
    description: "WeakRef এর ব্যবহার কি?",
    code: `let obj = { data: 'value' };
const weakRef = new WeakRef(obj);
obj = null;
console.log(weakRef.deref()?.data);`,
    options: [
      { id: "a", text: "'value'" },
      { id: "b", text: "undefined" },
      { id: "c", text: "null" },
      { id: "d", text: "ReferenceError" },
    ],
    correctAnswer: "b",
    explanation:
      "WeakRef একটি অবজেক্টের weak reference রাখে। যখন অবজেক্টটি garbage collect হয়, WeakRef.deref() undefined রিটার্ন করে।",
  },
  {
    id: 34,
    question: "JavaScript এ Generator Function* এর yield* কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `function* gen1() {
  yield 1;
  yield 2;
}
function* gen2() {
  yield* gen1();
  yield 3;
}
const g = gen2();
console.log([...g]);`,
    options: [
      { id: "a", text: "[1, 2, 3]" },
      { id: "b", text: "[3]" },
      { id: "c", text: "[1, 2]" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "yield* একটি generator ফাংশনের ভিতর থেকে অন্য generator ফাংশনের সব values yield করে।",
  },
  {
    id: 35,
    question: "JavaScript এ Array.prototype.flat() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 3, 4, 5];
console.log(arr.flat());
console.log(arr.flat(2));`,
    options: [
      { id: "a", text: "[1, 2, 3, 4, 5]" },
      { id: "b", text: "[[1, 2, 3], 4, 5]" },
      { id: "c", text: "[4, 5, 1, 2, 3]" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "flat() মেথড nested array কে flatten করে। প্যারামিটার হিসেবে depth দেওয়া যায়, ডিফল্ট depth 1।",
  },
  {
    id: 36,
    question: "JavaScript এ Optional Chaining (?.) কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const user = {
  name: 'John',
  address: null
};
console.log(user.address?.street);
console.log(user.name?.length);`,
    options: [
      { id: "a", text: "undefined, 4" },
      { id: "b", text: "null, 4" },
      { id: "c", text: "TypeError, 4" },
      { id: "d", text: "undefined, undefined" },
    ],
    correctAnswer: "a",
    explanation:
      "Optional Chaining (?.) অপারেটর null বা undefined প্রপার্টি অ্যাক্সেস করার সময় TypeError এড়াতে সাহায্য করে।",
  },
  {
    id: 37,
    question: "JavaScript এ Nullish Coalescing (??) কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `console.log(0 ?? 'default');
console.log('' ?? 'default');
console.log(null ?? 'default');
console.log(undefined ?? 'default');`,
    options: [
      { id: "a", text: "default, default, default, default" },
      { id: "b", text: "0, '', default, default" },
      { id: "c", text: "0, default, default, default" },
      { id: "d", text: "default, '', default, default" },
    ],
    correctAnswer: "b",
    explanation:
      "Nullish Coalescing (??) অপারেটর শুধুমাত্র null বা undefined হলে ডিফল্ট ভ্যালু রিটার্ন করে, falsy ভ্যালুর জন্য না।",
  },
  {
    id: 38,
    question:
      "JavaScript এ Array.prototype.reduce() এর initial value এর গুরুত্ব কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const numbers = [1, 2, 3];
console.log(numbers.reduce((acc, curr) => acc + curr));
console.log(numbers.reduce((acc, curr) => acc + curr, 0));`,
    options: [
      { id: "a", text: "6, 6" },
      { id: "b", text: "TypeError, 6" },
      { id: "c", text: "6, 0" },
      { id: "d", text: "0, 6" },
    ],
    correctAnswer: "a",
    explanation:
      "reduce() মেথডে initial value না দিলে প্রথম এলিমেন্ট accumulator হিসেবে নেয়। উভয় ক্ষেত্রেই যোগফল 6 হবে।",
  },
  {
    id: 39,
    question: "JavaScript এ Array.prototype.some() vs every() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const numbers = [1, 2, 3, 4, 5];
console.log(numbers.some(x => x > 4));
console.log(numbers.every(x => x > 4));`,
    options: [
      { id: "a", text: "true, true" },
      { id: "b", text: "true, false" },
      { id: "c", text: "false, false" },
      { id: "d", text: "false, true" },
    ],
    correctAnswer: "b",
    explanation:
      "some() যেকোনো একটি এলিমেন্ট কন্ডিশন মিটালেই true রিটার্ন করে, every() সব এলিমেন্ট কন্ডিশন মিটাতে হবে।",
  },
  {
    id: 40,
    question: "JavaScript এ Object.entries() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const obj = { a: 1, b: 2 };
for (const [key, value] of Object.entries(obj)) {
  console.log(\`\${key}: \${value}\`);
}`,
    options: [
      { id: "a", text: "a: 1 b: 2" },
      { id: "b", text: "[a, 1] [b, 2]" },
      { id: "c", text: "TypeError" },
      { id: "d", text: "undefined" },
    ],
    correctAnswer: "a",
    explanation:
      "Object.entries() অবজেক্টের key-value পেয়ার নিয়ে array তৈরি করে, যা destructuring এর মাধ্যমে সহজে অ্যাক্সেস করা যায়।",
  },
  {
    id: 41,
    question: "JavaScript এ Array.prototype.at() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 3, 4, 5];
console.log(arr.at(-1));
console.log(arr.at(-2));`,
    options: [
      { id: "a", text: "5, 4" },
      { id: "b", text: "1, 2" },
      { id: "c", text: "undefined, undefined" },
      { id: "d", text: "NaN, NaN" },
    ],
    correctAnswer: "a",
    explanation:
      "at() মেথড নেগেটিভ ইনডেক্স সাপোর্ট করে, -1 শেষ এলিমেন্ট, -2 শেষের আগের এলিমেন্ট নির্দেশ করে।",
  },
  {
    id: 42,
    question: "JavaScript এ String.prototype.replaceAll() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const str = 'hello hello world';
console.log(str.replace('hello', 'hi'));
console.log(str.replaceAll('hello', 'hi'));`,
    options: [
      { id: "a", text: "hi hello world, hi hi world" },
      { id: "b", text: "hi hi world, hi hi world" },
      { id: "c", text: "hello hello world, hi hi world" },
      { id: "d", text: "hi hello world, hello hello world" },
    ],
    correctAnswer: "a",
    explanation:
      "replace() শুধু প্রথম ম্যাচ রিপ্লেস করে, replaceAll() সব ম্যাচ রিপ্লেস করে।",
  },
  {
    id: 43,
    question: "JavaScript এ Promise.any() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `Promise.any([
  Promise.reject('Error 1'),
  Promise.resolve('Success'),
  Promise.reject('Error 2')
]).then(console.log);`,
    options: [
      { id: "a", text: "Error 1" },
      { id: "b", text: "Success" },
      { id: "c", text: "AggregateError" },
      { id: "d", text: "Error 2" },
    ],
    correctAnswer: "b",
    explanation:
      "Promise.any() প্রথম সফল Promise এর ভ্যালু রিটার্ন করে। সব Promise reject হলে AggregateError থ্রো করে।",
  },
  {
    id: 44,
    question: "JavaScript এ private class fields (#) কি?",
    description: "নিচের কোডে কি হবে?",
    code: `class Counter {
  #count = 0;
  increment() {
    this.#count++;
    return this.#count;
  }
}
const c = new Counter();
console.log(c.#count);`,
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "undefined" },
      { id: "d", text: "SyntaxError" },
    ],
    correctAnswer: "d",
    explanation:
      "Private fields (#) ক্লাসের বাইরে থেকে অ্যাক্সেস করা যায় না। এটি encapsulation নিশ্চিত করে।",
  },
  {
    id: 45,
    question: "JavaScript এ BigInt কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1n === BigInt(Number.MAX_SAFE_INTEGER) + 2n);`,
    options: [
      { id: "a", text: "true, true" },
      { id: "b", text: "false, false" },
      { id: "c", text: "true, false" },
      { id: "d", text: "false, true" },
    ],
    correctAnswer: "c",
    explanation:
      "BigInt বড় সংখ্যার ক্ষেত্রে precision loss প্রতিরোধ করে। Number.MAX_SAFE_INTEGER এর বেশি মানের জন্য BigInt ব্যবহার করা উচিত।",
  },
  {
    id: 46,
    question: "JavaScript এ Proxy এর get trap কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const handler = {
  get: (target, prop) => {
    return prop in target ? target[prop].toUpperCase() : 'NOT_FOUND'
  }
};
const obj = new Proxy({ name: 'john' }, handler);
console.log(obj.name, obj.age);`,
    options: [
      { id: "a", text: "JOHN, NOT_FOUND" },
      { id: "b", text: "john, undefined" },
      { id: "c", text: "JOHN, undefined" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "Proxy এর get trap প্রপার্টি অ্যাক্সেস করার সময় কাস্টম লজিক যোগ করতে দেয়। এখানে স্ট্রিং ভ্যালু আপারকেস করে এবং না থাকলে NOT_FOUND রিটার্ন করে।",
  },
  {
    id: 47,
    question: "JavaScript এ Array.prototype.flatMap() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 3];
console.log(
  arr.flatMap(x => [x, x * 2])
);`,
    options: [
      { id: "a", text: "[1, 2, 2, 4, 3, 6]" },
      { id: "b", text: "[[1, 2], [2, 4], [3, 6]]" },
      { id: "c", text: "[1, 2, 3, 2, 4, 6]" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "flatMap() প্রথমে map() করে তারপর একটি লেভেল flatten করে। এটি map().flat() এর সংক্ষিপ্ত রূপ।",
  },
  {
    id: 48,
    question: "JavaScript এ dynamic import কি?",
    description: "Dynamic import সম্পর্কে কোনটি সঠিক?",
    code: `const loadModule = async () => {
  if (condition) {
    const module = await import('./module.js');
    module.default();
  }
};`,
    options: [
      { id: "a", text: "কোড এক্সিকিউশন টাইমে মডিউল লোড করে" },
      { id: "b", text: "সব মডিউল শুরুতেই লোড হয়" },
      { id: "c", text: "শুধু CommonJS মডিউল সাপোর্ট করে" },
      { id: "d", text: "সিনক্রোনাসভাবে লোড করে" },
    ],
    correctAnswer: "a",
    explanation:
      "Dynamic import রানটাইমে কন্ডিশনাল মডিউল লোডিং করতে দেয়। এটি Promise রিটার্ন করে এবং code splitting এ সাহায্য করে।",
  },
  {
    id: 49,
    question: "JavaScript এ Error Boundaries কি?",
    description: "নিচের কোডে try-catch কি করবে?",
    code: `async function example() {
  try {
    const result = await Promise.reject('error');
    console.log(result);
  } catch (e) {
    console.log('caught:', e);
  }
}
example();`,
    options: [
      { id: "a", text: "এরর ক্যাচ করবে না" },
      { id: "b", text: "'caught: error' প্রিন্ট করবে" },
      { id: "c", text: "UnhandledPromiseRejection দেখাবে" },
      { id: "d", text: "কোড এক্সিকিউট হবে না" },
    ],
    correctAnswer: "b",
    explanation:
      "async/await ব্যবহার করলে try-catch ব্লক Promise rejection ক্যাচ করতে পারে। এটি এরর হ্যান্ডলিং সহজ করে।",
  },
  {
    id: 50,
    question: "JavaScript এ Template Literal Types কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const greeting = (time) => {
  return \`Good \${time < 12 ? 'morning' : 
    time < 18 ? 'afternoon' : 'evening'}\`;
};
console.log(greeting(15));`,
    options: [
      { id: "a", text: "Good afternoon" },
      { id: "b", text: "Good morning" },
      { id: "c", text: "Good evening" },
      { id: "d", text: "SyntaxError" },
    ],
    correctAnswer: "a",
    explanation:
      "Template literals টেমপ্লেট লিটারালকে প্রসেস করার জন্য ফাংশন ব্যবহার করে। টার্নারি অপারেটর ব্যবহার করে কন্ডিশনাল স্ট্রিং রিটার্ন করা যায়।",
  },
  {
    id: 51,
    question: "JavaScript এ Object.is() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `console.log(
  Object.is(NaN, NaN),
  Object.is(+0, -0),
  +0 === -0,
  NaN === NaN
);`,
    options: [
      { id: "a", text: "true, true" },
      { id: "b", text: "false, false" },
      { id: "c", text: "true, false" },
      { id: "d", text: "false, true" },
    ],
    correctAnswer: "a",
    explanation:
      "Object.is() === এর চেয়ে বেশি সঠিক। এটি NaN কে সমান ধরে কিন্তু +0 এবং -0 কে আলাদা ধরে।",
  },
  {
    id: 52,
    question: "JavaScript এ Array.prototype.findLast() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const numbers = [1, 2, 3, 4, 5];
console.log(
  numbers.findLast(x => x % 2 === 0)
);`,
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "2" },
      { id: "c", text: "undefined" },
      { id: "d", text: "null" },
    ],
    correctAnswer: "b",
    explanation:
      "findLast() ডান থেকে বাম দিকে সার্চ করে প্রথম ম্যাচিং এলিমেন্ট রিটার্ন করে। এখানে শেষ জোড় সংখ্যা 2।",
  },
  {
    id: 53,
    question: "JavaScript এ logical assignment operators কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `let a = null;
let b = 0;
a ??= 42;
b ||= 42;
console.log(a, b);`,
    options: [
      { id: "a", text: "null, 0" },
      { id: "b", text: "42, 42" },
      { id: "c", text: "42, 0" },
      { id: "d", text: "null, 42" },
    ],
    correctAnswer: "b",
    explanation:
      "??= শুধু null/undefined হলে অ্যাসাইন করে, ||= falsy ভ্যালুর ক্ষেত্রে অ্যাসাইন করে।",
  },
  {
    id: 54,
    question: "JavaScript এ numeric separators কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const billion = 1_000_000_000;
const bytes = 0xFF_FF_FF_FF;
console.log(billion === 1000000000);`,
    options: [
      { id: "a", text: "true" },
      { id: "b", text: "false" },
      { id: "c", text: "SyntaxError" },
      { id: "d", text: "NaN" },
    ],
    correctAnswer: "a",
    explanation:
      "Numeric separator (_) বড় সংখ্যা পড়া সহজ করে। এটি সংখ্যার মান প্রভাবিত করে না।",
  },
  {
    id: 55,
    question: "JavaScript এ top-level await কি?",
    description: "মডিউলে নিচের কোড কি করবে?",
    code: `// module.js
const data = await fetch('/api/data');
export const result = await data.json();`,
    options: [
      { id: "a", text: "SyntaxError দিবে" },
      { id: "b", text: "মডিউল লোড হওয়া পর্যন্ত অপেক্ষা করবে" },
      { id: "c", text: "fetch রিকোয়েস্ট ignore করবে" },
      { id: "d", text: "undefined এক্সপোর্ট করবে" },
    ],
    correctAnswer: "b",
    explanation:
      "Top-level await মডিউলে async/await ব্যবহার করতে দেয়। ইমপোর্টকারী মডিউল অটোমেটিক্যালি await করে।",
  },
  {
    id: 56,
    question: "JavaScript এ Array.prototype.group() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "banana", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "apple", type: "fruit" }
];
console.log(Object.groupBy(inventory, ({ type }) => type));`,
    options: [
      { id: "a", text: "{ vegetables: [...], fruit: [...], meat: [...] }" },
      { id: "b", text: "[vegetables, fruit, meat]" },
      { id: "c", text: "TypeError" },
      { id: "d", text: "undefined" },
    ],
    correctAnswer: "a",
    explanation:
      "Object.groupBy() অ্যারের এলিমেন্টগুলোকে একটি প্রপার্টির ভিত্তিতে গ্রুপ করে অবজেক্ট তৈরি করে।",
  },
  {
    id: 57,
    question: "JavaScript এ String.prototype.replaceAll() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const str = 'hello hello world';
console.log(str.replaceAll('hello', 'hi'));`,
    options: [
      { id: "a", text: "hi hi world" },
      { id: "b", text: "hi hello world" },
      { id: "c", text: "hello hello world" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "replaceAll() মেথড স্ট্রিং এর সব ম্যাচিং সাবস্ট্রিং রিপ্লেস করে। এটি global flag সহ RegExp ব্যবহারের বিকল্প।",
  },
  {
    id: 58,
    question: "JavaScript এ private class methods কি?",
    description: "নিচের কোডে কি হবে?",
    code: `class Calculator {
  #multiply(a, b) {
    return a * b;
  }
  calculate(a, b) {
    return this.#multiply(a, b);
  }
}
const calc = new Calculator();
console.log(calc.#multiply(2, 3));`,
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "undefined" },
      { id: "c", text: "TypeError" },
      { id: "d", text: "SyntaxError" },
    ],
    correctAnswer: "d",
    explanation:
      "Private methods (#) ক্লাসের বাইরে থেকে অ্যাক্সেস করা যায় না। এগুলো শুধু ক্লাসের ভিতর থেকে কল করা যায়।",
  },
  {
    id: 59,
    question: "JavaScript এ Promise.any() vs Promise.race() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `Promise.any([
  Promise.reject('Error 1'),
  Promise.resolve('Success'),
  Promise.reject('Error 2')
]).then(console.log);`,
    options: [
      { id: "a", text: "Error 1" },
      { id: "b", text: "Success" },
      { id: "c", text: "AggregateError" },
      { id: "d", text: "Error 2" },
    ],
    correctAnswer: "b",
    explanation:
      "Promise.any() প্রথম fulfilled Promise এর ভ্যালু রিটার্ন করে। Promise.race() প্রথম settled (fulfilled বা rejected) Promise এর ভ্যালু রিটার্ন করে।",
  },
  {
    id: 60,
    question: "JavaScript এ Array.prototype.at() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = ['a', 'b', 'c', 'd'];
console.log(arr.at(-1), arr.at(-2));`,
    options: [
      { id: "a", text: "'d', 'c'" },
      { id: "b", text: "undefined, undefined" },
      { id: "c", text: "'a', 'b'" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "at() মেথড নেগেটিভ ইনডেক্স সাপোর্ট করে। -1 শেষ এলিমেন্ট, -2 শেষের আগের এলিমেন্ট নির্দেশ করে।",
  },
  {
    id: 61,
    question: "JavaScript এ Object.hasOwn() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const obj = { prop: undefined };
console.log(
  Object.hasOwn(obj, 'prop'),
  'prop' in obj,
  obj.hasOwnProperty('prop')
);`,
    options: [
      { id: "a", text: "true, true, true" },
      { id: "b", text: "false, true, false" },
      { id: "c", text: "undefined, true, true" },
      { id: "d", text: "true, false, true" },
    ],
    correctAnswer: "a",
    explanation:
      "Object.hasOwn() চেক করে প্রপার্টি অবজেক্টের নিজস্ব কিনা, এটি hasOwnProperty() এর বিকল্প এবং আরও নিরাপদ।",
  },
  {
    id: 62,
    question: "JavaScript এ Array.prototype.toSorted() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [3, 1, 4, 1, 5];
const sorted = arr.toSorted();
console.log(sorted, arr);`,
    options: [
      { id: "a", text: "[1, 1, 3, 4, 5], [3, 1, 4, 1, 5]" },
      { id: "b", text: "[1, 1, 3, 4, 5], [1, 1, 3, 4, 5]" },
      { id: "c", text: "[3, 1, 4, 1, 5], [3, 1, 4, 1, 5]" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "toSorted() মেথড sort() এর non-mutating ভার্সন। এটি অরিজিনাল অ্যারে মডিফাই না করে নতুন সর্টেড অ্যারে রিটার্ন করে।",
  },
  {
    id: 63,
    question: "JavaScript এ Array.prototype.with() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6));
console.log(arr);`,
    options: [
      { id: "a", text: "[1, 2, 6, 4, 5], [1, 2, 3, 4, 5]" },
      { id: "b", text: "[1, 2, 6, 4, 5], [1, 2, 6, 4, 5]" },
      { id: "c", text: "[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "with() মেথড অ্যারের নির্দিষ্ট ইনডেক্সে নতুন ভ্যালু সেট করে নতুন অ্যারে রিটার্ন করে, অরিজিনাল অ্যারে অপরিবর্তিত থাকে।",
  },
  {
    id: 64,
    question: "JavaScript এ Error Cause কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `try {
  throw new Error('Failed', { cause: 'Network error' });
} catch (e) {
  console.log(e.cause);
}`,
    options: [
      { id: "a", text: "'Network error'" },
      { id: "b", text: "undefined" },
      { id: "c", text: "null" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "Error constructor এ cause প্রপার্টি যোগ করে এরর এর মূল কারণ স্পেসিফাই করা যায়। এটি এরর হ্যান্ডলিং আরও ইনফরমেটিভ করে।",
  },
  {
    id: 65,
    question: "JavaScript এ Array.prototype.toReversed() কি?",
    description: "নিচের কোডের আউটপুট কি হবে?",
    code: `const arr = [1, 2, 3];
console.log(arr.toReversed());
console.log(arr);`,
    options: [
      { id: "a", text: "[3, 2, 1], [1, 2, 3]" },
      { id: "b", text: "[3, 2, 1], [3, 2, 1]" },
      { id: "c", text: "[1, 2, 3], [1, 2, 3]" },
      { id: "d", text: "TypeError" },
    ],
    correctAnswer: "a",
    explanation:
      "toReversed() মেথড reverse() এর non-mutating ভার্সন। এটি অরিজিনাল অ্যারে অপরিবর্তিত রেখে উল্টো ক্রমে নতুন অ্যারে রিটার্ন করে।",
  },
];
