console.log("Hola typescript");


//Declaracion de variables
let name: string = "David";
let email: string = "david@gmail.com";
const PI: number = 3.14;

console.log("Hola "+name);
console.log("Hola",name,"!");
console.log(`${name} email:${email}`);


let apellidos: any = "Yauri Lapa"; //Tipo any hace que la variable pueda cambiar de tipo
apellidos = 4;

let error: boolean = false;
// let error:boolean;
// error = false;


// Instanciacion multiple de variables

let a:string,b:boolean,c:number; //instcia 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 8.9;

//Tipos mas complejos


//Lista de cadena de texto
let listaTareas : string[] = ["Tarea1", "Tarea2"];

//Combinacion de tipos de Listas
let valore: (string | number | boolean)[] =[false,"Hola",true,56];

//Enumerados

enum Estados {
    "Completado" = "C",
    "Imcompleto" = "I",
    "Pendiente" = "P",
}

enum Puestos {
    "Primero",
    "Segundo",
    "Tercero"

}

let estadoTarea : Estados = Estados.Imcompleto;
let puestoMaraton : Puestos = Puestos.Segundo;

// Interface

interface Tarea {
    nombre: string,
    estado:Estados,
    urgencia: number
}

//Podemos crear variables que sigan la interface tarea
let Tarea1 : Tarea = {
    nombre: "Tarea1",
    estado: Estados.Imcompleto,
    urgencia:  22,
}

//Types de Typescript
type Producto = {
    precio: number,
    nombre: string,
    anio:number
}

let coche:Producto = {
    nombre:"Audi",
    precio:22222,
    anio:2010
}

//Operaciones ternarios
console.log(coche.anio <2010 ?`Coche:${coche.nombre}es viejo`:`Coche:${coche.nombre}es nuevo`);

//Asingancion multiple de variables


//En listas

let listaCompraLunes : string[] = ["Leche","Patatas"];
let listaComprasMartes : string[] = [...listaCompraLunes,"Pan","Huevos"];
let listaCompraMiercoles : string[] = ["Carne","Pescado"];
let ListaCompraSemana = [...listaComprasMartes,...listaCompraMiercoles];

// En objetos

let estadoApp = {
    usuario: "admin",
    session:3,
    jwt: "Bearer123123456"
}

//cambiarun nuevo valor
let nuevoEstado = {
    ...estadoApp,
    session:4
}

//If - else if - else
if (error) {
    console.log("Hay un error");
    
}else {
    console.log("No hay un error");
    
}

//Switch
switch (Tarea1.estado){
    case Estados.Completado:
        console.log("Tarea completada");
            
        break;
    case Estados.Imcompleto:
        console.log("Tarea imcompleto");
        break;
    case Estados.Pendiente:
        console.log("Tarea Pendiente");
        break;
        
}

// ** Bucles
let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2,
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 3,
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Imcompleto,
        urgencia: 4,
    }
]; 

//ForEach
listaTareasNueva.forEach((tarea: Tarea , index: number)=> {
    console.log(`${index}- ${tarea.nombre}`);
    
} );


//while
while (Tarea1.estado !== Estados.Completado){
    if(Tarea1.estado ){
        Tarea1.estado = Estados.Completado;
        break;
    }else {
        Tarea1.urgencia ++;
    }
}


//Do while
do {
    Tarea1.urgencia ++;
    Tarea1.estado = Estados.Completado;

} while(Tarea1.estado !== Estados.Completado)
