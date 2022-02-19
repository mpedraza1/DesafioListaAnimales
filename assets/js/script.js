class Propietario {
    constructor(nombrePropietario, direccion, telefono){
        this.nombrePropietario = nombrePropietario
        this.direccion = direccion
        this.telefono = telefono
    }  

    datosPropietario(){
        return `El nombre es: ${this.nombrePropietario}. Su dirección es: ${this.direccion}.
        Su telefono es: ${this.telefono}.`;
    }
}


class Animal extends Propietario{
    constructor(nombrePropietario, direccion, telefono, tipo){
        super(nombrePropietario, direccion, telefono)
        this.tipo = tipo
    }   
    get getTipo(){
        return `El tipo de animal es un: ${this.tipo}`;
    }
}


class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo)
        this.nombreMascota = nombreMascota
        this.enfermedad = enfermedad
    }

    get getNombre(){
        return this.nombreMascota
    }

    set setNombre(value){
        this.nombreMascota = value
    }

    get getEnfermedad(){
        return this.enfermedad
    }

    set setEnfermedad(value){
        this.enfermedad = value
    }
    
}


const formulario = document.querySelector("#formulario")
const IDpropietario = document.querySelector("#IDpropietario")
const telefono = document.querySelector("#telefono")
const direccion = document.querySelector("#direccion")
const nombreMascota = document.querySelector("#nombreMascota")
const tipo = document.querySelector("#tipo")
const enfermedad = document.querySelector("#enfermedad")
const resultado = document.querySelector("#resultado");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const mascota1 = new Mascota(
        IDpropietario.value,
        direccion.value, 
        telefono.value, 
        tipo.value, 
        nombreMascota.value, 
        enfermedad.value
        );
   

resultado.innerHTML =`

<p>Datos Agregados</p>
    <ul>
        <li>${mascota1.datosPropietario()}</li>
        <li>${mascota1.getTipo}, mientras que el nombre de la mascota es: ${mascota1.getNombre} y la enfermedad es: ${mascota1.getEnfermedad}</li>
    </ul>
`;
});
