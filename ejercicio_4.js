function InFi(arreglo) {
    if(arreglo.length % 2 == 0){
        for(let i=0;i<arreglo.length/2;i++){
            console.log(arreglo[i]+arreglo[arreglo.length-i-1]);
        }
    }
    else{
        for(let i=0;i<Math.floor(arreglo.length/2);i++){
            console.log(arreglo[i]+arreglo[arreglo.length-i-1]);
        }
        console.log(arreglo[Math.ceil(arreglo.length/2)-1]*2);
    }
}

let array = [1,2,5,4,8,5,4,1,1,1,0];
InFi(array); 