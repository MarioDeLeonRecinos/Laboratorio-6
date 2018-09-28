function MatrizNueva(arreglo,tipo) {
    let aux1 = [];
    for (let i = 0; i < arreglo.length; i++) {
        if(typeof arreglo[i]==tipo.toLowerCase()){
            aux1.push(arreglo[i]);
        }
    }
    return aux1;
}

let array = [1, "2", 0.25, "4", 8, 4, 1, 1, 1, 0];
MatrizNueva(array,"string"); 