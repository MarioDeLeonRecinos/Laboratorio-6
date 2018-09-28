function sumaMedia(arreglo) {
    let aux1=0;
    let media=0;
    for(let i=0; i < arreglo.length; i++){
        aux1=aux1+arreglo[i];
    }
    media=aux1/arreglo.length;
    console.log("Sumatoria: ",aux1,". Promedio: ",media);
}

let array = [1,2,5,4,8,4,1,1,1,0];
sumaMedia(array); 