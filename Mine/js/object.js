//Descripción del Objeto Personaje, que nos facilita el trabajo para luego sacar todas sus características.

var arrPersonajes = [];

function Personaje(firstName, lastName, familia, alias, nacimiento, descripcion, historia, actriz, valoracion, imagen, actualizado) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.familia = "Casa " + familia;
    this.alias = alias;
    this.nacimiento = nacimiento;
    this.descripcion = descripcion;
    this.historia = historia;
    this.actriz = actriz;
    this.valoracion = valoracion;
    this.imagen = imagen;
    this.actualizado = actualizado;
    this.name = function() {
    return this.firstName + " " + this.lastName;
    };
}