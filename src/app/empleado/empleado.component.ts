import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // HTML inline
  // template: "<p>Aquí iría un Empleado</p>",
  styleUrls: ['./empleado.component.css']
  // Estilo Inline

})
export class EmpleadoComponent implements OnInit {

  nombre = 'Juan';
  apellido = "Díaz";
  edad = 18;
  empresa = "PildorasInformaticas";

  // Flujo Bidireccional Binding
  // cambiaEmpresa(event:Event){
  //   // Con esto creamos un Event Binding
  //   this.empresa = (<HTMLInputElement>event.target).value;

  // }

  // getNombre = () => this.nombre;
  // getApellido = () => this.apellido;
  // getEdad = () => this.edad;
  // getEmpresa = () => this.empresa;

  // llamaEmpresa(value:String) {

  // }

  // Ejemplo de Binding para cambiar visibilidad de input
  desactivacionCuadro = false; // disable patch
  usoRegistrado = false; // disable patch
  textoRegistro = "No hay nadie Registrado"; //Event Binding

  getRegistroUsuario(){
    this.usoRegistrado = false;
  }

  setUsuarioRegistrado(event:Event) {
    // alert("Usuario Registrado");
    // this.textoRegistro = "Usuario Registrado";

    // Event Binding con casteo del Objeto Event
    if((<HTMLInputElement>event.target).value == "Si"){
      this.textoRegistro = "El Usuario se acaba de Registrar";
    }else{
      this.textoRegistro = "Usuario No Registrado";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
