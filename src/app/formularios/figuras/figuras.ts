import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  base:string='';
  altura:string='';
  operacion:string='';
  resultado:number=0;

  calcular():void{
    switch (this.operacion){
      case 'triangulo':
        this.resultado=(parseInt(this.base)*parseInt(this.altura))/2
        break;
      case 'rectangulo':
        this.resultado=parseInt(this.base)*parseInt(this.altura);
        break;
      case 'circulo':
        this.resultado=Math.PI*Math.pow(parseInt(this.base),2);
        break;
      case 'pentagono':
        this.resultado=(5*parseInt(this.base)*parseInt(this.altura))/2;
        break;
    }
  }
}
