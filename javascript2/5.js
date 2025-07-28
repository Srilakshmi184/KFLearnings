let text="This is the a new sentence".replace(/\s/g, '').toLowerCase();
let charCount={};
let duplicates=new Set();
for (let char of text)
{
    if(charCount[char])
    {
        charCount[char]++;
        duplicates.add(char);
    }
    else
    {
        charCount[char] = 1;
    }
}
console.log([...duplicates].join(""));