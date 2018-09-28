function incerteza(arreglo) {
    let aux1 = 0;
    let aux2 = 0;
    for (let i = 0; i < arreglo.length; i++) {
        aux1=aux1+arreglo[i];
    }
    aux1=aux1/arreglo.length;
    for (let i = 0; i < arreglo.length; i++) {
        aux2=aux2+(arreglo[i]-aux1)**2;
    }
    console.log("X=",aux1,"+-",aux2);
}

let array = [14.4,14.5,14.4,14.3,14.6,14.5];
incerteza(array);