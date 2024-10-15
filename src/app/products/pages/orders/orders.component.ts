import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-orders',
  templateUrl: './orders.component.html',
  styles: ``
})
export class OrdersComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    { name: 'Batman', canFly: true, color: Color.black },
    { name: 'Superman', canFly: false, color: Color.blue },
    { name: 'Iron Man', canFly: true, color: Color.red },
    { name: 'Wonder Woman', canFly: true, color: Color.red },
    { name: 'Captain America', canFly: false, color: Color.blue },
    { name: 'Spiderman', canFly: true, color: Color.red },
    { name: 'Hulk', canFly: false, color: Color.green },
    { name: 'Wolverine', canFly: true, color: Color.yellow },
    { name: 'Ant Man', canFly: false, color: Color.red },
    { name: 'Black Widow', canFly: true, color: Color.black },
    { name: 'Hawkeye', canFly: false, color: Color.blue },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

}
