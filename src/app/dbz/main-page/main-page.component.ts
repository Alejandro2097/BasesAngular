import { Component } from '@angular/core';
import { Personaje} from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
    personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 150000
      },
      {
        nombre: 'Vegueta',
        poder: 17560
      }
    ];
    nuevo: Personaje = {
      nombre: 'Maestro Roshi',
      poder: 140
    }
    agregarNuevoPersonaje(){
      console.log("Main page component");
    }

}
