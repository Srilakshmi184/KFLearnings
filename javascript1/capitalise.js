let a="i love apple";
let cap=a.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(cap);
