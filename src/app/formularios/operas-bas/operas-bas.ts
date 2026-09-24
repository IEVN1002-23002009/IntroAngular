import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string='';
  num2:string='';
  operacion:string='';
  resultado:number=0

  /*sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }*/
 
  calcular():void{
    switch (this.operacion){
      case 'sumar':
        this.resultado=parseInt(this.num1)+parseInt(this.num2)
        break;
      case 'restar':
        this.resultado=parseInt(this.num1)-parseInt(this.num2)
        break;
      case 'multiplicar':
        this.resultado=parseInt(this.num1)*parseInt(this.num2)
        break;
      case 'dividir':
        this.resultado=parseInt(this.num1)/parseInt(this.num2)
        break;
    }
  }
}
