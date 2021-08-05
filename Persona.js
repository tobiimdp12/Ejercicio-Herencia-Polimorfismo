export default class Persona
{
    static contadorPersonas;
    constructor(idPersona=0,nombre,apellido,edad=0) 
    {
        
        this.idPersona = idPersona;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        Persona.contadorPersonas++;
    }

    get getidPersona()
    {
        return this.idPersona;
    }
    get getNombre()
    {
        return this.nombre;
    }

    set setNombre(nuevoNombre)
    {
        this.nombre=nuevoNombre;
    }

    get getApellido()
    {
        return this.apellido;
    }
    set setApellido(nuevoApellido)
    {
        this.apellido=nuevoApellido;
    }

    get getEdad()
    {
        return this.edad;
    }
    set setEdad(nuevaEdad)
    {
        this.edad=nuevaEdad;
    }

    toString()
    {
        return this.idPersona+" "+this.nombre+" "+this.apellido+" "+this.edad;
    }
}
