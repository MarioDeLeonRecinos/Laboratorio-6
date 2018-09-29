function adivinar(){
    let array=[];
    for(let i = 0;i<20;i++){
        array.push(Math.floor(Math.random() * 10) + 1)
    }
    let answer = prompt("Tu numero", 5);
    if(array.includes(Number(answer))){
        return "Ganaste";
    }
    return array;
}

adivinar();