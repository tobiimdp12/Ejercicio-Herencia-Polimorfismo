import Persona from "./Persona.js";
export default class Cliente extends Persona
{

    constructor(idPersona=0,nombre,apellido,edad=0,idCliente,fechaRegistro)
    {
        super(idPersona,nombre,apellido,edad);
        this.idCliente=idCliente;
        this.fechaRegistro=fechaRegistro;

    }
    get getidCliente()
    {
        return this.idCliente;
    }
 
    get getFechaRegistro()
    {
        return this.fechaRegistro;
    }
    set setFechaRegistro(nuevaFechaRegistro)
    {
        this.fechaRegistro=nuevaFechaRegistro;
    }

    toString()
    {
        return super.toString()+" "+this.idCliente+" "+this.fechaRegistro;
    }


}