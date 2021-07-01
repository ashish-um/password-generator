Btn = document.getElementsByClassName('btn')[0];
output = document.getElementsByClassName('output')[0];
Length = document.getElementsByClassName('lenght')[0];

functions = [getRandomNum, getRandomStrSm, getRandomStrLg, getRandomSymbol];

len=1

Btn.addEventListener('click', ()=>{
    output.innerText = getRandom(len);
})

function getRandom(length){
    str = ''
    for(let i = 0; i < length; i++){
        randFunc = Math.floor(Math.random() * functions.length);
        // console.log(randFunc, functions[randFunc]);
        str += (functions[randFunc]());
        // console.log(functions[0]());
    }
    return str;
}

function getRandomNum(){
    return String.fromCharCode(randomIntFromInterval(48, 57));
}

function getRandomStrSm(){
    return String.fromCharCode(randomIntFromInterval(97, 122));
}

function getRandomStrLg(){
    return String.fromCharCode(randomIntFromInterval(65, 90));
}

function getRandomSymbol(){
    return String.fromCharCode(randomIntFromInterval(33, 47));
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function lengthConstraint(elem){
    if (elem.value >= Number(elem.max)) elem.value = Number(elem.max);
    if(elem.value <= Number(elem.min)) elem.value =Number(elem.min);
    len = elem.value;
}