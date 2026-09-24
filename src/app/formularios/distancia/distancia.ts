import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  puntoX1:string='';
  puntoY1:string='';
  puntoX2:string='';
  puntoY2:string='';
  resultado:number=0;

  calcular():void{
    this.resultado=Math.sqrt(Math.pow(parseFloat(this.puntoX2)-parseFloat(this.puntoX1),2)+Math.pow(parseFloat(this.puntoY2)-parseFloat(this.puntoY1),2));
  }
}
