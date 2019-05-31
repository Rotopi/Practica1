import { Icono } from '../Iconos';

export interface Cliente {
  id: number;
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  correo: string;
  edad: string;
  sexo: string;
  icono : string;
}

export interface Grupo {
  id: number;
  nombre: string;
}


