// main.js
import Stack from './stack.js';

let stack = new Stack();
console.log('初始化stack：')
stack.print();

console.log('依序push 5、8 後的stack：')
stack.push(5);
stack.push(8);
stack.print();

// 測試其他function。

// 測試peek()，回傳8。
console.log('peek:', stack.peek());

// 測試size()，回傳2。
console.log('size:', stack.size());

// 測試isEmpty()，回傳false。
console.log('是否empty:', stack.isEmpty());

// 測試pop()，移除頂部元素，回傳移除了8，並再印出目前的stack（剩下的5）。
console.log('pop一次:', stack.pop());
console.log('目前的stack：')
stack.print();

// 測試clear()後是否為空stack。
console.log('操作clear後的stack：')
stack.clear();
stack.print();

// 再次檢查stack是否為空，回傳true。
console.log('再次測試是否empty:', stack.isEmpty());