let array=new Array();

var usuario = {
    Nombre: "",
    Apellido: "",
    fechaN: "",
    tel: "",
    correo: "",
    PedirM: function () {
        this.Nombre = prompt("Ingrese su nombre", "Roberto");
        this.Apellido = prompt("Ingrese su apellido", "Rubio");
        this.fechaN = prompt("Ingrese la fecha", "20/05/2018");
        this.tel = prompt("Ingrese su tipo de medida", "2284-9585");
        this.correo = prompt("Ingrese su correo", "algo@gmail.com")
        this.Mostrar();
    },
    Mostrar: function(){
        console.log(this.Nombre," ",this.Apellido," ",this.fechaN," ",this.tel," ",this.correo);
    }
};

var arregloUsuarios = {
    annadir: function(){
        array.push(Object.create(usuario));
        array[array.length-1].PedirM();
    },
    mostrarT: function(){
        for (let i = 0; i < array.length; i++){
            array[i].Mostrar();
        }
    }
};

var useryo = arregloUsuarios;
useryo.annadir();
useryo.annadir();
useryo.mostrarT();