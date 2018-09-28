function suma(array1, array2) {
    if (array1[0].length == array2[0].length && array1.length == array2.length) {
        let aux1 = new Array(array1.length);
        for (let i = 0; i < array1.length; i++) {
            aux1[i] = new Array(array1[0].length);
        }
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array1[0].length; j++) {
                aux1[i][j] =array1[i][j]+array2[i][j];
            }
        }
        for (let i = 0; i < array1.length; i++) {
            console.log(aux1[i]);
        }
    }
    else {
        console.log("Las matrices no son iguales no se puede sumar")
    }
}

let array = [[1,2],[1,4],[4,5]];
let array3 = [[1,2],[1,4],[4,5]];
suma(array,array3);