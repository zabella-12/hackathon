import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atacadao-express-lista-dropdown',
  templateUrl: './atacadao-express-lista-dropdown.page.html',
  styleUrls: ['./atacadao-express-lista-dropdown.page.scss'],
})
export class AtacadaoExpressListaDropdownPage implements OnInit {

  constructor() { }
  public produto: any = 0;
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
  this.produto = 2.9
  this.produto = (this.produto * this.resultado).toFixed(2)
  this.desconto = (this.produto * 0.05).toFixed(2)
}  

  ngOnInit() {
  }

}
