function contador(num,arreglo) {
    let aux1=0;
    for(let i=0; i < arreglo.length; i++){
        if (arreglo[i] == num) {
            aux1=aux1+1;
        }
    }
    return aux1;
}

let array = [1,2,5,4,8,4,1,1,1,0];
contador(1,array); 