import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atacadao-express-lista-dropdown',
  templateUrl: './atacadao-express-lista-dropdown.page.html',
  styleUrls: ['./atacadao-express-lista-dropdown.page.scss'],
})
export class AtacadaoExpressListaDropdownPage implements OnInit {

  constructor() { }
  public produto: number = 0;
  public desconto: any = 0
  public resultado: number = 0;

  soma(){
    
    this.resultado++;
    this.calcular()
  }
  subtrair(){
    if (this.resultado > 0 ){
      this.resultado--;
      this.calcular()
    }
  }

calcular(){
var desc: number = 0.00

 this.produto = 2.5
 this.produto *= this.resultado
  
  this.desconto = (this.produto * 0.05).toFixed(2)
  
}  

  ngOnInit() {
  }

}
