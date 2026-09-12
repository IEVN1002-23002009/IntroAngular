import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {

  titulo:string="ELIZABETH ORNELAS GOMEZ"

  duplicaNumero(num:number):number{
    return num*2
  }
  pelicula={
    titulo:"Barbie",
    anio:2024,
    genero:"Comedia",
    fechaLanzamiento:new Date(),
    precio:345

  }
}
