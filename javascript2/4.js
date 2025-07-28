let sentence="Honesty is the best policy".replace(/\s/g, '').toLowerCase();
let nonDuplicates = "";
for (let char of sentence)
{
    if (sentence.indexOf(char)==sentence.lastIndexOf(char))
    {
        nonDuplicates += char;
    }
}
console.log(nonDuplicates);