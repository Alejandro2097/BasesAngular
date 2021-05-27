import { Component, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 140
  }
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ){
      this.onNuevoPersonaje.emit(this.nuevo);
      return;
    }
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo);
  }

}
