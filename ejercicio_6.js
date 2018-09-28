function codificador(arreglo) {
    let aux1 = ["m","u","r","c","i","e","l","a","g","o"];
    let aux2 = arreglo.split("");
    let aux3 = [];
    for (let i = 0; i < aux2.length; i++) {
        if(aux1.includes(aux2[i])){
            aux3.push(aux1.indexOf(aux2[i]));
        }
        else{
            aux3.push(aux2[i]);
        }
    }
    return aux3.join("");
}

let array = "murcielago mama";
codificador(array); 