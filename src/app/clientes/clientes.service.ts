import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
import {FormBuilder , FormGroup , Validators, FormControl} from '@angular/forms';



@Injectable()
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];
  private Iconos= [];
  private correos ;
  
  myForm: FormGroup;
 

  constructor(public fb: FormBuilder ) {
   this.Iconos = [
    'ion-ios-add',
    'ion-ios-add-circle',
    'ion-ios-attach:',
    'ion-ios-backspace',
    'ion-ios-barcode',
    'ion-ios-baseball',
    'ion-ios-basket',
    'ion-ios-basketball',
    'ion-ios-battery-charging',
    'ion-ios-battery-dead',
    'ion-ios-battery-full',
    'ion-ios-beaker',
    'ion-ios-bed'
   ]

    
    this.clientes = [];

   
 
  }
  getIconos(){
    return this.Iconos;
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
   
    
      this.clientes.push(cliente);
  

    
   
  }
 

  nuevoCliente(): Cliente {
  
    
    return {
      id: this.clientes.length,
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      correo: '',
      edad: '',
      sexo: '',
      icono : this.Iconos[Math.floor((Math.random() * 10) + 1)]
    };
  }
}
