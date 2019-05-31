import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];
  myForm: FormGroup;

  constructor(private clientesService: ClientesService , public fb: FormBuilder) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      ap: ['', [Validators.required]],
      am: ['', [Validators.required]],
      corr: ['', [Validators.email, Validators.required]],
      edad: ['', [Validators.required ]],
      sex: ['', [Validators.required]],
    });
  }

  nuevoCliente(): void {
    if(this.myForm.invalid){
     
      
    }else{
      this.clientesService.agregarCliente(this.cliente);
      this.cliente = this.clientesService.nuevoCliente();
    }
    
  }
}
