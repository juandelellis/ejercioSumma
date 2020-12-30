class Empleado {
  constructor(id,nombre, apellido, edad) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;;
  }

  class Programador extends Empleado {
    constructor(id,nombre, apellido, edad, lenguaje) {
      super(id,nombre, apellido, edad);
        this.lenguaje = lenguaje;
    }
  }
  

  class Disenador extends Empleado {
    constructor(id,nombre, apellido, edad, tipo) {
      super(id,nombre, apellido, edad);
        this.lenguaje = tipo;
    }
  };

  const id = document.getElementsByClassName('id');

  var totalEdad = 0;
  for(var i = 0; i < edad.length; i++) {
      total += edad[i];
  }
  var avg = totalEdad / edad.length;