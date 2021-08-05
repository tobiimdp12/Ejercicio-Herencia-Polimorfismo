import Persona from "./Persona.js";
export default class Empleado extends Persona
{
    constructor(idPersona=0,nombre,apellido,edad=0,idEmpleado=0,sueldo=0)
    {
        super(idPersona,nombre,apellido,edad);
        this.idEmpleado=idEmpleado;
        this.sueldo=sueldo;
    }

    get getIdEmpleado()
    {
        return this.idEmpleado;
    }
    get getSueldo()
    {
        return this.sueldo;
    }
    set setSueldo(nuevaSueldo)
    {
        this.sueldo=nuevaSueldo;
    }

    toString()
    {
        return super.toString()+" "+this.idEmpleado+" "+this.sueldo+"$";
    }
    
}