function Identificador(arreglo) {
    let aux1 = 0;
    let aux2 = 0;
    let aux3 = 0;
    let aux4 = 0;
    for (let i = 0; i < arreglo.length; i++) {
        console.log("Tipo de dato: ", typeof arreglo[i], ". Promedio: ");
        switch (typeof arreglo[i]) {
            case "string":
                aux1++;
                break;
            case "number":
                aux2++;
                break;
            case "boolean":
                aux3++;
            default:
                aux4++;
        }
    }
    console.log("String: ",aux1);
    console.log("number: ",aux2);
    console.log("boolean: ",aux3);
    console.log("undefined: ",aux4);
}

let array = [1, "2", 0.25, 4, 8, 4, 1, 1, 1, 0];
Identificador(array); 