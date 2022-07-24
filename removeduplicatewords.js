// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
function removeDuplicateWords (s) {
    let arr = s.split(' ')
    let arruniq = [...new Set(arr)]
    console.log(s)
    console.log(arruniq)
}
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')