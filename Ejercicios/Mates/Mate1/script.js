let finalResult;

let evenOddResult;

// Add your code here

let a = 1;
let b = 2;
let c = 6;
let d = 4;
let ab = a + b;
let cd = c - d;
finalResult = ab * cd;

console.log(ab)
console.log(cd)
console.log(finalResult)


if (finalResult % 2 == 0) {
    evenOddResult = 0;

    
} else {
    
    evenOddResult = 1;

}

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
    