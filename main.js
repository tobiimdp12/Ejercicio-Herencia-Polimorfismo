import Persona from "./Persona.js";
import Empleado from "./Empleado.js";
import Cliente from "./Cliente.js";




let registro=new Date();//registro almacena la fecha y hora actual
let persona1=new Persona(2,"tobias","selva",2);
let empleado1=new Empleado(2,"pepe","sel",2,100,2500);
let cliente1=new Cliente(2,"roman","va",2,100,registro);

console.log(persona1.toString());
console.log(persona1.getNombre);
console.log(empleado1.toString());
console.log(cliente1.toString());

console.log(registro);