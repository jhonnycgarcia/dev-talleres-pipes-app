import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-orders',
  templateUrl: './orders.component.html',
  styles: ``
})
export class OrdersComponent {

  public isUpperCase: boolean = false;

  public products: Hero[] = [
    { name: 'Batman', canFly: true, color: Color.Black },
    { name: 'Superman', canFly: false, color: Color.Blue },
    { name: 'Iron Man', canFly: true, color: Color.Red },
    { name: 'Wonder Woman', canFly: true, color: Color.Red },
    { name: 'Captain America', canFly: false, color: Color.Blue },
    { name: 'Spiderman', canFly: true, color: Color.Red },
    { name: 'Hulk', canFly: false, color: Color.Green },
    { name: 'Wolverine', canFly: true, color: Color.Yellow },
    { name: 'Ant Man', canFly: false, color: Color.Red },
    { name: 'Black Widow', canFly: true, color: Color.Black },
    { name: 'Hawkeye', canFly: false, color: Color.Blue },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

}
