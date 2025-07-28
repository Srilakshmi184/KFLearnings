let word="I am Javascript";
let pos=word.indexOf("am")+"am".length;
let result=word.slice(0, pos)+" learning"+word.slice(pos);
console.log(result);