// let numbers = [13, 20, 31, 44, 56, 78, 91];
// for(let i = 0; i<numbers.length; i = i + 1){
//     if(numbers[i]%2===0){
//         console.log(numbers[i])
//     }
// }
// let number = [13, 20, 31, 44, 56, 78, 91];
// for(let i = 0; i<number.length; i = i + 1){
//     if(number[i]%2===1){
//         number[i] = 0;
       

//     }
// }
// console.log(number);

// let raqamlar = [15, 45, 97, 88, -34, 12, 1, 48];
// let l = raqamlar.length;
// let max = -Infinity;
// let min = Infinity
// let i;
// for(i = 0; i<l; i++){
//     if(raqamlar[i] > max){
//         max = raqamlar[i];
//     }
//     if(raqamlar[i] < min){
//         min = raqamlar[i]
//     }
// }
// console.log(min);
// console.info(max);

const body = document.querySelector("body");
document.querySelector(".toggle").onclick = function(){
    body.classList.toggle("light")
    
};


